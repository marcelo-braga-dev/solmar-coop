import {Button, Divider, Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {IconDownload} from "@tabler/icons-react";
import {useEffect, useRef, useState} from "react";
import PropostaClientePage from "@/Pages/Auth/Propostas/Cliente/Proposta/PropostaClientePage.jsx";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const PropostaCliente = ({idProposta}) => {
    const [layout, setLayout] = useState([])
    const [dados, setDados] = useState([])
    const proposalRef = useRef(null);

    useEffect(() => {
        fethcDadosProposta()
        fethcLayout()
    }, []);

    const fethcDadosProposta = async () => {
        const response = await axios.get(route('auth.propostas.pdf.cliente.get-dados', idProposta))
        setDados(response.data)
        console.log(response.data)
    }

    const fethcLayout = async () => {
        const response = await axios.get(route('auth.propostas.pdf.cliente.layout-pdf'))
        setLayout(response.data)
    }

    const generatePdf = () => {
        const htmlContent = proposalRef.current.innerHTML;

        axios.post(route('auth.propostas.pdf.cliente.gerar-pdf'), {html: htmlContent}, {
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

    return (
        <>
            <Paper variant="outlined" sx={{padding: 2, marginBottom: 4}}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid size={{xs: 6, md: 3}}>
                        {dados?.media_consumo && <TextInfo title="Média Consumo" text={`${dados.media_consumo} kWh`}/>}
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        {dados?.prazo_locacao && <TextInfo title="Prazo Locação" text={`${dados?.prazo_locacao} meses`}/>}
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        {dados?.taxa_reducao && <TextInfo title="Redução da Conta" text={`${dados?.taxa_reducao}%`}/>}
                    </Grid>
                    <Grid size={{xs: 6, md: 3}}>
                        {dados?.concessionaria?.id &&
                            <TextInfo title="Concessionária" text={`${dados?.concessionaria?.nome}/${dados?.concessionaria?.estado}`}/>}
                    </Grid>
                    <Grid size={{xs: 6}}>
                        <Button color="error" onClick={generatePdf} startIcon={<IconDownload/>}>Baixar PDF</Button>
                    </Grid>
                </Grid>
            </Paper>
            {layout.capa && <Paper sx={{padding: 2}} variant="outlined">
                <div style={{textAlign: 'center', pageBreakAfter: 'always'}}>
                    <img src={layout.capa} alt="Capa" loading="lazy"/>
                </div>

                <div ref={proposalRef}>
                    <PropostaClientePage dados={dados}/>
                </div>

                <div style={{textAlign: 'center', pageBreakAfter: 'always'}}>
                    <img src={layout.page_2} alt="Capa" loading="lazy"/>
                </div>
                <Divider sx={{marginBottom: 5}}/>
                <div style={{textAlign: 'center', pageBreakAfter: 'always'}}>
                    <img src={layout.page_3} alt="Capa" loading="lazy"/>
                </div>
                <Divider sx={{marginBottom: 5}}/>
                <div style={{textAlign: 'center', pageBreakAfter: 'always'}}>
                    <img src={layout.page_4} alt="Capa" loading="lazy"/>
                </div>
                <Divider sx={{marginBottom: 5}}/>
                <div style={{textAlign: 'center', pageBreakAfter: 'always'}}>
                    <img src={layout.page_5} alt="Capa" loading="lazy"/>
                </div>
            </Paper>}
        </>)
}
export default PropostaCliente
