import { Badge, Button, formatarPreco } from "../../../shared"
import styles from "./PlanoCard.module.css"

export function PlanoCard(props) {
    const plano = props.plano
    const parcela = plano.preco / 12

    return (
        <article className={`${styles.card} ${plano.destaque ? styles.destaque : ""}`}>
            {plano.destaque && (
                <div className={styles.selo}>
                    <Badge variant="rosa">Mais pedido</Badge>
                </div>
            )}
            <h3 className={styles.nome}>{plano.nome}</h3>
            <p className={styles.descricao}>{plano.descricao}</p>
            <p className={styles.preco}>{formatarPreco(plano.preco)}</p>
            <p className={styles.parcela}>ou 12x de {formatarPreco(parcela)}</p>
            <ul className={styles.lista}>
                {plano.itens.map((item) => (
                    <li key={item} className={styles.item}>{item}</li>
                ))}
            </ul>
            <Button variant={plano.destaque ? "primary" : "secondary"} onClick={() => props.onComprar(plano)}>
                Quero o {plano.nome}
            </Button>
        </article>
    )
}
