import { PlanoCard, planos } from "../../../entities"
import styles from "./OfertaWidget.module.css"

export function OfertaWidget(props) {
    return (
        <section id="oferta" className={styles.secao}>
            <div className={styles.conteudo}>
                <h2 className={styles.titulo}>Escolhe teu kit</h2>
                <p className={styles.subtitulo}>
                    Frete grátis pra todo o Brasil e 30 dias pra devolver se não rolar o cochilo.
                    Estudante tem cupom: <strong>PROVA10</strong>.
                </p>
                <div className={styles.grade}>
                    {planos.map((plano) => (
                        <PlanoCard key={plano.id} plano={plano} onComprar={props.onComprar} />
                    ))}
                </div>
            </div>
        </section>
    )
}
