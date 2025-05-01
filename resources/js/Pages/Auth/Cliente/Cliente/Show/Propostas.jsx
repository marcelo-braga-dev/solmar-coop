import {Button, Divider, Paper} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import Grid from "@mui/material/Grid2";
import {IconDownload, IconFileTypePdf} from "@tabler/icons-react";
import {useEffect, useRef, useState} from "react";
import Page from "@/Pages/Auth/Propostas/Produtor/Proposta/Page.jsx";

const Propostas = ({propostas, cliente, endereco}) => {
    const [layout, setLayout] = useState([])
    const proposalRef = useRef(null);

    const generatePdf = () => {
        const htmlContent = proposalRef.current.innerHTML;

        axios.post(route('auth.propostas.pdf.usina.gerar-pdf'), {html: htmlContent}, {
            responseType: 'blob'
        })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'proposta_comercial.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Erro ao gerar o PDF:', error);
            });
    };

    useEffect(() => {
        const fethcLayout = async () => {
            const response = await axios.get(route('auth.propostas.pdf.usina.layout-pdf'))
            setLayout(response.data)
        }
        fethcLayout()
    }, []);

    return (
        <>
            <Paper variant="outlined" sx={{padding: 2, marginBottom: 4}}>
                XXXXXXXXXXXXxxXXXX12
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid size={1} paddingInlineEnd={2}>
                        <IconFileTypePdf color="red" size={30}/>
                    </Grid>
                    <Grid size={11} container justifyContent="space-between" gap={2}>
                        <Grid size="auto">
                            {propostas?.media_geracao && <TextInfo title="Média Geração" text={`${propostas.media_geracao} kWh`}/>}
                        </Grid>
                        <Grid size="auto">
                            {propostas?.prazo_locacao && <TextInfo title="Prazo Locação" text={`${propostas.prazo_locacao} dias`}/>}
                        </Grid>
                        <Grid size="auto">
                            {propostas?.concessionaria_id &&
                                <TextInfo title="Concessionária" text={`${propostas.concessionaria.nome}/${propostas.concessionaria.estado}`}/>}
                        </Grid>
                        <Grid size="auto">
                            <Button color="error" onClick={generatePdf} startIcon={<IconDownload/>}>Baixar PDF</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {layout.capa && <Paper sx={{padding: 2}} variant="outlined">
                <div style={{textAlign: 'center', pageBreakAfter: 'always'}}>
                    <img src={layout.capa} alt="Capa" loading="lazy"/>
                </div>
                <Divider sx={{marginBottom: 5}}/>
                <div style={{marginBottom: 30}}>
                    <img src={layout.header} alt="Capa" loading="lazy" style={{width: '100%', height: '100%'}}/>
                </div>
                <div ref={proposalRef}>
                    <Page proposta={propostas} cliente={cliente} endereco={endereco}/>
                </div>
            </Paper>}
        </>)
}
export default Propostas
