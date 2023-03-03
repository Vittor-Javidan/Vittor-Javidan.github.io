import Link from "next/link"
import { ReactNode } from "react"

export default function ProjectFile(props: {
    children: ReactNode
    projectType: string
    urlParam: string
    extraCSS: string
}): JSX.Element {

    const url = `https://vittor-javidan.github.io/${props.urlParam}`
    
    let svgDirectory

    switch (props.projectType) {
        
        case "ISOLATED FEATURES":   svgDirectory = "/static/svg/webFile.svg"        ;break
        case "MOBILE APPS":         svgDirectory = "/static/svg/playStoreFile.svg"  ;break
        default: svgDirectory = ""                                                  ;break
    }
    
    return (
        <Link
            className={props.extraCSS}
            href={props.urlParam}
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
                    src={svgDirectory}
                    alt="youtubeIcon" 
                />
                <div
                    className={`
                        w-[100%] pl-[40px]
                        flex flex-col justify-start gap-[4px]
                    `}
                >
                    {props.children}
                </div>
            </div>
        </Link>
    )
}