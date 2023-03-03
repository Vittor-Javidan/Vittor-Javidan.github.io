import SectionsArea from "@/components/CustomWindows/MySelfTaughtCurriculum/SectionArea";
import Sections from "@/components/CustomWindows/MySelfTaughtCurriculum/Sections";
import WindowBox from "@/components/WindowBox";

export default function MySelfTaughtCurriculumWindow(): JSX.Element {
    
    return (
        <WindowBox
            windowName="My Self-Taught Curriculum"
            startVisible={false}
            startExpanded={false}
            CSS_PositionUtilityClass="CSS_MySelfTaughtCurriculum_Position"
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}
