import SidebarAPI from "@/ComponentsAPIs/sidebarAPI"
import WindowsAPI from "@/ComponentsAPIs/windowAPI"
import Link from "next/link"
import { ReactNode, useState } from "react"

export default function Window(props: {
    taskbarTitle: string
    children: ReactNode
    startVisible: boolean
    CSS_PositionUtilityClass: string
    ID: string
}): JSX.Element {

    const [visible, setVisible] = useState(props.startVisible)
    const [minimized, setMinimized] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const navItemRefID = `#${props.taskbarTitle.replaceAll(" ", "-")}-navItem`

    WindowsAPI.registerComponent({
        ID: props.taskbarTitle,
        setVisible: setVisible,
        setMinimized: setMinimized,
        setExpanded: setExpanded
    })

    return (
        <div
            id={props.ID}
            tabIndex={0}
            className={`
        
            SCRIPT_page
            h-[70vh]
            bg-black/75
            border-solid border-2  border-gray-700
            overflow-hidden

            ${!expanded && `
                w-[1000px]
            `}

            ${expanded && `
                CSS_EnpandedWidth
                ml-[88px] h-full
            `}

            ${!expanded && `
                absolute ${props.CSS_PositionUtilityClass}
                rounded-[10px]
            `}
            
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
                windowExpanded={expanded} 
                closeWindow={() => {

                    setVisible(false)
                    setMinimized(false)

                    SidebarAPI.setActive(props.taskbarTitle, false)

                    //TabIndex Accecibility
                    const target = document.getElementById(navItemRefID)
                    if(target) {
                        target.tabIndex = -1
                        target.focus()
                        target.tabIndex = 0
                    }
                }}
                minimizeWindow={() => {
                    
                    setVisible(false)
                    setMinimized(true)

                    SidebarAPI.setActive(props.taskbarTitle, false)

                    //TabIndex Accecibility
                    const target = document.getElementById(navItemRefID)
                    if(target) {
                        target.tabIndex = -1
                        target.focus()
                        target.tabIndex = 0
                    }
                }}
                expandWindow={() => {

                    setExpanded(prev => !prev)
                    
                    WindowsAPI.forEach(ID => {
                        if(ID !== props.taskbarTitle) {
                            WindowsAPI.setExpanded(ID, false)
                        }
                    })
                }}
            />
            <ContentArea
                windowExpanded={expanded}
            >
                {props.children}
            </ContentArea>
        </div>
    )
}

function Taskbar(props: {
    taskbarTitle: string
    windowExpanded: boolean
    closeWindow: () => void
    minimizeWindow: () => void
    expandWindow: () => void
}): JSX.Element {
    return (<>
        <div className={`
        
            flex

            ${props.windowExpanded && `
                bg-black
            `}
        `}>
            <TaskbarDots 
                redDotClick={props.closeWindow} 
                yellowDotClick={props.minimizeWindow}
                greenDotClick={props.expandWindow}
            />
            <TaskbarTitle 
                taskbarTitle={props.taskbarTitle} 
            />
        </div>
        <LineBreak
            windowExpanded={props.windowExpanded}
        />
    </>)
}

function TaskbarDots(props: {
    redDotClick: () => void
    yellowDotClick: () => void
    greenDotClick: () => void
}): JSX.Element {
    return (
        <div className={`
            mx-[16px] mt-[13px] mb-[11px]
            flex box-content gap-[7px]
        `}>
            <RedDot 
                onClick={props.redDotClick}
            />
            <YellowDot 
                onClick={props.yellowDotClick} 
            />
            <GreenDot 
                onclick={props.greenDotClick}
            />
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

function GreenDot(props: {
    onclick: () => void
}): JSX.Element {
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
            onClick={props.onclick}
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

function LineBreak(props: {
    windowExpanded: boolean
}): JSX.Element {
    return (
        <div className={`
            border-solid border-b-2 border-gray-700 rounded-[10px]

            ${!props.windowExpanded && `
                mx-[5px]
            `}
        `}>
        </div>
    )
}

function ContentArea(props: {
    children: ReactNode
    windowExpanded: boolean
}): JSX.Element {
    return (
        <div className={`
            CSS_scrollbar
            CSS_windowContentHeight
            w-auto px-[25px] pt-[25px] pb-[10px] 
            overflow-x-hidden
            overflow-y-scroll

            ${!props.windowExpanded && `
                m-[10px]
                text-[1.6rem]
            `}

            ${props.windowExpanded && `
                my-[10px] mx-[150px]
                text-[2.6rem]
            `}
        `}>
            {props.children}
        </div>
    )
}