import styles from '../../styles/Home.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a href="https://we2.tech" target="_blank" rel="noopener noreferrer">
				<p className={styles.logo}>
					Powered by - <b>we2.tech</b>
				</p>
			</a>
		</footer>
	);
};

export default Footer;
