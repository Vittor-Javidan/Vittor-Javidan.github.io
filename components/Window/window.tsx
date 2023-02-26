import redirectFromWindowToNavItem from "@/accessibilityScripts/redirectFromWindowToNavItem"
import trapFocus from "@/accessibilityScripts/trapFocus"
import setWindowChildrenTabIndexNegative from "@/accessibilityScripts/windowChildrenTabIndexHandler"
import WindowsAPI from "@/ComponentsAPIs/windowAPI"
import { createContext, KeyboardEventHandler, ReactNode, useContext, useState } from "react"
import WindowContentArea from "./WindowContentArea/WindowContentArea"
import WindowLineBreak from "./WindowLineBreak/WindowLineBreak"
import WindowTaskbar from "./WindowTaskbar/WindowTaskbar"

export const WindowContext = createContext({
    windowPositionCSS: "",
    windowName: "",
    windowStartVisible: false,
    windowVisible: false,
    windowMinimized: false,
    windowExpanded: false
})

export default function Window(props: {
    windowName: string
    children: ReactNode
    startVisible: boolean
    CSS_PositionUtilityClass: string
}): JSX.Element {

    const [visible, setVisible] = useState(props.startVisible)
    const [minimized, setMinimized] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const windowProps = {
        windowPositionCSS: props.CSS_PositionUtilityClass,
        windowName: props.windowName,
        windowStartVisible: props.startVisible,
        windowVisible: visible,
        windowMinimized: minimized,
        windowExpanded: expanded
    }

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
        <WindowContext.Provider value={windowProps}>
            <MainContainer
                trapFocus={(event) => {
                    trapFocus(`#${props.windowName.replaceAll(" ", "-")}-window`, event)
                }}
            >
                <WindowTaskbar
                
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
                <WindowLineBreak />
                <WindowContentArea>
                    {props.children}
                </WindowContentArea>
            </MainContainer>
        </WindowContext.Provider>
    )
}

function MainContainer(props: {
    children: ReactNode
    trapFocus: KeyboardEventHandler<HTMLDivElement>
}) {

    const {
        windowPositionCSS,
        windowName,
        windowStartVisible,
        windowVisible,
        windowMinimized,
        windowExpanded,
    } = useContext(WindowContext)

    return (
        <div
            id={`#${windowName.replaceAll(" ", "-")}-window`}
            tabIndex={windowStartVisible ? 0 : -1}
            className={`
                SCRIPT_page
                bg-black/75
                border-solid border-2  border-gray-700
                overflow-hidden

                ${!windowExpanded && `
                w-[1000px]
                h-[70%]
                `}

                ${windowExpanded && `
                CSS_EnpandedWidth
                ml-[88px] h-full
                `}

                ${!windowExpanded && `
                absolute ${windowPositionCSS}
                rounded-[10px]
                `}
                
                ${windowMinimized && `
                duration-[600ms]
                `}

                ${windowVisible && `
                opacity-100
                scale-100
                `}

                ${!windowVisible && `
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