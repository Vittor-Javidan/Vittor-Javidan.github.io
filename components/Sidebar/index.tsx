import MenuLabel from "@/components/Sidebar/MenuLabel";
import NavMenu from "@/components/Sidebar/NavMenu";
import ToggleButton from "@/components/Sidebar/ToggleButton";
import { createContext, useState } from "react";
import styles from './styles.module.css';

export const SidebarContext = createContext({
	sidebarOpen: false,
	sidebarMenuTitle: ""
})

export const SidebarDataContext = createContext({
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
		<SidebarContext.Provider value={sidebarProps}>
		<SidebarDataContext.Provider value={sidebarData}>
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
		</SidebarDataContext.Provider>
		</SidebarContext.Provider>
	)
}

