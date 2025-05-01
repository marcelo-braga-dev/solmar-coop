import {Box, Button, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {IconFileTypePdf, IconPlus} from "@tabler/icons-react";
import {Link} from "@inertiajs/react";
import {useEffect, useState} from "react";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const ClientePropostas = ({userId}) => {

    const [propostas, setPropostas] = useState([])
    const [qtdPropostas, setQtdPropostas] = useState(null)

    useEffect(() => {
        getPropostas()
    }, []);

    const getPropostas = async () => {
        const response = await axios.get(route('auth.cliente.proposta.api.get-cliente', userId))
        setPropostas(response.data)
        setQtdPropostas(response.data.length)
    }

    return (
        <Box>
            <Box marginBottom={2}>
                <Link href={route('auth.cliente.proposta.create')}>
                    <Button color="warning" startIcon={<IconPlus/>}>Gerar Proposta</Button>
                </Link>
            </Box>
            {propostas.map(proposta => {
                return (
                    <Paper variant="outlined" sx={{padding: 2, marginBottom: 4}}>
                        <Link href={route('auth.cliente.proposta.show', proposta.id)}>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid size={{xs: 6, md: 3}}>
                                    {proposta?.media_consumo && <TextInfo title="Média Consumo" text={`${proposta.media_consumo} kWh`}/>}
                                </Grid>
                                <Grid size={{xs: 6, md: 3}}>
                                    {proposta?.prazo_locacao && <TextInfo title="Prazo Assinatura" text={`${proposta?.prazo_locacao} meses`}/>}
                                </Grid>
                                <Grid size={{xs: 6, md: 3}}>
                                    {proposta?.taxa_reducao && <TextInfo title="Redução da Conta" text={`${proposta?.taxa_reducao}%`}/>}
                                </Grid>
                                <Grid size={{xs: 6, md: 3}}>
                                    {proposta?.concessionaria?.id &&
                                        <TextInfo title="Concessionária" text={`${proposta?.concessionaria?.nome}/${proposta?.concessionaria?.estado}`}/>}
                                </Grid>
                                <Grid size={{xs: 12}}>
                                    <IconFileTypePdf color="red" size={30}/>
                                </Grid>
                            </Grid>
                        </Link>
                    </Paper>
                )
            })}

            {qtdPropostas === 0 && <Typography>Não há registros de propostas emitidas para este cliente.</Typography>}
        </Box>)

}
export default ClientePropostas
