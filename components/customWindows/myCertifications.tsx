import Window from "../window";

export default function MyCertificationsWindow(): JSX.Element {
    return (
        <Window
            taskbarTitle="My Certifications"
            startVisible={false}
            CSS_PositionUtilityClass="CSS_MyCertifications_Position"
        >
            My Certifications
        </Window>
    )
}