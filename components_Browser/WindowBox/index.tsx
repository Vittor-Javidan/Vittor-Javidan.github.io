import redirectFromWindowToNavItem from "@/accessibilityScripts/redirectFromWindowToNavItem"
import trapFocus from "@/accessibilityScripts/trapFocus"
import setWindowChildrenTabIndexNegative from "@/accessibilityScripts/windowChildrenTabIndexHandler"
import WindowsAPI_Browser from "@/components_Browser/WindowBox/API"
import WindowContentArea from "@/components_Browser/WindowBox/WindowContentArea"
import WindowLineBreak from "@/components_Browser/WindowBox/WindowLineBreak"
import WindowTaskbar from "@/components_Browser/WindowBox/WindowTaskbar"
import { createContext, ReactNode, useState } from "react"
import styles from './styles.module.css'

export const WindowContext_Browser = createContext({
    windowName: "",
    windowVisible: false,
    windowExpanded: false
})

export default function WindowBox(props: {
    windowName: string
    children: ReactNode
    startVisible: boolean
    startExpanded: boolean
    CSS_PositionUtilityClass: string
}): JSX.Element {

    const [visible, setVisible] = useState(props.startVisible)
    const [minimized, setMinimized] = useState(false)
    const [expanded, setExpanded] = useState(props.startExpanded)

    const windowProps = {
        windowName: props.windowName,
        windowVisible: visible,
        windowExpanded: expanded
    }

    WindowsAPI_Browser.registerComponent({
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
        <WindowContext_Browser.Provider value={windowProps}>
            <div
                id={`#${props.windowName.replaceAll(" ", "-")}-window`}
                tabIndex={props.startVisible ? 0 : -1}
                className={`
                    SCRIPT_page
                    transform-gpu
                    ${styles.div}
                    ${minimized && styles.div_Minimized}
                    ${expanded
                        ? `
                            fullscreen 
                            ${styles.div_Expanded}
                        `
                        : `
                            ${styles.div_NotExpanded} 
                            ${props.CSS_PositionUtilityClass}
                        `
                    }
                    ${visible 
                        ? styles.div_Visible
                        : styles.div_Invisible
                    }
                `}
                onKeyDown={(event) => {
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
                        WindowsAPI_Browser.forEach(windowName => {
                            if(windowName !== props.windowName) {
                                WindowsAPI_Browser.setExpanded(windowName, false)
                            }
                        })
                        setExpanded(prev => !prev)
                    }}
                />
                <WindowLineBreak />
                <WindowContentArea>
                    {props.children}
                </WindowContentArea>
            </div>
        </WindowContext_Browser.Provider>
    )
}
