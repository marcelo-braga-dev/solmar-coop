function convertFloatToMoney(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
export default convertFloatToMoney
