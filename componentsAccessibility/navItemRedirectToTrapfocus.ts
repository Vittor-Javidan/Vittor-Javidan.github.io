export default function navItemRedirectToTrapfocus(ID:string, selected: boolean): void {

    const window = document.getElementById(ID)
    if(!window || !selected) {
        return
    }

	window.focus()
}