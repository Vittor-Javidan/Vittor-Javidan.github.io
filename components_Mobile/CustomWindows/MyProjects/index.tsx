import SectionsArea from "@/components_Mobile/CustomWindows/MyProjects/SectionArea";
import Sections from "@/components_Mobile/CustomWindows/MyProjects/Sections";
import WindowBox from "@/components_Mobile/WindowBox";

export default function MyProjectsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Projects"
            startVisible={false}
        >
            <SectionsArea>
                <Sections />
            </SectionsArea>
        </WindowBox>
    )
}