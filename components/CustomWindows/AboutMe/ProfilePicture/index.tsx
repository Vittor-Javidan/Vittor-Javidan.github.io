import styles from './styles.module.css';

export default function ProfilePicture(): JSX.Element {
    return (
        <img 
            src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/profilePic.jpg" 
            alt="Profile picture" 
            className={styles.Img}
        />
    )
}
