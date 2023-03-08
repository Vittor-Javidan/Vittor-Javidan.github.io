import { focusWindowOnClick } from "@/accessibilityScripts/focusWindowOnClick"
import SidebarAPI_Browser from "@/components_Browser/Sidebar/API"
import WindowsAPI_Browser from "@/components_Browser/WindowBox/API"
import Link from "next/link"
import { useState } from "react"
import styles from './styles.module.css'

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

	SidebarAPI_Browser.registerComponent({
		name: listItemName,
		setActive: setSelected
	})

	return (
		<li 
			className={`
				transform-gpu
				${styles.li}
				${selected 
					? styles.li_Selected 
					: styles.li_NotSelected
				}
				${selected && props.sidebarOpen && styles.li_Selected_SidebarOpen}
				${selected && !props.sidebarOpen && styles.li_Selected_SidebarClosed}
			`}
			onClick={(event) => {

				const name = props.sidebarData.innerText
				
				if(selected) {
					
					WindowsAPI_Browser.setVisible(name, false)
					WindowsAPI_Browser.setMinimized(name, true)

				} else {
					
					WindowsAPI_Browser.setVisible(name, true)
					WindowsAPI_Browser.setMinimized(name, true)
					
					setTimeout(() => {
						WindowsAPI_Browser.setMinimized(name, false)
					}, 600)
				}

				focusWindowOnClick(`#${listItemName.replaceAll(" ", "-")}-window`, selected, event)
				setSelected(prev => !prev)
			}}
		>
			<Link 
				id={props.ID}
				tabIndex={0}
				className={styles.link} 
				href={`${props.sidebarData.href}`}
			>
				<i className={`
					${styles.i}
					${props.sidebarData.iconClassName}`} 
				></i>
				<span
					className={`
						${styles.span}
						${props.sidebarOpen 
							? styles.span_SidebarOpen
							: styles.span_SidebarClosed
						}
					`}
				>
					{props.sidebarData.innerText}
				</span>
			</Link>
		</li>	
	)
}