import styles from './styles.module.css';

export default function EmissionData(props: {
    date: string
}): JSX.Element {
    return (
        <div
            className={styles.EmissionData}
        >
            {props.date}
        </div>
    )
}
