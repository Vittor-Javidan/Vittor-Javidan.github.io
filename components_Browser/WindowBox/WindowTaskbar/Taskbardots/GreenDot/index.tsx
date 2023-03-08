import { WindowContext_Browser } from "@/components_Browser/WindowBox"
import Link from "next/link"
import { useContext } from "react"
import styles from './styles.module.css'

export default function GreenDot(props: {
    onclick: () => void
}): JSX.Element {

    const { windowVisible } = useContext(WindowContext_Browser)

    return (
        <Link
            tabIndex={windowVisible ? 0 : -1}
            href={""} 
            className={`
                tabIndex-1
                greenDot
                ${styles.link}
            `}
            onClick={props.onclick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/maximize_1.png" 
                alt="maximize"
                className={styles.img} 
            />
        </Link>
    )
}