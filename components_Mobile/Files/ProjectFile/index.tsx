import Link from "next/link";
import { ReactNode } from "react";
import styles from './styles.module.css';

export default function ProjectFile(props: {
    children: ReactNode
    projectType: string
    ProjectUrl: string
}): JSX.Element {
    
    let svgDirectory

    switch (props.projectType) {
        
        case "ISOLATED FEATURES":   svgDirectory = "/static/svg/webFile.svg"        ;break
        case "MOBILE APPS":         svgDirectory = "/static/svg/playStoreFile.svg"  ;break
        default: svgDirectory = ""                                                  ;break
    }
    
    return (
        <Link
            href={props.ProjectUrl}
            target={"_blank"}
            tabIndex={-1}
        >
            <div
                className={styles.MainDiv}
            >
                <img 
                    className={styles.Img}
                    src={svgDirectory}
                    alt="youtubeIcon" 
                />
                <div
                    className={styles.InfoArea}
                >
                    {props.children}
                </div>
            </div>
        </Link>
    )
}