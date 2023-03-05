import styles from './styles.module.css';

export default function FolderIcon(props: {
    openFolder: boolean,
}): JSX.Element {
    return (
        <img 
            className={`
                ${styles.Img}
                ${props.openFolder 
                    ? styles.Img_OpenFolder 
                    : styles.Img_ClosedFolder
                }
            `}
            src={props.openFolder ? "/static/svg/folderOpen.svg" : "/static/svg/folderClosed.svg"}
            alt="folderIcon" 
        />
    )
}