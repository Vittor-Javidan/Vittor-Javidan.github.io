import { Dispatch, SetStateAction } from "react";

export default class SidebarAPI {

    private static activeSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}

    static registerComponent(o: {
        name: string,
        setActive: Dispatch<SetStateAction<boolean>>
    }): void {
        this.activeSetters[o.name] = o.setActive
    }

    static setActive(ID: string, value: boolean): void {
        this.activeSetters[ID](value)
    }
}