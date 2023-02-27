import { ReactNode, useState } from "react"

export default function Folder(props: {
    children: ReactNode
    folderName: string
    extraCSS_Open: string
    extraCSS_Close: string
}): JSX.Element {

    const [open, setOpen] = useState(false)

    return (<>
        <div
            className={`
                h-[130px]
                flex flex-col justify-between items-center
                text-[1.2rem]

                hover:translate-y-[-5px]
                hover:duration-[75ms]

                ${open ? "text-fuchsia-500" : ""}

                ${open && props.extraCSS_Open}
                ${!open && props.extraCSS_Close}
            `}
            onClick={() => setOpen(prev => !prev)}
            tabIndex={0}
            onKeyDown={(e) => {
                if(e.key === ' ' || e.key === 'Enter') {
                    setOpen(prev => !prev)
                }
            }}
        >
            {open 
                ? <img 
                    className={`
                        h-[120px] w-[80px]
                        cursor-pointer
                    `}
                    src="/static/svg/folderOpen.svg" 
                    alt="folderIcon" 
                />
                : <img 
                    className={`
                        h-[101px] w-[80px]
                        cursor-pointer
                    `}
                    src="/static/svg/folderClosed.svg" 
                    alt="folderIcon" 
                />
            }
            <span
                className={`
                    w-[100px] text-center
                `}
            >
                {props.folderName}
            </span>
        </div>
        {open && <div
            className={`
                w-[100%] m-[10px]
                border-y-[2px] border-double border-gray-700
            `}
            
        >
            {props.children}
        </div>}
    </>)
}