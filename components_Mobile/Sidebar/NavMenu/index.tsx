import { SidebarDataContext_Mobile } from "@/components_Mobile/Sidebar"
import ListItem from "@/components_Mobile/Sidebar/NavMenu/ListItem"
import { useContext } from "react"
import styles from './styles.module.css'

export default function NavMenu(): JSX.Element {

	const { sidebarData } = useContext(SidebarDataContext_Mobile)
	
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