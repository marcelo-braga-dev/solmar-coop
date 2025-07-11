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
});

// Componente do PDF
const PropostaModelo = () => (
    <Document>
        {/* Página de Capa */}
        <Page size="A4">
            <Image style={styles.capa} src="/storage/propostas/cliente/capa.jpg"/>
        </Page>

        {/* Página com Cabeçalho e Rodapé */}
        <Page size="A4" style={styles.page}>
            <Image style={styles.cabecalho} src="/storage/propostas/cliente/cabecalho.jpg" />
            <Image style={styles.rodape} src="/storage/propostas/cliente/rodape.jpg" />

            <View style={styles.conteudo}>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>Título do PDF</Text>
                <Text style={{ fontSize: 14, marginBottom: 10 }}>
                    Aqui vai o conteúdo do PDF, que pode ser estruturado com texto, tabelas,
                    gráficos (convertidos em imagem), etc.
                </Text>
            </View>
        </Page>
    </Document>
);

export default PropostaModelo;
