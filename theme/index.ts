import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { Drawer } from "./components/drawer";
import { config } from "./config";
import { styles } from "./styles";
import * as typography from "./typography";

const overrides = {
  config,
  styles,
  colors,
  components: {
    Drawer,
  },
  ...typography,
};

export default extendTheme(overrides);
