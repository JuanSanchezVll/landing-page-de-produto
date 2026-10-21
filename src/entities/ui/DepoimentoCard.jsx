import styles from "./DepoimentoCard.module.css"

export function DepoimentoCard(props) {
    const depoimento = props.depoimento
    const estrelas = "★".repeat(depoimento.nota) + "☆".repeat(5 - depoimento.nota)
    const inicial = depoimento.nome.charAt(0)

    return (
        <figure className={styles.card}>
            <p className={styles.estrelas} aria-label={`Nota ${depoimento.nota} de 5`}>{estrelas}</p>
            <blockquote className={styles.texto}>“{depoimento.texto}”</blockquote>
            <figcaption className={styles.autor}>
                <span className={styles.avatar} aria-hidden="true">{inicial}</span>
                <span>
                    <strong className={styles.nome}>{depoimento.nome}</strong>
                    <span className={styles.curso}>{depoimento.curso}</span>
                </span>
            </figcaption>
        </figure>
    )
}
