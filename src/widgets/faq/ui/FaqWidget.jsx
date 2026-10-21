import { useState } from "react"
import { perguntas } from "../../../entities"
import styles from "./FaqWidget.module.css"

export function FaqWidget() {
    const [aberta, setAberta] = useState(null)

    function alternar(id) {
        setAberta(aberta === id ? null : id)
    }

    return (
        <section id="faq" className={styles.secao}>
            <div className={styles.conteudo}>
                <h2 className={styles.titulo}>Perguntas que sempre fazem</h2>
                <div className={styles.lista}>
                    {perguntas.map((item) => {
                        const estaAberta = aberta === item.id

                        return (
                            <div key={item.id} className={styles.item}>
                                <h3>
                                    <button
                                        type="button"
                                        className={styles.pergunta}
                                        aria-expanded={estaAberta}
                                        onClick={() => alternar(item.id)}
                                    >
                                        {item.pergunta}
                                        <span className={styles.sinal} aria-hidden="true">{estaAberta ? "−" : "+"}</span>
                                    </button>
                                </h3>
                                {estaAberta && <p className={styles.resposta}>{item.resposta}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
