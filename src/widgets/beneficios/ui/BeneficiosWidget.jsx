import { BeneficioCard, beneficios } from "../../../entities"
import styles from "./BeneficiosWidget.module.css"

export function BeneficiosWidget() {
    return (
        <section id="beneficios" className={styles.secao}>
            <div className={styles.conteudo}>
                <h2 className={styles.titulo}>Feita pra quem dorme pouco e faz muito</h2>
                <p className={styles.subtitulo}>
                    Seis motivos pra trocar o energético por um cochilo bem dado.
                </p>
                <div className={styles.grade}>
                    {beneficios.map((beneficio) => (
                        <BeneficioCard key={beneficio.id} beneficio={beneficio} />
                    ))}
                </div>
            </div>
        </section>
    )
}
