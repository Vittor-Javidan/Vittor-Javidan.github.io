import { ReactNode, useState } from "react";
import styles from './styles.module.css';

export default function Folder(props: {
    children: ReactNode
    folderName: string
    openFolder_extraCSS: string
    closedFolder_extraCSS: string
}): JSX.Element {

    const [open, setOpen] = useState(false)

    return (<>
        <div
            className={`
                ${styles.MainDiv}
                ${open && styles.OpenFolder}
                ${open && props.openFolder_extraCSS}
                ${!open && props.closedFolder_extraCSS}
            `}
            onClick={() => setOpen(prev => !prev)}
            tabIndex={0}
            onKeyDown={(e) => {
                if(e.key === ' ' || e.key === 'Enter') {
                    setOpen(prev => !prev)
                }
            }}
        >
            <img 
                className={`
                    ${styles.Img}
                    ${open 
                        ? styles.Img_OpenFolder 
                        : styles.Img_ClosedFolder
                    }
                `}
                src={open ? "/static/svg/folderOpen.svg" : "/static/svg/folderClosed.svg"}
                alt="folderIcon" 
            />
            <span
                className={styles.Span}
            >
                {props.folderName}
            </span>
        </div>
        {open && <div
            className={styles.ChildrenDiv}
        >
            {props.children}
        </div>}
    </>)
}