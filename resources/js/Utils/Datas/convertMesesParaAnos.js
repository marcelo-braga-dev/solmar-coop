export const convertMesesParaAnos = (value) => {
    if (value < 12) return 0
    return value / 12
}
