import {Card, CardContent, CardHeader, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {IconMapPin} from "@tabler/icons-react";
import {useEffect} from "react";
import useInputMask from "@/Utils/Masks/InputsMask.js";
import {buscarCep} from "@/Utils/buscarCepUtil.js";

const Endereco = ({setData, data}) => {
    useEffect(() => {
        useInputMask()
    }, []);

    const handleBuscarCep = async () => {
        const cep = data?.endereco?.cep
        if (cep.length === 9) {
            try {
                const enderecoData = await buscarCep(cep);

                setData({
                    ...data,
                    endereco: {
                        // cep: e.target.value,
                        rua: enderecoData.logradouro,
                        bairro: enderecoData.bairro,
                        cidade: enderecoData.cidade,
                        estado: enderecoData.estado,
                    }
                })
            } catch (error) {
                alert(error.message);
            }
        } else {
            alert('Digite um CEP válido com 8 dígitos.');
        }
    };

    return (
        <Card sx={{marginBottom: 4}}>
            <CardHeader title="Endereço" avatar={<IconMapPin/>} disableTypography/>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{md: 3}}>
                        <TextField
                            label="CEP"
                            className="cep"
                            onBlur={handleBuscarCep}
                            onChange={e => setData({...data, endereco: {...data.endereco, cep: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 9}}>
                        <TextField
                            label="Rua/Av:"
                            value={data?.endereco?.rua}
                            onChange={e => setData({...data, endereco: {...data.endereco, rua: e.target.value}})}
                            slotProps={{ inputLabel: {shrink: !!data?.endereco?.rua} }}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 2}}>
                        <TextField
                            label="Número:"
                            required={!!data?.endereco?.rua}
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
                            value={data?.endereco?.bairro}
                            slotProps={{ inputLabel: {shrink: !!data?.endereco?.bairro} }}
                            onChange={e => setData({...data, endereco: {...data.endereco, bairro: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 4}}>
                        <TextField
                            label="Cidade:"
                            value={data?.endereco?.cidade}
                            slotProps={{ inputLabel: {shrink: !!data?.endereco?.cidade} }}
                            onChange={e => setData({...data, endereco: {...data.endereco, cidade: e.target.value}})}
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{md: 4}}>
                        <TextField
                            label="Estado:"
                            value={data?.endereco?.estado}
                            slotProps={{ inputLabel: {shrink: !!data?.endereco?.estado} }}
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
