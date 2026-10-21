import { useState } from "react"
import { Button, Input } from "../../../shared"
import { validarNome, validarEmail, validarCurso } from "../model/validadores"
import styles from "./ListaEsperaFeature.module.css"

export function ListaEsperaFeature(props) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [curso, setCurso] = useState("")
    const [erros, setErros] = useState({})
    const [posicao, setPosicao] = useState(null)

    function aoEnviar(evento) {
        evento.preventDefault()

        const novosErros = {
            nome: validarNome(nome),
            email: validarEmail(email),
            curso: validarCurso(curso)
        }
        setErros(novosErros)

        if (novosErros.nome || novosErros.email || novosErros.curso) return

        const numero = 1200 + nome.length * 7 + email.length * 3
        setPosicao(numero)
    }

    if (posicao) {
        return (
            <div className={styles.sucesso}>
                <p className={styles.emoji} aria-hidden="true">😴</p>
                <p className={styles.mensagem}>Pronto, {nome.split(" ")[0]}! Você está na fila.</p>
                <p className={styles.posicao}>#{posicao}</p>
                <p className={styles.detalhe}>
                    Avisamos em <strong>{email}</strong> quando o primeiro lote da Napo sair.
                </p>
                <Button onClick={props.onConcluir}>Voltar pra página</Button>
            </div>
        )
    }

    return (
        <form className={styles.formulario} onSubmit={aoEnviar} noValidate>
            <p className={styles.intro}>
                Entra na lista de espera e garante a Napo no primeiro lote, com cupom de estudante.
            </p>
            <Input label="Nome" value={nome} placeholder="Como te chamam?" erro={erros.nome} onChange={(e) => setNome(e.target.value)} />
            <Input label="E-mail" type="email" value={email} placeholder="voce@faculdade.com" erro={erros.email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Curso" value={curso} placeholder="Ex: Análise e Desenvolvimento" erro={erros.curso} onChange={(e) => setCurso(e.target.value)} />
            <Button type="submit" tamanho="grande">Entrar na lista</Button>
        </form>
    )
}
