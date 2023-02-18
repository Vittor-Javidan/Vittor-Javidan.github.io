import Background from "@/components/background";
import AboutMeWindow from "@/components/customWindows/aboutMe";
import MyCertificationsWindow from "@/components/customWindows/myCertifications";
import MyProjectsWindow from "@/components/customWindows/myProjects";
import MySelfTaughtCurriculumWindow from "@/components/customWindows/mySelfTaughtCurriculum";
import Sidebar from "@/components/sidebar";
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
            <Script type="text/javascript" defer src="/static/elements.js" />
            <Script type="text/javascript" defer src="/static/draggableWindows.js" />
            <Script type="text/javascript" defer src="/static/windowsIndexHandler.js" />
        </Background>
    </div>)
}
