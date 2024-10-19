import {Card, CardContent, CardHeader, TextField} from "@mui/material";
import {IconMapPin, IconPhoneCall} from "@tabler/icons-react";
import Grid from "@mui/material/Grid2";
import {data} from "autoprefixer";
import {useEffect} from "react";
import useInputMask from "@/Utils/Masks/InputsMask.js";

const Contato = ({data, setData}) => {
    useEffect(() => {
        useInputMask()
    }, []);

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Contatos" avatar={<IconPhoneCall/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{md: 3}}>
                        <TextField
                            label="Nome do Proprietário do Contato:"
                            onChange={e => setData({...data, contato: {...data.contato, nome: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 3}}>
                        <TextField
                            label="Email:"
                            onChange={e => setData({...data, contato: {...data.contato, email: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 3}}>
                        <TextField
                            label="Celular:"
                            className="mobile"
                            onChange={e => setData({...data, contato: {...data.contato, celular: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 3}}>
                        <TextField
                            label="Telefone:"
                            className="phone"
                            onChange={e => setData({...data, contato: {...data.contato, telefone: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Contato
