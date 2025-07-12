import React, {useEffect, useState} from 'react';
import {
    Document,
    Page,
    Image,
    Text,
    View,
    StyleSheet,
} from '@react-pdf/renderer';
import convertFloatToMoney from "@/Utils/Datas/convertFloatToMoney.js";

// Componente do PDF
const PropostaModelo = ({idProposta, imagemGrafico}) => {
    const [dados, setDados] = useState([])

    useEffect(() => {
        fethcDadosProposta()
    }, []);

    const fethcDadosProposta = async () => {
        const response = await axios.get(route('auth.propostas.pdf.cliente.get-dados', idProposta))
        setDados(response.data)
    }

    const valorConsorcio = (valor) => {
        return valor * (1 - dados?.taxa_reducao / 100)
    }

    return <Document>
        {/* Página de Capa */}
        <Page size="A4">
            <Image style={styles.capa} src="/storage/propostas/cliente/capa.jpg"/>
        </Page>
        <Page size="A4" style={styles.page}>
            <Image style={styles.cabecalho} src="/storage/propostas/cliente/cabecalho.jpg"/>
            <Image style={styles.rodape} src="/storage/propostas/cliente/rodape.jpg"/>
            <View style={styles.conteudo}>
                {/* Informações do Cliente */}
                <Text style={styles.sectionTitle}>INFORMAÇÕES DO CLIENTE</Text>
                <View style={styles.fieldGroup}>
                    {dados?.cliente?.user_data?.nome && <Text style={styles.field}><Text style={styles.label}>Nome:</Text> {dados?.cliente?.user_data?.nome}</Text>}
                    {dados?.cliente?.user_data?.nome_fantasia &&
                        <Text style={styles.field}><Text style={styles.label}>Nome Fantasia:</Text> {dados?.cliente?.user_data?.nome_fantasia}</Text>}
                    {dados?.cliente?.user_data?.razao_social &&
                        <Text style={styles.field}><Text style={styles.label}>Razão Social:</Text> {dados?.cliente?.user_data?.razao_social}</Text>}
                    {dados?.cliente?.user_data?.cnpj && <Text style={styles.field}><Text style={styles.label}>CNPJ:</Text> {dados?.cliente?.user_data?.cnpj}</Text>}
                    {dados?.cliente?.user_data?.cpf && <Text style={styles.field}><Text style={styles.label}>CPF:</Text> {dados?.cliente?.user_data?.cpf}</Text>}
                    {dados?.cliente?.contatos?.celular &&
                        <Text style={styles.field}><Text style={styles.label}>Celular:</Text> {dados?.cliente?.contatos?.celular}</Text>}
                    {dados?.cliente?.contatos?.email && <Text style={styles.field}><Text style={styles.label}>E-mail:</Text> {dados?.cliente?.contatos?.email}</Text>}
                    {dados?.endereco?.endereco_completo &&
                        <Text style={styles.field}><Text style={styles.label}>Endereço:</Text> {dados?.endereco?.endereco_completo}</Text>}
                </View>

                {/* Proposta */}
                <Text style={styles.sectionTitle}>PROPOSTA</Text>
                <View style={styles.fieldGroup}>
                    <Text style={styles.field}><Text style={styles.label}>Gasto Mensal:</Text> {convertFloatToMoney(dados?.valor_medio)}</Text>
                    <Text style={styles.field}><Text style={styles.label}>Média de Consumo:</Text> {dados?.media_consumo} kWh</Text>
                    <Text style={styles.field}><Text style={styles.label}>Prazo do Contrato:</Text> {dados?.prazo_locacao} meses</Text>
                </View>

                <View style={{marginBottom: 12, textAlign: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: 'green', fontSize: 14, marginBottom: 4}}><Text>Taxa de Redução na Conta de
                        Energia:</Text> {dados?.taxa_reducao}%</Text>
                    <Text style={{fontWeight: 'bold', color: 'green', fontSize: 14, marginBottom: 4}}><Text>Desconto Anual
                        Estimado:</Text> {convertFloatToMoney(dados?.desconto_anual)}</Text>
                </View>

                {/* Tabela */}
                <Text style={styles.sectionTitle}>DESCONTOS ESTIMADOS</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}></Text>
                        <Text style={styles.tableColHeader}>Na Concessionária</Text>
                        <Text style={styles.tableColHeader}>No Consórcio</Text>
                        <Text style={styles.tableColHeader}>Desconto Total</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Mensal</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(dados?.valor_medio)}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(valorConsorcio(dados?.valor_medio))}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney((dados?.valor_medio) - (valorConsorcio(dados?.valor_medio)))}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Trimestral</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(dados?.valor_medio * 3)}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(valorConsorcio(dados?.valor_medio) * 3)}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney((dados?.valor_medio * 3) - (valorConsorcio(dados?.valor_medio) * 3))}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Semestral</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(dados?.valor_medio * 6)}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(valorConsorcio(dados?.valor_medio) * 6)}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney((dados?.valor_medio * 6) - (valorConsorcio(dados?.valor_medio) * 6))}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Anual</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(dados?.valor_medio * 12)}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney(valorConsorcio(dados?.valor_medio) * 12)}</Text>
                        <Text style={styles.tableCol}>{convertFloatToMoney((dados?.valor_medio * 12) - (valorConsorcio(dados?.valor_medio) * 12))}</Text>
                    </View>
                </View>

                <Text style={{marginTop: 20, fontSize: 14}}>Desconto Acumulado Durante o Contrato de {dados?.prazo_locacao} meses</Text>
                {imagemGrafico && <Image style={{width: '100%', height: 120, marginTop: 20,}} src={imagemGrafico}/>}
            </View>
        </Page>

        <Page size="A4">
            <Image style={styles.capa} src="/storage/propostas/cliente/paginas/3.jpg"/>
        </Page>
        <Page size="A4">
            <Image style={styles.capa} src="/storage/propostas/cliente/paginas/4.jpg"/>
        </Page>
        <Page size="A4">
            <Image style={styles.capa} src="/storage/propostas/cliente/paginas/5.jpg"/>
        </Page>
    </Document>
};

// Estilos
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    capa: {
        width: '100%',
        height: '100%',
    },
    cabecalho: {
        width: '100%',
        position: 'absolute',
        top: 0,
    },
    rodape: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    conteudo: {
        marginTop: 110,
        marginBottom: 80,
        paddingHorizontal: 40,
    },

    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottom: '1pt solid #000',
        paddingBottom: 4,
    },
    fieldGroup: {
        marginBottom: 12,
        fontSize: 12,
    },
    field: {
        marginBottom: 4,
    },
    label: {
        fontWeight: 'bold',
    },
    table: {
        marginTop: 10,
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableColHeader: {
        width: '25%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        backgroundColor: '#eee',
        padding: 4,
        fontWeight: 'bold',
        fontSize: 12,
    },
    tableCol: {
        width: '25%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        padding: 4,
        fontSize: 12,
    },
});

export default PropostaModelo;
