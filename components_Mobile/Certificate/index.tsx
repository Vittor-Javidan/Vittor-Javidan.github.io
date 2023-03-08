import CertificateContent from "@/components_Mobile/Certificate/CertificateContent";
import CertificateInfo from "@/components_Mobile/Certificate/CertificateInfo";
import CertificateLink from "@/components_Mobile/Certificate/CertificateLink";
import Link from "next/link";

export default function Certificate(props: {
    title: string
    institution: string
    date: string
    certificateURL: string
    LinkLabelMessage: string
}): JSX.Element {
        
    return (
        <Link
            tabIndex={-1}
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
                <CertificateLink 
                    LinkLabelMessage={props.LinkLabelMessage}
                />
            </CertificateContent>
        </Link>
    )
}
