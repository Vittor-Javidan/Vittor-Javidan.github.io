import Link from "next/link";
import { ReactNode } from "react";
import styles from './styles.module.css';

export default function VideoFile(props: {
    children: ReactNode
    href: string
}): JSX.Element {
    
    return (
        <Link
            href={props.href}
            target={"_blank"}
            tabIndex={-1}
        >
            <div
                className={styles.MainDiv}
            >
                <img 
                    className={styles.Img}
                    src="/static/svg/youtubeFile.svg" 
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