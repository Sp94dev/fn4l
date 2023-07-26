import { ComponentStyleConfig } from "@chakra-ui/react";

const hoverButton = {
  bg: "accent",
  transition: "var(--default-transition)",
  filter: "brightness(105%)",
};

export const CustomButton: ComponentStyleConfig = {
  variants: {
    solid: {
      bg: `accent`,
      color: "black",
      px: 7,
      py: 3,
      boxShadow: "md",
      _hover: {
        ...hoverButton,
        bg: "accent",
        _disabled: {
          ...hoverButton,
        },
      },
      _active: {
        bg: "accent",
        filter: "brightness(105%)",
        shadow: "sm",
      },
      _disabled: {
        cursor: "not-allowed",
        bg: "accent",
        filter: "brightness(90%%)",
      },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};
