import ProjectFiles from "@/components/CustomWindows/MyProjects/Sections/ProjectFiles"
import Section from "@/components/Section"
import { projectsData } from "@/data/projectsData"

export default function Sections() {

    return (<>
        {projectsData.map((data, index) => {

            const isLast = index + 1 === projectsData.length

            return (
                <Section 
                    sectionName={data.projectType}
                    openSection_ExtraCSS={""}
                    closedSection_ExtraCSS={isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
                    key={index}
                >
                    <ProjectFiles
                        isLastSection={isLast}
                        projectType={data.projectType} 
                        itemList={data.itemList}
                    />
                </Section>
            )
        })}
    </>)
}
