import Certifications from "@/components_Browser/CustomWindows/MyCertifications/Certifications";
import WindowBox from "@/components_Browser/WindowBox";
import styles from './styles.module.css';

export default function MyCertificationsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Certifications"
            startVisible={false}
            startExpanded={false}
            CSS_PositionUtilityClass={styles.Window_StartPosition}
        >
		    <div
                className={styles.mainDiv}
            >
                <Certifications />
            </div>
        </WindowBox>
    )
}
