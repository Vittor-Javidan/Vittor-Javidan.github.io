import Certifications from "@/components_Mobile/CustomWindows/MyCertifications/Certifications";
import WindowBox from "@/components_Mobile/WindowBox";
import styles from './styles.module.css';

export default function MyCertificationsWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="My Certifications"
            startVisible={false}
        >
		    <div
                className={styles.mainDiv}
            >
                <Certifications />
            </div>
        </WindowBox>
    )
}
