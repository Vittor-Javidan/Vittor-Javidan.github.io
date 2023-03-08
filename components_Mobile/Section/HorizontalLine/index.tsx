import styles from './styles.module.css'

export default function HorizontalLine(props: {
    sectionOpen: boolean
}): JSX.Element {
    return (
        <hr 
            className={props.sectionOpen ? styles.hr : ""}
        />
    )
}