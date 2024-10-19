import {Card, CardContent, CardHeader, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {IconMapPin} from "@tabler/icons-react";
import {useEffect} from "react";
import useInputMask from "@/Utils/Masks/InputsMask.js";

const Endereco = ({setData, data}) => {
    useEffect(() => {
        useInputMask()
    }, []);

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Endereço" avatar={<IconMapPin/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{md: 3}}>
                        <TextField
                            label="CEP"
                            className="cep"
                            onChange={e => setData({...data, endereco: {...data.endereco, cep: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 9}}>
                        <TextField
                            label="Rua/Av:"
                            onChange={e => setData({...data, endereco: {...data.endereco, rua: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 2}}>
                        <TextField
                            label="Número:"
                            onChange={e => setData({...data, endereco: {...data.endereco, numero: e.target.value}})}
                            fullWidth
                        />
                    </Grid>

                    <Grid size={{md: 4}}>
                        <TextField
                            label="Complemento:"
                            onChange={e => setData({...data, endereco: {...data.endereco, complemento: e.target.value}})}
                            fullWidth
                        />
                    </Grid>

                    <Grid size={{md: 6}}>
                        <TextField
                            label="Bairro:"
                            onChange={e => setData({...data, endereco: {...data.endereco, bairro: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 4}}>
                        <TextField
                            label="Cidade:"
                            onChange={e => setData({...data, endereco: {...data.endereco, cidade: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 4}}>
                        <TextField
                            label="Estado:"
                            onChange={e => setData({...data, endereco: {...data.endereco, estado: e.target.value}})}
                            fullWidth
                        />
                    </Grid>

                    <Grid size={{md: 4}}>
                        <TextField
                            label="Ponto de Referência:"
                            onChange={e => setData({...data, endereco: {...data.endereco, referencia: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Endereco
