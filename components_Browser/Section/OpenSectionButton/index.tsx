import styles from './styles.module.css'

export default function OpenSectionButton(props: {
    sectionOpen: boolean
    extraCSS: string
    onClick: () => void
}): JSX.Element {

    const BUTTON_SYMBOL_CLOSED = "+"
    const BUTTON_SYMBOL_OPEN = "-"

    return (
        <button 
            className={`
                ${styles.button}
                ${props.sectionOpen 
                    ? styles.sectionOpen 
                    : styles.sectionClosed
                }
                ${props.extraCSS}
            `}
            onClick={props.onClick}
            type="button"
        >
            {props.sectionOpen ? BUTTON_SYMBOL_OPEN : BUTTON_SYMBOL_CLOSED}
        </button>
    )
}