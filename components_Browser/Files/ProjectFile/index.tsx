import Link from "next/link";
import { ReactNode } from "react";
import styles from './styles.module.css';

export default function ProjectFile(props: {
    children: ReactNode
    projectType: string
    ProjectUrl: string
    extraCSS: string
}): JSX.Element {
    
    let svgDirectory

    switch (props.projectType) {
        
        case "Mobile Apps":               svgDirectory = "/static/svg/playStoreFile.svg"  ;break
        case "Websites":                  svgDirectory = "/static/svg/webFile.svg"        ;break
        case "Proof of Concept (POCs)":   svgDirectory = "/static/svg/webFile.svg"        ;break
        default:                          svgDirectory = ""                               ;break
    }
    
    return (
        <Link
            className={props.extraCSS}
            href={props.ProjectUrl}
            target={"_blank"}
            tabIndex={0}
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