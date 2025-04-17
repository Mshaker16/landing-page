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
  Divider,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  FaGlobe,
  FaLocationArrow,
  FaRegHeart,
  FaUserCircle,
} from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popularResults] = useState([
    "Cairo",
    "Alexandria",
    "Hurghada",
    "Luxor",
    "Sharm El Sheikh",
  ]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const showFullNav = useBreakpointValue({ base: false, lg: true });

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredResults(
      query.length > 0
        ? popularResults.filter((result) =>
            result.toLowerCase().includes(query.toLowerCase())
          )
        : []
    );
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
      minH="80px"
      bg="black"
      align="center"
      justify="space-between"
      px={{ base: 3, sm: 4, md: 6, lg: 12 }}
      py={3}
      position="relative"
      flexWrap="wrap"
      gap={2}
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

      <Box flexShrink={0} order={{ base: 1, md: 1 }} mr={{ base: 2, md: 4 }}>
        <img
          src="/Group 210.png"
          alt="Company Logo"
          style={{
            width: isMobile ? "80px" : "100px",
            height: "auto",
            aspectRatio: "100/58",
          }}
        />
      </Box>

      <Box
        order={{ base: 3, md: 2 }}
        width={{ base: "100%", md: "auto" }}
        mt={{ base: isSearching ? 2 : 0, md: 0 }}
        position="relative"
        zIndex="1000"
        onClick={(e) => e.stopPropagation()}
      >
        <Flex position="relative" align="center">
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            color="#D2AC71"
            bg="#444444"
            borderRadius="full"
            fontSize={{ base: "20px", md: "24px" }}
            m={{ base: 1, md: 2 }}
            _hover={{ bg: "gray.700" }}
            onClick={() => setIsSearching(!isSearching)}
            position={isMobile ? "absolute" : "static"}
            left={isMobile ? "10px" : "auto"}
            top={isMobile ? "50%" : "auto"}
            transform={isMobile ? "translateY(-50%)" : "none"}
            zIndex="1001"
          />

          {isSearching && (
            <Box
              width={{ base: "100%", md: "350px" }}
              ml={{ base: 0, md: "50px" }}
              position="absolute"
            >
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInput}
                onFocus={() => setSearchQuery("")}
                bg="#444444"
                color="white"
                borderRadius="full"
                size="md"
                pl={isMobile ? "40px" : "20px"}
                width="100%"
                autoFocus
              />

              {(searchQuery === "" || filteredResults.length > 0) && (
                <Box
                  width="100%"
                  maxWidth="350px"
                  maxHeight={{ base: "60vh", md: "400px" }}
                  overflowY="auto"
                  position="absolute"
                  top="calc(100% + 5px)"
                  left={0}
                  bg="#444444"
                  borderRadius={{ base: "none", md: "3xl" }}
                  boxShadow="md"
                  p={3}
                  zIndex="1000"
                >
                  {searchQuery === "" ? (
                    <>
                      <Text color="#D2AC71" fontSize="lg" fontWeight="bold">
                        Most Popular
                      </Text>
                      {popularResults.map((result, index) => (
                        <HStack
                          key={index}
                          spacing={3}
                          align="center"
                          p={2}
                          _hover={{ bg: "gray.600", cursor: "pointer" }}
                          onClick={() => handleResultClick(result)}
                        >
                          <Icon as={FaLocationArrow} color="white" />
                          <Box>
                            <Text color="white">{result}</Text>
                            <Text color="gray.400" fontSize="sm">
                              City in Egypt
                            </Text>
                          </Box>
                        </HStack>
                      ))}
                    </>
                  ) : (
                    <>
                      <Text color="#D2AC71" fontSize="lg" fontWeight="bold">
                        Locations
                      </Text>
                      {filteredResults.map((result, index) => (
                        <HStack
                          key={index}
                          spacing={3}
                          align="center"
                          p={2}
                          _hover={{ bg: "gray.600", cursor: "pointer" }}
                          onClick={() => handleResultClick(result)}
                        >
                          <Icon as={FaLocationArrow} color="white" />
                          <Box>
                            <Text color="white">{result}</Text>
                            <Text color="gray.400" fontSize="sm">
                              City in Egypt
                            </Text>
                          </Box>
                        </HStack>
                      ))}
                    </>
                  )}
                </Box>
              )}
            </Box>
          )}
        </Flex>
      </Box>

      {showFullNav ? (
        <Flex
          align="center"
          gap={{ base: 2, md: 6, lg: 12 }}
          order={{ base: 2, md: 3 }}
          mx="auto"
          flexShrink={0}
        >
          {["GOE", "EgyBook", "EgyExplore", "EgyTales", "EgyTreasure"].map(
            (item) => (
              <Button
                key={item}
                variant="link"
                whiteSpace="nowrap"
                minW="max-content"
                px={{ base: 1, md: 2 }}
              >
                {item.startsWith("Egy") ? (
                  <>
                    <Text
                      as="span"
                      color="#D2AC71"
                      fontWeight="bold"
                      fontFamily="Montserrat"
                    >
                      {item.substring(0, 3)}
                    </Text>
                    <Text as="span" color="white">
                      {item.substring(3)}
                    </Text>
                  </>
                ) : (
                  <Text
                    as="span"
                    color="#D2AC71"
                    fontWeight="600"
                    fontFamily="Montserrat"
                  >
                    {item}
                  </Text>
                )}
              </Button>
            )
          )}
        </Flex>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            color="#D2AC71"
            order={{ base: 2, md: 3 }}
          >
            Menu
          </MenuButton>
          <MenuList bg="#444444" color="white">
            {["GOE", "EgyBook", "EgyExplore", "EgyTales", "EgyTreasure"].map(
              (item) => (
                <MenuItem key={item} bg="#444444" _hover={{ bg: "gray.600" }}>
                  {item.startsWith("Egy") ? (
                    <>
                      <Text
                        as="span"
                        color="#D2AC71"
                        fontWeight="bold"
                        fontFamily="Montserrat"
                      >
                        {item.substring(0, 3)}
                      </Text>
                      <Text as="span" color="white">
                        {item.substring(3)}
                      </Text>
                    </>
                  ) : (
                    <Text
                      as="span"
                      color="#D2AC71"
                      fontWeight="600"
                      fontFamily="Montserrat"
                    >
                      {item}
                    </Text>
                  )}
                </MenuItem>
              )
            )}
          </MenuList>
        </Menu>
      )}

      <Flex
        align="center"
        gap={{ base: 2, md: 4 }}
        order={{ base: 4, md: 4 }}
        ml={{ base: "auto", md: 0 }}
        flexShrink={0}
      >
        <Menu>
          <MenuButton
            as={Button}
            variant="link"
            color="white"
            fontFamily="Montserrat"
            leftIcon={<FaGlobe />}
            rightIcon={<ChevronDownIcon />}
            minW="max-content"
          >
            {!isMobile && <Text>{selectedLanguage}</Text>}
          </MenuButton>
          <MenuList
            bg="#444444"
            color="white"
            fontFamily="Montserrat"
            rounded="2xl"
          >
            {["EN", "ES", "FR", "DE", "IT"].map((lang) => (
              <MenuItem
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                bg="#444444"
                _hover={{ bg: "gray.600" }}
              >
                {lang}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        {/* User Section */}
        {isLoggedIn ? (
          <Flex align="center" gap={{ base: 1, md: 2 }}>
            {!isMobile && (
              <Divider
                orientation="vertical"
                height="25px"
                borderColor="gray.500"
              />
            )}
            <IconButton
              aria-label="Wishlist"
              icon={<FaRegHeart />}
              variant="ghost"
              color="white"
              fontSize={{ base: "18px", md: "20px" }}
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
            />
            <IconButton
              aria-label="Cart"
              icon={<LuShoppingCart />}
              variant="ghost"
              color="white"
              fontSize={{ base: "18px", md: "20px" }}
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
            />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Profile Menu"
                icon={<FaUserCircle />}
                variant="ghost"
                color="#F6EEE5"
                fontSize={{ base: "28px", md: "36px" }}
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
              />
              <MenuList
                bg="#F6EEE5"
                color="black"
                fontFamily="Montserrat"
                rounded="2xl"
                p={2}
                minW="160px"
              >
                <MenuItem _hover={{ bg: "white" }} color="#D2AC71" bg="#F6EEE5">
                  My Profile
                </MenuItem>
                <MenuItem _hover={{ bg: "white" }} bg="#F6EEE5">
                  Saved Bundles
                </MenuItem>
                <MenuItem _hover={{ bg: "white" }} bg="#F6EEE5">
                  Invite Friends
                </MenuItem>
                <MenuItem _hover={{ bg: "white" }} bg="#F6EEE5">
                  Settings
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "white" }}
                  color="red.400"
                  onClick={() => setIsLoggedIn(false)}
                  bg="#F6EEE5"
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          <Flex gap={{ base: 2, md: 4 }}>
            <Button
              bg="#D2AC71"
              color="white"
              px={{ base: 4, md: 6 }}
              py={2}
              borderRadius="full"
              _hover={{ bg: "#c19a60" }}
              onClick={() => setIsLoggedIn(true)}
              size={{ base: "sm", md: "md" }}
            >
              Login
            </Button>
            <Button
              bg="#D2AC71"
              color="white"
              px={{ base: 4, md: 7 }}
              py={2}
              borderRadius="full"
              _hover={{ bg: "#c19a60" }}
              size={{ base: "sm", md: "md" }}
              onClick={() => setIsLoggedIn(true)}
            >
              Sign Up
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
