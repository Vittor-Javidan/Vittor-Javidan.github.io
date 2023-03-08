import { ReactNode } from "react";
import styles from './styles.module.css';

export default function MobileDisplay(props: {
    children: ReactNode
}) {
    return (
        <div
            className={styles.div}
        >
            {props.children}
        </div>
    )
}