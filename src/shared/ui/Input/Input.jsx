import { useId } from "react"
import styles from "./Input.module.css"

export function Input(props) {
    const id = useId()

    return (
        <div className={styles.campo}>
            <label htmlFor={id} className={styles.rotulo}>{props.label}</label>
            <input
                id={id}
                className={`${styles.input} ${props.erro ? styles.comErro : ""}`}
                type={props.type || "text"}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                aria-invalid={props.erro ? "true" : "false"}
            />
            {props.erro && <span className={styles.erro} role="alert">{props.erro}</span>}
        </div>
    )
}
