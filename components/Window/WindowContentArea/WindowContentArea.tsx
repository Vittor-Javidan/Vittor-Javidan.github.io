import { WindowContext } from "@/components/Window/windowBox"
import { ReactNode, useContext } from "react"

export default function WindowContentArea(props: {
    children: ReactNode
}): JSX.Element {

    const { windowExpanded } = useContext(WindowContext)

    return (
        <div className={`
            CSS_scrollbar
            CSS_windowContentHeight
            w-auto px-[25px] pt-[25px] pb-[10px] 
            overflow-x-hidden
            overflow-y-scroll

            ${!windowExpanded && `
                m-[10px]
                text-[1.6rem]
            `}

            ${windowExpanded && `
                my-[10px] mx-[150px]
                text-[2.6rem]
            `}
        `}>
            {props.children}
        </div>
    )
}