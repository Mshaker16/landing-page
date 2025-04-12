"use client";
import { Box, Text, Flex, Image, Icon, Button } from "@chakra-ui/react";
import {
  FaLocationArrow,
  FaRegCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import Navbar from "./components/navbar";
import BookingBar from "./components/bookingbar";

const HomePage = ({ isLoggedIn = false, username = "" }) => {
  return (
    <Box>
      <Navbar />

      <Box w="100%" h="540px" position="relative" >
        <Image
          src="/HeroBG.png"
          alt="Homepage Banner"
          w="100%"
          h="100%"
          objectFit="cover"
        />

        <Flex
          position="absolute"
          top="55%"
          left="10%"
          transform="translateY(-50%)"
          direction="column"
          textAlign="left"
          color="white"
          maxW="800px"
          w="90%"
        >
          <Flex align="center" mb={4}>
            <Icon as={FaLocationArrow} color="white" mr={2} boxSize={5} />
            <Text fontSize="md">Egypt</Text>
          </Flex>

          <Text fontSize="5xl" fontWeight="bold" mb={3}>
            Hey {isLoggedIn ? username : ""}
          </Text>

          <Text fontSize="5xl" fontWeight="bold" mb={3}>
            Tell us where you want to stay
          </Text>

          <Text fontSize="md" color="gray.200" mb={8}>
            Book 450+ Curated Egyptian Hotels
          </Text>

<BookingBar />
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
