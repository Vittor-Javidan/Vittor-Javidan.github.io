import WindowsAPI_Mobile from "@/components_Mobile/WindowBox/API"
import WindowContentArea from "@/components_Mobile/WindowBox/WindowContentArea"
import WindowLineBreak from "@/components_Mobile/WindowBox/WindowLineBreak"
import WindowTaskbar from "@/components_Mobile/WindowBox/WindowTaskbar"
import { createContext, ReactNode, useState } from "react"
import styles from './styles.module.css'

export const WindowContext_Mobile = createContext({
    windowName: "",
    windowVisible: false,
})

export default function WindowBox(props: {
    windowName: string
    children: ReactNode
    startVisible: boolean
}): JSX.Element {

    const [visible, setVisible] = useState(props.startVisible)
    const [minimized, setMinimized] = useState(false)

    const windowProps = {
        windowName: props.windowName,
        windowVisible: visible,
    }

    WindowsAPI_Mobile.registerComponent({
        ID: props.windowName,
        setVisible: setVisible,
        setMinimized: setMinimized,
    })

    return (
        <WindowContext_Mobile.Provider value={windowProps}>
            <div
                tabIndex={props.startVisible ? 0 : -1}
                className={`
                    transform-gpu
                    ${styles.div}
                    ${minimized && styles.div_Minimized}
                    ${visible 
                        ? styles.div_Visible
                        : styles.div_Invisible
                    }
                `}
            >
                <WindowTaskbar />
                <WindowLineBreak />
                <WindowContentArea>
                    {props.children}
                </WindowContentArea>
            </div>
        </WindowContext_Mobile.Provider>
    )
}
