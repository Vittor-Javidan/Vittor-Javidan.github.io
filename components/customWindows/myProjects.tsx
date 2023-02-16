import Window from "../window";

export default function MyProjectsWindow(): JSX.Element {
    return (
        <Window
            taskbarTitle="My Projects"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MyProjects_Position"
        >
            My Projects
        </Window>
    )
}