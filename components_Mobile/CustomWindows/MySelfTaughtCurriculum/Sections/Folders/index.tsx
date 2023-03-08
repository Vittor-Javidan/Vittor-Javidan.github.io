import VideoFiles from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/VideoFiles"
import VideoFilesArea from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/VideoFilesArea"
import WebFiles from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/WebFiles"
import WebFilesArea from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/WebFilesArea"
import Folder from "@/components_Mobile/Folder"

type foldersType = {
    topicItems: {
        subtopic: string,
        videoList: {
            title: string,
            author: string,
            duration: string,
            externalPlay: boolean,
            urlType: "video" | "playlist",
            urlParam: string
        }[],
        readingsList: {
            title: string,
            author: string,
            url: string
        }[]
    }[]
}

export default function Folders(props: foldersType) {

    return <>
        {props.topicItems.map((items, index) => (
            <Folder
                folderName={items.subtopic}
                key={index}
            >
                {items.videoList.length > 0 && (
                    <VideoFilesArea>
                        <VideoFiles 
                            videoList={items.videoList}
                            onlyVideos={items.readingsList.length <= 0 ? true : false}
                        />
                    </VideoFilesArea>
                )}
                {items.readingsList.length > 0 && (
                    <WebFilesArea>
                        <WebFiles
                            readingsList={items.readingsList}
                        />
                    </WebFilesArea>
                )}
            </Folder>
        ))}
    </>
}