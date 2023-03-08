import { ReactNode } from "react"
import styles from './styles.module.css'

export default function TaskbarTitle(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div 
            className={`
                ${styles.div}
            `}
        >
            {props.children}
        </div>
    )
}