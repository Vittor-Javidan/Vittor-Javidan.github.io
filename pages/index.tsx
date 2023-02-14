import Background from "@/components/background";
import Sidebar from "@/components/sidebar";
import Window from "@/components/window";
import { mainMenuSidebarData } from "@/data/sideBarData";
import Head from "next/head";
import Script from "next/script";

export default function Home(): JSX.Element {
    return (<div>
        <Head>
            <title>Vitto Javidan Webpage</title>
        </Head>
        <Background>
            <Sidebar 
                menuTitle={"Main Menu"}
                sidebarData={mainMenuSidebarData}
            />
            <Window
                taskbarTitle="About Me"
            >
                About Me
            </Window>
            <Window
                taskbarTitle="My Projects"
            >
                My Projects
            </Window>
            <Script type="text/javascript" src="/static/draggableWindows.js" />
        </Background>
    </div>)
}
