import SectionsArea from "@/components/CustomWindows/MyProjects/SectionArea";
import Sections from "@/components/CustomWindows/MyProjects/Sections";
import WindowBox from "@/components/WindowBox";

export default function MyProjectsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Projects"
            startVisible={false}
            startExpanded={false}
            CSS_PositionUtilityClass="CSS_MyProjects_Position"
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}