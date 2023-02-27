import { ReactNode } from "react";

export default function Background(props: {children: ReactNode}): JSX.Element {
    return <div className={`
        relative z-0  
        h-screen w-screen
        bg-fixed bg-cover bg-center
        bg-[url('https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/background.jpg')] 
        overflow-hidden 
    `}>
        {props.children}
    </div>
}