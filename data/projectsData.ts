export const projectsData: {
    projectType: string
    itemList: {
        projectName: string
        url: string
        tecnologies: string
    }[]
}[] = [
    {
        projectType: "Mobile Apps",
        itemList: [
            {
                projectName: "Wall Paint Calculator",
                tecnologies: "Javascript, React Native",
                url: "https://play.google.com/store/apps/details?id=com.lonewispapps.wallpaintcalculatormobile"
            }
        ]
    },
    {
        projectType: "Websites",
        itemList: [
            {
                projectName: "clone of: devall.com.br",
                tecnologies: "TypeScript, NextJS",
                url: "https://vittor-javidan.github.io/Dev_All/"
            }
        ]
    },
    {
        projectType: "Proof of Concept (POCs)",
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
            {
                projectName: "Modals With Dialog HTML tag and only one ref",
                tecnologies: "React",
                url: "https://vittor-javidan.github.io/POC_Modal_Dialog_Children_OneRef_Typescript/",
            },
        ]
    },
]