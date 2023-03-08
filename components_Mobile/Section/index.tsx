import HorizontalLine from "@/components_Mobile/Section/HorizontalLine"
import OpenSectionButton from "@/components_Mobile/Section/OpenSectionButton"
import SectionContent from "@/components_Mobile/Section/SectionContent"
import SectionLabel from "@/components_Mobile/Section/SectionLabel"
import SectionTitle from "@/components_Mobile/Section/SectionTitle"
import { ReactNode, useState } from "react"
import styles from './styles.module.css'

export default function Section(props: {
    sectionName: string
    children: ReactNode
}): JSX.Element {

    const [open, setOpen] = useState(false)

    return (
        <div
            className={styles.div}
        >
            <SectionLabel
                open={open}
            >
                <OpenSectionButton
                    sectionOpen={open}
                    onClick={() => setOpen(prev => !prev)}
                />
                <SectionTitle
                    sectionTitle={props.sectionName}
                />
            </SectionLabel>
            <HorizontalLine
                sectionOpen={open}
            />
            {open && (
                <SectionContent>
                    {props.children}
                </SectionContent>
            )}
        </div>
    )
}
