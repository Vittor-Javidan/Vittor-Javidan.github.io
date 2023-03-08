import SectionsArea from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/SectionArea";
import Sections from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/Sections";
import WindowBox from "@/components_Browser/WindowBox";
import styles from './styles.module.css';

export default function MySelfTaughtCurriculumWindow(): JSX.Element {
    
    return (
        <WindowBox
            windowName="My Self-Taught Curriculum"
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
