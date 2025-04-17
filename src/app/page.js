"use client";
import { Box, Text, Flex, Image, Icon, Button, useMediaQuery, Stack } from "@chakra-ui/react";
import {
  FaLocationArrow,
  FaRegCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import Navbar from "./components/navbar";
import SmallNavbar from "./components/small_navbar";
import BookingBar from "./components/bookingbar";
import TravelPage from "./components/travelpage";
import FinalPage from "./components/finalpage";
import React, { useState, useRef, useEffect } from "react";


const HomePage = ({ isLoggedIn = false }) => {
  const username = isLoggedIn ? "Bishoy" : "";
  // Check if the screen is mobile-sized
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  console.log(username);

  return (
    <Box>
      {isMobile ? <SmallNavbar /> : <Navbar />}

      <Box w="100%" h={isMobile ? "400px" : "540px"} position="relative">
        <Image
          src="/HeroBG.png"
          alt="Homepage Banner"
          w="100%"
          h="100%"
          objectFit="cover"
        />

        <Flex
          position="absolute"
          top={isMobile ? "60%" : "55%"}
          left={isMobile ? "5%" : "10%"}
          transform="translateY(-50%)"
          direction="column"
          textAlign="left"
          color="white"
          maxW={isMobile ? "90%" : "800px"}
          w={isMobile ? "90%" : "90%"}
          zIndex={10}
        >
          <Flex align="center" mb={isMobile ? 2 : 4}>
            <Icon as={FaLocationArrow} color="white" mr={2} boxSize={isMobile ? 4 : 5} />
            <Text fontSize={isMobile ? "sm" : "md"}>Egypt</Text>
          </Flex>

          <Text fontSize={isMobile ? "3xl" : "5xl"} fontWeight="bold" >
            Hey {username}
          </Text>

          <Text fontSize={isMobile ? "2xl" : "5xl"} fontWeight="bold" >
            Tell us where you want to stay
          </Text>

          <Text fontSize={isMobile ? "md" : "lg"} color="gray.200" mb={isMobile ? 2 : 4}>
            Book 450+ Curated Egyptian Hotels
          </Text>

          <BookingBar isMobile={isMobile} />
        </Flex>
      </Box>

      <Box w="100%" bg="#121212">
        <TravelPage isMobile={isMobile} />
        <FinalPage isMobile={isMobile} />
      </Box>
    </Box>
  );
};

export default HomePage;