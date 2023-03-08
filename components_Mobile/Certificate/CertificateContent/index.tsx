import { ReactNode } from "react";
import styles from './styles.module.css';

export default function CertificateContent(props: {
    institution: string
    children: ReactNode
}): JSX.Element {

    let backGroundImage

    switch (props.institution) {
        case "freeCodeCamp":    backGroundImage = "bg-[url('/static/svg/freecodeCampBG.svg')]" ;break
        case "HackerRank":      backGroundImage = "bg-[url('/static/svg/hackerRankBG.svg')]"   ;break
        case "UNA University":  backGroundImage = "bg-[url('/static/svg/unaBG.svg')]"          ;break
        default: backGroundImage = ""
    }

    return (
        <div
            className={`
                ${styles.CertificateContent}
                ${backGroundImage} 
            `}
        >
            {props.children}
        </div>
    )
}