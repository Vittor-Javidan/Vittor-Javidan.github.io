import { WindowContext_Mobile } from "@/components_Mobile/WindowBox"
import TaskbarTitle from "@/components_Mobile/WindowBox/WindowTaskbar/TaskbarTitle"
import { useContext } from "react"
import styles from './styles.module.css'

export default function WindowTaskbar(): JSX.Element {

    const { 
        windowName,
    } = useContext(WindowContext_Mobile)

    return (
        <div className={styles.div}>
            <TaskbarTitle>
                {windowName}
            </TaskbarTitle>
        </div>
    )
}