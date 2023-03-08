import { ReactNode } from "react";
import styles from './styles.module.css';

export default function FoldersArea(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div
            className={styles.mainDiv}
        >
            {props.children}
        </div>
    )
}
