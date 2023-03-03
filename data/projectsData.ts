export const projectsData: {
    projectType: string
    itemList: {
        projectName: string
        url: string
        tecnologies: string
    }[]
}[] = [
    {
        projectType: "ISOLATED FEATURES",
        itemList: [
            {
                projectName: "Draggable Element",
                tecnologies: "Javascript, HTML, CSS",
                url: "https://vittor-javidan.github.io/DraggableWithoutNPM",
            },
            {
                projectName: "Partial Draggable Element",
                tecnologies: "Javascript, HTML, CSS",
                url: "https://vittor-javidan.github.io/PartialDraggableElement/",
            },
            
        ]
    },
    {
        projectType: "MOBILE APPS",
        itemList: [
            {
                projectName: "Wall Paint Calculator",
                tecnologies: "Javascript, React Native",
                url: "https://play.google.com/store/apps/details?id=com.lonewispapps.wallpaintcalculatormobile"
            }
        ]
    }
]