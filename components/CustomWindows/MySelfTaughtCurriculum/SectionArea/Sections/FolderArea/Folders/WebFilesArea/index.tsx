import { ReactNode } from "react"

export default function WebFilesArea(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div
            className={`
                flex flex-col my-[40px] gap-[20px]
            `}
        >
            {props.children}
        </div>
    )
}