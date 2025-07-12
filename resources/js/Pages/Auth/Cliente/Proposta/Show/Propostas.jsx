import React from 'react';
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import PropostaPdf from './PropostaModelo.jsx';
import {Button} from "@mui/material";
import { pdf } from '@react-pdf/renderer';

import VisualizadorPDF from './VisualizadorPDF';

function PropostaBaixar() {

    const pdfUrl = 'https://crm.casaverdecoop.com.br/storage/pdfs/proposta_VWxXZVnuxw.pdf';

    const gerarPdfEEnviar = async () => {
        const blob = await pdf(<PropostaPdf />).toBlob();

        const formData = new FormData();
        formData.append('file', blob, 'proposta.pdf');

        try {
            const response = await axios.post(route('auth.propostas.pdf.cliente.gerar-pdf'), formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const url = response.data.url;
            window.open(url, '_blank');
        } catch (error) {
            console.error('Erro ao enviar PDF:', error);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            {/* Botão para download */}
            {/*<PDFDownloadLink*/}
            {/*    document={<PropostaPdf />}*/}
            {/*    fileName="proposta_lucelino_lima.pdf"*/}
            {/*    style={{*/}
            {/*        padding: 10,*/}
            {/*        backgroundColor: '#007bff',*/}
            {/*        color: 'white',*/}
            {/*        textDecoration: 'none',*/}
            {/*        borderRadius: 4,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {({ loading }) => (loading ? 'Gerando PDF...' : 'Baixar PDF')}*/}
            {/*</PDFDownloadLink>*/}

            MOBILE
            <Button onClick={gerarPdfEEnviar}>GERAR MOBILE</Button>
            <div>
                <h1>Proposta Comercial</h1>
                <VisualizadorPDF pdfUrl={pdfUrl} />
            </div>
            MOBILE FIM


            {/*<div style={{ border: '1px solid #ccc', height: '80vh', marginBottom: 20 }}>*/}
            {/*    <PDFViewer width="100%" height="100%">*/}
            {/*        <PropostaPdf />*/}
            {/*    </PDFViewer>*/}
            {/*</div>*/}
        </div>
    );
}

export default PropostaBaixar;
