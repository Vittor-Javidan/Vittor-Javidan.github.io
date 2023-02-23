import { selfTaughtCurriculumData } from "@/data/selfTaughtCurriculumData";
import Link from "next/link";
import { useState } from "react";
import Window from "../window";

export default function MySelfTaughtCurriculumWindow(): JSX.Element {

    const topicsArray = selfTaughtCurriculumData.map((data, index) => {
        return (
            <Topic 
                topic={data.topic}
                topicItems={data.itemList}
                key={index}
            />
        )
    })

    return (
        <Window
            ID="#My-Self-Taught-Curriculum"
            taskbarTitle="My Self-Taught Curriculum"
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
                {open 
                    ? <button 
                        className={`
                            w-[30px]
                            text-[2.6rem] 
                            hover:text-fuchsia-500
                        `}
                        onClick={() => setOpen(false)}
                        type="button"
                    >
                        -
                    </button>
                    : <button
                        className={`
                            w-[30px]
                            text-[2.6rem] 
                            hover:text-fuchsia-500
                        `}
                        onClick={() => setOpen(true)}
                        type="button"
                    >
                        +
                    </button>
                }
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
            {open && <TopicItems topicItems={props.topicItems}/>}
        </li>
    )
}

function TopicItems(props: {
    topicItems: topicItems
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
}): JSX.Element {

    const [open, setOpen] = useState(false)

    return (<>
        <div
            className={`
                h-[130px]
                flex flex-col justify-between items-center
                text-[1.2rem]

                hover:translate-y-[-5px]
                hover:duration-[75ms]

                ${open && `text-fuchsia-500`}
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
                src="/folderOpen.svg" 
                alt="folderIcon" 
                />
                : <img 
                    className={`
                        h-[101px] w-[80px]
                        cursor-pointer
                    `}
                    src="/folderClosed.svg" 
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
                />
            )}
            {props.readingsList.length > 0 && (
                <SubTopicReadingItems
                    readingsList={props.readingsList}
                />
            )}
        </div>}
    </>)
}

function SubTopicVideoItems(props: {
    videoList: videoList
}): JSX.Element {

    const videoItems = props.videoList.map((videoItem, index) => (
        <VideoItem 
            videoItem={videoItem}
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
}): JSX.Element {
    
    return (
        <Link
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
                    src="/youtubeFile.svg" 
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
}): JSX.Element {

    const readingItems = props.readingsList.map((readingItem, index) => (
        <ReadingItem 
        readingItem={readingItem}
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
}): JSX.Element {
    
    return (
        <Link
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
                    src="/readingFile.svg" 
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