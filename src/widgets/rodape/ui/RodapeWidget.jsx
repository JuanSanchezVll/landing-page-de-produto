import { Button } from "../../../shared"
import styles from "./RodapeWidget.module.css"

export function RodapeWidget(props) {
    return (
        <footer className={styles.rodape}>
            <div className={styles.conteudo}>
                <div>
                    <p className={styles.logo}>🌙 napo</p>
                    <p className={styles.texto}>
                        Projeto acadêmico da disciplina de Front-end. Produto, preços e avaliações são fictícios.
                    </p>
                </div>
                <Button onClick={props.onEntrarNaLista}>Entrar na lista de espera</Button>
            </div>
        </footer>
    )
}
