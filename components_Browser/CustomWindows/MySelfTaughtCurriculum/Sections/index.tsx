import FoldersArea from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/Sections/FolderArea"
import Folders from "@/components_Browser/CustomWindows/MySelfTaughtCurriculum/Sections/Folders"
import Section from "@/components_Browser/Section"
import { selfTaughtCurriculumData } from "@/data/selfTaughtCurriculumData"

export default function Sections(): JSX.Element {

    return (<>
        {selfTaughtCurriculumData.map((data, index) => {

            const isLast = index + 1 === selfTaughtCurriculumData.length

            return (
                <Section 
                    sectionName={data.topic}
                    openSection_ExtraCSS={""}
                    closedSection_ExtraCSS={isLast ? "ACCESSIBILITY_lastWindowElement" : ""}
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
