import GreenDot from "./GreenDot/GreenDot"
import RedDot from "./RedDot/RedDot"
import YellowDot from "./YellowDot/YellowDot"

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