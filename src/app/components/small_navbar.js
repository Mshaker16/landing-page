import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiGlobe,
  FiHeart,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

const SmallNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    onClose();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };


  return (
    <Box bg="#111111" w="100%">
      <Flex h="60px" align="center" justify="space-between" px={4}>
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
        <IconButton
          aria-label="Open menu"
          icon={<FiMenu />}
          variant="ghost"
          color="#EDB744"
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="#111111" color="white">
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottomWidth="0px">
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
          </DrawerHeader>

          <DrawerBody p={4}>
            {isLoggedIn ? (
              <VStack align="stretch" spacing={4}>
                <HStack>
                  <Icon as={FiHeart} color="#EDB744" />
                  <Text>Wishlist</Text>
                </HStack>
                <HStack>
                  <Icon as={FiShoppingCart} color="#EDB744" />
                  <Text>Cart</Text>
                </HStack>
                <HStack>
                  <Icon as={FiGlobe} color="#EDB744" />
                  <Text>EN</Text>
                </HStack>
                <Divider borderColor="gray.700" />
                <Text color="#EDB744" fontWeight="medium">
                  My profile
                </Text>
                <Text>Saved deals</Text>
                <Text>Invite friends</Text>
                <Text>Settings</Text>
                <Text color="red.500" onClick={handleLogout} cursor="pointer">
                  Log out
                </Text>
              </VStack>
            ) : (
              <VStack align="stretch" spacing={4}>
                <HStack>
                  <Icon as={FiGlobe} color="#EDB744" />
                  <Text>EN</Text>
                </HStack>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="white"
                  pl={0}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="white"
                  pl={0}
                  onClick={handleLogin}
                >
                  Sign up
                </Button>
              </VStack>
            )}

            <Flex
              justify="center"
              position="absolute"
              bottom="50px"
              w="calc(100% - 32px)"
            >
              <Box position="relative" top="5px" left={"auto"}>
                <img
                  src="/Group 210.png"
                  alt="Company Logo"
                  width="100px"
                  height="58px"
                />
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SmallNavbar;
