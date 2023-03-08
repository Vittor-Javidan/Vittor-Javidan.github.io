import SectionsArea from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/SectionArea";
import Sections from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/Sections";
import WindowBox from "@/components_Mobile/WindowBox";

export default function MySelfTaughtCurriculumWindow(): JSX.Element {
    
    return (
        <WindowBox
            windowName="My Self-Taught Curriculum"
            startVisible={false}
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}
