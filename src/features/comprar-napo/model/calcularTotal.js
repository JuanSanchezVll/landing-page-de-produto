const CUPOM_ESTUDANTE = "PROVA10"

export function calcularTotal(preco, cupom) {
    const cupomValido = cupom.trim().toUpperCase() === CUPOM_ESTUDANTE
    const desconto = cupomValido ? preco * 0.1 : 0

    return {
        cupomValido,
        desconto,
        total: preco - desconto
    }
}
