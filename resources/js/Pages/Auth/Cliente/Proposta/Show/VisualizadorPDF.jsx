import React from 'react';

const VisualizadorPDF = ({ pdfUrl }) => {
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

    return (
        <div style={{ width: '100%', height: '80vh' }}>
            <iframe
                src={viewerUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Visualizador PDF"
            ></iframe>
        </div>
    );
};

export default VisualizadorPDF;
