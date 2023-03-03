import ProjectFile from "@/components/Files/ProjectFile"

export default function ProjectFiles(props: {
    isLastSection: boolean
    projectType: string
    itemList: {
        projectName: string
        url: string
        tecnologies: string
    }[]
}): JSX.Element {
    return (<>
        {props.itemList.map((item, index) => {

            const isLast = props.itemList.length === index + 1

            return (
                <ProjectFile
                    projectType={props.projectType}
                    urlParam={item.url}
                    extraCSS={props.isLastSection && isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
                    key={index}
                >
                    <span>{item.projectName}</span>
                    <span>Tecnologies: <span className="font-thin">{item.tecnologies}</span></span>
                </ProjectFile>
            )
        })}
    </>)
}
