import { RxHamburgerMenu } from 'react-icons/rx';
import { IconButton } from '@chakra-ui/react';

interface Props {
	onClick?: () => void;
	isOpen: boolean;
}

const NavigationButton: React.FC<Props> = ({
	onClick,
	isOpen,
}) => (
	<>
		<IconButton
			aria-label='Open the menu'
			aria-controls='Main menu'
			onClick={onClick}
			aria-expanded={isOpen}
			icon={
				<RxHamburgerMenu
					size={36}
					aria-hidden
					focusable={false}
				/>
			}
		></IconButton>
	</>
);

export default NavigationButton;
