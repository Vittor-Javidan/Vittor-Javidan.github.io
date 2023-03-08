import CertificateInstitution from '@/components_Browser/Certificate/CertificateInfo/CertificateInstitution';
import CertificateTitle from '@/components_Browser/Certificate/CertificateInfo/CertificateTitle';
import EmissionData from '@/components_Browser/Certificate/CertificateInfo/EmissionData';
import styles from './styles.module.css';

export default function CertificateInfo(props: {
    title: string
    institution: string
    date: string
}): JSX.Element {
    return (
        <div
            className={styles.CertificateInfo}
        >
            <CertificateTitle
                title={props.title}
            />
            <CertificateInstitution
                institution={props.institution}
            />
            <EmissionData 
                date={props.date}
            />
        </div>
    )
}