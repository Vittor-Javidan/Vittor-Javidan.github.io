import SectionsArea from "@/components_Browser/CustomWindows/MyProjects/SectionArea";
import Sections from "@/components_Browser/CustomWindows/MyProjects/Sections";
import WindowBox from "@/components_Browser/WindowBox";
import styles from './styles.module.css';

export default function MyProjectsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Projects"
            startVisible={false}
            startExpanded={false}
            CSS_PositionUtilityClass={styles.Window_StartPosition}
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}