import Sections from "@/components/CustomWindows/MySelfTaughtCurriculum/SectionArea/Sections/Sections";
import WindowBox from "@/components/Window/windowBox";
import SectionsArea from "./SectionArea/sectionsArea";

export default function MySelfTaughtCurriculumWindow(): JSX.Element {
    
    return (
        <WindowBox
            windowName="My Self-Taught Curriculum"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MySelfTaughtCurriculum_Position"
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}
