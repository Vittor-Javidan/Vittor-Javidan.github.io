import { SidebarContext_Browser, SidebarDataContext_Browser } from "@/components_Browser/Sidebar"
import ListItem from "@/components_Browser/Sidebar/NavMenu/ListItem"
import { useContext } from "react"
import styles from './styles.module.css'

export default function NavMenu(): JSX.Element {

	const { sidebarOpen } = useContext(SidebarContext_Browser)
	const { sidebarData } = useContext(SidebarDataContext_Browser)
	
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				{sidebarData.map((data, index) => {

                    let startSelected

                    index === 0
                    ? startSelected = true
                    : startSelected = false

                    return (
                        <ListItem 
                            sidebarData={data}
                            sidebarOpen={sidebarOpen}
                            startSelected={startSelected}
                            ID={`#${data.innerText.replaceAll(" ", "-")}-navItem`}
                            key={index}
                        />
                    )
                })}
			</ul>
		</nav>
	)
}