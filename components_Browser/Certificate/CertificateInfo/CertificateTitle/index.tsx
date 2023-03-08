import styles from './styles.module.css';

export default function CertificateTitle(props: {
    title: string
}): JSX.Element {
    return (
        <h1
            className={styles.CertificateTitle}
        >
            {props.title}
        </h1>
    )
}