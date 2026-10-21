import { DepoimentoCard, depoimentos } from "../../../entities"
import styles from "./DepoimentosWidget.module.css"

export function DepoimentosWidget() {
    return (
        <section id="depoimentos" className={styles.secao}>
            <div className={styles.conteudo}>
                <h2 className={styles.titulo}>Quem já dormiu, aprovou</h2>
                <p className={styles.subtitulo}>Avaliações de uma turma beta (totalmente fictícia, mas bem animada).</p>
                <div className={styles.grade}>
                    {depoimentos.map((depoimento) => (
                        <DepoimentoCard key={depoimento.id} depoimento={depoimento} />
                    ))}
                </div>
            </div>
        </section>
    )
}
