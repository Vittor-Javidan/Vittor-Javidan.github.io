import styles from './styles.module.css';

export default function HoverMessage(props: {
    hoverMessage: string
}) {
    return (
        <p
            className={styles.HoverMessage}
        >
            {props.hoverMessage}
        </p>
    )
}