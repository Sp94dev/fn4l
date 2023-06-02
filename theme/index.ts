import { extendTheme } from "@chakra-ui/react";

import { Drawer } from "./components/drawer";
import { config } from "./config";
import { styles } from "./styles";
import * as typography from "./typography";

const overrides = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles,
  components: {
    Drawer,
  },
  ...typography,
};

export default extendTheme(overrides);
