import { Box, useColorMode } from "@chakra-ui/react";

import { colors } from "../../theme/colors";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="button" onClick={toggleColorMode}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30ZM16.5 3.105C22.41 3.84 27 8.88 27 15C27 21.12 22.425 26.16 16.5 26.895V3.105Z"
          fill={colors[colorMode].textPrimary}
        />
      </svg>
    </Box>
  );
};

export default ColorModeToggle;
