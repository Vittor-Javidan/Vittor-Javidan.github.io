import TaskbarDots from "./Taskbardots/TaskbarDots"
import TaskbarTitle from "./TaskbarTitle/TaskbarTitle"

export default function WindowTaskbar(props: {
    taskbarTitle: string
    windowVisible: boolean
    windowExpanded: boolean
    closeWindow: () => void
    minimizeWindow: () => void
    expandWindow: () => void
}): JSX.Element {
    return (
        <div className={`
            flex

            ${props.windowExpanded && `
            bg-black
            `}
        `}>
            <TaskbarDots 
                windowVisible={props.windowVisible}
                redDotClick={props.closeWindow} 
                yellowDotClick={props.minimizeWindow}
                greenDotClick={props.expandWindow}
            />
            <TaskbarTitle 
                taskbarTitle={props.taskbarTitle}
            />
        </div>
    )
}