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
                    <p className={styles.p}>
                        <span className={styles.span}>
                            Name :
                        </span>
                        {item.projectName}
                    </p>
                    <p className={styles.p}>
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
