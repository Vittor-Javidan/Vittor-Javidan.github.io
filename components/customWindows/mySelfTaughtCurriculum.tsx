import { selfTaughtCurriculumData } from "@/data/selfTaughtCurriculumData";
import Link from "next/link";
import { useState } from "react";
import Window from "../Window/window";

export default function MySelfTaughtCurriculumWindow(): JSX.Element {

    const topicsArray = selfTaughtCurriculumData.map((data, index) => {
        return (
            <Topic 
                topic={data.topic}
                topicItems={data.itemList}
                isLast={index + 1 === selfTaughtCurriculumData.length}
                key={index}
            />
        )
    })

    return (
        <Window
            windowName="My Self-Taught Curriculum"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MySelfTaughtCurriculum_Position"
        >
            <ul>
                {...topicsArray}
            </ul>
        </Window>
    )
}

function Topic(props: {
    topic: string
    topicItems: topicItems
    isLast: boolean
}): JSX.Element {

    const [open, setOpen] = useState(false)

    return (
        <li
            className={`
                text-white font-bold
            `}
        >
            <div
                className={`
                    flex items-baseline

                    ${open && `
                    text-fuchsia-500
                    `}
                `}
            >
                <button 
                    className={`
                        w-[30px]
                        text-[2.6rem] 

                        ${(props.isLast && !open) ? "ACCESSIBILITY_lastWindowElement" : ""}
                        ${open ? "text-fuchsia-500" : ""}
                        ${!open ? "hover:text-fuchsia-500" : ""}
                    `}
                    onClick={() => setOpen(prev => !prev)}
                    type="button"
                >
                    {open ? "-" : "+"}
                </button>
                <span>
                    {props.topic}
                </span>
            </div>
            <hr 
                className={`
                    ${open && `
                        mb-[20px]
                        border-fuchsia-500 
                    `}
                `}
            />
            {open && <TopicItems 
                topicItems={props.topicItems}
                isLastTopic={props.isLast}
            />}
        </li>
    )
}

function TopicItems(props: {
    topicItems: topicItems
    isLastTopic: boolean
}): JSX.Element {

    return (
        <div
            className={`
                mt-[10px] mb-[30px]
                flex flex-wrap justify-start gap-[20px]
            `}
        >
            {props.topicItems.map((items, index) => (
                <Subtopic
                    subtopic={items.subtopic}
                    videoList={items.videoList}
                    readingsList={items.readingsList}
                    isLast={props.topicItems.length === index + 1}
                    isLastTopic={props.isLastTopic}
                    key={index}
                />
            ))}
        </div>
    )
}

function Subtopic(props: {
    subtopic: string,
    videoList: videoList,
    readingsList: readingsList
    isLast: boolean
    isLastTopic: boolean
}): JSX.Element {

    const [open, setOpen] = useState(false)
    const onlyVideos = props.readingsList.length <= 0 ? true : false

    return (<>
        <div
            className={`
                h-[130px]
                flex flex-col justify-between items-center
                text-[1.2rem]

                hover:translate-y-[-5px]
                hover:duration-[75ms]

                ${props.isLast && props.isLastTopic && !open ? "ACCESSIBILITY_lastWindowElement" : ""}
                ${open ? "text-fuchsia-500" : ""}
            `}
            onClick={() => setOpen(prev => !prev)}
            tabIndex={0}
            onKeyDown={(e) => {
                console.log(e.key)
                if(e.key === ' ' || e.key === 'Enter') {
                    setOpen(prev => !prev)
                }
            }}
        >
            {open 
                ? <img 
                    className={`
                        h-[120px] w-[80px]
                        cursor-pointer
                    `}
                    src="/static/svg/folderOpen.svg" 
                    alt="folderIcon" 
                />
                : <img 
                    className={`
                        h-[101px] w-[80px]
                        cursor-pointer
                    `}
                    src="/static/svg/folderClosed.svg" 
                    alt="folderIcon" 
                />
            }
            <span
                className={`
                    w-[100px] text-center
                `}
            >
                {props.subtopic}
            </span>
        </div>
        {open && <div
            className={`
                w-[100%] m-[10px]
                border-y-[2px] border-double border-gray-700
            `}
            
        >
            {props.videoList.length > 0 && (
                <SubTopicVideoItems 
                    videoList={props.videoList}
                    onlyVideos={onlyVideos}
                    isLastTopic={props.isLastTopic}
                />
            )}
            {props.readingsList.length > 0 && (
                <SubTopicReadingItems
                    readingsList={props.readingsList}
                    isLastTopic={props.isLastTopic}
                />
            )}
        </div>}
    </>)
}

function SubTopicVideoItems(props: {
    videoList: videoList
    onlyVideos: boolean
    isLastTopic: boolean
}): JSX.Element {

    const videoItems = props.videoList.map((videoItem, index) => (
        <VideoItem 
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

function VideoItem(props: {
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

function SubTopicReadingItems(props: {
    readingsList: readingsList
    isLastTopic: boolean
}): JSX.Element {

    const readingItems = props.readingsList.map((readingItem, index) => (
        <ReadingItem 
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

function ReadingItem(props: {
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