import {Card, CardContent, CardHeader} from "@mui/material";
import {IconMapPin} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const EnderecoData = ({user}) => {
    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Endereço" avatar={<IconMapPin/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={6}>
                        <TextInfo title="Cep" text={user.endereco.cep}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Rua/Av." text={user.endereco.rua}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Número" text={user.endereco.numero}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Complemento" text={user.endereco.complemento}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Bairro" text={user.endereco.bairro}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Cidade" text={user.endereco.cidade}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Estado" text={user.endereco.estado}/>
                    </Grid>
                    <Grid size={6}>
                        <TextInfo title="Ponto Referência" text={user.endereco.referencia}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default EnderecoData
