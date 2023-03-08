import FoldersArea from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/Sections/FolderArea"
import Folders from "@/components_Mobile/CustomWindows/MySelfTaughtCurriculum/Sections/Folders"
import Section from "@/components_Mobile/Section"
import { selfTaughtCurriculumData } from "@/data/selfTaughtCurriculumData"

export default function Sections() {

    return (<>
        {selfTaughtCurriculumData.map((data, index) => (
            <Section 
                sectionName={data.topic}
                key={index}
            >
                <FoldersArea>
                    <Folders 
                        topicItems={data.itemList}
                    />
                </FoldersArea>
            </Section>
        ))}
    </>)
}
