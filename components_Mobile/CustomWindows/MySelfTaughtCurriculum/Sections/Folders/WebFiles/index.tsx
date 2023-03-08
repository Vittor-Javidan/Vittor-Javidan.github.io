import WebFile from "@/components_Mobile/Files/WebFile";
import styles from './styles.module.css';

export default function WebFiles(props: {
    readingsList: {
        title: string,
        author: string,
        url: string
    }[]
}): JSX.Element {

    return (<>
        {props.readingsList.map((readingItem, index) => (
            <WebFile
                href={readingItem.url}
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
        ))}
    </>)
}
