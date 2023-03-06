import { WindowContext } from "@/components/WindowBox"
import TaskbarDots from "@/components/WindowBox/WindowTaskbar/Taskbardots"
import TaskbarTitle from "@/components/WindowBox/WindowTaskbar/TaskbarTitle"
import { useContext } from "react"
import styles from './styles.module.css'

export default function WindowTaskbar(props: {
    closeWindow: () => void
    minimizeWindow: () => void
    expandWindow: () => void
}): JSX.Element {

    const { 
        windowName,
        windowExpanded, 
    } = useContext(WindowContext)

    return (
        <div className={`
            ${styles.div}
            ${windowExpanded && styles.div_WindowExpanded}
        `}>
            <TaskbarDots 
                redDotClick={props.closeWindow} 
                yellowDotClick={props.minimizeWindow}
                greenDotClick={props.expandWindow}
            />
            <TaskbarTitle>
                {windowName}
            </TaskbarTitle>
        </div>
    )
}