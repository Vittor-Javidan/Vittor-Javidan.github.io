import { WindowContext_Browser } from "@/components_Browser/WindowBox"
import { useContext } from "react"
import styles from './styles.module.css'

export default function WindowLineBreak(): JSX.Element {

    const { windowExpanded } = useContext(WindowContext_Browser)

    return (
        <div className={`
            ${styles.div}
            ${!windowExpanded && styles.div_WindowNotExpanded}
        `}></div>
    )
}