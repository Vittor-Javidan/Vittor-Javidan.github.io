import { SidebarContext } from "@/components/Sidebar"
import { useContext } from "react"
import styles from './styles.module.css'

export default function ToggleButton(props: {
	onClick: () => void
}): JSX.Element {

	const { sidebarOpen } = useContext(SidebarContext)

	return (
		<button 
			className={`
				transform-gpu
				${styles.button}
				${sidebarOpen
					? styles.button_SidebarOpen
					: styles.button_SidebarClosed
				}
			`}
			type="button"
			onClick={props.onClick}
		>
			<i className={`
				bx bxs-caret-right-circle 
				${styles.i}
				${sidebarOpen && styles.i_SidebarOpen}
			`}>
			</i>
		</button>
	)
}