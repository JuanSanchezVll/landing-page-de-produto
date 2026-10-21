export function validarNome(nome) {
    if (nome.trim().length < 2) return "Coloca seu nome aí."
    return ""
}

export function validarEmail(email) {
    const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formato.test(email)) return "Esse e-mail parece estranho."
    return ""
}

export function validarCurso(curso) {
    if (curso.trim().length < 2) return "Diz seu curso pra gente."
    return ""
}
