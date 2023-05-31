import Image from 'next/image';
import styles from './logo.module.css';

const Logo = () => {
	return (
		<Image
			tabIndex={0}
			priority
			width='250'
			height='115'
			alt='Fundacja na czterech łapach'
			src='/images/logo.svg'
			className={styles.logo}
			sizes='contain'
		/>
	);
};

export default Logo;
