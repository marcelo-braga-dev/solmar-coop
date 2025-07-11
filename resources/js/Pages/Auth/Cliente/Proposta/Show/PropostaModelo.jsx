import React from 'react';
import {
    Document,
    Page,
    Image,
    Text,
    View,
    StyleSheet,
} from '@react-pdf/renderer';

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
        width: '33%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        backgroundColor: '#eee',
        padding: 4,
        fontWeight: 'bold',
        fontSize: 12,
    },
    tableCol: {
        width: '33%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        padding: 4,
        fontSize: 12,
    },
});

// Componente do PDF
const PropostaModelo = () => (
    <Document>
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
                    <Text style={styles.field}><Text style={styles.label}>Nome:</Text> Lucelino Aparecido Lima</Text>
                    <Text style={styles.field}><Text style={styles.label}>CPF:</Text> 053.737.189-39</Text>
                    <Text style={styles.field}><Text style={styles.label}>Celular:</Text> +55 (44) 9 9146-4476</Text>
                    <Text style={styles.field}><Text style={styles.label}>E-mail:</Text> l.a.lima.energiasolar@gmail.com</Text>
                    <Text style={styles.field}><Text style={styles.label}>Endereço:</Text> Rua José Granado Parra, 100, Jardim Paulista, Maringá - PR, 87047-550</Text>
                </View>

                {/* Proposta */}
                <Text style={styles.sectionTitle}>PROPOSTA</Text>
                <View style={styles.fieldGroup}>
                    <Text style={styles.field}><Text style={styles.label}>Gasto Mensal:</Text> R$ 0</Text>
                    <Text style={styles.field}><Text style={styles.label}>Média de Consumo:</Text> 10.000 kWh</Text>
                    <Text style={styles.field}><Text style={styles.label}>Prazo do Contrato:</Text> 12 meses</Text>
                    <Text style={styles.field}><Text style={styles.label}>Taxa de Redução na Conta de Energia:</Text> 25%</Text>
                    <Text style={styles.field}><Text style={styles.label}>Média de Desconto Anual:</Text> R$ 0</Text>
                </View>

                {/* Tabela */}
                <Text style={styles.sectionTitle}>DESCONTOS ESTIMADOS</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}> </Text>
                        <Text style={styles.tableColHeader}>Na Concessionária</Text>
                        <Text style={styles.tableColHeader}>No Consórcio</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Mensal</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Trimestral</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Semestral</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Anual</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                        <Text style={styles.tableCol}>R$ 0</Text>
                    </View>
                </View>
            </View>
        </Page>
        {/*<Page size="A4">*/}
        {/*    <Image style={styles.capa} src="/storage/propostas/cliente/paginas/2.jpg"/>*/}
        {/*</Page>*/}
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
);

export default PropostaModelo;
