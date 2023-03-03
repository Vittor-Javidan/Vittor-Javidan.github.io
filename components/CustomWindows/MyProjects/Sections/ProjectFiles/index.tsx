import ProjectFile from "@/components/Files/ProjectFile"

export default function ProjectFiles(props: {
    projectType: string
    itemList: {
        projectName: string
        url: string
        tecnologies: string
    }[]
}): JSX.Element {
    return (<>
        {props.itemList.map((item, index) => {
            return (
                <ProjectFile
                    projectType={props.projectType}
                    urlParam={item.url}
                    extraCSS=""
                    key={index}
                >
                    <span>{item.projectName}</span>
                    <span>Tecnologies: <span className="font-thin">{item.tecnologies}</span></span>
                </ProjectFile>
            )
        })}
    </>)
}
