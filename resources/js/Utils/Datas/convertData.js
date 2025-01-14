export const convertData = (value) => {
    return value ? new Date(value).toLocaleDateString('pt-BR') : null
}
