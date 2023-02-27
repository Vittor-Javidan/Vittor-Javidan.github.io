import { WindowContext } from "@/components/Window/windowBox"
import TaskbarDots from "@/components/Window/WindowTaskbar/Taskbardots/taskbarDots"
import TaskbarTitle from "@/components/Window/WindowTaskbar/TaskbarTitle/taskbarTitle"
import { useContext } from "react"

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