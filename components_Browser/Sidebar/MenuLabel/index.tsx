import { SidebarContext_Browser } from "@/components_Browser/Sidebar"
import { useContext } from "react"
import styles from './styles.module.css'

export default function MenuLabel(): JSX.Element {

	const { 
		sidebarOpen,
		sidebarMenuTitle
	} = useContext(SidebarContext_Browser)

	return (
		<div className={styles.div}>
			<img
				className={`
					transform-gpu
					${styles.img}
					${sidebarOpen 
						? styles.img_Open 
						: styles.img_Closed
					}
				`} 
				src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/Lone_Wisp_Logo_1024.png" 
				alt="logo image" 
			/>
			<h1 
				className={`
					transform-gpu
					${styles.h1}
					${sidebarOpen
						? styles.h1_Open
						: styles.h1_Closed
					}
				`}
			>
				{sidebarMenuTitle}
			</h1>
		</div>
	)
}