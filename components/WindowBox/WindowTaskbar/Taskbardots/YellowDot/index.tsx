import { WindowContext } from "@/components/WindowBox"
import Link from "next/link"
import { useContext } from "react"
import styles from './styles.module.css'

export default function YellowDot(props: {
    onClick: () => void
}): JSX.Element {

    const { windowVisible } = useContext(WindowContext)

    return (
        <Link 
            tabIndex={windowVisible ? 0 : -1}
            href={""}
            className={`
                tabIndex-1
                ${styles.link}
            `}
            onClick={props.onClick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/minus_1.png" 
                alt="minimize"
                className={styles.img}
            />
        </Link>
    )
}