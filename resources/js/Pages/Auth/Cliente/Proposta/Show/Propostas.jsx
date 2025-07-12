import React, {useEffect, useState} from 'react';
import PropostaPdf from './PropostaModelo.jsx';
import {Button} from "@mui/material";
import {pdf, PDFViewer} from '@react-pdf/renderer';

import VisualizadorPDF from './VisualizadorPDF';
import {IconDownload} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import DescontosGrafico from "@/Pages/Auth/Cliente/Proposta/Show/Graficos/DescontosGrafico.jsx";

function PropostaBaixar({idProposta}) {
    const [urlPdf, setUrlPdf] = useState()
    const [imagemGrafico, setImagemGrafico] = useState(null);
    const [dados, setDados] = useState([])

    useEffect(() => {
        fethcDadosProposta()
    }, [imagemGrafico]);

    const gerarPdfEEnviar = async (info) => {
        const blob = await pdf(<PropostaPdf idProposta={idProposta} imagemGrafico={imagemGrafico} dados={info}/>).toBlob();

        const formData = new FormData();
        formData.append('file', blob, 'proposta.pdf');

        try {
            const response = await axios.post(route('auth.propostas.pdf.cliente.gerar-pdf'), formData, {
                headers: {'Content-Type': 'multipart/form-data'},
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

    const [isWebView, setIsWebView] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        const isAndroidWebView = /wv/.test(userAgent) || /\bVersion\/[\d.]+.*Chrome/.test(userAgent);
        const isIosWebView = /iPhone|iPod|iPad/.test(userAgent) && !/Safari/.test(userAgent);

        setIsWebView(isAndroidWebView || isIosWebView);
    }, []);

    const fethcDadosProposta = async () => {
        const response = await axios.get(route('auth.propostas.pdf.cliente.get-dados', idProposta))
        setDados(response.data)
        gerarPdfEEnviar(response.data)
    }

    return (
        <div style={{padding: 20}}>
            <Grid container>
                <Grid size={12} marginBottom={4}>
                    <Button color="error" startIcon={<IconDownload/>} onClick={abrirPdf}>Baixar PDF</Button>
                </Grid>
                {isWebView && <Grid size={12}>
                    {urlPdf ? <VisualizadorPDF pdfUrl={urlPdf}/> : 'Carregando...'}
                </Grid>}
            </Grid>

            {!isWebView && <div style={{width: '100%', height: '70vh', border: '1px solid #ccc'}}>
                <PDFViewer width="100%" height="100%">
                    <PropostaPdf idProposta={idProposta} imagemGrafico={imagemGrafico} dados={dados}/>
                </PDFViewer>
            </div>}

            <div style={{marginTop: 50}}>
                <DescontosGrafico onExport={setImagemGrafico} idProposta={idProposta}/>
            </div>
        </div>
    );
}

export default PropostaBaixar;
