import { SidebarContext } from "@/components/Sidebar/sidebar"
import { useContext } from "react"

export default function ToggleButton(props: {
	onClick: () => void
}): JSX.Element {

	const { sidebarOpen } = useContext(SidebarContext)

	return (
		<button 
			className={`
			
				absolute z-10
				w-[43px] h-[43px] pt-[3px]
				flex justify-center 
				bg-fuchsia-600
				cursor-pointer
				transform-gpu
				duration-[400ms] ease-linear
				shadow-customToggle
				hover:shadow-fuchsia-600
				active:bg-white
				active:duration-[100ms]
				
				${sidebarOpen && `
					left-[290px] top-[50%]
					rounded-toggleOpen rounded-r-full
					scale-[1.4]
				`}

				${!sidebarOpen && `
					left-[67px] top-[100px]
					rounded-toggleClosed
				`}
			`}
			type="button"
			onClick={props.onClick}
		>
			<i className={`

				bx bxs-caret-right-circle 
				text-[36px] opacity-70

				${sidebarOpen && `
					rotate-180
				`}
			`}>
			</i>
		</button>
	)
}