import AboutMeWindow from '@/components_Mobile/CustomWindows/AboutMe';
import MyCertificationsWindow from '@/components_Mobile/CustomWindows/MyCertifications';
import MyProjectsWindow from '@/components_Mobile/CustomWindows/MyProjects';
import MySelfTaughtCurriculumWindow from '@/components_Mobile/CustomWindows/MySelfTaughtCurriculum';
import Sidebar from '@/components_Mobile/Sidebar';
import { mainMenuSidebarData } from '@/data/sideBarData';
import styles from './styles.module.css';

export default function MobileDisplay() {
    return (
        <div
            id={"Mobile-Display"}
            className={styles.div}
        >
            <Sidebar 
                sidebarData={mainMenuSidebarData}
            />
            <AboutMeWindow />
            <MyProjectsWindow />
            <MyCertificationsWindow />
            <MySelfTaughtCurriculumWindow />
        </div>
    )
}