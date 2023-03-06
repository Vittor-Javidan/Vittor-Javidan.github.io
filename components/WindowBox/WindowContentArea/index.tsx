import { WindowContext } from "@/components/WindowBox"
import { ReactNode, useContext } from "react"
import styles from './styles.module.css'

export default function WindowContentArea(props: {
    children: ReactNode
}): JSX.Element {

    const { windowExpanded } = useContext(WindowContext)

    return (
        <div className={`
            ${styles.div}
            ${windowExpanded
                ? styles.div_WindowExpanded
                : styles.div_WindowNotExpanded
            }
        `}>
            {props.children}
        </div>
    )
}