import styles from "./BeneficioCard.module.css"

export function BeneficioCard(props) {
    return (
        <article className={styles.card}>
            <span className={styles.icone} aria-hidden="true">{props.beneficio.icone}</span>
            <h3 className={styles.titulo}>{props.beneficio.titulo}</h3>
            <p className={styles.texto}>{props.beneficio.texto}</p>
        </article>
    )
}
