import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Button, Card, CardContent, CardHeader, Dialog, DialogContent, DialogTitle, IconButton, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import {IconBolt, IconEdit, IconX} from "@tabler/icons-react";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid2";
import formatarMoneyReal from "@/Utils/Formatters/formatarMoney.js";

const Page = ({}) => {
    const [concessionarias, setConcessionarias] = useState([])
    const [openDialog, setOpenDialog] = useState(false)

    const [concessionariaEditar, setConcessionariaEditar] = useState({})
    const [valorGd2, setValorGd2] = useState('')

    useEffect(() => {
        fetchAll()
    }, []);

    const fetchAll = async () => {
        const response = await axios.get(route('admin.concessionaria.api.get-all'))
        setConcessionarias(response.data)
    }

    const handleValorChange = (e) => {
        const valorFormatado = formatarMoneyReal(e.target.value);
        setValorGd2(valorFormatado);
        e.target.value = valorFormatado
    };

    const handleOpenDialog = (concessionaria) => {
        setOpenDialog(true)
        setConcessionariaEditar(concessionaria)

        setValorGd2(formatarMoneyReal(concessionaria.tarifa_gd2))
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
        setConcessionariaEditar({})
    }

    const submit = () => {
        try {
            axios.post(route('auth.concessionarias.update', concessionariaEditar.id),
                {tarifa_gd2: valorGd2, _method: 'PUT'}
            )
        } finally {
            handleCloseDialog()
            fetchAll()
        }
    }

    return (
        <Layout titlePage="Todas Concessionárias Cadastradas" menu="concessionarias" subMenu="concessionarias-todas">
            <Card>
                <CardHeader title="Todas Concessionárias Cadastradas" avatar={<IconBolt/>} disableTypography/>
                <CardContent>
                    {concessionarias.map(item => (
                        <Paper key={item.id} variant="outlined">
                            <Grid container marginBottom={2}>
                                <Grid size={{xs: 11}}>
                                    <TextInfo title="Concessionária" text={item.nome}/>
                                </Grid>
                                <Grid size={{xs: 1}} sx={{textAlign: 'end'}}>
                                    <IconButton onClick={() => handleOpenDialog(item)}>
                                        <IconEdit color="green"/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid size={{xs: 12, md: 4}}>
                                    <TextInfo title="Estado" text={item.estado}/>
                                </Grid>
                                <Grid size={{xs: 12, md: 4}}>
                                    <TextInfo title="Tarifa GD2" text={`R$ ${formatarMoneyReal(item.tarifa_gd2)}`}/>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </CardContent>
            </Card>

            {/*Dialog Editar*/}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h4">Editar Informações</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleCloseDialog}>
                                <IconX color="red"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>

                <DialogContent>
                    <TextInfo title="Concessionária" text={concessionariaEditar.nome}/>

                    <Grid container marginTop={4} spacing={2}>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextField
                                label="Valor da Tarifa GD2"
                                fullWidth
                                value={valorGd2}
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    },
                                }}
                                onChange={handleValorChange}
                            />
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>
                            <Button color="success" onClick={submit}>Atualizar</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Layout>
    )
}
export default Page
