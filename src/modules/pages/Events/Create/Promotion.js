import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  chakra,
  useToast,
} from "@chakra-ui/react";
import {
  exportSvg,
  upload2,
} from "../../../../static/assets/images/dashboard/sidebar";
import { DateBox, InputBox, SelectBox, TextBox } from "./SharedModules";
const Promotion = (props) => {
  const { handleBlur, handleChange, values, setFieldValue } = props;
  const toast = useToast();
  return (
    <VStack alignItems="flex-start" w="100%">
      <Text className="gordita700" fontSize={18}>
        Trailer
      </Text>
      <Box w="100%" h="212px" bg="#141414" borderRadius="8px" p="20px">
        <input
          style={{ display: "none" }}
          id="trailerImage"
          type="file"
          accept=".mp4,.avi,.flv,.mkv,.webm"
          onChange={(e) => {
            if (e.target.files[0].size > 20000000) {
              toast({
                title: "File not uploaded",
                description: "File size must be less than 20mb",
                status: "error",
                isClosable: true,
                duration: 4000,
                position: "bottom",
              });
              this.value = "";
            } else
              setFieldValue("trailer", {
                video: e.target.files[0],
                videoToDisplay: URL.createObjectURL(e.target.files[0]),
              });
          }}
        ></input>
        <label htmlFor="trailerImage">
          <Box
            cursor="pointer"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
            borderRadius="8px"
            border="1px dotted"
          >
            <Image alt="" src={upload2} />
          </Box>
        </label>
      </Box>

      <Text pt={56} className="gordita700" fontSize={18}>
        Cover Picture
      </Text>

      <Box w="100%" h="212px" bg="#141414" borderRadius="8px" p="20px">
        <input
          style={{ display: "none" }}
          id="coverPicture"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={(e) => {
            setFieldValue("coverPicture", {
              image: e.target.files[0],
              imageToDisplay: URL.createObjectURL(e.target.files[0]),
            });
          }}
        ></input>
        <label htmlFor="coverPicture">
          <Box
            cursor="pointer"
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
            borderRadius="8px"
            border="1px dotted"
          >
            <Image alt="" src={upload2} />
          </Box>
        </label>
      </Box>
      <HStack spacing={56} w="100%">
        <Box w="45%">
          <Text pt={56} className="gordita700" fontSize={18}>
            Image
          </Text>
          <Box
            minH="273px"
            w="100%"
            h="212px"
            bg="#141414"
            borderRadius="8px"
            p="20px"
          >
            <Box
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              <input
                style={{ display: "none" }}
                id="eventImage"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {
                  setFieldValue("eventImage", {
                    image: e.target.files[0],
                    imageToDisplay: URL.createObjectURL(e.target.files[0]),
                  });
                }}
              ></input>
              <label htmlFor="eventImage">
                <VStack cursor="pointer" color="#B6B6B6">
                  <Image alt="" src={exportSvg} />
                  <Box className="gordita600" fontSize={17}>
                    Drop your files here or
                    <chakra.span color="#615EED"> Browse</chakra.span>
                  </Box>
                  <Box className="gordita600" fontSize={14}>
                    Max.file size is 25 MB
                  </Box>
                </VStack>
              </label>
            </Box>
          </Box>
        </Box>
        <Box w="45%">
          <Text pt={56} className="gordita700" fontSize={18}>
            Preview
          </Text>
          <Box
            minH="273px"
            w="100%"
            h="212px"
            bg="#141414"
            borderRadius="8px"
            p="20px"
          >
            <Box
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
              borderRadius="8px"
            >
              {values?.eventImage && (
                <Image
                  w="100%"
                  h="100%"
                  src={values.eventImage.imageToDisplay}
                />
              )}
            </Box>
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Promotion;
