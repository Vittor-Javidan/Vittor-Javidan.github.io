import { focusWindowOnClick } from "@/accessibilityScripts/focusWindowOnClick"
import SidebarAPI from "@/components/Sidebar/API"
import WindowsAPI from "@/components/WindowBox/componentAPI"
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

	SidebarAPI.registerComponent({
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