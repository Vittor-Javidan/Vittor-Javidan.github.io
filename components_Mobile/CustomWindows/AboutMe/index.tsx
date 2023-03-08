import Bio from "@/components_Mobile/CustomWindows/AboutMe/Bio";
import ProfilePicture from "@/components_Mobile/CustomWindows/AboutMe/ProfilePicture";
import SocialMedia from "@/components_Mobile/CustomWindows/AboutMe/SocialMedia";
import WindowBox from "@/components_Mobile/WindowBox";
import styles from './styles.module.css';

export default function AboutMeWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="About Me"
            startVisible={true}
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
