import Sections from "@/components/CustomWindows/MySelfTaughtCurriculum/Sections";
import WindowBox from "@/components/WindowBox";
import SectionsArea from "./SectionArea";

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
