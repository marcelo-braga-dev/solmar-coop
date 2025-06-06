import React from 'react';

const DadosProposta = ({dados}) => {
    return (
        <>
            <div style={styles.container}>
                <div style={styles.overlayContainer}>
                    <div style={styles.overlayText}>
                        <div style={styles.sectionTitle}>INFORMAÇÕES DO CLIENTE</div>
                        {dados?.cliente?.user_data?.nome && <p style={styles.sectionText}><strong>Nome:</strong> {dados?.cliente?.user_data?.nome}</p>}
                        {dados?.cliente?.user_data?.nome_fantasia && <p style={styles.sectionText}><strong>Nome Fantasia:</strong> {dados?.cliente?.user_data?.nome_fantasia}</p>}
                        {dados?.cliente?.user_data?.razao_social && <p style={styles.sectionText}><strong>Razão Social:</strong> {dados?.cliente?.user_data?.razao_social}</p>}
                        {dados?.cliente?.user_data?.cnpj && <p style={styles.sectionText}><strong>CNPJ:</strong> {dados?.cliente?.user_data?.cnpj}</p>}
                        {dados?.cliente?.user_data?.cpf && <p style={styles.sectionText}><strong>CPF:</strong> {dados?.cliente?.user_data?.cpf}</p>}
                        {dados?.cliente?.contatos?.celular && <p style={styles.sectionText}><strong>Celular:</strong> {dados?.cliente?.contatos?.celular}</p>}
                        {/*{dados?.cliente?.contatos?.celular_2 && <p style={styles.sectionText}><strong>Celular:</strong> {dados?.cliente?.contatos?.celular_2}</p>}*/}
                        {/*{dados?.cliente?.contatos?.telefone && <p style={styles.sectionText}><strong>Telefone:</strong> {dados?.cliente?.contatos?.telefone}</p>}*/}
                        {dados?.cliente?.contatos?.email && <p style={styles.sectionText}><strong>E-mail:</strong> {dados?.cliente?.contatos?.email}</p>}
                        {dados?.endereco?.endereco_completo && <p style={styles.sectionText}><strong>Endereço:</strong> {dados?.endereco?.endereco_completo}</p>}

                        <div style={styles.sectionTitle}>PROPOSTA</div>
                        {dados?.media_consumo && <p style={styles.sectionText}><strong>Média Consumo:</strong> {dados?.media_consumo} kWh</p>}
                        {dados?.prazo_locacao && <p style={styles.sectionText}><strong>Prazo do Contrato:</strong> {dados?.prazo_locacao} meses</p>}
                        {dados?.taxa_reducao && <p style={styles.sectionText}><strong>Redução da Conta de Energia:</strong> {dados?.taxa_reducao}%</p>}
                        {dados?.concessionaria?.nome && <p style={styles.sectionText}>
                            <strong>Concessionária:</strong> {dados?.concessionaria?.nome} / {dados?.concessionaria?.estado}</p>}
                        {dados?.criado_em && <p style={styles.sectionText}><strong>Data da Emissão da Proposta:</strong> {dados?.criado_em}</p>}

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
        paddingBlockStart: 150,
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
    },
    sectionText: {
        fontSize: '20px',
        marginBottom: '5px',
    },
};

export default DadosProposta;
