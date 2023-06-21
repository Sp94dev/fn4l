import { Box } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { useRef } from "react";

import Header from "./Header";
import { ScrollContext } from "./scrollContext/scrollContext";

export const HeaderWrapper = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <ScrollContext.Provider value={{ scrollYProgress }}>
        <Header></Header>
      </ScrollContext.Provider>

      <Box
        ref={ref}
        height={{ base: 14, lg: "min-content" }}
        minHeight={{ lg: 48 }}
      ></Box>
    </>
  );
};
