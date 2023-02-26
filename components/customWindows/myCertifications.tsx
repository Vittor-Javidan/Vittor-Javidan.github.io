import { certificatesData } from "@/data/certificatesData";
import Link from "next/link";
import Window from "../Window/Window";

export default function MyCertificationsWindow(): JSX.Element {

    const certificates = certificatesData.map((data, index) => (
        <Certificate 
            title={data.title}
            institution={data.intitution}
            date={data.date}
            certificateURL={data.certificateURL}
            hoverMessage={data.hoverMessage}
            key={index}
            islast={(index + 1) === certificatesData.length}
        />
    ))

    return (
        <Window
            windowName="My Certifications"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MyCertifications_Position"
        >
		    <div
                className={`
                    flex flex-wrap justify-around gap-[20px]
                `}
            >
                {...certificates}
            </div>
        </Window>
    )
}

function Certificate(props: {
    title: string
    institution: string
    date: string
    certificateURL: string
    hoverMessage: string
    islast: boolean
}): JSX.Element {

    let bgLink

    switch (props.institution) {
        case "freeCodeCamp":    bgLink = "bg-[url('/static/svg/freecodeCampBG.svg')]" ;break
        case "HackerRank":      bgLink = "bg-[url('/static/svg/hackerRankBG.svg')]"   ;break
        case "UNA University":  bgLink = "bg-[url('/static/svg/unaBG.svg')]"          ;break
        default: bgLink = ""
    }
    
    return (
        <div
            className={`
                h-[225px] w-[375px] rounded-[10px]
                duration-[150ms]

                hover:shadow-customToggle 
                hover:shadow-fuchsia-600
            `}
        >
            <Link
                className={props.islast ? "ACCESSIBILITY_lastWindowElement": ""}
                href={props.certificateURL}
                target={props.certificateURL !== "" ? "_blank" : ""}
            >
                <div
                    className={`
                        CSS_TextShadow
                        h-full w-full rounded-[10px]
                        flex flex-col justify-between
                        border-[2px] border-solid border-gray-700
                        ${bgLink} bg-no-repeat bg-fixed bg-opacity-10
                        text-[2rem] text-gray-300 font-extrabold text-center
                    `}
                > 
                    <div
                        className={`
                            h-full
                            flex flex-col justify-around
                        `}
                    >
                        <h1
                            className={`
                                mt-[10px]
                                text-[3rem] 
                            `}
                        >{props.title}</h1>
                        <div>
                            <p
                                className={`
                                    mt-[10px]
                                `}
                            >
                                {props.institution}
                            </p>
                        <p
                                className={`
                                    mt-[10px] text-[1.6rem]
                                `}
                            >
                                {props.date}
                            </p>
                        </div>
                    </div>
                    <p
                        className={`
                            CSS_HoverMessage
                            mb-[10px]
                            text-fuchsia-500
                            opacity-0
                            duration-[150ms]
                        `}
                    >
                        {props.hoverMessage}
                    </p>
                </div>
            </Link>
        </div>
    )
}