import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MeuPdf from './PropostaModelo.jsx';

function PropostaBaixar() {
    return (
        <div>
            <h1>Gerar PDF</h1>
            <PDFDownloadLink
                document={<MeuPdf />}
                fileName="documento.pdf"
                style={{ textDecoration: 'none', padding: 10, backgroundColor: '#007bff', color: '#fff' }}
            >
                {({ loading }) => (loading ? 'Gerando...' : 'Baixar PDF')}
            </PDFDownloadLink>
        </div>
    );
}

export default PropostaBaixar;
