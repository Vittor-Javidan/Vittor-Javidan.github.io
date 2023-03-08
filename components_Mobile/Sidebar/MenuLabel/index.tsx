import styles from './styles.module.css'

export default function MenuLabel(): JSX.Element {

	return (
		<div className={styles.div}>
			<img
				className={styles.img} 
				src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/Lone_Wisp_Logo_1024.png" 
				alt="logo image" 
			/>
		</div>
	)
}