import { ReactNode } from "react"

export default function TaskbarTitle(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div 
            className={`
                SCRIPT_draggable
                w-[100%] h-auto m-auto pl-[20px] 
                text-[18px] text-white
                cursor-pointer
            `}
        >
            {props.children}
        </div>
    )
}