export default function WindowLineBreak(props: {
    windowExpanded: boolean
}): JSX.Element {
    return (
        <div className={`
            border-solid border-b-2 border-gray-700 rounded-[10px]

            ${!props.windowExpanded && `
            mx-[5px]
            `}
        `}>
        </div>
    )
}