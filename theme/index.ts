import { extendTheme } from '@chakra-ui/react';

import { styles } from './styles';
import { config } from './config';
import * as typography from './typography';
import { Drawer } from './components/drawer';

const overrides = {
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
	styles,
	components: {
		Drawer,
	},
	...typography,
};

export default extendTheme(overrides);
