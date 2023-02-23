import Window from "../window";

export default function MyProjectsWindow(): JSX.Element {
    return (
        <Window
            ID="#My-Projects-window"
            taskbarTitle="My Projects"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MyProjects_Position"
        >
            My Projects
        </Window>
    )
}