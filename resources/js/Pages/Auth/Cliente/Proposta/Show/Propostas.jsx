import React, {useEffect, useState} from 'react';
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import PropostaPdf from './PropostaModelo.jsx';
import {Button} from "@mui/material";
import { pdf } from '@react-pdf/renderer';

import VisualizadorPDF from './VisualizadorPDF';
import {IconDownload} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";

function PropostaBaixar() {
    const [urlPdf, setUrlPdf] = useState()

    useEffect(() => {
        gerarPdfEEnviar()
    }, []);

    const gerarPdfEEnviar = async () => {
        const blob = await pdf(<PropostaPdf />).toBlob();

        const formData = new FormData();
        formData.append('file', blob, 'proposta.pdf');

        try {
            const response = await axios.post(route('auth.propostas.pdf.cliente.gerar-pdf'), formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const url = response.data.url;
            setUrlPdf(url)

        } catch (error) {
            console.error('Erro ao enviar PDF:', error);
        }
    };

    const abrirPdf = () => {
        window.open(urlPdf, '_blank');
    }

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

            <Grid container>
                <Grid size={12} marginBottom={4}>
                    <Button color="error" startIcon={<IconDownload/>} onClick={abrirPdf}>Baixar PDF</Button>
                </Grid>
                <Grid size={12}>
                    {urlPdf && <VisualizadorPDF pdfUrl={urlPdf}/>}
                </Grid>
            </Grid>

            {/*<div style={{ border: '1px solid #ccc', height: '80vh', marginBottom: 20 }}>*/}
            {/*    <PDFViewer width="100%" height="100%">*/}
            {/*        <PropostaPdf />*/}
            {/*    </PDFViewer>*/}
            {/*</div>*/}
        </div>
    );
}

export default PropostaBaixar;
