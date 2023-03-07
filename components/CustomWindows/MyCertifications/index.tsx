import Certifications from "@/components/CustomWindows/MyCertifications/Certifications";
import WindowBox from "@/components/WindowBox";
import styles from './styles.module.css';

export default function MyCertificationsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Certifications"
            startVisible={false}
            startExpanded={true}
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
