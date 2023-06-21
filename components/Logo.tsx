import { Image } from "@chakra-ui/image";
import { Hide, Show } from "@chakra-ui/react";

const Logo = () => (
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
      <Image
        tabIndex={0}
        marginTop={9}
        height={40}
        alt="Fundacja na czterech łapach Logo"
        src="/images/logo_grey.svg"
        sizes={"contain"}
      />
    </Show>
  </>
);

export default Logo;
