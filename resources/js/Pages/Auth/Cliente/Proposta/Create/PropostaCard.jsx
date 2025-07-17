import {Card, CardContent, CardHeader} from "@mui/material";
import {IconFileInvoice} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import {useEffect, useState} from "react";

const PropostaCard = () => {

    const [taxaReducao, setTaxaReducao] = useState()

    const getTaxaRuducao = async () => {
        const response = await axios.get(route('auth.config.api.get-taxa-reducao-conta'))
        setTaxaReducao(response.data)
    }

    useEffect(() => {
        getTaxaRuducao()
    }, []);

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Informaçõe da Proposta" avatar={<IconFileInvoice/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <TextInfo title="Taxa Redução da Conta de Energia" text={`${taxaReducao}%`}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default PropostaCard
