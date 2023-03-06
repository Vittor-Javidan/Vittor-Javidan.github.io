import { SidebarContext, SidebarDataContext } from "@/components/Sidebar"
import ListItem from "@/components/Sidebar/NavMenu/ListItem"
import { useContext } from "react"
import styles from './styles.module.css'

export default function NavMenu(): JSX.Element {

	const { sidebarOpen } = useContext(SidebarContext)
	const { sidebarData } = useContext(SidebarDataContext)
	
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