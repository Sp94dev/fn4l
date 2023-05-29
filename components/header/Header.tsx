import Logo from '../Logo';
import Navigation from '../navigation/Navigation';
import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.container}>
			<Logo />
			<Navigation />
		</header>
	);
};
