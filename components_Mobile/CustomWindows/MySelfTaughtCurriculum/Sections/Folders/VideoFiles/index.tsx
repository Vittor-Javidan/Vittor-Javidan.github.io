import VideoFile from "@/components_Mobile/Files/VideoFile";
import styles from './styles.module.css';

export default function VideoFiles(props: {
    videoList: {
        title: string,
        author: string,
        duration: string,
        externalPlay: boolean,
        urlType: "video" | "playlist",
        urlParam: string
    }[]
    onlyVideos: boolean
}): JSX.Element {

    return (<>
        {props.videoList.map((videoItem, index) => {

            const href = (videoItem.urlType === "video") 
            ? `https://www.youtube.com/watch?v=${videoItem.urlParam}`
            : `https://www.youtube.com/playlist?list=${videoItem.urlParam}`

            return (
                <VideoFile 
                    href={href}
                    key={index}
                >
                    <p
                        className={styles.p}
                    >
                        <span
                            className={styles.span}
                        >
                            Title :
                        </span>
                        {videoItem.title}
                    </p>
                    <p
                        className={styles.p}
                    >
                        <span
                            className={styles.span}
                        >
                            Author :
                        </span>
                        {videoItem.author}
                    </p>
                    <p
                        className={styles.p}
                    >
                        <span
                            className={styles.span}
                        >
                            Duration :
                        </span>
                        {videoItem.duration}
                    </p>
                </VideoFile>
            )
        })}
    </>)
}