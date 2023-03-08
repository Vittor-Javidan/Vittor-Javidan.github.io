import CertificateContent from "@/components_Browser/Certificate/CertificateContent";
import CertificateInfo from "@/components_Browser/Certificate/CertificateInfo";
import HoverMessage from "@/components_Browser/Certificate/HoverMessage";
import Link from "next/link";

export default function Certificate(props: {
    title: string
    institution: string
    date: string
    certificateURL: string
    hoverMessage: string
    islast: boolean
}): JSX.Element {
        
    return (
        <Link
            className={props.islast ? "ACCESSIBILITY_lastWindowElement": ""}
            href={props.certificateURL}
            target={props.certificateURL !== "" ? "_blank" : ""}
        >
            <CertificateContent
                institution={props.institution}
            > 
                <CertificateInfo
                    title={props.title}
                    institution={props.institution}
                    date={props.date}
                />
                <HoverMessage 
                    hoverMessage={props.hoverMessage}
                />
            </CertificateContent>
        </Link>
    )
}
