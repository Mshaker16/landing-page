import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  Badge,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import { HiHeart } from "react-icons/hi";

const hotelsData = [
  {
    id: 1,
    name: "Kempinski Hotel Soma Bay",
    location: "Soma Bay",
    rating: 4.7,
    reviews: 1274,
    price: 214,
    image: "/Kempinski.png",
  },
  {
    id: 2,
    name: "JW Marriott Hotel Cairo",
    location: "Cairo",
    rating: 4.6,
    reviews: 2274,
    price: 194,
    image: "/Marriot.jpg",
  },
  {
    id: 3,
    name: "Nile Hotel ",
    location: "Nile",
    rating: 4.7,
    reviews: 1274,
    price: 214,
    image: "/Nile.png",
  },
  {
    id: 4,
    name: "Four Seasons Resort",
    location: "Sharm El Sheikh",
    rating: 4.9,
    reviews: 3120,
    price: 310,
    image: "/Kempinski.png",
  },
  {
    id: 5,
    name: "Steigenberger Hotel",
    location: "El Gouna",
    rating: 4.5,
    reviews: 980,
    price: 175,
    image: "/Marriot.jpg",
  },
];

const destinationsData = [
  {
    id: 1,
    name: "Red Sea",
    image: "/Red_sea.png",
  },
  {
    id: 2,
    name: "Soma Bay",
    image: "/Kempinski.png",
  },
  {
    id: 3,
    name: "Giza",
    image: "/Giza.png",
  },
  {
    id: 4,
    name: "Nile",
    image: "/Nile.png",
  },
  {
    id: 5,
    name: "Nabq Bay",
    image: "/Nabq_bay.png",
  },
  {
    id: 6,
    name: "Khan Al-Khalili",
    image: "/Khan.png",
  },
  {
    id: 4,
    name: "Nile",
    image: "/Nile.png",
  },
];

const Carousel = ({ items, renderItem, title }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const scrollAmount = 300;

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <Box my={8} width={"100%"}>
      <Heading as="h2" size="lg" color="white" mb={6} px={4}>
        {title}
      </Heading>

      <Box position="relative">
        <IconButton
          icon={<ChevronLeftIcon color="#D2AC71" boxSize={8} />}
          aria-label="Scroll left"
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          rounded="full"
          bg="white"
          onClick={() => handleScroll("left")}
          opacity={scrollPosition <= 0 ? 0.5 : 1}
          isDisabled={scrollPosition <= 0}
        />

        <Box
          ref={carouselRef}
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
          px={4}
        >
          <Flex gap={4} pb={2}>
            {items.map((item) => renderItem(item))}
          </Flex>
        </Box>

        <IconButton
          icon={<ChevronRightIcon color="#D2AC71" boxSize={8} />}
          aria-label="Scroll right"
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          rounded="full"
          bg="white"
          onClick={() => handleScroll("right")}
        />
      </Box>
    </Box>
  );
};

const HotelCard = ({ hotel }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Box
      w="500px"
      minH="370px"
      borderRadius="3xl"
      minW={"400px"}
      overflow="hidden"
      bg="white"
      boxShadow="md"
    >
      <Box position="relative">
        <Image
          src={hotel.image}
          alt={hotel.name}
          h="280px"
          w="full"
          objectFit="cover"
          borderRadius={"3xl"}
        />
        <Badge
          position="absolute"
          top={3}
          left={3}
          px={3}
          py={1}
          borderRadius="full"
          bg="white"
          color="#444444"
        >
          {hotel.location}
        </Badge>
        <IconButton
          icon={
            <HiHeart
              fill={isFavorite ? "red" : "white"}
              stroke={isFavorite ? "red" : "black"}
              strokeWidth={1.5}
              size={20}
            />
          }
          aria-label="Favorite"
          position="absolute"
          top={3}
          right={3}
          isRound
          bg="#FFF9E5"
          border="2px solid #D2AC71"
          _hover={{ bg: "#FFF9E5" }}
          p={2}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </Box>

      <Box p={4}>
        <Flex justify="space-between" align="flex-start">
          <Box>
            <Text fontWeight="bold" fontSize="md" noOfLines={1}>
              {hotel.name}
            </Text>
            <Text fontSize="sm" color="gray.500" mt={1}>
              From ${hotel.price} per person
            </Text>
          </Box>
          <Flex align="center" color="#D2AC71">
            <StarIcon size={16} fill="currentColor" />
            <Text ml={1} fontSize="md" color="black">
              {hotel.rating} ({hotel.reviews.toLocaleString()})
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const DestinationCard = ({ destination }) => {
  return (
    <Box
      w="400px"
      h="300px"
      minW={"200px"}
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={destination.image}
        alt={destination.name}
        w="full"
        h="full"
        objectFit="cover"
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={3}
        color="white"
        fontWeight="medium"
      >
        <Text>{destination.name}</Text>
      </Box>
    </Box>
  );
};

const TravelPage = () => {
  return (
    <Box bg="black" minH="100vh" py={8}>
      <Box maxW="1400px" mx="auto">
        <Carousel
          title="The Most Relevant"
          items={hotelsData}
          renderItem={(hotel) => <HotelCard key={hotel.id} hotel={hotel} />}
        />

        <Carousel
          title="Discover New Places"
          items={destinationsData}
          renderItem={(destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          )}
        />
      </Box>
    </Box>
  );
};




export default TravelPage;
