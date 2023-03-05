import FolderContent from "@/components/Folder/FolderContent";
import FolderIcon from "@/components/Folder/FolderIcon";
import FolderName from "@/components/Folder/FolderName";
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
            <FolderIcon
                openFolder={open}
            />
            <FolderName
                folderName={props.folderName}
            />
        </div>
        {open && (
            <FolderContent>
                {props.children}
            </FolderContent>
        )}
    </>)
}
