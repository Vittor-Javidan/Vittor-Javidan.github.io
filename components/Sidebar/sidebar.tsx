import MenuLabel from "@/components/Sidebar/MenuLabel/menuLabel";
import NavMenu from "@/components/Sidebar/NavMenu/navMenu";
import ToggleButton from "@/components/Sidebar/ToggleButton/toggleButton";
import { createContext, ReactNode, useContext, useState } from "react";

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

	const [isOpen, setIsOpen] = useState(false)

	const sidebarProps = {
		sidebarOpen: isOpen,
		sidebarMenuTitle: props.menuTitle
	}

	const sidebarData = {
		sidebarData: props.sidebarData
	}

    return (
		<SidebarContext.Provider value={sidebarProps}>
		<SidebarDataContext.Provider value={sidebarData}>
			<MainDiv>
				<ToggleButton 
					onClick={() => setIsOpen(prev => !prev)}  
				/>
				<MenuLabel />
				<NavMenu />
			</MainDiv>
		</SidebarDataContext.Provider>
		</SidebarContext.Provider>
	)
}

function MainDiv(props: {
	children: ReactNode
}): JSX.Element {

	const { sidebarOpen } = useContext(SidebarContext)

	return (
		<div className={`
		
			fixed z-10
			h-full
			flex flex-col justify-between
			bg-black/75
			border-solid border-r-2  border-gray-700
			shadow-lg backdrop-blur-sm
			duration-[400ms] ease-linear
			
			${sidebarOpen && `w-[300px]`}
			${!sidebarOpen && `w-[90px]`}
		`}>
			{props.children}
		</div>
	)
}
