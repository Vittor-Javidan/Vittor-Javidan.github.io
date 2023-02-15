import { Dispatch, SetStateAction } from "react";

export default class WindowsSetters {

    static visibleSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}
    static minimizedSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}

    static registerSetter(o: {
        name: string,
        visible: Dispatch<SetStateAction<boolean>>
        minimized: Dispatch<SetStateAction<boolean>>
    }): void {
        this.visibleSetters[o.name] = o.visible
        this.minimizedSetters[o.name] = o.minimized
    }
}