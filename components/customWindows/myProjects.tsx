import Window from "../Window/Window";

export default function MyProjectsWindow(): JSX.Element {
    return (
        <Window
            windowName="My Projects"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MyProjects_Position"
        >
            My Projects
        </Window>
    )
}