import { WindowContext } from "@/components/Window/windowBox"
import Link from "next/link"
import { useContext } from "react"

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
                h-[14px] w-[14px] rounded-[50%]
                border-solid border-[1px] border-yellow-500
                bg-yellow-500
                cursor-pointer
                active:bg-yellow-600
        `}
            onClick={props.onClick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/minus_1.png" 
                alt="minimize"
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