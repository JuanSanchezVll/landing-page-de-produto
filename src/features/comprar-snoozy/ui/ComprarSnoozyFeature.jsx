import { useState } from "react"
import { Button } from "../../../shared/ui/Button/Button"
import { Input } from "../../../shared/ui/Input/Input"
import { SnoozyIlustracao } from "../../../shared/ui/SnoozyIlustracao/SnoozyIlustracao"
import { formatarPreco } from "../../../shared/ui/formatarPreco"
import { calcularTotal } from "../model/calcularTotal"
import styles from "./ComprarSnoozyFeature.module.css"

const cores = [
    { id: "roxo", nome: "Roxo Madrugada" },
    { id: "rosa", nome: "Rosa Soneca" },
    { id: "amarelo", nome: "Amarelo Café" },
    { id: "cinza", nome: "Cinza Segunda" }
]

export function ComprarSnoozyFeature(props) {
    const [cor, setCor] = useState("roxo")
    const [cupom, setCupom] = useState("")
    const [pedido, setPedido] = useState(null)

    const resumo = calcularTotal(props.plano.preco, cupom)

    function aoConfirmar() {
        const codigo = "SNOOZY-" + String(Math.floor(Math.random() * 9000) + 1000)
        setPedido(codigo)
    }

    if (pedido) {
        return (
            <div className={styles.sucesso}>
                <SnoozyIlustracao cor={cor} flutuando />
                <p className={styles.mensagem}>Pedido confirmado! (de mentira 😉)</p>
                <p className={styles.codigo}>{pedido}</p>
                <p className={styles.detalhe}>
                    {props.plano.nome} na cor {cores.find((c) => c.id === cor).nome}, total de {formatarPreco(resumo.total)}.
                </p>
                <Button onClick={props.onConcluir}>Fechar</Button>
            </div>
        )
    }

    return (
        <div className={styles.compra}>
            <div className={styles.previa}>
                <SnoozyIlustracao cor={cor} />
            </div>

            <fieldset className={styles.cores}>
                <legend className={styles.legenda}>Escolha a cor</legend>
                {cores.map((item) => (
                    <label key={item.id} className={`${styles.opcao} ${cor === item.id ? styles.ativa : ""}`}>
                        <input
                            type="radio"
                            name="cor"
                            className={styles.radio}
                            checked={cor === item.id}
                            onChange={() => setCor(item.id)}
                        />
                        {item.nome}
                    </label>
                ))}
            </fieldset>

            <Input
                label="Cupom de estudante"
                value={cupom}
                placeholder="Dica: PROVA10"
                onChange={(e) => setCupom(e.target.value)}
            />
            {resumo.cupomValido && <p className={styles.cupom}>Cupom aplicado: -{formatarPreco(resumo.desconto)}</p>}

            <div className={styles.total}>
                <span>{props.plano.nome}</span>
                <strong>{formatarPreco(resumo.total)}</strong>
            </div>

            <Button tamanho="grande" onClick={aoConfirmar}>Finalizar compra</Button>
        </div>
    )
}
