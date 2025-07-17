import axios from 'axios';

export const buscarCep = async (cep) => {
    try {
        const cepBuscar = cep.replace(/\D/g, '');
        const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cepBuscar}`);

        if (response.data) {
            return {
                logradouro: response.data.street || '',
                bairro: response.data.neighborhood || '',
                cidade: response.data.city || '',
                estado: response.data.state || ''
            };
        } else {
            throw new Error('CEP não encontrado.');
        }
    } catch (error) {
        console.error('Erro na busca do CEP:', error);
        throw new Error('Erro ao buscar o CEP.');
    }
};
