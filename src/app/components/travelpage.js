import React, { useState, useRef, useEffect } from "react";
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
    id: 7,
    name: "Nile River",
    image: "/Nile.png",
  },
];

const Carousel = ({ items, renderItem, title }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const carouselRef = useRef(null);
  
  const scrollAmount = useBreakpointValue({ base: 400, md: 450, lg: 500 });
  
  const showNavigation = useBreakpointValue({ base: false, sm: true });
  
  // Update max scroll value when component mounts or window resizes
  useEffect(() => {
    const updateMaxScroll = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        setMaxScroll(container.scrollWidth - container.clientWidth);
      }
    };
    
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    
    return () => {
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, [items]);
  
  // Update scroll position when scrolling manually
  const handleScrollUpdate = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(maxScroll, scrollPosition + scrollAmount);

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <Box my={{ base: 4, md: 8 }} width="100%">
      <Heading 
        as="h2" 
        size={{ base: "md", md: "lg" }} 
        color="white" 
        mb={{ base: 3, md: 6 }} 
        px={{ base: 3, md: 4 }}
      >
        {title}
      </Heading>

      <Box position="relative">
        {showNavigation && (
          <IconButton
            icon={<ChevronLeftIcon color="#D2AC71" boxSize={{ base: 6, md: 8 }} />}
            aria-label="Scroll left"
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            rounded="full"
            bg="white"
            size={{ base: "sm", md: "md" }}
            onClick={() => handleScroll("left")}
            opacity={scrollPosition <= 0 ? 0.5 : 1}
            isDisabled={scrollPosition <= 0}
          />
        )}

        <Box
          ref={carouselRef}
          overflowX="auto"
          onScroll={handleScrollUpdate}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
          px={{ base: 2, md: 4 }}
        >
          <Flex gap={{ base: 2, md: 4 }} pb={2}>
            {items.map((item) => renderItem(item))}
          </Flex>
        </Box>

        {showNavigation && (
          <IconButton
            icon={<ChevronRightIcon color="#D2AC71" boxSize={{ base: 6, md: 8 }} />}
            aria-label="Scroll right"
            position="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            rounded="full"
            bg="white"
            size={{ base: "sm", md: "md" }}
            onClick={() => handleScroll("right")}
            opacity={scrollPosition >= maxScroll ? 0.5 : 1}
            isDisabled={scrollPosition >= maxScroll}
          />
        )}
      </Box>
    </Box>
  );
};

const HotelCard = ({ hotel }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const cardWidth = useBreakpointValue({ 
    base: "260px", 
    sm: "320px", 
    md: "400px", 
    lg: "500px" 
  });
  
  const imageHeight = useBreakpointValue({ 
    base: "180px", 
    sm: "200px", 
    md: "250px", 
    lg: "280px" 
  });
  
  const minCardWidth = useBreakpointValue({ 
    base: "260px", 
    sm: "320px", 
    md: "350px", 
    lg: "400px" 
  });

  return (
    <Box
      w={cardWidth}
      minH={{ base: "280px", md: "320px", lg: "370px" }}
      borderRadius="3xl"
      minW={minCardWidth}
      overflow="hidden"
      bg="white"
      boxShadow="md"
      flex="0 0 auto"
    >
      <Box position="relative">
        <Image
          src={hotel.image}
          alt={hotel.name}
          h={imageHeight}
          w="full"
          objectFit="cover"
          borderRadius="3xl"
        />
        <Badge
          position="absolute"
          top={3}
          left={3}
          px={2}
          py={1}
          borderRadius="full"
          bg="white"
          color="#444444"
          fontSize={{ base: "xs", md: "sm" }}
        >
          {hotel.location}
        </Badge>
        <IconButton
          icon={
            <HiHeart
              fill={isFavorite ? "red" : "white"}
              stroke={isFavorite ? "red" : "black"}
              strokeWidth={1.5}
              size={{ base: 16, md: 20 }}
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
          p={{ base: 1, md: 2 }}
          size={{ base: "xs", md: "sm" }}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </Box>

      <Box p={{ base: 3, md: 4 }}>
        <Flex justify="space-between" align="flex-start">
          <Box>
            <Text 
              fontWeight="bold" 
              fontSize={{ base: "sm", md: "md" }} 
              noOfLines={1}
            >
              {hotel.name}
            </Text>
            <Text 
              fontSize={{ base: "xs", md: "sm" }} 
              color="gray.500" 
              mt={1}
            >
              From ${hotel.price} per person
            </Text>
          </Box>
          <Flex align="center" color="#D2AC71">
            <StarIcon size={{ base: 12, md: 16 }} fill="currentColor" />
            <Text 
              ml={1} 
              fontSize={{ base: "xs", md: "sm" }} 
              color="black"
            >
              {hotel.rating} ({hotel.reviews > 999 
                ? `${(hotel.reviews/1000).toFixed(1)}k` 
                : hotel.reviews})
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const DestinationCard = ({ destination }) => {
  // Responsive card sizing
  const cardWidth = useBreakpointValue({ 
    base: "100px", 
    sm: "150px", 
    md: "200px", 
    lg: "250px" 
  });
  
  const cardHeight = useBreakpointValue({ 
    base: "300px", 
    sm: "350px", 
    md: "400px", 
    lg: "450px" 
  });
  
  const minCardWidth = useBreakpointValue({ 
    base: "160px", 
    sm: "180px", 
    md: "200px" 
  });

  return (
    <Box
      w={cardWidth}
      h={cardHeight}
      minW={minCardWidth}
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
      flex="0 0 auto"
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
        p={{ base: 2, md: 3 }}
        color="white"
        fontWeight="medium"
        bg="linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))"
      >
        <Text fontSize={{ base: "sm", md: "md" }}>{destination.name}</Text>
      </Box>
    </Box>
  );
};

const TravelPage = () => {
  return (
    <Box bg="black" minH="100vh" py={{ base: 4, md: 8 }}>
      <Box maxW="1400px" mx="auto" px={{ base: 2, md: 4 }}>
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