import Image from 'next/image';

const Logo = () => {
	return (
		<Image
			priority
			width='250'
			height='115'
			alt='Fundacja na czterech łapach'
			src='/images/logo.svg'
			className='Logo'
			sizes='contain'
		/>
	);
};

export default Logo;
