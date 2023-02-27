import { focusWindowOnClick } from "@/accessibilityScripts/focusWindowOnClick"
import SidebarAPI from "@/components/Sidebar/sidebarAPI"
import WindowsAPI from "@/components/WindowBox/windowBoxAPI"
import Link from "next/link"
import { useState } from "react"

export default function ListItem(props: {
	sidebarData: {
		href: string
		iconClassName: string
		innerText: string
	}
	sidebarOpen: boolean
	startSelected: boolean
	ID: string
}): JSX.Element {

	const [selected, setSelected] = useState(props.startSelected)
	
	const listItemName = props.sidebarData.innerText

	SidebarAPI.registerComponent({
		name: listItemName,
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
			onClick={(event) => {

				const name = props.sidebarData.innerText
				
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

				focusWindowOnClick(`#${listItemName.replaceAll(" ", "-")}-window`, selected, event)
				setSelected(prev => !prev)
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