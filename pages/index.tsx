import Background from "@/components/background";
import AboutMeWindow from "@/components/customWindow/aboutMe";
import Sidebar from "@/components/sidebar";
import Window from "@/components/window";
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
            <Window
                taskbarTitle="My Projects"
                startVisible={false}
                CSS_PositionUtilityClass="CSS_MyProjects_Position"
            >
                My Projects
            </Window>
            <Window
                taskbarTitle="My Certifications"
                startVisible={false}
                CSS_PositionUtilityClass="CSS_MyCertifications_Position"
            >
                My Certifications
            </Window>
            <Window
                taskbarTitle="My Self-Taught Curriculum"
                startVisible={false}
                CSS_PositionUtilityClass="CSS_MySelfTaughtCurriculum_Position"
            >
                My Self-Taught Curriculum
            </Window>
            <Script type="text/javascript" src="/static/elements.js" />
            <Script type="text/javascript" src="/static/draggableWindows.js" />
            <Script type="text/javascript" src="/static/windowsIndexHandler.js" />
        </Background>
    </div>)
}
