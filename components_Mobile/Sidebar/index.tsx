import MenuLabel from "@/components_Mobile/Sidebar/MenuLabel";
import NavMenu from "@/components_Mobile/Sidebar/NavMenu";
import { createContext } from "react";
import styles from './styles.module.css';

export const SidebarDataContext_Mobile = createContext({
	sidebarData: [{
		href: "",
		iconClassName: "",
		innerText: ""
	}]
})

export default function Sidebar(props: {
	sidebarData: {
		href: string
		iconClassName: string
		innerText: string
	}[]
}): JSX.Element {

	const sidebarData = {
		sidebarData: props.sidebarData
	}

    return (
		<SidebarDataContext_Mobile.Provider value={sidebarData}>
			<div className={`
				transform-gpu
				${styles.div}
			`}>
				<MenuLabel />
				<NavMenu />
			</div>
		</SidebarDataContext_Mobile.Provider>
	)
}

