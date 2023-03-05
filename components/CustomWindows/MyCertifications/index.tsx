import Certifications from "@/components/CustomWindows/MyCertifications/Certifications";
import WindowBox from "@/components/WindowBox";
import styles from './styles.module.css';

export default function MyCertificationsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Certifications"
            startVisible={false}
            startExpanded={false}
            CSS_PositionUtilityClass="CSS_MyCertifications_Position"
        >
		    <div
                className={styles.mainDiv}
            >
                <Certifications />
            </div>
        </WindowBox>
    )
}
