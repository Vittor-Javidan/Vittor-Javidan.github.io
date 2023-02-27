import Background from "@/components/Background/background";
import MySelfTaughtCurriculumWindow from "@/components/CustomWindows/MySelfTaughtCurriculum/mySelfTaughtCurriculum";
import Sidebar from "@/components/Sidebar/sidebar";
import AboutMeWindow from "@/components/Window/CustomWindows/aboutMe";
import MyCertificationsWindow from "@/components/Window/CustomWindows/myCertifications";
import MyProjectsWindow from "@/components/Window/CustomWindows/myProjects";
import { mainMenuSidebarData } from "@/data/sideBarData";
import Head from "next/head";
import Script from "next/script";

export default function Home(): JSX.Element {
    return (<div>
        <Head>
            <title>Vittor Javidan Webpage</title>
        </Head>
        <Background>
            <Sidebar 
                menuTitle={"Main Menu"}
                sidebarData={mainMenuSidebarData}
            />
            <AboutMeWindow />
            <MyProjectsWindow />
            <MyCertificationsWindow />
            <MySelfTaughtCurriculumWindow />
            <Script type="text/javascript" defer src="/static/windowsScripts.js" />
        </Background>
    </div>)
}
