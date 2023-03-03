import Bio from "@/components/CustomWindows/AboutMe/Bio";
import ProfilePicture from "@/components/CustomWindows/AboutMe/ProfilePicture";
import SocialMedia from "@/components/CustomWindows/AboutMe/SocialMedia";
import WindowBox from "@/components/WindowBox";

export default function AboutMeWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="About Me"
            startVisible={true}
            startExpanded={false}
            CSS_PositionUtilityClass="CSS_AboutMe_Position"
        >
            <div
                className={`
                    flex flex-col items-center justify-between h-full
                `}
            >
                <div
                    className={`
                        flex flex-col items-center content-between 
                    `}
                >
                    <ProfilePicture />
                    <Bio />
                </div>
                <SocialMedia />
            </div>
        </WindowBox>
    )
}
