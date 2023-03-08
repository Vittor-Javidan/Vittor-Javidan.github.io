import FolderContent from "@/components_Mobile/Folder/FolderContent";
import FolderIcon from "@/components_Mobile/Folder/FolderIcon";
import FolderName from "@/components_Mobile/Folder/FolderName";
import { ReactNode, useState } from "react";
import styles from './styles.module.css';

export default function Folder(props: {
    children: ReactNode
    folderName: string
}): JSX.Element {

    const [open, setOpen] = useState(false)

    return (<>
        <div
            tabIndex={-1}
            className={`
                ${styles.MainDiv}
                ${open && styles.OpenFolder}
            `}
            onClick={() => setOpen(prev => !prev)}
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
