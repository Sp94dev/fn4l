import { Image } from "@chakra-ui/image";
import { Box, Hide, Show } from "@chakra-ui/react";
import { motion, useTransform } from "framer-motion";
import { useContext } from "react";

import { ScrollContext } from "./header/scrollContext/scrollContext";

const Logo = () => {
  const { scrollYProgress } = useContext(ScrollContext);
  const height = useTransform(scrollYProgress, [0, 1], ["10rem", "0rem"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const marginTop = useTransform(scrollYProgress, [0, 1], ["2.25rem", "0rem"]);

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
        <Box as={motion.div}>
          <Image
            tabIndex={0}
            height={9}
            alt="Fundacja na czterech łapach Logo"
            src="/images/paw-icon__black.svg"
            sizes={"contain"}
          />
        </Box>
        <Box as={motion.div} style={{ height, opacity, marginTop }}>
          <Image
            tabIndex={0}
            marginEnd={9}
            alt="Fundacja na czterech łapach Logo"
            src="/images/logo_grey.svg"
            sizes={"contain"}
          />
        </Box>
      </Show>
    </>
  );
};

export default Logo;
