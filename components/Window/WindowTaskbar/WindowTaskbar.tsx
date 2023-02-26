import { useContext } from "react"
import { WindowContext } from "../Window"
import TaskbarDots from "./Taskbardots/TaskbarDots"
import TaskbarTitle from "./TaskbarTitle/TaskbarTitle"

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
            flex

            ${windowExpanded && `
            bg-black
            `}
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