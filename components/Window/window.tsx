import redirectFromWindowToNavItem from "@/accessibilityScripts/redirectFromWindowToNavItem"
import trapFocus from "@/accessibilityScripts/trapFocus"
import setWindowChildrenTabIndexNegative from "@/accessibilityScripts/windowChildrenTabIndexHandler"
import WindowsAPI from "@/ComponentsAPIs/windowAPI"
import { KeyboardEventHandler, ReactNode, useState } from "react"
import WindowContentArea from "./WindowContentArea/WindowContentArea"
import WindowLineBreak from "./WindowLineBreak/WindowLineBreak"
import WindowTaskbar from "./WindowTaskbar/WindowTaskbar"

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

    function hideWindow(mode: "close" | "minimize"): void {
        
        mode === "close"
        ? setMinimized(false)
        : setMinimized(true)

        setVisible(false)
        redirectFromWindowToNavItem(props.windowName)
        setWindowChildrenTabIndexNegative(`#${props.windowName.replaceAll(" ", "-")}-window`, -1)
    }

    return (
        <MainContainer
            CSS_PositionUtilityClass={props.CSS_PositionUtilityClass}
            windowName={props.windowName}
            startVisible={props.startVisible}
            visible={visible}
            expanded={expanded}
            minimized={minimized}
            trapFocus={(event) => {
                trapFocus(`#${props.windowName.replaceAll(" ", "-")}-window`, event)
            }}
        >
            <WindowTaskbar 
                taskbarTitle={props.windowName}
                windowVisible={visible}
                windowExpanded={expanded} 

                closeWindow={() => {
                    hideWindow("close")
                }}

                minimizeWindow={() => {
                    hideWindow("minimize")
                }}

                expandWindow={() => {
                    setExpanded(prev => !prev)            
                    WindowsAPI.forEach(ApiID => {
                        if(ApiID !== props.windowName) {
                            WindowsAPI.setExpanded(ApiID, false)
                        }
                    })
                }}
            />
            <WindowLineBreak
                windowExpanded={expanded}
            />
            <WindowContentArea
                windowExpanded={expanded}
            >
                {props.children}
            </WindowContentArea>
        </MainContainer>
    )
}

function MainContainer(props: {
    children: ReactNode
    windowName: string
    startVisible: boolean
    expanded: boolean
    minimized: boolean
    visible: boolean
    CSS_PositionUtilityClass: string
    trapFocus: KeyboardEventHandler<HTMLDivElement>
}) {

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

                ${!props.expanded && `
                w-[1000px]
                `}

                ${props.expanded && `
                CSS_EnpandedWidth
                ml-[88px] h-full
                `}

                ${!props.expanded && `
                absolute ${props.CSS_PositionUtilityClass}
                rounded-[10px]
                `}
                
                ${props.minimized && `
                duration-[600ms]
                `}

                ${props.visible && `
                opacity-100
                scale-100
                `}

                ${!props.visible && `
                opacity-0
                scale-0
                `}
            `}
            onKeyDown={props.trapFocus}
        >
            {props.children}
        </div>
    )
}