import { Box, useColorMode } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  onClick?: () => void;
  isOpen: boolean;
}

const NavigationButton: React.FC<Props> = ({ onClick, isOpen }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        as="button"
        aria-label="Open the menu"
        aria-controls="Main menu"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <RxHamburgerMenu
          size={32}
          aria-hidden
          focusable={false}
          color={`${colorMode}.textPrimary`}
        />
      </Box>
    </>
  );
};

export default NavigationButton;
