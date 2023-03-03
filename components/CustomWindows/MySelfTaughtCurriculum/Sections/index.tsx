import FoldersArea from "@/components/CustomWindows/MySelfTaughtCurriculum/Sections/FolderArea"
import Folders from "@/components/CustomWindows/MySelfTaughtCurriculum/Sections/Folders"
import Section from "@/components/Section"
import { selfTaughtCurriculumData } from "@/data/selfTaughtCurriculumData"

export default function Sections() {

    return (<>
        {selfTaughtCurriculumData.map((data, index) => {

            const isLast = index + 1 === selfTaughtCurriculumData.length

            return (
                <Section 
                    sectionName={data.topic}
                    extraCSS_Open={""}
                    extraCSS_Closed={isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
                    key={index}
                >
                    <FoldersArea>
                        <Folders 
                            lastSection={isLast}
                            topicItems={data.itemList}
                        />
                    </FoldersArea>
                </Section>
            )
        })}
    </>)
}
