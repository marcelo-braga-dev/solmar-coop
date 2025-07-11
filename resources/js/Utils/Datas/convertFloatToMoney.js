function convertFloatToMoney(valor) {
    if (valor) return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

    return 0
}

export default convertFloatToMoney
