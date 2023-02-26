export default function setWindowChildrenTabIndexNegative(windowHtmlID: string, tabIndex: number): void {
    const self = document.getElementById(windowHtmlID)
    if(self) {
        const targetChildrenNodeList = self.querySelectorAll(".tabIndex-1") as NodeListOf<HTMLElement>
        targetChildrenNodeList.forEach(child => {
            child.tabIndex = tabIndex
        })
    }
}