import { Dispatch, SetStateAction } from "react";

export default class WindowsAPI {

    private static IDs: string[] = []
    private static visibleSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}
    private static minimizedSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}
    private static expandedSetters: Record<string, Dispatch<SetStateAction<boolean>>> = {}

    static registerComponent(o: {
        ID: string,
        setVisible: Dispatch<SetStateAction<boolean>>
        setMinimized: Dispatch<SetStateAction<boolean>>
        setExpanded: Dispatch<SetStateAction<boolean>>
    }): void {
        this.visibleSetters[o.ID] = o.setVisible
        this.minimizedSetters[o.ID] = o.setMinimized
        this.expandedSetters[o.ID] = o.setExpanded

        this.IDs = Object.keys(this.visibleSetters)
    }

    static setVisible(ID: string, value: boolean): void {
        this.visibleSetters[ID](value)
    }

    static setMinimized(ID: string, value: boolean): void {
        this.minimizedSetters[ID](value)
    }

    static setExpanded(ID: string, value: boolean): void {
        this.expandedSetters[ID](value)
    }

    static forEach(callBack: (ID: string) => void): void {
        this.IDs.forEach(ID => (
            callBack(ID)
        ))
    }
}