import HorizontalLine from "@/components/Section/HorizontalLine"
import OpenSectionButton from "@/components/Section/OpenSectionButton"
import SectionContent from "@/components/Section/SectionContent"
import SectionLabel from "@/components/Section/SectionLabel"
import SectionTitle from "@/components/Section/SectionTitle"
import { ReactNode, useState } from "react"
import styles from './styles.module.css'

export default function Section(props: {
    sectionName: string
    openSection_ExtraCSS: string
    closedSection_ExtraCSS: string
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
                    extraCSS={open ? props.openSection_ExtraCSS : props.closedSection_ExtraCSS}
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
