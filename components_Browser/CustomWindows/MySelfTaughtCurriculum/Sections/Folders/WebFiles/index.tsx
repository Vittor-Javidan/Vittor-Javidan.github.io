import WebFile from "@/components_Browser/Files/WebFile";
import styles from './styles.module.css';

export default function WebFiles(props: {
    readingsList: {
        title: string,
        author: string,
        url: string
    }[]
    isLastSection: boolean
}): JSX.Element {

    return (<>
        {props.readingsList.map((readingItem, index) => {

            const isLast = props.readingsList.length === (index + 1)

            const extraCSS = (isLast && props.isLastSection) 
            ? "ACCESSIBILITY_lastWindowElement" 
            : ""

            return (
                <WebFile
                    href={readingItem.url}
                    extraCSS={extraCSS}
                    key={index}
                >
                    <p>
                        <span className={styles.span}>
                            Title: 
                        </span>
                        {readingItem.title}
                    </p>
                    <p>
                        <span className={styles.span}>
                            Author: 
                        </span>
                        {readingItem.author}
                    </p>
                </WebFile>
            )
        })}
    </>)
}
