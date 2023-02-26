import SidebarAPI from "@/ComponentsAPIs/sidebarAPI"

export default function redirectFromWindowToNavItem(windowName: string): void {

    SidebarAPI.setActive(windowName, false)
    const navItemDOM = document.getElementById(`#${windowName.replaceAll(" ", "-")}-navItem`)
    if(navItemDOM) {
        navItemDOM.tabIndex = -1
        navItemDOM.focus()
        navItemDOM.tabIndex = 0
    }
}