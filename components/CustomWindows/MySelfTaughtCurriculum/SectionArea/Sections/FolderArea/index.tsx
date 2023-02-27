import { ReactNode } from "react"

export default function FoldersArea(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div
            className={`
                mt-[10px] mb-[30px]
                flex flex-wrap justify-start gap-[20px]
            `}
        >
            {props.children}
        </div>
    )
}
