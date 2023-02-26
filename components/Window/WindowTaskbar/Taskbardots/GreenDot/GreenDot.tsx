import { WindowContext } from "@/components/Window/Window"
import Link from "next/link"
import { useContext } from "react"

export default function GreenDot(props: {
    onclick: () => void
}): JSX.Element {

    const { windowVisible } = useContext(WindowContext)

    return (
        <Link
            tabIndex={windowVisible ? 0 : -1}
            href={""} 
            className={`
                tabIndex-1
                h-[14px] w-[14px] rounded-[50%]
                border-solid border-[1px] border-green-500
                bg-green-500
                cursor-pointer
                active:bg-green-600
            `}
            onClick={props.onclick}
        >
            <img 
                src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/maximize_1.png" 
                alt="maximize"
                className={`
                    CSS_dotHover
                    w-[14px] h-[12px]
                    box-content
                    opacity-0
                `} 
            />
        </Link>
    )
}