import Logo from '../Logo';
import NavigationWrapper from '../navigation/NavigationWrapper';
import styles from './header.module.css';

export const Header = () => (
		<header className={styles.container}>
			<Logo />
			<NavigationWrapper />
		</header>
	);
