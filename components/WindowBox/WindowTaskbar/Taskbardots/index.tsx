import GreenDot from "@/components/WindowBox/WindowTaskbar/Taskbardots/GreenDot"
import RedDot from "@/components/WindowBox/WindowTaskbar/Taskbardots/RedDot"
import YellowDot from "@/components/WindowBox/WindowTaskbar/Taskbardots/YellowDot"
import styles from './styles.module.css'

export default function TaskbarDots(props: {
    redDotClick: () => void
    yellowDotClick: () => void
    greenDotClick: () => void
}): JSX.Element {

    return (
        <div className={styles.div}>
            <RedDot 
                onClick={props.redDotClick}
            />
            <YellowDot 
                onClick={props.yellowDotClick} 
            />
            <GreenDot 
                onclick={props.greenDotClick}
            />
        </div>
    )
}