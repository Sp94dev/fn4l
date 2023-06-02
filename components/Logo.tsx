import { Image } from "@chakra-ui/image";


const Logo = () => (
  <Image
    tabIndex={0}
    height={{ base: "8rem", lg: "80px" }}
    alt="Fundacja na czterech łapach"
    src="/images/logo.svg"
    sizes={"contain"}
  />
);

export default Logo;
