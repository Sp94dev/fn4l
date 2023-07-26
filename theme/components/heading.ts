import { ComponentStyleConfig } from "@chakra-ui/react";

export const CustomHeadingStyle: ComponentStyleConfig = {
  sizes: {
    md: {
      fontSize: "1.625rem",
    },
    xl: {
      fontSize: "2.25rem",
      borderBottom: "1px solid",
      borderColor: "accent",
      width: "fit-content",
      pr: 1,
      pb: 1,
    },
  },
  baseStyle: ({ colorMode }) => ({
    fontFamily: "Open Sans Condensed",
    letterSpacing: "4px",
    fontWeight: 700,
    color: `${colorMode}.textPrimary`,
  }),
};
