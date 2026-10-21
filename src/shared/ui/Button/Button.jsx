import styles from "./Button.module.css"

export function Button(props) {
    const variant = props.variant || "primary"
    const tamanho = props.tamanho === "grande" ? styles.grande : ""

    return (
        <button
            type={props.type || "button"}
            className={`${styles.botao} ${styles[variant]} ${tamanho}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
