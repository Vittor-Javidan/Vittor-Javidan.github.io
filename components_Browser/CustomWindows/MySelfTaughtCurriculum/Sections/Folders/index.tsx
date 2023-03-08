import VideoFiles from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/VideoFiles"
import VideoFilesArea from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/VideoFilesArea"
import WebFiles from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/WebFiles"
import WebFilesArea from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/Sections/Folders/WebFilesArea"
import Folder from "@/components_Browser/Folder"

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
    lastSection: boolean
}

export default function Folders(props: foldersType) {

    return <>
        {props.topicItems.map((items, index) => {

            const extraCSS_CloseFolder = (props.lastSection && (props.topicItems.length === index + 1)) 
            ? `ACCESSIBILITY_lastWindowElement` 
            : ""

            return (
                <Folder
                    folderName={items.subtopic}
                    openFolder_extraCSS={""}
                    closedFolder_extraCSS={extraCSS_CloseFolder}
                    key={index}
                >
                    {items.videoList.length > 0 && (
                        <VideoFilesArea>
                            <VideoFiles 
                                videoList={items.videoList}
                                onlyVideos={items.readingsList.length <= 0 ? true : false}
                                isLastSection={props.lastSection}
                            />
                        </VideoFilesArea>
                    )}
                    {items.readingsList.length > 0 && (
                        <WebFilesArea>
                            <WebFiles
                                readingsList={items.readingsList}
                                isLastSection={props.lastSection}
                            />
                        </WebFilesArea>
                    )}
                </Folder>
            )
        })}
    </>
}