import styles from './styles.module.css';

export default function FolderName(props: {
    folderName: string
}): JSX.Element {
    return (
        <span
            className={styles.Span}
        >
            {props.folderName}
        </span>
    )
}