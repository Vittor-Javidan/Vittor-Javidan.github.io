import GreenDot from "@/components/Window/WindowTaskbar/Taskbardots/GreenDot/greenDot"
import RedDot from "@/components/Window/WindowTaskbar/Taskbardots/RedDot/redDot"
import YellowDot from "@/components/Window/WindowTaskbar/Taskbardots/YellowDot/yellowDot"

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