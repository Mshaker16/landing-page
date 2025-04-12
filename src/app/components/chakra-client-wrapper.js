'use client';  // Mark this as a client component

import { ChakraProvider } from '@chakra-ui/react';

export default function ChakraClientWrapper({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}