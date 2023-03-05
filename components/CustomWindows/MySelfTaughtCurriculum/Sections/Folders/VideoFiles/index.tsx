import VideoFile from "@/components/Files/VideoFile";
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
    isLastSection: boolean
}): JSX.Element {

    return (<>
        {props.videoList.map((videoItem, index) => {

            const isLast = props.videoList.length === index + 1

            const extraCSS = (props.onlyVideos && isLast && props.isLastSection) 
            ? "ACCESSIBILITY_lastWindowElement"
            : ""

            const href = (videoItem.urlType === "video") 
            ? `https://www.youtube.com/watch?v=${videoItem.urlParam}`
            : `https://www.youtube.com/playlist?list=${videoItem.urlParam}`

            return (
                <VideoFile 
                    href={href}
                    extraCSS={extraCSS}
                    key={index}
                >
                    <span>
                        Title: 
                            <span className={styles.Span}>
                                {videoItem.title}
                            </span>
                    </span>
                    <span>
                        Author: 
                            <span className={styles.Span}>
                                {videoItem.author}
                            </span>
                    </span>
                    <span>
                        Duration: 
                            <span className={styles.Span}>
                                {videoItem.duration}
                            </span>
                    </span>
                </VideoFile>
            )
        })}
    </>)
}