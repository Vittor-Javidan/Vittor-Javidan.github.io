import { Dispatch, SetStateAction } from "react";

export default class WindowsSetters {

    static visibleSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}
    static minimizedSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}
    static expandedSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}

    static registerSetter(o: {
        name: string,
        setVisible: Dispatch<SetStateAction<boolean>>
        setMinimized: Dispatch<SetStateAction<boolean>>
        setExpanded: Dispatch<SetStateAction<boolean>>
    }): void {
        this.visibleSetters[o.name] = o.setVisible
        this.minimizedSetters[o.name] = o.setMinimized
        this.expandedSetters[o.name] = o.setExpanded
    }
}