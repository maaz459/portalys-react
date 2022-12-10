import {
  Box,
  HStack,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "../../../../styles/theme/base";
import { Formik } from "formik";
import BasicEvents from "./BasicEvents";
import { EventBar } from "./SharedModules";
import TicktDetails from "./TicketDetails";
import ArtistLineup from "./Artist";
import { useNavigate } from "react-router-dom";
import Promotion from "./Promotion";
const spacing = {
  gap: 0,
  spacing: 0,
  w: "100%",
};

const headings = [
  "",
  "Event Basics",
  "Ticket Details",
  "Artist and Lineup",
  "Promotion",
];

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );

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
      default:
        return <BasicEvents {...props} />;
    }
  };

  const onStepChange = () => {
    if (step > 3) {
      setStep(1);
    } else setStep(step + 1);
  };

  const onGoBack = () => {
    if (step < 2) {
      navigate(-1);
    } else setStep(step - 1);
  };

  return (
    <Box w="100%">
      <Stack {...{ spacing }} flexDir="row"></Stack>
      <EventBar
        {...{
          textValue,
          step,
          heading: headings[step],
          onStepChange,
          onGoBack,
        }}
      />
      <HStack mt={56} w="100%">
        <Box flex={1}></Box>

        <Box color={textValue} w="100%" flex={7}>
          {" "}
          <Formik
            initialValues={{}}
            // validate={validate}
            onSubmit={(values) => console.log(values)}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                handleBlur,
                resetForm,
              } = formik;
              return (
                <VStack w="100%">
                  <RenderForms {...{ values, handleBlur, handleChange }} />
                </VStack>
              );
            }}
          </Formik>
        </Box>
      </HStack>
    </Box>
  );
};

export default CreateEvent;
