import React from 'react';
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import PropostaPdf from './PropostaModelo.jsx';

function PropostaBaixar() {
    return (
        <div style={{ padding: 20 }}>
            {/* Botão para download */}
            <PDFDownloadLink
                document={<PropostaPdf />}
                fileName="proposta_lucelino_lima.pdf"
                style={{
                    padding: 10,
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: 4,
                }}
            >
                {({ loading }) => (loading ? 'Gerando PDF...' : 'Baixar PDF')}
            </PDFDownloadLink>

            <div style={{ border: '1px solid #ccc', height: '80vh', marginBottom: 20 }}>
                <PDFViewer width="100%" height="100%">
                    <PropostaPdf />
                </PDFViewer>
            </div>
        </div>
    );
}

export default PropostaBaixar;
