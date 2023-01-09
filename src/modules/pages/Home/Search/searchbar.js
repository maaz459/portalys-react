import React, { useState } from "react";
import { search } from "../../../../static/assets/images";
import {
  HStack,
  useColorMode,
  Stack,
  Box,
  chakra,
  Text,
  Button,
  Flex,
  VStack,
  Select,
  Input,
  Divider,
  Image,
} from "@chakra-ui/react";
import "../../../../styles/searchbar/searchbar.css";

export default function SearchBar() {
  const [show, setShow] = useState();
  const searchHandle = () => {
    setShow(!show);
    console.log(show, "true");
  };
  return (
    <div>
      <Box
        onClick={searchHandle}
        className={show ? "searchbar" : "searchbarclose"}
      >
        <Box className={show ? "movesearchbar" : ""}>
          <Box>
            {show ? (
              <Box display="flex" paddingRight="55px">
                <Flex
                  borderRadius="30px"
                  color="black.200"
                  w="100%"
                  maxW="565px"
                  pr={2}
                  h="52px"
                  alignItems="center"
                >
                  <HStack
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                    gap={0}
                  >
                    <VStack
                      justifyContent="center"
                      alignItems="center"
                      spacing={0}
                      gap={1}
                      p={0}
                    >
                      <Text fontSize={{ base: 12 }} className="gordita600">
                        CITY
                      </Text>
                      <Select
                        h="max-content"
                        fontSize={{ base: 14 }}
                        className="gordita700"
                        placeholder="Berlin"
                        w="90px"
                        outline="none"
                        border="none"
                      ></Select>
                    </VStack>
                    <Divider
                      orientation="vertical"
                      h="80%"
                      bg="black.200"
                      opacity={0.3}
                    ></Divider>
                    <VStack
                      justifyContent="center"
                      alignItems="center"
                      spacing={0}
                      gap={1}
                      px={16}
                    >
                      <Text fontSize={{ base: 12 }} className="gordita600">
                        CATEGORY
                      </Text>
                      <Select
                        h="max-content"
                        fontSize={{ base: 14 }}
                        className="gordita700"
                        w="100px"
                        placeholder="Parties"
                        outline="none"
                        border="none"
                      ></Select>
                    </VStack>
                    <Divider
                      orientation="vertical"
                      h="80%"
                      bg="black.200"
                      opacity={0.3}
                    ></Divider>
                    <VStack
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={0}
                      gap={1}
                      pl={24}
                    >
                      <Text fontSize={{ base: 12 }} className="gordita600">
                        TYPE
                      </Text>
                      <Input
                        h="max-content"
                        fontSize={{ base: 12 }}
                        placeholder="What are you looking for..."
                        color="black.200"
                        className="gordita600"
                        outline="none"
                        border="none"
                        p={0}
                        _placeholder={{
                          color: "black.200",
                        }}
                      ></Input>
                    </VStack>
                  </HStack>
                </Flex>
              </Box>
            ) : (
              ""
            )}
          </Box>
          <Button
            bg="black.100"
            border="solid 4px"
            borderColor="primary.100"
            borderRadius="100%"
            p={1}
            w="48px"
            h="48px"
            className="searchbutton"
          >
            <Image alt="" src={search}></Image>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
