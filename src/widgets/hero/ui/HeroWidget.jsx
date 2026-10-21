import { Badge } from "../../../shared/ui/Badge/Badge"
import { Button } from "../../../shared/ui/Button/Button"
import { SnoozyIlustracao } from "../../../shared/ui/SnoozyIlustracao/SnoozyIlustracao"
import styles from "./HeroWidget.module.css"

export function HeroWidget(props) {
    function irParaOferta() {
        document.getElementById("oferta").scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.conteudo}>
                <div className={styles.texto}>
                    <Badge variant="secondary">Lote 01 · Entrega em dezembro</Badge>
                    <h1 className={styles.titulo}>
                        Cochilou. <span className={styles.destaque}>Acordou.</span> Voltou pro jogo.
                    </h1>
                    <p className={styles.subtitulo}>
                        A Snoozy é a máscara de cochilo de 20 minutos pra quem vive de prova, estágio e rolê.
                        Ela apaga a luz, toca a chuva e te acorda antes de você virar zumbi.
                    </p>
                    <div className={styles.acoes}>
                        <Button tamanho="grande" onClick={props.onEntrarNaLista}>Entrar na lista de espera</Button>
                        <Button variant="ghost" tamanho="grande" onClick={irParaOferta}>Ver preços</Button>
                    </div>
                    <ul className={styles.numeros}>
                        <li><strong>20 min</strong> de soneca</li>
                        <li><strong>12 dias</strong> de bateria</li>
                        <li><strong>30 dias</strong> pra testar</li>
                    </ul>
                </div>
                <div className={styles.ilustracao}>
                    <SnoozyIlustracao cor="roxo" flutuando />
                </div>
            </div>
        </section>
    )
}
