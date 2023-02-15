import { Dispatch, SetStateAction } from "react";

export default class SidebarListItemsSetters {

    static activeSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}

    static registerSetter(o: {
        name: string,
        active: Dispatch<SetStateAction<boolean>>
    }): void {
        this.activeSetters[o.name] = o.active
    }
}