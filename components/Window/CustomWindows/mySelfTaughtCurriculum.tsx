import Folder from "@/components/Folder/folder";
import Section from "@/components/Section/section";
import WindowBox from "@/components/Window/windowBox";
import { selfTaughtCurriculumData } from "@/data/selfTaughtCurriculumData";
import Link from "next/link";

export default function MySelfTaughtCurriculumWindow(): JSX.Element {

    const sectionsArray = selfTaughtCurriculumData.map((data, index) => {

        const isLast = index + 1 === selfTaughtCurriculumData.length

        return (
            <Section 
                sectionName={data.topic}
                extraCSS_Open={""}
                extraCSS_Closed={isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
                key={index}
            >
                <FoldersArea 
                    topicItems={data.itemList}
                    lastSection={isLast}
                />
            </Section>
        )
    })

    return (
        <WindowBox
            windowName="My Self-Taught Curriculum"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MySelfTaughtCurriculum_Position"
        >
            <ul>
                {sectionsArray}
            </ul>
        </WindowBox>
    )
}

function FoldersArea(props: {
    topicItems: topicItems
    lastSection: boolean
}): JSX.Element {

    const foldersArray = props.topicItems.map((items, index) => {

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
                    <VideoFilesArea 
                        videoList={items.videoList}
                        onlyVideos={items.readingsList.length <= 0 ? true : false}
                        isLastTopic={props.lastSection}
                    />
                )}
                {items.readingsList.length > 0 && (
                    <WebFilesArea
                        readingsList={items.readingsList}
                        isLastTopic={props.lastSection}
                    />
                )}
            </Folder>
        )
    })

    return (
        <div
            className={`
                mt-[10px] mb-[30px]
                flex flex-wrap justify-start gap-[20px]
            `}
        >
            {foldersArray}
        </div>
    )
}

function VideoFilesArea(props: {
    videoList: videoList
    onlyVideos: boolean
    isLastTopic: boolean
}): JSX.Element {

    const videoItems = props.videoList.map((videoItem, index) => (
        <VideoFile 
            videoItem={videoItem}
            onlyVideos={props.onlyVideos}
            isLast={props.videoList.length === (index + 1)}
            isLastTopic={props.isLastTopic}
            key={index}
        />
    ))

    return (
        <div
            className={`
                flex flex-col my-[40px] gap-[20px]
            `}
        >
            {videoItems}
        </div>
    )
}

function VideoFile(props: {
    videoItem: videoItem
    onlyVideos: boolean
    isLast: boolean
    isLastTopic: boolean
}): JSX.Element {
    
    return (
        <Link
            className={`${(props.onlyVideos && props.isLast && props.isLastTopic) && "ACCESSIBILITY_lastWindowElement"}`}
            href={
                props.videoItem.urlType === "video" 
                ? `https://www.youtube.com/watch?v=${props.videoItem.urlParam}`
                : `https://www.youtube.com/playlist?list=${props.videoItem.urlParam}`
            }
            target={"_blank"}
            tabIndex={0}
        >
            <div
                className={`
                    h-[120px] mx-[25px] px-[20px]
                    flex items-center
                    text-[1.6rem]
                    border-[2px] border-transparent rounded-[10px]

                    hover:text-fuchsia-500
                    hover:border-[2px]
                    hover:border-solid
                    hover:border-fuchsia-500
                `}
            >
                <img 
                    className={`
                        h-[101px] w-[80px]
                        cursor-pointer
                    `}
                    src="/static/svg/youtubeFile.svg" 
                    alt="youtubeIcon" 
                />
                <div
                    className={`
                        w-[100%] pl-[40px]
                        flex flex-col justify-start gap-[4px]
                    `}
                >
                    <span>
                        Title: <span className="font-thin">{props.videoItem.title}</span>
                    </span>
                    <span>
                        Author: <span className="font-thin">{props.videoItem.author}</span>
                    </span>
                    <span>
                        Duration: <span className="font-thin">{props.videoItem.duration}</span>
                    </span>
                </div>
            </div>
        </Link>
    )
}

function WebFilesArea(props: {
    readingsList: readingsList
    isLastTopic: boolean
}): JSX.Element {

    const readingItems = props.readingsList.map((readingItem, index) => (
        <WebFile 
            readingItem={readingItem}
            isLast={props.readingsList.length === (index + 1)}
            isLastTopic={props.isLastTopic}
            key={index}
        />
    ))

    return (
        <div
            className={`
                flex flex-col my-[40px] gap-[20px]
            `}
        >
            {readingItems}
        </div>
    )
}

function WebFile(props: {
    readingItem: readItem
    isLast: boolean
    isLastTopic:boolean
}): JSX.Element {
    
    return (
        <Link
            className={props.isLast && props.isLastTopic ? "ACCESSIBILITY_lastWindowElement" : ""}
            href={props.readingItem.url}
            target={"_blank"}
            tabIndex={0}
        >
            <div
                className={`
                    h-[120px] ml-[25px] px-[20px]
                    flex items-center
                    text-[1.6rem]
                    border-[2px] border-transparent rounded-[10px]

                    hover:text-fuchsia-500
                    hover:border-[2px]
                    hover:border-solid
                    hover:border-fuchsia-500
                `}
            >
                <img 
                    className={`
                        h-[101px] w-[80px]
                        cursor-pointer
                    `}
                    src="/static/svg/readingFile.svg" 
                    alt="readingIcon" 
                />
                <div
                    className={`
                        w-[100%] pl-[40px]
                        flex flex-col justify-start gap-[4px]
                    `}
                >
                    <span>
                        Title: <span className="font-thin">{props.readingItem.title}</span>
                    </span>
                    <span>
                        Author: <span className="font-thin">{props.readingItem.author}</span>
                    </span>
                </div>
            </div>
        </Link>
    )
}

type topicItems = {
    subtopic: string,
    videoList: videoList,
    readingsList: readingsList
}[]

type videoList = videoItem[]
type readingsList = readItem[]

type videoItem = {
    title: string,
    author: string,
    duration: string,
    externalPlay: boolean,
    urlType: "video" | "playlist",
    urlParam: string
}

type readItem = {
    title: string,
    author: string,
    url: string
}