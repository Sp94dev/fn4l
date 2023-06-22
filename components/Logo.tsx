import { Image } from "@chakra-ui/image";
import { Box, Flex, Hide, Show } from "@chakra-ui/react";
import { motion, useTransform } from "framer-motion";
import { useContext } from "react";

import { ScrollContext } from "./header/scrollContext/scrollContext";

const Logo = () => {
  const { scrollYProgress } = useContext(ScrollContext);
  const height = useTransform(scrollYProgress, [0, 0.7], ["11rem", "0rem"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], ["100%", "0%"]);
  const opacityReverse = useTransform(
    scrollYProgress,
    [0.7, 1],
    ["0%", "100%"]
  );

  return (
    <>
      <Hide above="lg">
        <Image
          tabIndex={0}
          height={9}
          alt="Fundacja na czterech łapach Logo"
          src="/images/paw-icon__black.svg"
          sizes={"contain"}
        />
      </Hide>
      <Show above="lg">
        <Box tabIndex={0}>
          <Flex
            position={"absolute"}
            left={0}
            top={0}
            bottom={0}
            align={"center"}
          >
            <Box as={motion.div} style={{ opacity: opacityReverse }}>
              <Image
                height={9}
                alt="Fundacja na czterech łapach Logo"
                src="/images/paw-icon__black.svg"
                sizes={"contain"}
              />
            </Box>
          </Flex>

          <Box as={motion.div} marginTop={9} style={{ height, opacity }}>
            <Image
              alt="Fundacja na czterech łapach Logo"
              src="/images/logo_grey.svg"
              sizes={"contain"}
            />
          </Box>
        </Box>
      </Show>
    </>
  );
};

export default Logo;
