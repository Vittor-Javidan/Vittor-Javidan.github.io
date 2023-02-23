import SidebarAPI from "@/ComponentsAPIs/sidebarAPI";
import WindowsAPI from "@/ComponentsAPIs/windowAPI";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar(props: {
	menuTitle: string
	sidebarData: sidebarDataType[]
}): JSX.Element {

	const [isOpen, setIsOpen] = useState(false)

    return (<>
        <div className={`
		
			fixed z-10
			h-screen 
			flex flex-col justify-between
			bg-black/75
			border-solid border-r-2  border-gray-700
			shadow-lg backdrop-blur-sm
			duration-[400ms] ease-linear
			
			${isOpen && `w-[300px]`}
			${!isOpen && `w-[90px]`}
		`}>
			<ToggleButton 
				onClick={() => setIsOpen(prev => !prev)} 
				isActive={isOpen} 
			/>
			<MenuLabel 
				menuTitle={props.menuTitle}
				isActive={isOpen}
			/>
			<NavMenu 
				sidebarData={props.sidebarData}
				isActive={isOpen}
			/>
		</div>
    </>)
}

function ToggleButton(props: {
	onClick: () => void
	isActive: boolean
}): JSX.Element {

	return (
		<button 
			className={`
			
				absolute z-10
				w-[43px] h-[43px] pt-[3px]
				flex justify-center 
				bg-fuchsia-600
				cursor-pointer
				transform-gpu
				duration-[400ms] ease-linear
				shadow-customToggle
				hover:shadow-fuchsia-600
				active:bg-white
				active:duration-[100ms]
				
				${props.isActive && `
					left-[290px] top-[50vh]
					rounded-toggleOpen rounded-r-full
					scale-[1.4]
				`}

				${!props.isActive && `
					left-[67px] top-[100px]
					rounded-toggleClosed
				`}
			`}
			type="button"
			onClick={props.onClick}
		>
			<i className={`

				bx bxs-caret-right-circle 
				text-[36px] opacity-70

				${props.isActive && `
					rotate-180
				`}
			`}>
			</i>
		</button>
	)
}

function MenuLabel(props: {
	menuTitle: string
	isActive: boolean
}): JSX.Element {

	return (
		<div className={`
			w-auto py-[15px]
			flex flex-col items-center text-center 
		`}>
			<img
				className={`

					duration-[400ms] ease-linear
					transform-gpu

					${props.isActive && `h-[200px]`}
					${!props.isActive && `h-[56px]`}
				`} 
				src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/Lone_Wisp_Logo_1024.png" 
				alt="logo image" 
			/>
			<h1 className={`

				mt-[12px]
				text-[3.6rem] font-Roboto font-bold
				text-white	
				
				${props.isActive && `
					mt-[35px]
					delay-[400ms]
					scale-1 opacity-1
					duration-[400ms] ease-linear
				`}		
				
				${!props.isActive && `opacity-0`}	
			`}>
				{props.menuTitle}
			</h1>
		</div>
	)
}

function NavMenu(props: {
	sidebarData: sidebarDataType[]
	isActive: boolean
}): JSX.Element {

	const listItemArray = props.sidebarData.map((data, index) => {

		let startSelected

		index === 0
		? startSelected = true
		: startSelected = false

		return (
			<ListItem 
				sidebarData={data}
				sidebarOpen={props.isActive}
				startSelected={startSelected}
				ID={`#${data.innerText.replaceAll(" ", "-")}-navItem`}
				key={index}
			/>
		)
	})
	
	return (
		<nav className={`
			relative
			py-[15px] mt-[20px] 
			box-content
		`}>
			<ul className={`
				flex flex-col
				mx-[15px]
			`}>
				{...listItemArray}
			</ul>
		</nav>
	)
}

function ListItem(props: {
	sidebarData: sidebarDataType
	sidebarOpen: boolean
	startSelected: boolean
	ID: string
}): JSX.Element {

	const [selected, setSelected] = useState(props.startSelected)
	const name = props.sidebarData.innerText
	const windowRefID = `#${name.replaceAll(" ", "-")}-window`

	SidebarAPI.registerComponent({
		name: name,
		setActive: setSelected
	})

	return (
		<li 
			className={`
			
				h-[60px]
				rounded-[10px]
				cursor-pointer
				transform-gpu
				active:bg-fuchsia-600

				${!selected && (`
					hover:bg-gray-700
				`)}

				${selected && `
					border-[2px] border-gray-700 border-opacity-30
					bg-fuchsia-600
					duration-[400ms] ease-linear
					hover:bg-fuchsia-700
					hover:shadow-custom
					hover:z-10
					hover:translate-x-[10px]
					hover:duration-[150ms]
					active:bg-gray-700
				`}

				${selected && !props.sidebarOpen && `
					w-[85px]
					hover:shadow-custom
				`}

				${selected && props.sidebarOpen && `
					w-[300px]
					hover:w-[400px]
					hover:rounded-navItemSidebarOpen
					hover:bg-fuchsia-500
				`}
			`}
			onClick={() => {

				const name = props.sidebarData.innerText
				
				setSelected(prev => !prev)
				
				if(selected) {
					
					WindowsAPI.setVisible(name, false)
					WindowsAPI.setMinimized(name, true)

				} else {
					
					WindowsAPI.setVisible(name, true)
					WindowsAPI.setMinimized(name, true)
					
					setTimeout(() => {
						WindowsAPI.setMinimized(name, false)
					}, 600)
				}

				//TabIndex Accecibility
				const target = document.getElementById(windowRefID)
				if(target) {
					target.tabIndex = -1
					target.focus()
					target.tabIndex = 0
				}
			}}
		>
			<Link 
				id={props.ID}
				tabIndex={0}
				className={
					
					`h-[56px] py-[16px] 
					flex justify-start
					text-white

					focus:rounded-[10px]
					focus:outline-fuchsia-600`
				} 
				href={`${props.sidebarData.href}`}
			>
				<i className={`
					text-[2.6rem] ml-[14px]
					${props.sidebarData.iconClassName}`} 
				></i>
				<span
					className={`
					
						text-[1.6rem] 
						pointer-events-none
						
						${props.sidebarOpen && `
							w-auto pl-[14px] 
							scale-1 opacity-1
							duration-[400ms]
							delay-[400ms]
						`}

						${!props.sidebarOpen && `
							w-[0px] 
							scale-0
							opacity-0
						`}
					`}
				>
					{props.sidebarData.innerText}
				</span>
			</Link>
		</li>	
	)
}

type sidebarDataType = {
	href: string
	iconClassName: string
	innerText: string
}