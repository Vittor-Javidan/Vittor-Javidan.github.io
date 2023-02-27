import VideoFile from "@/components/Files/videoFile";
import WebFile from "@/components/Files/webFile";
import Folder from "@/components/Folder/folder";
import Section from "@/components/Section/section";
import WindowBox from "@/components/Window/windowBox";
import { selfTaughtCurriculumData } from "@/data/selfTaughtCurriculumData";
import { ReactNode } from "react";

export default function MySelfTaughtCurriculumWindow(): JSX.Element {
    
    return (
        <WindowBox
            windowName="My Self-Taught Curriculum"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MySelfTaughtCurriculum_Position"
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}

function SectionsArea(props: {
    children: ReactNode
}) {

    return (
        <ul>
            {props.children}
        </ul>
    )
}

function Sections() {

    return (<>
        {selfTaughtCurriculumData.map((data, index) => {

            const isLast = index + 1 === selfTaughtCurriculumData.length

            return (
                <Section 
                    sectionName={data.topic}
                    extraCSS_Open={""}
                    extraCSS_Closed={isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
                    key={index}
                >
                    <FoldersArea>
                        <Folders 
                            lastSection={isLast}
                            topicItems={data.itemList}
                        />
                    </FoldersArea>
                </Section>
            )
        })}
    </>)
}

function FoldersArea(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div
            className={`
                mt-[10px] mb-[30px]
                flex flex-wrap justify-start gap-[20px]
            `}
        >
            {props.children}
        </div>
    )
}

function Folders(props: {
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
}) {

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

function VideoFilesArea(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div
            className={`
                flex flex-col my-[40px] gap-[20px]
            `}
        >
            {props.children}
        </div>
    )
}

function VideoFiles(props: {
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
                        Title: <span className="font-thin">{videoItem.title}</span>
                    </span>
                    <span>
                        Author: <span className="font-thin">{videoItem.author}</span>
                    </span>
                    <span>
                        Duration: <span className="font-thin">{videoItem.duration}</span>
                    </span>
                </VideoFile>
            )
        })}
    </>)

}

function WebFilesArea(props: {
    children: ReactNode
}): JSX.Element {

    return (
        <div
            className={`
                flex flex-col my-[40px] gap-[20px]
            `}
        >
            {props.children}
        </div>
    )
}

function WebFiles(props: {
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
                        Title: <span className="font-thin">{readingItem.title}</span>
                    </span>
                    <span>
                        Author: <span className="font-thin">{readingItem.author}</span>
                    </span>
                </WebFile>
            )
        })}
    </>)
}
