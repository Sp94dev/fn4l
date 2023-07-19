import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components/components";
import { config } from "./config";
import { styles } from "./styles";
import * as typography from "./typography";

const overrides = {
  config,
  styles,
  colors,
  components,
  ...typography,
};

export default extendTheme(overrides);
