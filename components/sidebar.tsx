import Link from "next/link";
import { useState } from "react";
import { GoogleFonts } from "./fonts/googleFont";
import { BoxiconIcons } from "./icons/boxiconIcon";

export default function Sidebar(props: {
	menuTitle: string
	sidebarData: sidebarDataType[]
}): JSX.Element {

	const [isOpen, setIsOpen] = useState(false)

    return (<>
		<BoxiconIcons />
		<GoogleFonts />
        <div className={`
		
			fixed z-9
			h-screen 
			flex flex-col justify-between
			bg-black/75
			border-solid border-r-2  border-gray-700
			shadow-lg backdrop-blur-sm
			duration-[400ms] ease-linear
			
			${
				isOpen 
				? `w-[300px]` 
				: `w-[90px]`
			}
			`
		}>
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
				
				${
					props.isActive
					? (`
						left-[290px] top-[50vh]
						rounded-toggleOpen rounded-r-full
						scale-[1.4]
					`)
					: (`
						left-[67px] top-[100px]
						rounded-toggleClosed
					`)
				}
			`}
			type="button"
			onClick={props.onClick}
		>
			<i className={`
				bx bxs-caret-right-circle 
				text-[36px] opacity-70
			`}></i>
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

					${
						props.isActive
						? `h-[200px]`
						: `h-[56px]`
					}
				`} 
				src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/Lone_Wisp_Logo_1024.png" 
				alt="logo image" 
			/>
			<h1 className={`
				mt-[12px]
				text-[3.6rem] font-Roboto font-bold
				text-white				
			` + (props.isActive
				? (`
					mt-[35px]
					delay-[600ms]
					scale-1 opacity-1
					duration-[400ms] ease-linear
				`)
				: (`
					opacity-0 
				`)
			)}>
				{props.menuTitle}
			</h1>
		</div>
	)
}

function NavMenu(props: {
	sidebarData: sidebarDataType[];
	isActive: boolean;
}): JSX.Element {

	const listItemArray = props.sidebarData.map((data, index) => (
		<ListItem 
			sidebarData={ data }
			sidebarOpen={props.isActive}
			key={index}
		/>
	))
	
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
	sidebarData: sidebarDataType,
	sidebarOpen: boolean
}): JSX.Element {

	const [selected, setSelected] = useState(false)

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

				${selected && (`
					border-[2px] border-gray-700 border-opacity-30
					bg-fuchsia-600
					hover:bg-fuchsia-700
					hover:shadow-custom
					hover:z-10
					hover:translate-x-[10px]
					hover:duration-[150ms]
					active:bg-gray-700
				`)}

				${selected && !props.sidebarOpen && (`
					w-[85px]
					duration-[400ms] ease-linear
					hover:shadow-custom
					hover:z-10
				`)}

				${selected && props.sidebarOpen && (`
					w-[300px]
					duration-[400ms] ease-linear
					hover:w-[400px]
					hover:rounded-navItemSidebarOpen
					hover:bg-fuchsia-500
				`)}
			`}
			onClick={() => {
				setSelected(prev => !prev)
			}}
		>
			<Link 
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
						
						${props.sidebarOpen && (`
							w-auto pl-[14px] 
							scale-1 opacity-1
							duration-[400ms]
							delay-[600ms]
						`)}

						${(!props.sidebarOpen) && (`
							w-[0px] 
							opacity-0
						`)}
					`}
				>
					{props.sidebarData.innerText}
				</span>
			</Link>
		</li>	
	)
}

type sidebarDataType = {
	href: string;
	iconClassName: string;
	innerText: string;
}