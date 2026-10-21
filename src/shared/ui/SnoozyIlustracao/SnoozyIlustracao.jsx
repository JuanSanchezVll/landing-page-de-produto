import styles from "./SnoozyIlustracao.module.css"

const cores = {
    roxo: "#7b5cff",
    rosa: "#ff7eb6",
    amarelo: "#ffd84d",
    cinza: "#8d86a3"
}

export function SnoozyIlustracao(props) {
    const cor = cores[props.cor] || cores.roxo

    return (
        <svg
            className={`${styles.snoozy} ${props.flutuando ? styles.flutuando : ""}`}
            viewBox="0 0 320 200"
            role="img"
            aria-label="Máscara Snoozy com olhos fechados e sorrindo"
        >
            <path d="M20 100 C20 60 60 40 160 40 C260 40 300 60 300 100 C300 140 260 160 160 160 C60 160 20 140 20 100 Z" fill={cor} stroke="#1a1033" strokeWidth="6" />
            <path d="M20 100 C-2 100 -2 70 12 66" fill="none" stroke="#1a1033" strokeWidth="6" strokeLinecap="round" />
            <path d="M300 100 C322 100 322 70 308 66" fill="none" stroke="#1a1033" strokeWidth="6" strokeLinecap="round" />
            <path d="M82 96 Q108 116 134 96" fill="none" stroke="#1a1033" strokeWidth="7" strokeLinecap="round" />
            <path d="M186 96 Q212 116 238 96" fill="none" stroke="#1a1033" strokeWidth="7" strokeLinecap="round" />
            <ellipse cx="68" cy="122" rx="14" ry="8" fill="#ffffff" opacity="0.45" />
            <ellipse cx="252" cy="122" rx="14" ry="8" fill="#ffffff" opacity="0.45" />
            <path d="M146 128 Q160 140 174 128" fill="none" stroke="#1a1033" strokeWidth="6" strokeLinecap="round" />
            <path d="M250 28 h22 l-22 24 h22" fill="none" stroke="#ffd84d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className={styles.z1} />
            <path d="M282 6 h14 l-14 16 h14" fill="none" stroke="#ffd84d" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={styles.z2} />
        </svg>
    )
}
