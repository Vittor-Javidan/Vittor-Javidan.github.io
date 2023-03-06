import { ReactNode } from "react"

export default function SectionContent(props: {
    children: ReactNode
}): JSX.Element {
    return (
        <div>
            {props.children}
        </div>
    )
}