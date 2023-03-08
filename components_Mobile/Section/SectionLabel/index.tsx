import { ReactNode } from "react"
import styles from './styles.module.css'

export default function SectionLabel(props: {
    open: boolean
    children: ReactNode
}): JSX.Element {
    return (
        <div
            className={`
                ${styles.div}
                ${props.open && styles.openSection}
            `}
        >
            {props.children}
        </div>
    )
}
