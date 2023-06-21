import { ScrollContext } from "./scrollContext";

const ScrollContextProvider = ({ children }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
