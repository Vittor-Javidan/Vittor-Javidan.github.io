import styles from './styles.module.css'

export default function OpenSectionButton(props: {
    sectionOpen: boolean
    onClick: () => void
}): JSX.Element {

    const OPEN_BUTTON_SYMBOL = "+"
    const CLOSE_BUTTON_SYMBOL = "-"

    return (
        <button 
            tabIndex={-1}
            className={`
                ${styles.button}
                ${props.sectionOpen 
                    ? styles.sectionOpen 
                    : styles.sectionClosed
                }
            `}
            onClick={props.onClick}
            type="button"
        >
            {props.sectionOpen ? CLOSE_BUTTON_SYMBOL : OPEN_BUTTON_SYMBOL}
        </button>
    )
}