import { useState } from "react"
import { NapoIlustracao } from "../../../shared"
import styles from "./ComoFuncionaWidget.module.css"

const passos = [
    { numero: 1, titulo: "Coloca", texto: "Ajusta a faixa e aperta o botão. A Napo apaga tudo ao redor." },
    { numero: 2, titulo: "Relaxa", texto: "Chuva, ventilador ou lo-fi tocam baixinho até você apagar." },
    { numero: 3, titulo: "Acorda", texto: "Luz suave e vibração te tiram do cochilo antes do sono pesado." }
]

const modos = [
    { id: "pos-almoco", nome: "Pós-almoço", minutos: 15, dica: "Pra aguentar a aula das 14h sem babar no caderno." },
    { id: "prova", nome: "Véspera de prova", minutos: 20, dica: "O ciclo clássico. Memória descansada e cabeça no lugar." },
    { id: "madrugada", nome: "Madrugada do TCC", minutos: 30, dica: "Pra quando o projeto sai às 7h e o corpo já pediu arrego." }
]

export function ComoFuncionaWidget() {
    const [modoAtivo, setModoAtivo] = useState("prova")

    const modo = modos.find((item) => item.id === modoAtivo)
    const largura = (modo.minutos / 30) * 100

    return (
        <section id="como-funciona" className={styles.secao}>
            <div className={styles.conteudo}>
                <h2 className={styles.titulo}>Como funciona</h2>
                <ol className={styles.passos}>
                    {passos.map((passo) => (
                        <li key={passo.numero} className={styles.passo}>
                            <span className={styles.numero}>{passo.numero}</span>
                            <h3>{passo.titulo}</h3>
                            <p>{passo.texto}</p>
                        </li>
                    ))}
                </ol>

                <div className={styles.simulador}>
                    <div className={styles.ilustracao}>
                        <NapoIlustracao cor="amarelo" flutuando />
                    </div>
                    <div className={styles.controles}>
                        <h3 className={styles.tituloSimulador}>Escolhe teu modo</h3>
                        <div className={styles.modos} role="group" aria-label="Modos de soneca">
                            {modos.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`${styles.modo} ${item.id === modoAtivo ? styles.modoAtivo : ""}`}
                                    aria-pressed={item.id === modoAtivo}
                                    onClick={() => setModoAtivo(item.id)}
                                >
                                    {item.nome}
                                </button>
                            ))}
                        </div>
                        <p className={styles.minutos}>{modo.minutos} min</p>
                        <div className={styles.barra} aria-hidden="true">
                            <div className={styles.progresso} style={{ width: `${largura}%` }} />
                        </div>
                        <p className={styles.dica}>{modo.dica}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
