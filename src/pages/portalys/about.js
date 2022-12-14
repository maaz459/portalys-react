import {
  Box,
  Button,
  chakra,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { React } from "react";
import Slider from "react-slick";
import {
  disk1,
  disk2,
  disk3,
  disk4,
  lights2 as light1,
  mbl as mobile,
  profession,
  publicImage as public1,
  writer,
} from "../../static/assets/images";
import box from "../../static/assets/images/box.svg";
import boxline from "../../static/assets/images/boxline.svg";
import calenderImg from "../../static/assets/images/calendar.svg";
import calender from "../../static/assets/images/calender.svg";
import exper from "../../static/assets/images/exper.svg";
import full from "../../static/assets/images/full.svg";
import home from "../../static/assets/images/home.svg";
import marker from "../../static/assets/images/marker.svg";
import singer from "../../static/assets/images/singer.svg";
import thumb from "../../static/assets/images/sld1.svg";
import verify from "../../static/assets/images/verify.svg";
import "../../styles/about/about.css";
import Layout from "../../modules/layout/layout";
import "../../styles/portalys/portalys.css";

export default function About() {
  const management = [
    {
      img: marker,
      title: "EVENT MANAGEMENT",
      para: "Lorem ipsum dolor sit amet, consectetuelit.Maecenaultricesmassased porta dui.",
    },
    {
      img: calender,
      title: "MULTIPLE EVENTS",
      para: "Lorem ipsum dolor sit amet, consectetuelit.Maecenaultricesmassased porta dui.",
    },
    {
      img: home,
      title: "Crypto Payment",
      para: "Lorem ipsum dolor sit amet, consectetuelit.Maecenaultricesmassased porta dui.",
    },
    {
      img: box,
      title: "PAYMENT GATEWAYS",
      para: "Lorem ipsum dolor sit amet, consectetuelit.Maecenaultricesmassased porta dui.",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <Layout>
      <Box background="black">
        <Box position="relative">
          <Slider {...settings}>
            <div>
              <Image
                box-shadow=" inset 10px 5px 25px 5px black, 5px 5px 12px 2px black"
                objectFit="cover"
                height="600px"
                w="100%"
                src={thumb}
              />
            </div>
            <div>
              <Image
                box-shadow=" inset 10px 5px 25px 5px black, 5px 5px 12px 2px black"
                objectFit="cover"
                height="600px"
                w="100%"
                src={thumb}
              />
            </div>
            <div>
              <Image
                box-shadow=" inset 10px 5px 25px 5px black, 5px 5px 12px 2px black"
                objectFit="cover"
                height="600px"
                w="100%"
                src={thumb}
              />
            </div>
          </Slider>
          <Box position="absolute" top="38%" left="80px" className="wolveshero">
            <Heading
              fontSize="35px"
              fontWeight="800"
              width="500px"
              className="wolvesheader"
            >
              <chakra.span color="#02F6AD">ABOUT THE CLUB &nbsp; </chakra.span>
              <chakra.span color="white">
                WELCOME TO THE HOME OF WOLVES FC
              </chakra.span>
            </Heading>
          </Box>
        </Box>
        {/* / */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="120px"
          className="consecteturhero"
        >
          <Box maxWidth="700px" width="100%" textAlign="center">
            <Heading
              fontSize="31px"
              fontWeight="700"
              color="#ffff"
              className="ametheader"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              massa, sed porta dui.
            </Heading>
            <Text
              fontSize="16px"
              fontWeight="500"
              color="#02F6AD"
              paddingTop="12px"
            >
              Consetetur omittantur consequuntur eos et. Eleifend praesent
              iudicabit no mea tollit persequeris ex pri.
            </Text>
          </Box>
        </Box>
        {/* // */}
        <HStack display="flex" className="managementcard">
          {management.map((item, index) => {
            return (
              <VStack key={index} textAlign="center" maxW="250px" width="100%">
                <Image height="30px" w="30px" src={item.img} />
                <Heading
                  color="#02F6AD"
                  fontWeight="700"
                  fontSize="16px"
                  paddingTop="25px"
                >
                  {item.title}
                </Heading>
                <Text
                  color="#FFFFFF"
                  fontWeight="400"
                  fontSize="14px"
                  paddingTop="12px"
                >
                  {item.para}
                </Text>
              </VStack>
            );
          })}
        </HStack>
        {/* // */}
        <Box textAlign="center" paddingTop="60px" paddingBottom="60px">
          <Heading fontSize="35px" fontWeight="700" className="designheader">
            <chakra.span color="#FFFFFF">The design can </chakra.span>
            <chakra.span color="#02F6AD">change the world. </chakra.span>
          </Heading>
          <Box
            display="grid"
            justifyContent="center"
            alignItems="center"
            marginTop="25px"
          >
            <Image src={boxline} width="250px" />
          </Box>
          <Text marginTop="25px" color="#FFFFFF" fontSize="15px">
            Lorem ipsum dolor sit amet, consectetuelit.
          </Text>
          <HStack
            justifyContent="space-evenly"
            marginTop="50px"
            className="mobileimgshero"
          >
            <Image className="mobileimg" src={mobile} width="290px" />
            <Image className="mobileimg" src={mobile} width="290px" />
            <Image className="mobileimg" src={mobile} width="290px" />
          </HStack>
          <HStack
            textAlign="left"
            justifyContent="space-evenly"
            marginTop="50px"
            className="searchhero"
          >
            <Box src={mobile} width="290px" className="searchheroone">
              <Heading
                fontSize="35px"
                fontWeight="700"
                className="designheader"
              >
                <chakra.span color="#FFFFFF">Advanced&nbsp;</chakra.span>
                <chakra.span color="#02F6AD">Event Search System </chakra.span>
              </Heading>
              <Text color="#FFFFFF" fontSize="15px" paddingTop="25px">
                Your customers can filter events according to their own needs
                with event search tool. Advanced and modern event filtering
                options.
              </Text>
            </Box>
            <Image src={writer} width="320px" searchherotwo />
          </HStack>
        </Box>
        {/* // */}
        <HStack
          width="100%"
          textAlign="left"
          justifyContent="space-around"
          paddingTop="60px"
          paddingBottom="60px"
          className="ticketsheroend"
        >
          <HStack gap="15px" width="50%" className="publicimghero">
            <Image src={public1} width="400px" className="searchherotwo" />
            <Image
              src={singer}
              width="250px"
              height="440px"
              className="singerimg"
            />
          </HStack>
          <Box width="40%" className="controlhero">
            <Heading
              fontSize="50px"
              fontWeight="700"
              color="#02F6AD"
              className="designheader"
            >
              Take Control of Your Tickets
            </Heading>
            <Text
              fontSize="15px"
              textAlign="left"
              fontWeight="400"
              color="#FBFAFB"
              marginTop="20px"
            >
              One wallet, for all event tickets, that you own.
            </Text>

            <HStack
              gap="30px"
              paddingTop="40px"
              display="flex"
              alignItems="end"
            >
              <Image src={verify} width="26px" />
              <VStack textAlign="left" display="block">
                <Text
                  fontSize="22px"
                  fontWeight="700"
                  color="#FFFFFF"
                  marginBottom="-2px"
                >
                  We verify that you own it
                </Text>
                <chakra.span
                  fontSize="15px"
                  textAlign="left"
                  fontWeight="400"
                  color="#FBFAFB"
                >
                  Only your event ticket ownership scans across all events
                </chakra.span>
              </VStack>
            </HStack>
            <HStack
              gap="30px"
              paddingTop="40px"
              display="flex"
              alignItems="end"
            >
              <Image src={full} width="26px" />
              <VStack textAlign="left" display="block">
                <Text
                  fontSize="22px"
                  fontWeight="700"
                  color="#FFFFFF"
                  marginBottom="-2px"
                >
                  We verify that you own it
                </Text>
                <chakra.span
                  fontSize="15px"
                  textAlign="left"
                  fontWeight="400"
                  color="#FBFAFB"
                >
                  Only your event ticket ownership scans across all events
                </chakra.span>
              </VStack>
            </HStack>
            <HStack
              gap="30px"
              paddingTop="40px"
              display="flex"
              alignItems="end"
            >
              <Image src={exper} width="26px" />
              <VStack textAlign="left" display="block">
                <Text
                  fontSize="22px"
                  fontWeight="700"
                  color="#FFFFFF"
                  marginBottom="-2px"
                >
                  We verify that you own it
                </Text>
                <chakra.span
                  fontSize="15px"
                  textAlign="left"
                  fontWeight="400"
                  color="#FBFAFB"
                >
                  Only your event ticket ownership scans across all events
                </chakra.span>
              </VStack>
            </HStack>
          </Box>
        </HStack>
        {/* // */}
        <HStack padding="60px" gap="20px" className="ticketshero">
          <Box>
            <Heading
              fontSize="50px"
              fontWeight="700"
              color="#02F6AD"
              className="designheader"
            >
              Online Ticket Sales & Reservation
            </Heading>
            <Text
              fontSize="15px"
              fontWeight="400"
              color="#FFFFFF"
              marginTop="25px"
              paddingRight="80px"
            >
              Sell your event tickets with online payment methods or offline
              reservation system. More than 100 payment gateways ready to use.
            </Text>
          </Box>
          <Box>
            <Image src={profession} width="100%" />
          </Box>
        </HStack>
        {/* // */}
        <HStack
          padding="60px"
          gap="20px"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          className="ticketshero"
        >
          <Box>
            <Image src={calenderImg} width="100%" />
          </Box>
          <Box textAlign="left">
            <Heading
              fontSize="50px"
              fontWeight="700"
              color="#FFFFFF"
              className="designheader"
            >
              Events <chakra.span color="#02F6AD">Calendar</chakra.span>
            </Heading>
          </Box>
        </HStack>
        {/* // */}
        <Box paddingTop="60px" className="ticketshero">
          <Box>
            <Heading
              fontSize="50px"
              textAlign="center"
              fontWeight="700"
              color="#FFFFFF"
              className="designheader"
            >
              Events <chakra.span color="#02F6AD">GALLERY</chakra.span>
            </Heading>
          </Box>
          <HStack
            padding="50px"
            gap="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="diskimgparent"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="15px"
              width="100%"
              className="diskimghero"
            >
              <Image className="diskimg" src={disk1} />
              <Image src={disk2} className="diskimg" />
              <Image src={disk3} className="diskimg" />
              <Image src={disk4} className="diskimg" />
            </Box>
          </HStack>
        </Box>
        {/* // */}
        <HStack
          padding="60px"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          gap="15px"
          paddingTop="90px"
          className="ticketsheroend"
        >
          {/* 1 */}

          <VStack width="50%" className="light1hero">
            <Box textAlign="left" display="grid" alignItems="baseline">
              <Heading
                color="#FFFFFF"
                fontWeight="700"
                fontSize="34px"
                className="designheader"
              >
                Sign Up Our Newsletter
              </Heading>
              <Text
                color="#FFFFFF"
                fontWeight="400"
                fontSize="15px"
                paddingTop="15px"
              >
                Lorem ipsum dolor sit amet, consectetuelit.
              </Text>
            </Box>
            <HStack paddingTop="25px">
              {" "}
              <Input
                type="text"
                placeholder="Email"
                padding="20px 40px"
                background="#FFFFFF"
              />
              <Button
                background="#02F6AD"
                borderRadius="5px"
                boxShadow=" 0px 2px 4px rgba(0, 0, 0, 0.25)"
                color="#FFFFFF"
                padding="21px 40px"
              >
                Subscribe
              </Button>
            </HStack>
          </VStack>
          <HStack width="50%" className="light1hero">
            <Image className="mobileimg" src={light1} width="100%" />
          </HStack>
        </HStack>
      </Box>
    </Layout>
  );
}
