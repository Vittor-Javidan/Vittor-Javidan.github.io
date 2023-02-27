import GreenDot from "@/components/WindowBox/WindowTaskbar/Taskbardots/GreenDot"
import RedDot from "@/components/WindowBox/WindowTaskbar/Taskbardots/RedDot"
import YellowDot from "@/components/WindowBox/WindowTaskbar/Taskbardots/YellowDot"

export default function TaskbarDots(props: {
    redDotClick: () => void
    yellowDotClick: () => void
    greenDotClick: () => void
}): JSX.Element {

    return (
        <div className={`
            mx-[16px] mt-[13px] mb-[11px]
            flex box-content gap-[7px]
        `}>
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