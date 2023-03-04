import { ReactNode } from "react";
import styles from './index.module.css';

export default function Background(props: {children: ReactNode}): JSX.Element {
    return <div className={`
        relative z-0
        h-full w-full
        ${styles.background}
    `}>
        {props.children}
    </div>
}