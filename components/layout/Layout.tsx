import Head from 'next/head';
import { ReactNode } from 'react';
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
	<div className={layout.container}>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='initial-scale=1, width=device-width'
			/>
		</Head>
		<Header />
		<div>{children}</div>
	</div>
);

export default Layout;
