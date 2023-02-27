import { SidebarContext } from "@/components/Sidebar"
import { useContext } from "react"

export default function MenuLabel(): JSX.Element {

	const { 
		sidebarOpen,
		sidebarMenuTitle
	} = useContext(SidebarContext)

	return (
		<div className={`
			w-auto py-[15px]
			flex flex-col items-center text-center 
		`}>
			<img
				className={`

					duration-[400ms] ease-linear
					transform-gpu

					${sidebarOpen && `h-[200px]`}
					${!sidebarOpen && `h-[56px]`}
				`} 
				src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/Lone_Wisp_Logo_1024.png" 
				alt="logo image" 
			/>
			<h1 className={`

				mt-[12px]
				text-[3.6rem] font-Roboto font-bold
				text-white	
				
				${sidebarOpen && `
					mt-[35px]
					delay-[400ms]
					scale-1 opacity-1
					duration-[400ms] ease-linear
				`}		
				
				${!sidebarOpen && `opacity-0`}	
			`}>
				{sidebarMenuTitle}
			</h1>
		</div>
	)
}