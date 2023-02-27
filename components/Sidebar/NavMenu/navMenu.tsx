import ListItem from "@/components/Sidebar/NavMenu/ListItem/listItem"
import { SidebarContext, SidebarDataContext } from "@/components/Sidebar/sidebar"
import { useContext } from "react"

export default function NavMenu(): JSX.Element {

	const { sidebarOpen } = useContext(SidebarContext)
	const { sidebarData } = useContext(SidebarDataContext)
	
	return (
		<nav className={`
			relative
			py-[15px] mt-[20px] 
			box-content
		`}>
			<ul className={`
				flex flex-col
				mx-[15px]
			`}>
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