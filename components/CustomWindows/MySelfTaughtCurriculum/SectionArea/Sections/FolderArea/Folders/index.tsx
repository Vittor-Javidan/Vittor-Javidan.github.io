import VideoFilesArea from "@/components/CustomWindows/MySelfTaughtCurriculum/SectionArea/Sections/FolderArea/Folders/VideoFilesArea"
import VideoFiles from "@/components/CustomWindows/MySelfTaughtCurriculum/SectionArea/Sections/FolderArea/Folders/VideoFilesArea/VideoFiles"
import WebFilesArea from "@/components/CustomWindows/MySelfTaughtCurriculum/SectionArea/Sections/FolderArea/Folders/WebFilesArea"
import WebFiles from "@/components/CustomWindows/MySelfTaughtCurriculum/SectionArea/Sections/FolderArea/Folders/WebFilesArea/WebFiles"
import Folder from "@/components/Folder"

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

            const extraCSS_CloseFolder = (props.lastSection && (props.topicItems.length === index + 1)) ? `
                ACCESSIBILITY_lastWindowElement
            ` : ""

            return (
                <Folder
                    folderName={items.subtopic}
                    extraCSS_Open={""}
                    extraCSS_Close={extraCSS_CloseFolder}
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