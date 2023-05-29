import Image from 'next/image';
import Layout from '../components/layout/Layout';
import styles from './index.module.css';

const IndexPage = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<Image
					className={styles.image}
					priority
					width='250'
					height='315'
					alt='Wesoły pies'
					src='/images/standing-dog-1.png'
					sizes='contain'
				/>
				<div className={styles.title__wrapper}>
					<h2 className={styles.title}>Kim jesteśmy?</h2>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. Etiam non augue quis enim lobortis ultrices.
				Aenean tempor mollis massa eget fringilla. Duis
				cursus elit eget pretium dignissim.{' '}
			</p>
		</Layout>
	);
};

export default IndexPage;
