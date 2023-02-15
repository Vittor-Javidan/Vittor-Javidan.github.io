import SidebarListItemsSetters from "@/Controllers/sidebarNavItemsSetters"
import WindowsSetters from "@/Controllers/windowSetters"
import Link from "next/link"
import { ReactNode, useState } from "react"

export default function Window(props: {
    taskbarTitle: string
    children: ReactNode
    startVisible: boolean
    CSS_PositionUtilityClass: string
}): JSX.Element {

    const [visible, setVisible] = useState(props.startVisible)
    const [minimized, setMinimized] = useState(false)

    WindowsSetters.registerSetter({
        name: props.taskbarTitle,
        visible: setVisible,
        minimized: setMinimized
    })

    return (
        <div className={`
            SCRIPT_page
            absolute ${props.CSS_PositionUtilityClass}
            w-[1000px] h-[70vh]
            bg-black/75
            border-solid border-2  border-gray-700 rounded-[10px]
            overflow-hidden

            ${minimized && `
                duration-[600ms]
            `}

            ${visible && `
                opacity-100
                scale-100
            `}

            ${!visible && `
                opacity-0
                scale-0
            `}
        `}>
            <Taskbar 
                taskbarTitle={props.taskbarTitle} 
                closeWindow={() => {

                    setVisible(false)
                    setMinimized(false)

                    SidebarListItemsSetters.activeSetters[props.taskbarTitle](false)
                }}
                minimizeWindow={() => {
                    
                    setVisible(false)
                    setMinimized(true)

                    SidebarListItemsSetters.activeSetters[props.taskbarTitle](false)
                }}
            />
            <ContentArea>
                {props.children}
            </ContentArea>
        </div>
    )
}

function Taskbar(props: {
    taskbarTitle: string
    closeWindow: () => void
    minimizeWindow: () => void
}): JSX.Element {
    return (<>
        <div className={`
            flex
        `}>
            <TaskbarDots 
                closeWindow={props.closeWindow} 
                minimizeWindow={props.minimizeWindow}
            />
            <TaskbarTitle 
                taskbarTitle={props.taskbarTitle} 
            />
        </div>
        <LineBreak />
    </>)
}

function TaskbarDots(props: {
    closeWindow: () => void
    minimizeWindow: () => void
}): JSX.Element {
    return (
        <div className={`
            mx-[16px] mt-[13px] mb-[11px]
            flex box-content gap-[7px]
        `}>
            <RedDot 
                onClick={props.closeWindow}
            />
            <YellowDot 
                onClick={props.minimizeWindow} 
            />
            <GreenDot />
        </div>
    )
}

function RedDot(props: {
    onClick: () => void
}): JSX.Element {
    return (
        <Link 
            tabIndex={0}
            href={""}
            className={`
                h-[14px] w-[14px] rounded-[50%]
                border-solid border-[1px] border-red-500
                bg-red-500
                cursor-pointer
                active:bg-red-600
            `}
            onClick={props.onClick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/x_1.png" 
                alt="close-window"
                className={`
                    CSS_dotHover
                    m-[2px] w-[8px] h-[8px]
                    box-content
                    opacity-0
                `}
            />
        </Link>
    )
}

function YellowDot(props: {
    onClick: () => void
}): JSX.Element {
    return (
        <Link 
            tabIndex={0}
            href={""}
            className={`
                h-[14px] w-[14px] rounded-[50%]
                border-solid border-[1px] border-yellow-500
                bg-yellow-500
                cursor-pointer
                active:bg-yellow-600
        `}
            onClick={props.onClick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/minus_1.png" 
                alt="minimize"
                className={`
                    CSS_dotHover
                    m-[2px] w-[8px] h-[8px]
                    box-content
                    opacity-0
                `}
            />
        </Link>
    )
}

function GreenDot(): JSX.Element {
    return (
        <Link
            tabIndex={0}
            href={""} 
            className={`
                h-[14px] w-[14px] rounded-[50%]
                border-solid border-[1px] border-green-500
                bg-green-500
                cursor-pointer
                active:bg-green-600
            `}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/maximize_1.png" 
                alt="maximize"
                className={`
                    CSS_dotHover
                    w-[14px] h-[12px]
                    box-content
                    opacity-0
                `} 
            />
        </Link>
    )
}

function TaskbarTitle(props: {
    taskbarTitle: string
}): JSX.Element {
    return (
        <div 
            className={`
                SCRIPT_draggable
                w-[100%] h-auto m-auto pl-[20px] 
                text-[18px] text-white
                cursor-pointer
            `}
        >
            {props.taskbarTitle}
        </div>
    )
}

function LineBreak(): JSX.Element {
    return (
        <div className={`
            mx-[5px]
            border-solid border-b-2 border-gray-700 rounded-[10px]
        `}>
        </div>
    )
}

function ContentArea(props: {
    children: ReactNode
}): JSX.Element {
    return (
        <div className={`
            CSS_scrollbar
            CSS_windowContentHeight
            w-auto m-[10px] p-[25px] 
            overflow-x-hidden
            overflow-y-scroll
        `}>
            {props.children}
        </div>
    )
}