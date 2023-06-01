"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

import Navigation from "./Navigation";
import NavigationButton from "./NavigationButton";

const NavigationWrapper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [desktopView] = useMediaQuery("(min-width: 992px)"); // Chakra lg breakpoint

  return (
    <Box as="nav" aria-label="main-menu">
      {desktopView ? (
        <Navigation type="desktop" />
      ) : (
        <NavigationButton onClick={onOpen} isOpen={isOpen} />
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
    </Box>
  );
};

export default NavigationWrapper;
