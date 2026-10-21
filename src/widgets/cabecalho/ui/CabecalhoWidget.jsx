import { Button } from "../../../shared/ui/Button/Button"
import styles from "./CabecalhoWidget.module.css"

export function CabecalhoWidget(props) {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.conteudo}>
                <a href="#inicio" className={styles.logo}>
                    <span aria-hidden="true">🌙</span> snoozy
                </a>
                <nav className={styles.menu} aria-label="Seções da página">
                    <a href="#beneficios">Benefícios</a>
                    <a href="#como-funciona">Como funciona</a>
                    <a href="#depoimentos">Quem usa</a>
                    <a href="#oferta">Preço</a>
                    <a href="#faq">Dúvidas</a>
                </nav>
                <Button onClick={props.onEntrarNaLista}>Lista de espera</Button>
            </div>
        </header>
    )
}
