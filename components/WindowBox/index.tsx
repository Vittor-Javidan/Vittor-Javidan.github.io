import redirectFromWindowToNavItem from "@/accessibilityScripts/redirectFromWindowToNavItem"
import trapFocus from "@/accessibilityScripts/trapFocus"
import setWindowChildrenTabIndexNegative from "@/accessibilityScripts/windowChildrenTabIndexHandler"
import WindowsAPI from "@/components/WindowBox/API"
import WindowContentArea from "@/components/WindowBox/WindowContentArea"
import WindowLineBreak from "@/components/WindowBox/WindowLineBreak"
import WindowTaskbar from "@/components/WindowBox/WindowTaskbar"
import { createContext, ReactNode, useState } from "react"
import styles from './styles.module.css'

export const WindowContext = createContext({
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
            <div
                id={`#${props.windowName.replaceAll(" ", "-")}-window`}
                tabIndex={props.startVisible ? 0 : -1}
                className={`
                    SCRIPT_page
                    transform-gpu
                    ${styles.div}
                    ${minimized && styles.div_Minimized}
                    ${expanded
                        ? styles.div_Expanded
                        : `${styles.div_NotExpanded} ${props.CSS_PositionUtilityClass}`
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
            </div>
        </WindowContext.Provider>
    )
}
