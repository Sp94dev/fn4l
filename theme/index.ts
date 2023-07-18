import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { CustomDrawer } from "./components/drawer";
import { config } from "./config";
import { styles } from "./styles";
import * as typography from "./typography";
import { components } from "./components/components";

const overrides = {
  config,
  styles,
  colors,
  components,
  ...typography,
};

export default extendTheme(overrides);
