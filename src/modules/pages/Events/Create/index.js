import { Box, HStack, Stack, useColorModeValue, VStack, useToast, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { theme } from "../../../../styles/theme/base";
import { Formik } from "formik";
import BasicEvents from "./BasicEvents";
import { EventBar } from "./SharedModules";
import TicktDetails from "./TicketDetails";
import ArtistLineup from "./Artist";
import { useNavigate } from "react-router-dom";
import Promotion from "./Promotion";
import Summary from "./Summary";
import { isEmpty } from "lodash";
import Torus, { BUTTON_POSITION } from "@toruslabs/solana-embed";
import { torusAtom } from "../../../../recoil/atoms/torus";
import { useRecoilState } from "recoil";
import { postEvent } from "../../../../utils/actions/event";
import secrets from "../../../../secrets.json";
import { user } from "../../../../recoil/atoms/user";
import { calculateFee, getSolanaPrice, toUSD } from "../../../../utils/crypto";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
const spacing = {
  gap: 0,
  spacing: 0,
  w: "100%",
};

const headings = ["", "Event Basics", "Ticket Details", "Artist and Lineup", "Promotion", "Summary"];

const initialValues = {
  eventName: "",
  eventType: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  location: "",
  description: "",
  ticketName: "",
  ticketQuantity: "",
  ticketType: "",
  ticketPrice: "",
  earlyBird: "",
  earlyBirdEndingDate: "",
  regular: "",
  late: "",
  asignCollectables: true,
  allowTransfer: false,
  allowResale: false,
  minimumResale: "",
  maximumResale: "",
  lineup: {},
  track: {},
  trailer: "",
  coverPicture: "",
  eventImage: "",
};

const CreateEvent = ({
  authenticateUser,
  getUserInfo,
  logout,
  getAccounts,
  getBalance,
  sendTransaction,
  signMessage,
  getPrivateKey,
  login,
  web3auth,
  provider,
  paySolFee,
}) => {
  const [step, setStep] = useState(1);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const [_, setUser] = useRecoilState(user);
  const [fees, setFees] = useState(0.0);
  const [supply, setSupply] = useState(1);
  const [SOLPRICE, setSOLPRICE] = useState(0.0);

  // useEffect(() => {
  //   const init = async () => {
  //     const solanaPrice = await getSolanaPrice();
  //     setSOLPRICE(solanaPrice);
  //   };
  //   init();
  // }, []);

  // useEffect(() => {
  //   const dollars = toUSD(price, SOLPRICE);
  //   setDollars(dollars);
  // }, [price]);

  // //min price solana
  // useEffect(() => {
  //   const minDollars = toUSD(minPrice, SOLPRICE);
  //   setMinDollars(minDollars);
  // }, [minPrice]);

  // //max price solana
  // useEffect(() => {
  //   const maxDollars = toUSD(maxPrice, SOLPRICE);
  //   setMaxDollars(maxDollars);
  // }, [maxPrice]);

  // useEffect(() => {
  //   const total = supply * dollars;
  //   setTotalRevenue(total);
  // }, [supply, dollars]);

  // useEffect(() => {
  //   const calculateTotalFee = () => {
  //     const solana_fee = calculateFee(file, supply, SOLPRICE);
  //     setFees(solana_fee);
  //   };
  //   calculateTotalFee();
  // }, [supply, file]); // ADD change on FileSize

  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);

  const hanldleCreateEvent = async (values) => {
    if (provider === null) {
      await login();
    } else {
      setLoader(true);
      let formData = new FormData();
      Object.keys(values).map((key) => {
        if (key === "track" && !isEmpty(values[key])) {
          const tracks = [];
          Object.values(values[key]).forEach((val, index) => {
            const data = { ...val };
            formData.append(`track_${data.id}`, data.image);
            delete data.imageToDisplay;
            delete data.image;
            tracks.push(data);
          });
          formData.append(key, JSON.stringify(tracks));
        } else if (key === "lineup" && !isEmpty(values[key])) {
          const lineups = [];
          Object.values(values[key]).forEach((val) => {
            const data = { ...val };
            formData.append(`lineup_${data.id}`, data.image);
            delete data.image;
            delete data.imageToDisplay;
            lineups.push(data);
          });
          formData.append(key, JSON.stringify(lineups));
        } else if (key === "trailer" && values[key] && values[key].video) {
          formData.append(key, values[key].video);
        } else if (key === "coverPicture" && values[key] && values[key].image) {
          formData.append(key, values[key].image);
        } else if (key === "eventImage" && values[key] && values[key].image) {
          formData.append("ticket", values[key].image);
          formData.append("eventImage", values[key].image);
        } else if (key === "ticketQuantity") {
          formData.append("supply", values[key]);
        } else if (key === "earlyBird") {
          formData.append("price", values[key]);
          formData.append("earlyBird", values[key]);
        } else {
          formData.append(key, values[key]);
        }
      });
      const account = await getAccounts();
      formData.append("creatorAddress", account[0]);
      formData.append("creatorShare", 97);
      const user = JSON.parse(localStorage.getItem("user_d"));
      formData.append("organizerId", user?.userId);
      try {
        const supply = Number(values?.ticketQuantity);
        const solanaPrice = await getSolanaPrice();
        const dollars = toUSD(Number(values?.regular), solanaPrice);
        // const minDollars = toUSD(Number(values?.earlyBird), solanaPrice);
        // const maxDollars = toUSD(Number(values?.late), solanaPrice);
        // const total = supply * dollars;

        const solana_fee = calculateFee(values?.eventImage?.image?.size, supply, solanaPrice);
        const LamportsFee = solana_fee * LAMPORTS_PER_SOL;
        const receiverPublicKey = "BNfYrWMU46SssCLTEY8TSpJk3swRbJYXE7TSNPYhtTtx"; // TODO: env var
       console.log({LamportsFee})
        formData.append('fee',LamportsFee?.toFixed(0))
        const payment = await paySolFee(receiverPublicKey, LamportsFee?.toFixed(0));
        if (payment.code || payment.data) {
          toast({
            title: "Fee Error",
            description: payment?.data?.data?.logs[1] ? payment.data.data.logs[1] : payment.message,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        } else {
          await postEvent(formData)
            .then((ne) => {
              setLoader(false);
              if (ne.status) {
                toast({
                  title: "Event Created Succesfully",
                  status: "success",
                  isClosable: true,
                  duration: 4000,
                  position: "bottom",
                });
                navigate(-1);
              } else {
                toast({
                  title: "Event Creation",
                  description: ne?.message,
                  status: "error",
                  isClosable: true,
                  duration: 4000,
                  position: "bottom",
                });
              }
            })
            .catch((err) => {
              console.log({ err });
            });
        }
      } catch (err) {
        setLoader(false);
        toast({
          title: "Event Create",
          description: err.message,
          status: "error",
          isClosable: true,
          duration: 4000,
          position: "bottom",
        });
      }
    }
  };

  const RenderForms = (props) => {
    switch (step) {
      case 1:
        return <BasicEvents {...props} />;
      case 2:
        return <TicktDetails {...props} />;
      case 3:
        return <ArtistLineup {...props} />;
      case 4:
        return <Promotion {...props} />;
      case 5:
        return <Summary {...props} />;
      default:
        return <BasicEvents {...props} />;
    }
  };

  const onStepChange = () => {
    if (step <= 4) setStep(step + 1);
  };

  const onGoBack = () => {
    if (step < 2) {
      navigate(-1);
    } else setStep(step - 1);
  };
  return (
    <Box pos="relative" w="100%" zIndex={0}>
      {loader && (
        <Box pos="absolute" left="50%" top="20%">
          <Spinner color="primary.100" size="xl" />
        </Box>
      )}
      <Box w="100%" opacity={loader ? 0.5 : 1} display="flex" justifyContent={{ base: "flex-start", "3xl": "center" }}>
        <Formik
          initialValues={initialValues}
          // validate={validate}
          onSubmit={(values) => hanldleCreateEvent(values)}
        >
          {(formik) => {
            const { values, handleChange, handleSubmit, handleBlur, resetForm, setFieldValue } = formik;
            return (
              <Box w="100%" maxW={{ base: "100%", lg: "95%", "3xl": "80%" }}>
                <EventBar
                  {...{
                    textValue,
                    step,
                    heading: headings[step],
                    onStepChange,
                    onGoBack,
                    endStep: step === 5,
                    handleSubmit,
                  }}
                />
                <HStack mt={56} w="100%">
                  {step !== 5 && <Box flex={1}></Box>}

                  <Box color={textValue} w="100%" flex={7}>
                    {" "}
                    <VStack w="100%">
                      <RenderForms {...{ values, handleBlur, handleChange, setFieldValue }} />
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateEvent;
