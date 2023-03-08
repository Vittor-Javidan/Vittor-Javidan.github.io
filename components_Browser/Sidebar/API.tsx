import { Dispatch, SetStateAction } from "react";

export default class SidebarAPI_Browser {

    private static IDs: string[] = []
    private static activeSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}

    static registerComponent(o: {
        name: string,
        setActive: Dispatch<SetStateAction<boolean>>
    }): void {
        this.activeSetters[o.name] = o.setActive
        this.IDs = Object.keys(this.activeSetters)
    }

    static setActive(ID: string, value: boolean): void {
        this.activeSetters[ID](value)
    }

    static forEach(callBack: (ID: string) => void): void {
        this.IDs.forEach(ID => (
            callBack(ID)
        ))
    }
}