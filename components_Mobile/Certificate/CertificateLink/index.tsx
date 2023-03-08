import styles from './styles.module.css';

export default function CertificateLink(props: {
    LinkLabelMessage: string
}) {
    return (
        <p
            className={styles.HoverMessage}
        >
            {props.LinkLabelMessage}
        </p>
    )
}