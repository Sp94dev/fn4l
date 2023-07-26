"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

import ColorModeToggle from "../ColorModeToggle";
import Navigation from "./Navigation";
import NavigationButton from "./NavigationButton";

const NavigationWrapper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [desktopView] = useMediaQuery("(min-width: 992px)"); // Chakra lg breakpoint
  const { colorMode } = useColorMode();
  return (
    <Box as="nav" aria-label="main-menu" height="min-content">
      {desktopView ? (
        <Navigation type="desktop" />
      ) : (
        <Flex alignItems="center" columnGap={6} padding={8}>
          <ColorModeToggle />
          <NavigationButton onClick={onOpen} isOpen={isOpen} />
        </Flex>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton aria-label="Close menu" />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Navigation type="mobile" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box
        position="absolute"
        zIndex={-1}
        right="0%"
        height="px"
        width="100vw"
        bg={`${colorMode}.textPrimary`}
      />
    </Box>
  );
};

export default NavigationWrapper;
