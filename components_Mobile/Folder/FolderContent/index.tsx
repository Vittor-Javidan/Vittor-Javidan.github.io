import { ReactNode } from "react";
import styles from './styles.module.css';

export default function FolderContent(props: {
    children: ReactNode
}): JSX.Element {
    return (
        <div
            className={styles.ChildrenDiv}
        >
            {props.children}
        </div>
    )
}