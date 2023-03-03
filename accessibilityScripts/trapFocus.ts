import { KeyboardEvent } from "react"

/**
* inside the HTML element wich you provide the ID, you need to add the classes 
* `ACCESSIBILITY_firstWindowElement` and `ACCESSIBILITY_lastWindowElement`
* for both first focusable element and last focusable element. After that,
* trapFocus is finished.
* 
* @param ID HTML ID atribute
* @param event onKeyDown event
*/
export default  function trapFocus(ID:string, event: KeyboardEvent<HTMLElement>): void {
   
    const window = document.getElementById(ID)
    if(!window) {
        return
    }

    const firstWindowElement = window.getElementsByClassName("ACCESSIBILITY_firstWindowElement")[0] as HTMLElement
    const lastWindowElement = window.getElementsByClassName("ACCESSIBILITY_lastWindowElement")[0] as HTMLElement
    const target = event.target as HTMLElement

    if(event.key === "Tab" && event.shiftKey === false) {
        if(target === lastWindowElement) {
            event.preventDefault()
            firstWindowElement.focus()
            return
        }

    }
    
    if(event.key === "Tab" && event.shiftKey === true) {
        if(target === firstWindowElement) {
            event.preventDefault()
            lastWindowElement.focus()
            return
        }
    }
}



