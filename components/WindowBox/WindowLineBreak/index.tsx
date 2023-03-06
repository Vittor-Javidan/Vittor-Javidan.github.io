import { WindowContext } from "@/components/WindowBox"
import { useContext } from "react"
import styles from './styles.module.css'

export default function WindowLineBreak(): JSX.Element {

    const { windowExpanded } = useContext(WindowContext)

    return (
        <div className={`
            ${styles.div}
            ${!windowExpanded && styles.div_WindowNotExpanded}
        `}></div>
    )
}