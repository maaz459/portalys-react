import {
  Box, Button, chakra, Divider, Image, Input, Text
} from "@chakra-ui/react";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import calendar1 from "../../static/assets/images/calendar1.svg";
import facebook from "../../static/assets/images/fb.svg";
import leftarr from "../../static/assets/images/leftarrow.svg";
import men from "../../static/assets/images/man.svg";
import order from "../../static/assets/images/order.svg";
import setting from "../../static/assets/images/setting.svg";
import square from "../../static/assets/images/square.svg";

export default function Profile() {
  const [show, setShow] = useState(1);
  const handleShow = (showId) => {
    setShow(showId);
  };
  return (
    <Box background="black">
      <Box width="100%" paddingTop="15px" display="flex" gap="30px">
        {/* sidebar */}
        <Box width="23%" background="#1C1C1C" display="grid">
          <Box padding="25px 20px" display="block" gap="30px">
            <Box
              gap="12px"
              onClick={() => handleShow(1)}
              marginTop="35px"
              alignItems="center"
              display="flex"
              cursor="pointer"
            >
              <Image width="21px" src={square} />
              <Text color="#FBFAFB" fontSize="15px">
                Dashboard
              </Text>
            </Box>
            <Box
              gap="12px"
              onClick={() => handleShow(2)}
              marginTop="35px"
              alignItems="center"
              display="flex"
              cursor="pointer"
            >
              <Image width="21px" src={calendar1} />
              <Text color="#FBFAFB" fontSize="15px">
                Events
              </Text>
            </Box>
            <Box
              gap="12px"
              onClick={() => handleShow(3)}
              marginTop="35px"
              alignItems="center"
              display="flex"
              cursor="pointer"
            >
              <Image width="21px" src={order} />
              <Text color="#FBFAFB" fontSize="15px">
                Orders
              </Text>
            </Box>
            <Box
              onClick={() => handleShow(4)}
              gap="12px"
              marginTop="35px"
              alignItems="center"
              display="flex"
              cursor="pointer"
            >
              <Image width="21px" src={setting} />
              <Text
                color="#FBFAFB"
                fontSize="15px"
                style={{ color: show == 1 ? "#02F6AD" : "#FBFAFB" }}
              >
                Settings
              </Text>
            </Box>
          </Box>
          <Box padding="25px 20px" display="flex" alignItems="end">
            <Box
              gap="12px"
              onClick={() => handleShow(1)}
              marginTop="35px"
              alignItems="center"
              display="flex"
              cursor="pointer"
            >
              <Image width="21px" src={leftarr} />
              <Text color="#FBFAFB" fontSize="15px">
                Logout
              </Text>
            </Box>
          </Box>
        </Box>

        {/* form */}
        <Box width="75%" background="black" paddingBottom="150px">
          <Divider color="white" height="5px" />

          <Box display="flex" gap="30px" marginTop="30px">
            <Box
              width="30%"
              background=" linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)"
              borderRadius="6px"
              padding="30px 50px"
              display="flex"
              justifyContent="start"
              flexDirection="column"
              alignItems="center"
            >
              <Image width="170px" src={men} />
              <Button
                color="#FFFFFF"
                fontSize="14px"
                border="0.5px dashed #303030"
                borderRadius="4px"
                background="#141414"
                padding="4px 15px"
                marginTop="20px"
                width="110px"
              >
                Choose file
              </Button>
              <Text fontSize="14px" color="#FFFFFF" marginTop="20px">
                Upload File
              </Text>
              <chakra.span
                textAlign="center"
                color="#353535"
                fontSize="12px"
                marginTop="10px"
              >
                "JPG, GIF or PNG Max size of 800K"
              </chakra.span>
            </Box>

            <Box width="67%" paddingRight="65px">
              <Box>
                <Text fontSize="14px" color="#FFFFFF" fontWeight="500">
                  First name{" "}
                </Text>
                <Input placeholder="large size" size="lg" marginTop="8px" />
              </Box>
              <Box marginTop="18px">
                <Text fontSize="14px" color="#FFFFFF" fontWeight="500">
                  Last name{" "}
                </Text>
                <Input placeholder="Type last name" size="lg" marginTop="8px" />
              </Box>

              <Box marginTop="18px">
                <Text fontSize="14px" color="#FFFFFF" fontWeight="500">
                  Email{" "}
                </Text>
                <Input placeholder="Type email" size="lg" marginTop="8px" />
              </Box>

              <Box marginTop="18px">
                <Text fontSize="14px" color="#FFFFFF" fontWeight="500">
                  Website{" "}
                </Text>
                <Input placeholder="Enter website" size="lg" marginTop="8px" />
              </Box>
              <Box
                marginTop="55px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                borderBottom="1px dashed gray"
                paddingBottom="12px"
              >
                <Text fontSize="16px" color="#FFFFFF" fontWeight="500">
                  Social media or link{" "}
                </Text>
                <Button
                  className="addnew"
                  fontSize="14px"
                  border="1px solid #02F6AD"
                  color="#02F6AD"
                  borderRadius="100px"
                  padding="0px 20px"
                  background="black"
                >
                  Add New
                </Button>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                gap="30px"
                marginTop="35px"
              >
                <Box display="flex" alignItems="center" gap="15px">
                  <Image
                    width="45px"
                    src={facebook}
                    background="white"
                    borderRadius="100px"
                  />
                  <Link>
                    <Text color="#FFFFFF">www.facebook.com/Anjumch325 </Text>{" "}
                  </Link>
                </Box>
                <Button
                  background="transparent"
                  color="#FF4B55"
                  fontSize="12px"
                >
                  Remove
                </Button>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                gap="30px"
                marginTop="20px"
              >
                <Box display="flex" alignItems="center" gap="15px">
                  <Image
                    width="45px"
                    src={facebook}
                    background="white"
                    borderRadius="100px"
                  />
                  <Link>
                    <Text color="#FFFFFF">www.facebook.com/Anjumch325 </Text>{" "}
                  </Link>
                </Box>
                <Button
                  background="transparent"
                  color="#FF4B55"
                  fontSize="12px"
                >
                  Remove
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
