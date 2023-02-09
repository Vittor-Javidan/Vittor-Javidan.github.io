import { ReactNode } from "react";

export default function Background(props: {children: ReactNode}): JSX.Element {
    return <div className="absolute z-0 h-screen w-screen bg-cover bg-center border-red-500 border-2 bg-[url('https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/background.jpg')]">
        {props.children}
    </div>
}