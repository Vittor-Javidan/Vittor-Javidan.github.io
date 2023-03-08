import { ReactNode } from "react";
import styles from './styles.module.css';

export default function BrowserDisplay(props: {
    children: ReactNode
}) {
    return (
        <div
            id={"Browser-Display"}
            className={styles.div}
        >
            {props.children}
        </div>
    )
}