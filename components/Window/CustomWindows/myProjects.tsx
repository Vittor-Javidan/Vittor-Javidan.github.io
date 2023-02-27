import WindowBox from "@/components/Window/windowBox";

export default function MyProjectsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Projects"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MyProjects_Position"
        >
            My Projects
        </WindowBox>
    )
}