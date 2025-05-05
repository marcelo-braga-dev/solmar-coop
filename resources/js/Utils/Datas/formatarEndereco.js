export const formatarEndereco = (endereco) => {

    if (endereco) return `
             ${endereco?.rua ? endereco.rua + ', ' : ''}
             ${endereco?.numero ? endereco.numero + ',' : ''}
             ${endereco?.bairro ? endereco.bairro + ', ' : ''}
             ${endereco?.complemento ? endereco.complemento + ', ' : ''}
             ${endereco?.referencia ? endereco.referencia + ', ' : ''}
             ${endereco?.cidade ? endereco.cidade + ' - ' : ''}
             ${endereco?.estado ? endereco.estado + ', ' : ''}
             ${endereco?.cep ? 'Cep: ' + endereco.cep : ''}
             `
    return ''
}
