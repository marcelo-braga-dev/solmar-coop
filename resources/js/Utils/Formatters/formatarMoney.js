const formatarMoneyReal = (valor) => {

    const valorNumerico = valor.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(valorNumerico / 100);
};

export default formatarMoneyReal
