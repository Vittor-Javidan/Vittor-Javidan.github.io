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
                <p className={styles.p}>
                    <span className={styles.span}>
                        Title: 
                    </span>
                    {readingItem.title}
                </p>
                <p className={styles.p}>
                    <span className={styles.span}>
                        Author: 
                    </span>
                    {readingItem.author}
                </p>
            </WebFile>
        ))}
    </>)
}
