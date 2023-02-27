import { WindowContext } from "@/components/WindowBox"
import { useContext } from "react"

export default function WindowLineBreak(): JSX.Element {

    const { windowExpanded } = useContext(WindowContext)

    return (
        <div className={`
            border-solid border-b-2 border-gray-700 rounded-[10px]

            ${!windowExpanded && `
            mx-[5px]
            `}
        `}></div>
    )
}