import SidebarAPI_Mobile from "@/components_Mobile/Sidebar/API"
import WindowsAPI_Mobile from "@/components_Mobile/WindowBox/API"
import Link from "next/link"
import { useState } from "react"
import styles from './styles.module.css'

export default function ListItem(props: {
	sidebarData: {
		href: string
		iconClassName: string
		innerText: string
	}
	startSelected: boolean
	ID: string
}): JSX.Element {

	const [selected, setSelected] = useState(props.startSelected)
	const listItemName = props.sidebarData.innerText

	SidebarAPI_Mobile.registerComponent({
		name: listItemName,
		setActive: setSelected
	})

	return (
		<li 
			className={`
				${styles.li}
				${selected && styles.li_Selected}
			`}
			onClick={(event) => {

				const name = props.sidebarData.innerText
				
				if(selected) {
					
					WindowsAPI_Mobile.setVisible(name, false)
					WindowsAPI_Mobile.setMinimized(name, true)

				} else {
					
					SidebarAPI_Mobile.forEach(id => {
						SidebarAPI_Mobile.setActive(id, false)
					})
					WindowsAPI_Mobile.forEach(id => {
						WindowsAPI_Mobile.setVisible(id, false)
					})
					WindowsAPI_Mobile.setVisible(name, true)
					WindowsAPI_Mobile.setMinimized(name, true)
					
					setTimeout(() => {
						WindowsAPI_Mobile.setMinimized(name, false)
					}, 600)
				}
				setSelected(prev => !prev)
			}}
		>
			<Link 
				tabIndex={-1}
				id={props.ID}
				className={styles.link} 
				href={`${props.sidebarData.href}`}
			>
				<i 
					className={`
						${props.sidebarData.iconClassName}
						${styles.i}
					`} 
				></i>
				<span
					className={styles.span}
				>
					{props.sidebarData.innerText}
				</span>
			</Link>
		</li>	
	)
}