import { useState } from "react"
import { Modal } from "../../shared/ui/Modal/Modal"
import { ListaEsperaFeature, ComprarSnoozyFeature } from "../../features"
import {
    CabecalhoWidget,
    HeroWidget,
    BeneficiosWidget,
    ComoFuncionaWidget,
    DepoimentosWidget,
    OfertaWidget,
    FaqWidget,
    RodapeWidget
} from "../../widgets"

export function HomePagina() {
    const [listaAberta, setListaAberta] = useState(false)
    const [planoEscolhido, setPlanoEscolhido] = useState(null)

    return (
        <>
            <CabecalhoWidget onEntrarNaLista={() => setListaAberta(true)} />
            <main>
                <HeroWidget onEntrarNaLista={() => setListaAberta(true)} />
                <BeneficiosWidget />
                <ComoFuncionaWidget />
                <DepoimentosWidget />
                <OfertaWidget onComprar={setPlanoEscolhido} />
                <FaqWidget />
            </main>
            <RodapeWidget onEntrarNaLista={() => setListaAberta(true)} />

            {listaAberta && (
                <Modal titulo="Entrar na lista" onFechar={() => setListaAberta(false)}>
                    <ListaEsperaFeature onConcluir={() => setListaAberta(false)} />
                </Modal>
            )}

            {planoEscolhido && (
                <Modal titulo={planoEscolhido.nome} onFechar={() => setPlanoEscolhido(null)}>
                    <ComprarSnoozyFeature plano={planoEscolhido} onConcluir={() => setPlanoEscolhido(null)} />
                </Modal>
            )}
        </>
    )
}
