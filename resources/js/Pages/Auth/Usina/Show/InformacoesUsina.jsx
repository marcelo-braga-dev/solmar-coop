import {Box, LinearProgress, Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import * as React from "react";
import {useEffect, useState} from "react";

const InformacoesUsina = ({id}) => {
    const [loading, setLoading] = useState(false)
    const [usina, setUsina] = useState()

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        setLoading(true)
        try {
            const response = await axios.get(route('auth.usinas.api.get', id))

            setUsina(response.data)
        } finally {
            setLoading(false)
        }
    }

    return (
        usina && <Box>

            {loading && <LinearProgress/>}

            <Paper variant="outlined">
                <Grid container>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Proprietário" text={usina?.proprietario?.nome}/>
                    </Grid>
                    {usina?.proprietario?.user_data?.cnpj && <Grid size={{xs: 12, md: 3}}>
                        <TextInfo title="CNPJ" text={usina.proprietario?.user_data?.cnpj}/>
                    </Grid>}
                    {usina?.proprietario?.user_data?.cpf && <Grid size={{xs: 12, md: 3}}>
                        <TextInfo title="CPF" text={usina?.proprietario?.user_data?.cpf}/>
                    </Grid>}
                </Grid>
            </Paper>

            <Paper variant="outlined">
                <TextInfo title="Consultor(a)" text={usina?.consultor?.nome}/>
            </Paper>

            <Paper variant="outlined">
                <Grid container>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Concessionária" text={`${usina.concessionaria?.nome}/${usina.concessionaria.estado}`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <TextInfo title="Unidade Consumidora" text={usina.uc}/>
                    </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                    <Grid size={{xs: 12, md: 4}}>
                        <TextInfo title="Potência da Usina" text={`${usina.potencia_usina} kWh`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <TextInfo title="Média Geração" text={`${usina.media_geracao} kWh/mês`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <TextInfo title="ID da Usina Solar" text={`#${usina.id}`}/>
                    </Grid>
                </Grid>
            </Paper>

            <Paper variant="outlined">
                <Grid container justifyContent="space-between">
                    <Grid size={{xs: 12, md: 4}}>
                        <TextInfo title="Prazo Locação" text={`${usina.prazo_locacao} meses`}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <TextInfo title="Taxa Comissão" text={`${usina.taxa_comissao ?? ''}%`}/>
                    </Grid>
                </Grid>
            </Paper>

            <Paper variant="outlined">
                <TextInfo title="Inversores" text={usina.inversores}/>
                <TextInfo title="Módulos" text={usina.modulos}/>
            </Paper>
        </Box>
    )
}
export default InformacoesUsina
