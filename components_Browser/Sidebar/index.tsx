import MenuLabel from "@/components_Browser/Sidebar/MenuLabel";
import NavMenu from "@/components_Browser/Sidebar/NavMenu";
import ToggleButton from "@/components_Browser/Sidebar/ToggleButton";
import { createContext, useState } from "react";
import styles from './styles.module.css';

export const SidebarContext_Browser = createContext({
	sidebarOpen: false,
	sidebarMenuTitle: ""
})

export const SidebarDataContext_Browser = createContext({
	sidebarData: [{
		href: "",
		iconClassName: "",
		innerText: ""
	}]
})

export default function Sidebar(props: {
	menuTitle: string
	sidebarData: {
		href: string
		iconClassName: string
		innerText: string
	}[]
}): JSX.Element {

	const [open, setOpen] = useState(false)

	const sidebarProps = {
		sidebarOpen: open,
		sidebarMenuTitle: props.menuTitle
	}

	const sidebarData = {
		sidebarData: props.sidebarData
	}

    return (
		<SidebarContext_Browser.Provider value={sidebarProps}>
		<SidebarDataContext_Browser.Provider value={sidebarData}>
			<div className={`
				transform-gpu
				${styles.div}
				${open
					? styles.open
					: styles.closed
				}
			`}>
				<ToggleButton 
					onClick={() => setOpen(prev => !prev)}  
				/>
				<MenuLabel />
				<NavMenu />
			</div>
		</SidebarDataContext_Browser.Provider>
		</SidebarContext_Browser.Provider>
	)
}

