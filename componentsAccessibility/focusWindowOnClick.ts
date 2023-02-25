import { MouseEvent } from "react"
import windowChildrenTabIndexHandler from "./windowChildrenTabIndexHandler"

export function focusWindowOnClick(ID: string, selected: boolean, event: MouseEvent<HTMLLIElement, any>): void {

    const window = document.getElementById(ID)
				
    if(window) {

        //focus on window
        if(!selected) {
            event.preventDefault()
            window.focus()
            windowChildrenTabIndexHandler(ID, 0)
        }
    }
}