import ProjectFiles from "@/components_Mobile/CustomWindows/MyProjects/Sections/ProjectFiles"
import Section from "@/components_Mobile/Section"
import { projectsData } from "@/data/projectsData"

export default function Sections() {

    return (<>
        {projectsData.map((data, index) => {

            const isLast = index + 1 === projectsData.length

            return (
                <Section 
                    sectionName={data.projectType}
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
