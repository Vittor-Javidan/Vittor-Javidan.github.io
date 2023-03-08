import { ReactNode } from "react";
import styles from './styles.module.css';

export default function WebFilesArea(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div
            className={styles.Div}
        >
            {props.children}
        </div>
    )
}