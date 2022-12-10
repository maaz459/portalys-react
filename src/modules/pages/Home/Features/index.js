import { Box, Text, Flex, Image } from "@chakra-ui/react";
import _ismpty from "lodash/isEmpty";
import { blur1, blur2, blur3, blur4 } from "../../../../static/assets/images";
import { useEffect, useState } from "react";

const images = [
  { image: blur1 },
  { image: blur2 },
  { image: blur3 },
  { image: blur4 },
];

const Features = ({ features, isMobile, maxW }) => {
  let animation;
  const [curretImage, setCurrentImage] = useState(0);

  const updateAnimation = () => {
    animation =
      !animation &&
      setInterval(() => {
        setCurrentImage((prevImage) => prevImage + 1);
      }, 1000);
  };

  useEffect(() => {
    updateAnimation();
  }, []);
  return (
    <Box
      overflowX={{
        base: "clip",
        md: "inherit",
        lg: "clip",
        "3xl": "inherit",
      }}
      zIndex={0}
      px={20}
      maxW="1900px"
      w="100%"
      display="flex"
      justifyContent="center"
      position={{ base: "relative", md: "", "3xl": "relative" }}
    >
      <Box
        pos="absolute"
        zIndex={-1}
        top={{ base: -100, md: "", "3xl": -100 }}
        right={{ base: -200, md: -250 }}
        maxW="486px"
      >
        <Image
          alt=""
          style={{
            width: isMobile ? "300px" : "",
            height: isMobile ? "250px" : "486px",
          }}
          src={images[curretImage % 4].image}
        />
      </Box>

      <Box maxW={maxW} mt="10%" w="100%">
        <Text
          className="gordita700"
          fontSize={{ base: 22, md: 32, lg: 38 }}
          textAlign="center"
        >
          Featured In
        </Text>
        <Flex
          mt={56}
          justifyContent="center"
          gap={{ base: 36, md: 0 }}
          wrap="wrap"
        >
          {!_ismpty(features) &&
            features.map(({ image }, index) => (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                key={index}
                flexBasis={{ base: "35%", md: "20%" }}
              >
                <Image alt="" src={image} />
              </Box>
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Features;
