import styles from "./Badge.module.css"

export function Badge(props) {
    const variant = props.variant || "primary"

    return (
        <span className={`${styles.badge} ${styles[variant]}`}>
            {props.children}
        </span>
    )
}
