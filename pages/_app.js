'use client';
import { ChakraBaseProvider } from '@chakra-ui/react';

import '../styles/global.css';
import theme from '../theme';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<ChakraBaseProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraBaseProvider>
		</>
	);
};

export default App;
