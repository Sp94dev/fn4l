import Head from 'next/head';
import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

import { Header } from '../header/Header';

import layout from './layout.module.css';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({
	children,
	title = 'Fundacja terapeuta na czterech łapach',
}: Props) => (
	<Box className={layout.container} py={8} px={6}>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='initial-scale=1, width=device-width'
			/>
		</Head>
		<Header />
		<main className={layout.main}>{children}</main>
	</Box>
);

export default Layout;
