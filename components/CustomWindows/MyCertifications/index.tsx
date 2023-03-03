import Certifications from "@/components/CustomWindows/MyCertifications/Certifications";
import WindowBox from "@/components/WindowBox";

export default function MyCertificationsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Certifications"
            startVisible={false}
            startExpanded={false}
            CSS_PositionUtilityClass="CSS_MyCertifications_Position"
        >
		    <div
                className={`
                    flex flex-wrap justify-around gap-[20px]
                `}
            >
                <Certifications />
            </div>
        </WindowBox>
    )
}
