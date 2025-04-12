"use client";
import {
  IconButton,
  Button,
  Flex,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  VStack,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"; // Chakra UI search icon
import {
  FaGlobe,
  FaLocationArrow,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popularResults, setPopularResults] = useState([
    "Cairo",
    "Alexandria",
    "Hurghada",
    "Luxor",
    "Sharm El Sheikh",
  ]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      setFilteredResults(
        popularResults.filter((result) =>
          result.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredResults([]);
    }
  };

  const handleSearchSubmit = () => {
    setIsSearching(true);
    setFilteredResults([searchQuery]);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setSearchQuery(result);
    setFilteredResults([]);
    setIsSearching(false);
  };

  return (
    <Flex
      as="nav"
      w="full"
      h="100px"
      bg="black"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 12 }}
      py={4}
    >
      {isSearching && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="blackAlpha.800"
          zIndex="999"
          onClick={() => setIsSearching(false)}
        />
      )}
      <Box
        position="relative"
        top="5px"
        left={"auto"}
      >
        <img
          src="/Group 210.png"
          alt="Company Logo"
          width="100px"
          height="58px"
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        position="relative"
        zIndex="1000"
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          color="#D2AC71"
          bg="#333333"
          borderRadius="full"
          fontSize="24px"
          m={2}
          _hover={{ bg: "gray.700" }}
          onClick={() => setIsSearching(!isSearching)} // Toggle search visibility
          position={"relative"}
        />

        {isSearching && (
          <Box
            width="auto"
            zIndex={1000}
            display="flex"
            alignItems="center"
            flexDirection="column"
            position={"relative"}
          >
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchInput}
              onFocus={() => setSearchQuery("")}
              bg="gray.700"
              color="white"
              borderRadius="full"
              size="md"
              mb={2}
              autoFocus
              transition="width 0.3s ease"
              width="350px"
            />

            {searchQuery === "" && (
              <VStack
                align="flex-start"
                spacing={2}
                bg="gray.700"
                borderRadius="md"
                boxShadow="md"
                p={3}
                width="350px"
                maxHeight="400px"
                position={"absolute"}
                mt={10}
              >
                <Text color="#D2AC71" fontSize="lg" fontWeight="bold">
                  Most Popular
                </Text>
                {popularResults.length > 0 ? (
                  popularResults.map((result, index) => (
                    <HStack
                      key={index}
                      spacing={3}
                      align="center"
                      _hover={{ bg: "gray.600", cursor: "pointer" }}
                      onClick={() => handleResultClick(result)}
                      width="100%"
                    >
                      <Icon as={FaLocationArrow} color="white" />
                      <Box>
                        <Text color="white">{result}</Text>
                        <Text color="gray.400" fontSize="sm">
                          City in Egypt
                        </Text>
                      </Box>
                    </HStack>
                  ))
                ) : (
                  <Text color="white">No popular results</Text>
                )}

                <Divider borderColor="gray.500" my={2} />
                <HStack spacing={10} align="center" width="100%">
                  <Text color="grey">See all results for: {searchQuery}</Text>
                  <Link
                    href="#"
                    color="white"
                    _hover={{ color: "#D2AC71" }}
                    ml="auto"
                  >
                    <AiOutlineRight />
                  </Link>
                </HStack>
              </VStack>
            )}

            {searchQuery && ( // Show filtered results when searchQuery is not empty
              <VStack
                align="flex-start"
                spacing={2}
                bg="gray.700"
                borderRadius="md"
                boxShadow="md"
                p={3}
                width="350px"
                maxHeight="200px"
                overflowY="auto"
                position={"absolute"}
                mt={10}
              >
                <Text color="#D2AC71" fontSize="lg" fontWeight="bold">
                  Locations
                </Text>

                {filteredResults.length > 0 ? (
                  filteredResults.map((result, index) => (
                    <HStack
                      key={index}
                      spacing={3}
                      align="center"
                      _hover={{ bg: "gray.600", cursor: "pointer" }}
                      onClick={() => handleResultClick(result)}
                      width="100%"
                    >
                      <Icon as={FaLocationArrow} color="white" />
                      <Box>
                        <Text color="white">{result}</Text>
                        <Text color="gray.400" fontSize="sm">
                          City in Egypt
                        </Text>
                      </Box>
                    </HStack>
                  ))
                ) : searchQuery && !selectedResult ? (
                  <Text color="white">No results found</Text>
                ) : null}

                {filteredResults.length === 0 &&
                  searchQuery &&
                  !selectedResult && (
                    <Text
                      color="#D2AC71"
                      onClick={handleSearchSubmit}
                      _hover={{ color: "#D2AC71", cursor: "pointer" }}
                    >
                      Most Popular : {popularResults.join(", ")}
                    </Text>
                  )}

                <Divider borderColor="gray.500" my={2} />

                <HStack spacing={2} align="center" width="100%">
                  <Text color="grey">See all results for: {searchQuery}</Text>
                  <Link
                    href="#"
                    color="white"
                    _hover={{ color: "#D2AC71" }}
                    ml="auto"
                  >
                    <AiOutlineRight />
                  </Link>
                </HStack>
              </VStack>
            )}
          </Box>
        )}
      </Box>

      <Flex align="center" gap={20} wrap="wrap">
        <Button variant="link">
          <Text
            as="span"
            color="#D2AC71"
            fontWeight="600"
            fontFamily="Montserrat"
          >
            GOE
          </Text>
        </Button>
        <Button variant="link">
          <Text
            as="span"
            color="#D2AC71"
            fontWeight="bold"
            fontFamily="Montserrat"
          >
            Egy
          </Text>
          <Text as="span" color="white">
            Book
          </Text>
        </Button>
        <Button variant="link">
          <Text
            as="span"
            color="#D2AC71"
            fontWeight="bold"
            fontFamily="Montserrat"
          >
            Egy
          </Text>
          <Text as="span" color="white">
            Explore
          </Text>
        </Button>
        <Button variant="link">
          <Text
            as="span"
            color="#D2AC71"
            fontWeight="bold"
            fontFamily="Montserrat"
          >
            Egy
          </Text>
          <Text as="span" color="white">
            Tales
          </Text>
        </Button>
        <Button variant="link">
          <Text
            as="span"
            color="#D2AC71"
            fontWeight="bold"
            fontFamily="Montserrat"
          >
            Egy
          </Text>
          <Text as="span" color="white">
            Treasure
          </Text>
        </Button>
      </Flex>

      <Menu>
        <MenuButton
          as={Button}
          variant="link"
          color="white"
          fontFamily="Montserrat"
          leftIcon={<FaGlobe />}
          rightIcon={<span>{selectedLanguage}</span>}
        ></MenuButton>
        <MenuList bg="#333333" color="black" fontFamily="Montserrat">
          <MenuItem onClick={() => handleLanguageChange("EN")}>
            English
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("ES")}>
            Spanish
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("FR")}>French</MenuItem>
          <MenuItem onClick={() => handleLanguageChange("DE")}>German</MenuItem>
          <MenuItem onClick={() => handleLanguageChange("IT")}>
            Italian
          </MenuItem>
        </MenuList>
      </Menu>

      {isLoggedIn ? (
        <Flex align="center" gap={4}>
          <Divider
            orientation="vertical"
            height="25px"
            borderColor="gray.500"
          />

          <IconButton
            aria-label="Favorites"
            icon={<FaHeart />}
            colorScheme="whiteAlpha"
            variant="ghost"
            fontSize="20px"
          />

          <IconButton
            aria-label="Cart"
            icon={<FaShoppingCart />}
            colorScheme="whiteAlpha"
            variant="ghost"
            fontSize="20px"
          />

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Profile Menu"
              icon={<FaUserCircle />}
              colorScheme="whiteAlpha"
              variant="ghost"
              fontSize="22px"
            />
            <MenuList bg="#333333" color="white" fontFamily="Montserrat">
              <MenuItem
                _hover={{ bg: "gray.600" }}
                color="#D2AC71"
                fontWeight="bold"
              >
                My Profile
              </MenuItem>
              <MenuItem _hover={{ bg: "gray.600" }} color="white">
                Saved Bundles
              </MenuItem>
              <MenuItem _hover={{ bg: "gray.600" }} color="white">
                Invite Friends
              </MenuItem>
              <MenuItem _hover={{ bg: "gray.600" }} color="white">
                Settings
              </MenuItem>
              <MenuItem
                _hover={{ bg: "gray.600" }}
                color="red.400"
                onClick={() => setIsLoggedIn(false)}
              >
                Log Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Flex gap={4}>
          <Button
            bg="#D2AC71"
            color="white"
            px={6}
            py={2}
            borderRadius="full"
            mr={2}
          >
            Login
          </Button>
          <Button bg="#D2AC71" color="white" px={7} py={2} borderRadius="full">
            Sign Up
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
