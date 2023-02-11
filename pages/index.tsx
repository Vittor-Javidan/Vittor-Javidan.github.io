import Background from "@/components/background";
import Sidebar from "@/components/sidebar";
import { mainMenuSidebarData } from "@/data/sideBarData";
import Head from "next/head";

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
        </Background>
    </div>)
}
