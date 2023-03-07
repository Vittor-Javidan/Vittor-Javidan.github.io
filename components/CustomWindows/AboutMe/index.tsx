import Bio from "@/components/CustomWindows/AboutMe/Bio";
import ProfilePicture from "@/components/CustomWindows/AboutMe/ProfilePicture";
import SocialMedia from "@/components/CustomWindows/AboutMe/SocialMedia";
import WindowBox from "@/components/WindowBox";
import styles from './styles.module.css';

export default function AboutMeWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="About Me"
            startVisible={true}
            startExpanded={true}
            CSS_PositionUtilityClass={styles.Window_StartPosition}
        >
            <div
                className={styles.MainContent}
            >
                <ProfilePicture />
                <Bio />
            </div>
            <SocialMedia />
        </WindowBox>
    )
}
