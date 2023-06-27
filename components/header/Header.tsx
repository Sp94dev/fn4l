import { Box, Container, Flex } from "@chakra-ui/react";
import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";

import { colors } from "../../theme/colors";
import Logo from "../Logo";
import NavigationWrapper from "../navigation/NavigationWrapper";
import { ScrollContext } from "./scrollContext/scrollContext";

const setOpacity = (hex: string, alpha: number) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;

const Header = () => {
  const { scrollYProgress } = useContext(ScrollContext);
  const bgColor = useTransform(
    scrollYProgress,
    [0.7, 1],
    [setOpacity(colors.accent, 0), colors.accent]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    [colors.primaryText, colors.black]
  );

  return (
    <Box
      as={motion.div}
      position={"fixed"}
      display={"flex"}
      alignItems={"center"}
      width={"full"}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Container
        backgroundColor={{ base: colors.accent, lg: "transparent" }}
        maxWidth={"container.xl"}
      >
        <Flex
          as="header"
          justifyContent={"space-between"}
          alignItems={"center"}
          height={{ base: 14, lg: "min-content" }}
          gap={8}
          position={"relative"}
        >
          <Link href="/">
            <Logo />
          </Link>

          <NavigationWrapper />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
