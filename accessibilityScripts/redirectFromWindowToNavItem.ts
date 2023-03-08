import SidebarAPI_Browser from "@/components_Browser/Sidebar/API"

export default function redirectFromWindowToNavItem(windowName: string): void {

    SidebarAPI_Browser.setActive(windowName, false)
    const navItemDOM = document.getElementById(`#${windowName.replaceAll(" ", "-")}-navItem`)
    if(navItemDOM) {
        navItemDOM.tabIndex = -1
        navItemDOM.focus()
        navItemDOM.tabIndex = 0
    }
}