import { ListItem, createIcon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/utils.module.css';

interface Props {
	link: string;
	text: string;
	mobile?: boolean;
}

const PawIcon = createIcon({
	displayName: 'PawIcon',
	viewBox: '0 0 24 24',
	path: (
		<g clipPath='url(#clip0_31_510)' fill='currentColor'>
			<path d='M7.24556 8.60721C9.73304 8.60721 11.7495 6.68042 11.7495 4.30361C11.7495 1.92679 9.73304 0 7.24556 0C4.75808 0 2.74158 1.92679 2.74158 4.30361C2.74158 6.68042 4.75808 8.60721 7.24556 8.60721Z' />
			<path d='M19.4959 8.60721C21.9834 8.60721 23.9999 6.68042 23.9999 4.30361C23.9999 1.92679 21.9834 0 19.4959 0C17.0084 0 14.9919 1.92679 14.9919 4.30361C14.9919 6.68042 17.0084 8.60721 19.4959 8.60721Z' />
			<path d='M19.4959 21.1036C21.9834 21.1036 23.9999 19.1768 23.9999 16.8C23.9999 14.4232 21.9834 12.4964 19.4959 12.4964C17.0084 12.4964 14.9919 14.4232 14.9919 16.8C14.9919 19.1768 17.0084 21.1036 19.4959 21.1036Z' />
			<path d='M4.67237 11.2121C-1.55306 11.2121 -1.55306 18.9768 4.67237 18.9768H4.68147C4.69514 24.9108 12.8151 24.9062 12.8151 18.9632V11.1985L4.67692 11.2121H4.67237Z' />
		</g>
	),
});

const NavigationItem = ({ link, text, mobile }: Props) => {
	const router = useRouter();

	return (
		<ListItem
			fontWeight={'normal'}
			mb={2}
			sx={{
				'.active': {
					borderBottom: '2px solid',
					borderColor: mobile ? '#40ff00' : '#E4FF00', // tried to find different color for white background - to discuss
					fontWeight: 'bold',
				},
			}}
			_hover={{
				fontWeight: 'bold',
			}}
		>
			<Link
				href={link}
				aria-current={link === router.pathname}
				className={`${
					link === router.pathname && 'active'
				} ${styles.pb}`}
			>
				<PawIcon /> {text}
			</Link>
		</ListItem>
	);
};

export default NavigationItem;
