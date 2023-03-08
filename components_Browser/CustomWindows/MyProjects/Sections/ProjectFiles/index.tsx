import ProjectFile from "@/components_Browser/Files/ProjectFile";
import styles from './styles.module.css';

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
                    ProjectUrl={item.url}
                    extraCSS={props.isLastSection && isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
                    key={index}
                >
                    <p>
                        <span className={styles.span}>
                            Name :
                        </span>
                        {item.projectName}
                    </p>
                    <p>
                        <span className={styles.span}>
                            Tecnologies :
                        </span>
                        {item.tecnologies}
                    </p>
                </ProjectFile>
            )
        })}
    </>)
}
