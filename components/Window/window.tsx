import redirectFromWindowToNavItem from "@/accessibilityScripts/redirectFromWindowToNavItem"
import trapFocus from "@/accessibilityScripts/trapFocus"
import setWindowChildrenTabIndexNegative from "@/accessibilityScripts/windowChildrenTabIndexHandler"
import WindowsAPI from "@/ComponentsAPIs/windowAPI"
import Link from "next/link"
import { ReactNode, useState } from "react"

export default function Window(props: {
    windowName: string
    children: ReactNode
    startVisible: boolean
    CSS_PositionUtilityClass: string
}): JSX.Element {

    const [visible, setVisible] = useState(props.startVisible)
    const [minimized, setMinimized] = useState(false)
    const [expanded, setExpanded] = useState(false)

    WindowsAPI.registerComponent({
        ID: props.windowName,
        setVisible: setVisible,
        setMinimized: setMinimized,
        setExpanded: setExpanded
    })

    function closeWindow(): void { hideWindow("close") }
    function minimizeWindow(): void { hideWindow("minimize") }
    function hideWindow(mode: "close" | "minimize"): void {

        mode === "close"
        ? setMinimized(false)
        : setMinimized(true)
        setVisible(false)
        redirectFromWindowToNavItem(props.windowName)
        setWindowChildrenTabIndexNegative(`#${props.windowName.replaceAll(" ", "-")}-window`, -1)
    }

    function expandWindow(): void {

        setExpanded(prev => !prev)            
        WindowsAPI.forEach(ApiID => {
            if(ApiID !== props.windowName) {
                WindowsAPI.setExpanded(ApiID, false)
            }
        })
    }

    return (
        <div
            id={`#${props.windowName.replaceAll(" ", "-")}-window`}
            tabIndex={props.startVisible ? 0 : -1}
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
            `}
            onKeyDown={(event) => trapFocus(`#${props.windowName.replaceAll(" ", "-")}-window`, event)}
        >
            <Taskbar 
                taskbarTitle={props.windowName}
                windowVisible={visible}
                windowExpanded={expanded} 
                closeWindow={closeWindow}
                minimizeWindow={minimizeWindow}
                expandWindow={expandWindow}
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
    windowVisible: boolean
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
                windowVisible={props.windowVisible}
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
    windowVisible: boolean
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
                windowVisible={props.windowVisible}
                onClick={props.redDotClick}
            />
            <YellowDot 
                windowVisible={props.windowVisible}
                onClick={props.yellowDotClick} 
            />
            <GreenDot 
                windowVisible={props.windowVisible}
                onclick={props.greenDotClick}
            />
        </div>
    )
}

function RedDot(props: {
    windowVisible: boolean
    onClick: () => void
}): JSX.Element {

    return (
        <Link 
            tabIndex={props.windowVisible ? 0 : -1}
            href={""}
            className={`
                ACCESSIBILITY_firstWindowElement
                tabIndex-1
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
    windowVisible: boolean
    onClick: () => void
}): JSX.Element {

    return (
        <Link 
            tabIndex={props.windowVisible ? 0 : -1}
            href={""}
            className={`
                tabIndex-1
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
    windowVisible: boolean
    onclick: () => void
}): JSX.Element {

    return (
        <Link
            tabIndex={props.windowVisible ? 0 : -1}
            href={""} 
            className={`
                tabIndex-1
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