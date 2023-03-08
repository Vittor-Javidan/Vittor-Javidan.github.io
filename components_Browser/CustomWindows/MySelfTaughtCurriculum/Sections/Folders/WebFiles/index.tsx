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
                    <span>
                        Title: 
                            <span className={styles.Span}>
                                {readingItem.title}
                            </span>
                    </span>
                    <span>
                        Author: 
                            <span className={styles.Span}>
                                {readingItem.author}
                            </span>
                    </span>
                </WebFile>
            )
        })}
    </>)
}
