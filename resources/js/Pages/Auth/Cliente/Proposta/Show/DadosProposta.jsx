import React from 'react';
import convertFloatToMoney from "@/Utils/Datas/convertFloatToMoney.js";

const DadosProposta = ({dados}) => {

    const valorConsorcio = (valor) => {
        return  valor * (1 - dados?.taxa_reducao / 100)
    }

    return (
        <>
            <div style={styles.container}>
                <div style={styles.overlayContainer}>
                    <div style={styles.overlayText}>
                        <div style={styles.sectionTitle}>INFORMAÇÕES DO CLIENTE</div>
                        {dados?.cliente?.user_data?.nome && <p style={styles.sectionText}><strong>Nome:</strong> {dados?.cliente?.user_data?.nome}</p>}
                        {dados?.cliente?.user_data?.nome_fantasia &&
                            <p style={styles.sectionText}><strong>Nome Fantasia:</strong> {dados?.cliente?.user_data?.nome_fantasia}</p>}
                        {dados?.cliente?.user_data?.razao_social &&
                            <p style={styles.sectionText}><strong>Razão Social:</strong> {dados?.cliente?.user_data?.razao_social}</p>}

                        <div style={{display: 'flex'}}>

                            {dados?.cliente?.user_data?.cnpj && <div style={{marginInlineEnd: 30}}><p style={styles.sectionText}><strong>CNPJ:</strong>
                                {dados?.cliente?.user_data?.cnpj}</p></div>}

                            {dados?.cliente?.user_data?.cpf && <div style={{marginInlineEnd: 30}}><p style={styles.sectionText}><strong>CPF:</strong>
                                {dados?.cliente?.user_data?.cpf}</p></div>}

                            {dados?.cliente?.contatos?.celular && <div style={{marginInlineEnd: 30}}><p style={styles.sectionText}>
                                <strong>Celular:</strong> {dados?.cliente?.contatos?.celular}</p></div>}

                            {dados?.cliente?.contatos?.email && <p style={styles.sectionText}><strong>E-mail:</strong> {dados?.cliente?.contatos?.email}</p>}
                        </div>

                        {dados?.endereco?.endereco_completo && <p style={styles.sectionText}><strong>Endereço:</strong> {dados?.endereco?.endereco_completo}</p>}

                        <div style={styles.sectionTitle}>PROPOSTA</div>
                        <div style={{display: 'flex'}}>
                            {dados?.media_consumo && <div style={{marginInlineEnd: 30}}>
                                <p style={styles.sectionText}><strong>Gasto Mensal:</strong> {convertFloatToMoney(dados?.valor_medio)}</p></div>}

                            {dados?.media_consumo && <div style={{marginInlineEnd: 30}}>
                                <p style={styles.sectionText}><strong>Média Consumo:</strong> {dados?.media_consumo} kWh</p></div>}

                            {dados?.prazo_locacao && <div style={{marginInlineEnd: 30}}>
                                <p style={styles.sectionText}><strong>Prazo do Contrato:</strong> {dados?.prazo_locacao} meses</p></div>}
                        </div>

                        <div style={{display: 'flex'}}>
                            {dados?.criado_em && <div style={{marginInlineEnd: 30}}><p style={styles.sectionText}>
                                <strong>Data da Emissão da Proposta:</strong> {dados?.criado_em}</p></div>}
                            {dados?.criado_em && <div style={{marginInlineEnd: 30}}><p style={styles.sectionText}>
                                <strong>Validade da Proposta:</strong> 30 dias</p></div>}
                        </div>

                        <div style={styles.containerTaxa}>
                            <div style={{textAlign: 'center', fontWeight: 800, marginBlock: 10, fontSize: 20, color: "green"}}>
                                TAXA DE REDUÇÃO NA CONTA DE ENERGIA: {dados?.taxa_reducao}%
                            </div>
                            <div style={{textAlign: 'center', fontWeight: 800, marginBlockEnd: 10, fontSize: 20, color: "green"}}>
                                Sua Média de Desconto Anual será de <br/>
                                <div style={{fontSize: 30}}>{convertFloatToMoney(dados?.desconto_anual)}</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div style={styles.containerTable}>
                <table style={{textAlign: 'center'}}>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Na Concessionária</th>
                        <th>No Consórcio</th>
                        <th>Desconto Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{textAlign: 'center'}}>
                        <td>Mensal</td>
                        <td>{convertFloatToMoney(dados?.valor_medio)}</td>
                        <td>{convertFloatToMoney(valorConsorcio(dados?.valor_medio))}</td>
                        <td>{convertFloatToMoney(dados?.valor_medio - valorConsorcio(dados?.valor_medio))}</td>
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                        <td>Trimestral</td>
                        <td>{convertFloatToMoney(dados?.valor_medio * 3)}</td>
                        <td>{convertFloatToMoney(valorConsorcio(dados?.valor_medio) * 3)}</td>
                        <td>{convertFloatToMoney((dados?.valor_medio * 3) - (valorConsorcio(dados?.valor_medio) * 3))}</td>
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                        <td>Semestre</td>
                        <td>{convertFloatToMoney(dados?.valor_medio * 6)}</td>
                        <td>{convertFloatToMoney(valorConsorcio(dados?.valor_medio) * 6)}</td>
                        <td>{convertFloatToMoney((dados?.valor_medio * 6) - (valorConsorcio(dados?.valor_medio) * 6))}</td>
                    </tr>
                    <tr style={{textAlign: 'center'}}>
                        <td>Anual</td>
                        <td>{convertFloatToMoney(dados?.valor_medio * 12)}</td>
                        <td>{convertFloatToMoney(valorConsorcio(dados?.valor_medio) * 12)}</td>
                        <td>{convertFloatToMoney((dados?.valor_medio * 12) - (valorConsorcio(dados?.valor_medio) * 12))}</td>
                    </tr>
                    </tbody>
                </table>
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
        borderBottom: '1px solid black'
    },
    sectionText: {
        fontSize: 16,
        marginBottom: '5px',
    },

    containerTable: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        width: '70%',
        margin: '0 auto',
        marginTop: 500,
        height: '100%',
        position: 'absolute',
        // left: '150',
        color: '#000',
        // padding: 100,
        // paddingBlockStart: 150,
        display: 'flex',
        flexDirection: 'column',
        // textAlign: 'center'
    },

    containerTaxa: {
        fontFamily: 'Arial, sans-serif',
        width: '100%',
        margin: '0 auto',
        marginTop: 400,
        position: 'absolute',
        left: '0',
        color: '#000',
        paddingBlockStart: 150,
        display: 'flex',
        flexDirection: 'column',
    },
};

export default DadosProposta;
