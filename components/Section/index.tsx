import { ReactNode, useState } from "react"

/**
 * @returns `<li></li>` JSX Element 
 */
export default function Section(props: {
    sectionName: string
    extraCSS_Open: string
    extraCSS_Closed: string
    children: ReactNode
}): JSX.Element {

    const [open, setOpen] = useState(false)

    return (
        <li
            className={`
                text-white font-bold
            `}
        >
            <div
                className={`
                    flex items-baseline

                    ${open && `
                    text-fuchsia-500
                    `}
                `}
            >
                <button 
                    className={`
                        w-[30px]
                        text-[2.6rem] 

                        ${open ? "text-fuchsia-500" : ""}
                        ${!open ? "hover:text-fuchsia-500" : ""}

                        ${open && props.extraCSS_Open}
                        ${!open && props.extraCSS_Closed}
                    `}
                    onClick={() => setOpen(prev => !prev)}
                    type="button"
                >
                    {open ? "-" : "+"}
                </button>
                <span>
                    {props.sectionName}
                </span>
            </div>
            <hr 
                className={`
                    ${open && `
                        mb-[20px]
                        border-fuchsia-500 
                    `}
                `}
            />
            {open && (
                <div>
                    {props.children}
                </div>
            )}
        </li>
    )
}
