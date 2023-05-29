import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './navigation-button.module.css';

interface Props {
	onClick?: () => void;
}

const NavigationButton: React.FC<Props> = ({ onClick }) => (
	<RxHamburgerMenu
		className={styles.button}
		onClick={onClick}
	/>
);

export default NavigationButton;
