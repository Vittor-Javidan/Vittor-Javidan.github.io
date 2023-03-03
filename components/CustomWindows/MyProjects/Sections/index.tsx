import Section from "@/components/Section"
import { projectsData } from "@/data/projectsData"
import ProjectFiles from "./ProjectFiles"

export default function Sections() {

    return (<>
        {projectsData.map((data, index) => {

            const isLast = index + 1 === projectsData.length

            return (
                <Section 
                    sectionName={data.projectType}
                    extraCSS_Open={""}
                    extraCSS_Closed={isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
                    key={index}
                >
                    <ProjectFiles
                        projectType={data.projectType} 
                        itemList={data.itemList}
                    />
                </Section>
            )
        })}
    </>)
}
