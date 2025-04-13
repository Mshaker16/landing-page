import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Icon,
  Link,
  Container,
  HStack,
  VStack,
  ChevronRightIcon,
} from "@chakra-ui/react";
import { LuMousePointerClick } from "react-icons/lu";
import { BsBadgeVr } from "react-icons/bs";

const VRIcon = () => (
  <Box color="teal.400">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 7H3.5C2.12 7 1 8.12 1 9.5v6C1 16.88 2.12 18 3.5 18h17c1.38 0 2.5-1.12 2.5-2.5v-6C23 8.12 21.88 7 20.5 7zm-17 9c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h17c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-17z"
        fill="currentColor"
      />
      <path
        d="M12 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        fill="currentColor"
      />
    </svg>
  </Box>
);

const PriceIcon = () => (
  <Box color="teal.300">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"
        fill="currentColor"
      />
      <path
        d="M6.5 6.5c.83 0 1.5.67 1.5 1.5S7.33 9.5 6.5 9.5 5 8.83 5 8s.67-1.5 1.5-1.5z"
        fill="currentColor"
      />
    </svg>
  </Box>
);

// Social media icons
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const Finalpage = () => {
  return (
    <Box bg="black" color="white" pb={8}>
      <Box px={4} pt={8} pb={10} maxW="1400px" mx="auto">
        <Flex alignItems="center" mb={8}>
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Why choose{" "}
            <Text as="span" color="#D2AC71">
              Egy
            </Text>
            Book?
          </Heading>
        </Flex>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          <GridItem>
            <Flex direction="column" alignItems="flex-start">
              <Box mb={4}>
                <LuMousePointerClick color="#346D52" size="46" />
              </Box>
              <Text fontWeight="semibold" fontSize="2xl" mb={2}>
                <Text as="span" color="#D2AC71">
                  Seamless
                </Text>{" "}
                <Text as="span" color="white">
                  &
                </Text>{" "}
                <Text as="span" color="#346D52">
                  Smart
                </Text>{" "}
                <Text as="span" color="white">
                  Booking
                </Text>
              </Text>
              <Text fontSize="lg" color="white">
                Quick, user-friendly platform that simplifies the reservation
                process.
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction="column" alignItems="flex-start">
              <Box mb={4}>
                <BsBadgeVr color="#346D52" fontSize="46" />
              </Box>
              <Text fontWeight="semibold" fontSize="2xl" mb={2}>
                <Text as="span" fontStyle="italic" color="#346D52">
                  Immersive
                </Text>{" "}
                <Text as="span" color="white" fontWeight="bold">
                  VR Previews
                </Text>
              </Text>
              <Text fontSize="lg" color="white">
                Explore hotels and rooms in 360° before you book—giving you
                total confidence.
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction="column" alignItems="flex-start" pos="relative" top={"-20px"}>
              <Box mb={4}>
                <Image
                  src="/piggybank.png"
                  alt="bank"
                  objectFit="cover"
                  w="full"
                  h="full"
                  opacity="0.8"
                />{" "}
              </Box>
              <Text fontWeight="semibold" fontSize="2xl" mb={2}>
                <Text as="span" color="#346D52">
                  Exclusive
                </Text>{" "}
                <Text as="span" color="white" fontWeight="bold">
                  Best-Price Deals
                </Text>
              </Text>
              <Text fontSize="lg" color="white">
                Save more with special offers and real-time price comparisons.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <Box px={4} pb={12} maxW="1400px" mx="auto">
        <Heading as="h2" fontSize="3xl" fontWeight="bold" mb={6}>
          Trending Destinations
        </Heading>

        <Flex overflow="hidden" gap={4} position="relative">
          <Box
            w={{ base: "100%", md: "33%" }}
            minW={{ base: "360px", md: "400px" }}
            h="360px"
            borderRadius="3xl"
            overflow="hidden"
            position="relative"
            bg="orange.200"
          >
            <Image
              src="/Cairo.png"
              alt="Cairo"
              objectFit="cover"
              w="full"
              h="full"
              opacity="0.8"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              p={4}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Heading size="3xl" color="white">
                  Cairo
                </Heading>

                <Text color="white" mb={2} fontSize="2xl">
                  Unveil secrets of ancient wonders.
                </Text>
              </Box>
              <Box>
                <Button
                  size="md"
                  color="black"
                  bg="white"
                  _hover={{ bg: "gray.100" }}
                  borderRadius="full"
                  alignSelf="flex-start"
                >
                  See Hotels
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            w={{ base: "100%", md: "33%" }}
            minW={{ base: "360px", md: "400px" }}
            h="360px"
            borderRadius="3xl"
            overflow="hidden"
            position="relative"
            bg="blue.200"
          >
            <Image
              src="/Hurghada.png"
              alt="Hurghada"
              objectFit="cover"
              w="full"
              h="full"
              opacity="0.8"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              p={4}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Heading size="3xl" color="white">
                  Hurghada
                </Heading>

                <Text color="white" mb={2} fontSize="2xl">
                  Sunshine, beaches, and vibrant reefs.
                </Text>
              </Box>
              <Box>
                <Button
                  size="md"
                  color="black"
                  bg="white"
                  _hover={{ bg: "gray.100" }}
                  borderRadius="full"
                  alignSelf="flex-start"
                >
                  See Hotels
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            w={{ base: "100%", md: "33%" }}
            minW={{ base: "360px", md: "400px" }}
            h="360px"
            borderRadius="3xl"
            overflow="hidden"
            position="relative"
            bg="red.200"
          >
            <Image
              src="/sharm.png"
              alt="Sharm El Sheikh"
              objectFit="cover"
              w="full"
              h="full"
              opacity="0.8"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              p={4}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Heading size="3xl" color="white">
                  Sharm
                </Heading>
                <Text color="white" mb={2} fontSize="2xl">
                  Dive into stunning underwater wonders.
                </Text>
              </Box>

              <Button
                size="md"
                color="black"
                bg="white"
                _hover={{ bg: "gray.100" }}
                borderRadius="full"
                alignSelf="flex-start"
              >
                See Hotels
              </Button>
            </Box>
          </Box>

          <Flex
            position="absolute"
            bottom="-20px"
            left="50%"
            transform="translateX(-50%)"
            gap={2}
          >
            <Box w="8px" h="8px" borderRadius="full" bg="white" />
            <Box w="8px" h="8px" borderRadius="full" bg="gray.500" />
            <Box w="8px" h="8px" borderRadius="full" bg="gray.500" />
          </Flex>
        </Flex>
      </Box>

      <Box px={4} pb={12} maxW="1400px" mx="auto">
        <Flex
          bg="green.50"
          borderRadius="3xl"
          overflow="hidden"
          position="relative"
          direction={{ base: "column", md: "row" }}
        >
          <Box p={6} flex={{ base: "1", md: "0.5" }} zIndex={1}>
            <Heading
              as="h2"
              size="3xl"
              align="left"
              mt={20}
              color="#346D52"
              mb={3}
            >
              Ready to Book Your Next Adventure?
            </Heading>
            <Text color="#346D52" mb={6} size={"xl"}>
              Get exclusive deals and immersive previews with our smart booking
              platform.
            </Text>
            <Button
              bg="#346D52"
              color="white"
              _hover={{ bg: "green.800" }}
              px={20}
              borderRadius="full"
              size="lg"
            >
              Book now
            </Button>
          </Box>

          <Box flex={{ base: "1", md: "0.5" }}>
            <Image
              src="/hotels.png"
              alt="Egyptian coastal resort"
              h="full"
              w="full"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>

      <Box
        px={4}
        pt={8}
        maxW="1400px"
        mx="auto"
        borderTop="1px solid"
        borderColor="gray.800"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-end" }}
          mb={8}
        >
          {/* Logo */}
          <Flex mb={{ base: 4, md: 0 }}>
            <img
              src="/Group 210.png"
              alt="Company Logo"
              width="100px"
              height="58px"
            />
          </Flex>
        </Flex>

        <Text
          color="#444444"
          mb={4}
          textAlign={{ base: "center", md: "left" }}
          fontSize={"3xl"}
        >
          Lorem, Ipsum Lorem, Ipsum Lorem
          <br />
          Ipsum or less.
        </Text>

        <Box textAlign={{ base: "center", md: "left" }}>
          <Button
            size="sm"
            variant="outline"
            borderColor="#D2AC71"
            color="white"
            borderRadius="full"
            bg="#D2AC71"
            _hover={{ bg: "#B8955E" }}
          >
            Discover More
          </Button>
        </Box>

        <Flex
          justify="space-between"
          pt={4}
          fontSize="sm"
          color="gray.500"
          flexWrap="wrap"
        >
          <HStack
            spacing={4}
            mb={{ base: 4, md: 0 }}
            mx={{ base: "auto", md: 0 }}
          >
            <Button variant="link">
              <Text as="span" color="white">
                Home
              </Text>
            </Button>
            <Button variant="link">
              <Text as="span" color="#D2AC71" fontFamily="Montserrat">
                Egy
              </Text>
              <Text as="span" color="white">
                Book
              </Text>
            </Button>
            <Button variant="link">
              <Text as="span" color="#D2AC71" fontFamily="Montserrat">
                Egy
              </Text>
              <Text as="span" color="white">
                Explore
              </Text>
            </Button>
            <Button variant="link">
              <Text as="span" color="#D2AC71" fontFamily="Montserrat">
                Egy
              </Text>
              <Text as="span" color="white">
                Tales
              </Text>
            </Button>
            <Button variant="link">
              <Text as="span" color="#D2AC71" fontFamily="Montserrat">
                Egy
              </Text>
              <Text as="span" color="white">
                Treasure
              </Text>
            </Button>
          </HStack>

          <Flex direction="column" align={{ base: "center", md: "flex-end" }}>
            <HStack spacing={3} mb={3}>
              <Link
                href="#"
                bg="#D2AC71"
                color="white"
                w="46px"
                h="46px"
                borderRadius="2xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ bg: "#B8955E" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="#"
                bg="#D2AC71"
                color="white"
                w="46px"
                h="46px"
                borderRadius="2xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ bg: "#B8955E" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link
                href="#"
                bg="#D2AC71"
                color="white"
                w="46px"
                h="46px"
                borderRadius="2xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ bg: "#B8955E" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="#"
                bg="#D2AC71"
                color="white"
                w="46px"
                h="46px"
                borderRadius="2xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ bg: "#B8955E" }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                bg="#D2AC71"
                color="white"
                w="46px"
                h="46px"
                borderRadius="2xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ bg: "#B8955E" }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </HStack>

            {/* Copyright Text */}
            <Text
              textAlign={{ base: "center", md: "right" }}
              w={{ base: "full", md: "auto" }}
              color={"white"}
              fontSize={{ base: "md", md: "lg" }}
            >
              Copyright Gates of Egypt © 2024
              <br />
              All rights reserved
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Finalpage;
