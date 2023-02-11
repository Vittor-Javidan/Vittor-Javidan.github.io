import Link from "next/link";
import { useState } from "react";
import { GoogleFonts } from "./fonts/googleFont";
import { BoxiconIcons } from "./icons/boxiconIcon";

export default function Sidebar(props: {
	menuTitle: string
	sidebarData: sidebarDataType[]
}): JSX.Element {
    return (<>
		<BoxiconIcons />
		<GoogleFonts />
        <div className={`
			fixed z-9 
			w-[90px] h-screen 
			flex flex-col justify-between 
			bg-black/75 
			border-solid border-r-2  border-gray-700
			shadow-lg backdrop-blur-sm
		`}>

			<ToggleButton />
			<Logo menuTitle={props.menuTitle}/>
			<NavMenu sidebarData={props.sidebarData}/>
		</div>
    </>)
}

function ToggleButton(): JSX.Element {
	return (
		<div className={`
			absolute left-[67px] top-[100px] z-10
			w-[43px] h-[43px] pt-[3px] rounded-full
			flex justify-center 
			bg-fuchsia-600 
			cursor-pointer

			active:bg-white
			active:transition-[0.05s]
		`}>
			<i className={`
				bx bxs-caret-right-circle 
				text-[36px] opacity-70
			`}></i>
		</div>
	)
}

function Logo(props: {menuTitle: string}): JSX.Element {
	return (
		<div className={`
			w-auto py-[15px]
			flex flex-col items-center text-center 
		`}>
			<img
				className="h-[56px]" 
				src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/Lone_Wisp_Logo_1024.png" 
				alt="logo image" 
			/>
			<h1 className={`
				mt-[12px]
				text-[3.6rem] font-variant-caps
				opacity-0
			`}>
				{props.menuTitle}
			</h1>
		</div>
	)
}

function NavMenu(props: {
	sidebarData: sidebarDataType[]
}): JSX.Element {

	const listItemArray = props.sidebarData.map((data, index) => (
		<ListItem 
			iconClassName={data.iconClassName}
			innerText={data.innerText} 
			href={data.href}
			key={index}
		/>
	))
	
	return (
		<nav className={`
			py-[15px] mt-[20px] 
			box-content
		`}>
			<ul className="
				flex flex-col
				mx-[15px]
			">
				{...listItemArray}
			</ul>
		</nav>
	)
}

function ListItem(props: sidebarDataType): JSX.Element {

	const [selected, setSelected] = useState(false)

	return <>
		<li 
			className={
				selected
				? (`
					w-[80px] h-[60px] rounded-[10px]
					bg-fuchsia-600
					border-[2px] border-solid border-gray-800 border-opacity-10
					cursor-pointer 
					transition-[0.15s]
					ease-linear
					transform-gpu

					hover:translate-x-[10px]
					hover:z-20
					hover:shadow-custom
				`)
				: (`
					w-auto 
					rounded-[10px] 
					cursor-pointer
					transition-[0.15s]
					ease-linear
					transform-gpu
				
					hover:bg-gray-700
			
					active:bg-fuchsia-600
					active:transition-[0.05s]
				`)
			}
			onClick={() => {
				setSelected(prev => !prev)
			}}
		>
			<Link 
				tabIndex={0}
				className={
					`h-[56px] py-[16px] 
					flex justify-center 
					text-white

					focus:rounded-[10px]
					focus:outline-fuchsia-600 
					`
				} 
				href={`${props.href}`}
			>
				<i className={`text-[2.6rem] ${props.iconClassName}`} ></i>
				<span
					className={`
						w-[0px] text-[1.8rem] 
						scale-0 opacity-0
						pointer-events-none 
					`}
				>
					{props.innerText}
				</span>
			</Link>
		</li>	
	</>
}

type sidebarDataType = {
	href: string;
	iconClassName: string;
	innerText: string;
}