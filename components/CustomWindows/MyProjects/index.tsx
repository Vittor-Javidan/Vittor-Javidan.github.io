import SectionsArea from "@/components/CustomWindows/MyProjects/SectionArea";
import Sections from "@/components/CustomWindows/MyProjects/Sections";
import WindowBox from "@/components/WindowBox";
import styles from './styles.module.css';

export default function MyProjectsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Projects"
            startVisible={false}
            startExpanded={true}
            CSS_PositionUtilityClass={styles.Window_StartPosition}
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}