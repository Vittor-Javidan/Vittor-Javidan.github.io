import Bio from "@/components_Browser/CustomWindows/AboutMe/Bio";
import ProfilePicture from "@/components_Browser/CustomWindows/AboutMe/ProfilePicture";
import SocialMedia from "@/components_Browser/CustomWindows/AboutMe/SocialMedia";
import WindowBox from "@/components_Browser/WindowBox";
import styles from './styles.module.css';

export default function AboutMeWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="About Me"
            startVisible={true}
            startExpanded={false}
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
