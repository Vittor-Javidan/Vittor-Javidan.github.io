import { WindowContext } from "@/components/WindowBox"
import Link from "next/link"
import { useContext } from "react"
import styles from './styles.module.css'

export default function RedDot(props: {
    onClick: () => void
}): JSX.Element {

    const { windowVisible } = useContext(WindowContext)

    return (
        <Link 
            tabIndex={windowVisible ? 0 : -1}
            href={""}
            className={`
                ACCESSIBILITY_firstWindowElement
                tabIndex-1
                ${styles.link}
            `}
            onClick={props.onClick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/x_1.png" 
                alt="close-window"
                className={styles.img}
            />
        </Link>
    )
}