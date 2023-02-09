import Background from "@/components/background";
import Head from "next/head";
import { ReactNode } from "react";

function Whatever(): ReactNode {
    return <h1>
         Hiiiii   
    </h1>
}

export default function Home(): JSX.Element {
    return (<div>
        <Head>
            <title>Vitto Javidan Webpage</title>
        </Head>
        <Background>
        </Background>
    </div>)
}
