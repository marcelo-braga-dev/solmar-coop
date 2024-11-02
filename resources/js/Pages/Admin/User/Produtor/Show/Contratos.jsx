import {Button, Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {IconDownload, IconFileCheck} from "@tabler/icons-react";
import {useRef} from "react";
import ContratoUsina from "@/Pages/Auth/Contratos/Usinas/Contrato/ContratoUsina.jsx";

const Contratos = ({contratos, contratado}) => {

    const proposalRef = useRef(null);

    const handleDownload = async () => {
        try {
            const response = await axios.get(route('auth.contratos.pdf.usina.gerar-pdf'), {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${contratado.razao_social}_contrato_usina.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Erro ao gerar o PDF:', error);
        }
    };

    return (
        <>
            <Paper variant="outlined" sx={{padding: 2, marginBottom: 4}}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid size={1} paddingInlineEnd={2}>
                        <IconFileCheck color="green" size={30}/>
                    </Grid>
                    <Grid size={11} container justifyContent="space-between" gap={2}>
                        <Grid>
                        </Grid>
                        <Grid size="auto">
                            <Button color="error" onClick={handleDownload} startIcon={<IconDownload/>}>Baixar PDF</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Paper variant="outlined" sx={{padding: 2, marginBottom: 4}}>
                <div ref={proposalRef}>
                    <ContratoUsina/>
                </div>
            </Paper>
        </>)

}
export default Contratos
