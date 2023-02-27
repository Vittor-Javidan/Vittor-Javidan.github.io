import { ReactNode } from "react"

export default function SectionsArea(props: {
    children: ReactNode
}) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}