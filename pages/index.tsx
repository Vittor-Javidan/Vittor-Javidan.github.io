import Background from "@/components/Background";
import BrowserDisplay from "@/components/BrowserDisplay";
import MobileDisplay from "@/components/MobileDisplay";
import Head from "next/head";
import Script from "next/script";
import styles from './index.module.css';

export default function Home(): JSX.Element {
    return (
        <div
            className={styles.home}
        >
            <Head>
                <title>Vittor Javidan Webpage</title>
            </Head>
            <Background>
                <BrowserDisplay />
                <MobileDisplay />
                <Script type="text/javascript" defer src="/scripts/windowsScripts.js" />
            </Background>
        </div>
    )
}
