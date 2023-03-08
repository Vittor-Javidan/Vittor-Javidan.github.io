import AboutMeWindow from "@/components_Browser/CustomWindows/AboutMe";
import MyCertificationsWindow from "@/components_Browser/CustomWindows/MyCertifications";
import MyProjectsWindow from "@/components_Browser/CustomWindows/MyProjects";
import MySelfTaughtCurriculumWindow from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum";
import Sidebar from "@/components_Browser/Sidebar";
import { mainMenuSidebarData } from "@/data/sideBarData";
import styles from './styles.module.css';

export default function BrowserDisplay() {
    return (
        <div
            id={"Browser-Display"}
            className={styles.div}
        >
            <Sidebar
                menuTitle="Main Menu"
                sidebarData={mainMenuSidebarData}
            />
            <AboutMeWindow />
            <MyProjectsWindow />
            <MyCertificationsWindow />
            <MySelfTaughtCurriculumWindow />
        </div>
    )
}