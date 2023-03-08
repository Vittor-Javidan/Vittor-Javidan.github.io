import Certificate from "@/components_Mobile/Certificate";
import { certificatesData } from "@/data/certificatesData";

export default function Certifications(): JSX.Element {
    return (<>
        {certificatesData.map((data, index) => (
            <Certificate 
                title={data.title}
                institution={data.intitution}
                date={data.date}
                certificateURL={data.certificateURL}
                LinkLabelMessage={data.hoverMessage}
                key={index}
            />
        ))}
    </>)
}