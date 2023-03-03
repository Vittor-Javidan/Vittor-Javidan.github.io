import Background from "@/components/Background";
import AboutMeWindow from "@/components/CustomWindows/AboutMe/aboutMe";
import MyCertificationsWindow from "@/components/CustomWindows/MyCertifications/myCertifications";
import MyProjectsWindow from "@/components/CustomWindows/MyProjects/myProjects";
import MySelfTaughtCurriculumWindow from "@/components/CustomWindows/MySelfTaughtCurriculum";
import Sidebar from "@/components/Sidebar";
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
