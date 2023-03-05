import styles from './styles.module.css';

export default function Bio(): JSX.Element {
    return (
        <div className={styles.Div}
        >
            <h1
                className={styles.H1}
            >
                About me
            </h1>
            <p
                className={styles.P}
            >
                Hello, my name is Vittor Javidan. The bird in the
                picture is Teca, my beloved and now deceased
                cockatiel. May she rest peacefully with God.
            </p>
            <p
                className={styles.P}
            >
                As a programmer, I am currently focused on
                technologies related to JavaScript. However, I have
                also gained experience in other programming
                languages such as Java, C++, C#, and Python. I am a
                self-taught individual and I am constantly striving
                to expand my knowledge and skills. My thirst for
                learning is never-ending and I will continue to
                study and explore new programming languages and
                technologies
            </p>
            <p
                className={styles.P}
            >
                Welcome to my website! It is a place where I share
                my projects with others. I invite you to take a look
                at the results of my work. If you are interested in
                how the projects function, you can find their
                repositories on my GitHub profile. I hope you enjoy
                your visit!
            </p>
        </div>
    )
}