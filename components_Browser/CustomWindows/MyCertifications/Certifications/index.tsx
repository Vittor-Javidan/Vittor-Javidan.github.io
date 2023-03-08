import Certificate from "@/components_Browser/Certificate";
import { certificatesData } from "@/data/certificatesData";

export default function Certifications(): JSX.Element {
    return (<>
        {certificatesData.map((data, index) => (
            <Certificate 
                title={data.title}
                institution={data.intitution}
                date={data.date}
                certificateURL={data.certificateURL}
                hoverMessage={data.hoverMessage}
                key={index}
                islast={(index + 1) === certificatesData.length}
            />
        ))}
    </>)
}