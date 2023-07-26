import { ComponentStyleConfig } from "@chakra-ui/react";

export const CustomText: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => ({
    fontSize: "1.125rem",
    color: `${colorMode}.textPrimary`,
  }),
};
