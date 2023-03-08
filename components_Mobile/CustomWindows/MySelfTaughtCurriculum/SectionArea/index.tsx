import { ReactNode } from "react"

export default function SectionsArea(props: {
    children: ReactNode
}) {
    return (
        <div>
            {props.children}
        </div>
    )
}