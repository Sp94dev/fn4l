import { ComponentStyleConfig } from "@chakra-ui/react";

export const CustomButton: ComponentStyleConfig = {
  variants: {
    baseStyle: {
      fontSize: 4,
    },
    solid: {
      bg: "accent",
      px: 7,
      py: 3,
      _hover: {
        bg: "accent",
        transition: "var(--default-transition)",
        filter: "brightness(95%)",
      },
      _active: {
        bg: "accent",
        transition: "var(--default-transition)",
        filter: "brightness(105%)",
      },
      _disabled: {
        cursor: "not-allowed",
        bg: "accent",
        filter: "brightness(90%%)",
      },
    },
  },
};
