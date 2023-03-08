import ProjectFile from "@/components_Mobile/Files/ProjectFile";
import styles from './styles.module.css';

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
                    ProjectUrl={item.url}
                    key={index}
                >
                    <span>{item.projectName}</span>
                    <span>Tecnologies:
                        <span className={styles.TecnologiesSpan}>
                            {item.tecnologies}
                        </span>
                    </span>
                </ProjectFile>
            )
        })}
    </>)
}
