import React from 'react';

const DadosProposta = ({dados}) => {console.log(dados)
    return (
        <>
            <div style={styles.container}>
                <div style={styles.overlayContainer}>
                    <div style={styles.overlayText}>
                        <div>
                            <div style={styles.sectionTitle}>INFORMAÇÕES DO INVESTIDOR</div>
                            {dados?.produtor?.user_data?.nome && <p style={styles.sectionText}><strong>Nome:</strong> {dados?.produtor?.user_data?.nome}</p>}
                            {dados?.produtor?.user_data?.nome_fantasia &&
                                <p style={styles.sectionText}><strong>Nome Fantasia:</strong> {dados?.produtor?.user_data?.nome_fantasia}</p>}
                            {dados?.produtor?.user_data?.razao_social &&
                                <p style={styles.sectionText}><strong>Razão Social:</strong> {dados?.produtor?.user_data?.razao_social}</p>}
                            {dados?.produtor?.user_data?.cnpj && <p style={styles.sectionText}><strong>CNPJ:</strong> {dados?.produtor?.user_data?.cnpj}</p>}
                            {dados?.produtor?.user_data?.cpf && <p style={styles.sectionText}><strong>CPF:</strong> {dados?.produtor?.user_data?.cpf}</p>}
                            {dados?.produtor?.contatos?.celular && <p style={styles.sectionText}><strong>Celular:</strong> {dados?.produtor?.contatos?.celular}</p>}
                            {dados?.produtor?.contatos?.email && <p style={styles.sectionText}><strong>E-mail:</strong> {dados?.produtor?.contatos?.email}</p>}
                        </div>

                        <div>
                            <div style={styles.sectionTitle}>INFORMAÇÕES DA USINA SOLAR</div>
                            {dados?.geracao_media && <p style={styles.sectionText}><strong>Média Geração:</strong> {dados?.geracao_media} kWh/mês</p>}
                            {dados?.potencia && <p style={styles.sectionText}><strong>Potência da Usina:</strong> {dados?.potencia} kWp</p>}
                            {dados?.taxa_reducao && <p style={styles.sectionText}><strong>Redução da Conta de Energia:</strong> {dados?.taxa_reducao}%</p>}
                            {dados?.endereco?.endereco_completo && <p style={styles.sectionText}><strong>Endereço da Usina:</strong> {dados?.endereco?.endereco_completo}</p>}
                        </div>
                        <div>
                            <div style={styles.sectionTitle}>PROPOSTA DE INVESTIMENTO</div>
                            {dados?.valor_investimento && <p style={styles.sectionText}><strong>Valor do Investimento:</strong> R$ {dados?.valor_investimento}</p>}
                            {dados?.prazo_locacao && <p style={styles.sectionText}><strong>Prazo do Contrato:</strong> {dados?.prazo_locacao} meses</p>}
                        </div>
                        <table style={styles.table}>
                            <tbody>
                            <tr>
                                <td>Tarifa Consumidor Grupo B</td>
                                <td>R$ 0,81</td>
                            </tr>
                            <tr>
                                <td>Redução de consumo para Consumidor</td>
                                <td>R$ 0,20 (25%)</td>
                            </tr>
                            <tr>
                                <td>Dedução operacionalização</td>
                                <td>R$ 0,20</td>
                            </tr>
                            <tr>
                                <td>Produção Média Anual de energia</td>
                                <td>{dados?.geracao_anual} kWh/ano</td>
                            </tr>
                            <tr>
                                <td>Pagamento anual Bruto</td>
                                <td>R$ {dados?.retorno_anual_bruto} ano (Produção Anual * 0.41)</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    container: {
        width: '100%',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    overlayContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    overlayText: {
        position: 'absolute',
        left: '0',
        width: '100%',
        height: '100%',
        color: '#000',
        padding: 100,
        paddingBlockStart: 300,
        display: 'flex',
        flexDirection: 'column',
    },
    section: {
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        marginTop: 30,
        borderBottom: '1px solid black'
    },
    table: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        marginTop: 30,
    },
    sectionText: {
        fontSize: '18px',
        marginBottom: '5px',
    },
};

export default DadosProposta;
