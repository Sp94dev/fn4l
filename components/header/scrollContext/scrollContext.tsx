import { MotionValue } from "framer-motion";
import { createContext } from "react";

interface ScrollContextType {
  scrollYProgress: MotionValue<number> | undefined;
}

export const ScrollContext = createContext<ScrollContextType>({
  scrollYProgress: undefined,
});
