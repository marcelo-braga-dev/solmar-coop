import axios from 'axios';

export const buscarCep = async (cep) => {
    try {
        const cepBuscar = cep.replace(/\D/g, '');
        const response = await axios.get(`https://viacep.com.br/ws/${cepBuscar}/json/`);

        if (response.data && !response.data.erro) {
            return {
                logradouro: response.data.logradouro || '',
                bairro: response.data.bairro || '',
                cidade: response.data.localidade || '',
                estado: response.data.uf || ''
            };
        } else {
            throw new Error('CEP não encontrado.');
        }
    } catch (error) {
        console.error('Erro na busca do CEP:', error);
        throw new Error('Erro ao buscar o CEP.');
    }
};
