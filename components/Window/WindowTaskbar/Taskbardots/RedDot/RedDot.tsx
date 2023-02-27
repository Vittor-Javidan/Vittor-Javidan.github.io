import { WindowContext } from "@/components/Window/windowBox"
import Link from "next/link"
import { useContext } from "react"

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
                h-[14px] w-[14px] rounded-[50%]
                border-solid border-[1px] border-red-500
                bg-red-500
                cursor-pointer
                active:bg-red-600
            `}
            onClick={props.onClick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/x_1.png" 
                alt="close-window"
                className={`
                    CSS_dotHover
                    m-[2px] w-[8px] h-[8px]
                    box-content
                    opacity-0
                `}
            />
        </Link>
    )
}