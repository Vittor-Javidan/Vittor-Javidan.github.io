import Link from "next/link";
import styles from './styles.module.css';

export default function SocialMedia(): JSX.Element {
    return (
        <div
            className={styles.Div}
        >
            <ul
                className={styles.Ul}
            >
                <li
                    className={styles.Li}
                >
                    <Link
                        tabIndex={-1}
                        href="https://github.com/Vittor-Javidan"
                        target="_blank"
                    >
                        <i className="bx bxl-github"></i>
                    </Link>
                </li>
                <li
                    className={styles.Li}
                >
                    <Link
                        tabIndex={-1}
                        href="https://www.linkedin.com/in/vittor-javidan/"
                        target="_blank"
                    >
                        <i className="bx bxl-linkedin-square"></i>
                    </Link>
                </li>
                <li
                    className={styles.Li}
                >
                    <Link
                        tabIndex={-1}
                        href="https://www.instagram.com/vittorjavidan/"
                        target="_blank"
                    >
                        <i className="bx bxl-instagram-alt"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}