import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {router, useForm} from "@inertiajs/react";

import {Button, Card, CardContent, Paper} from "@mui/material";
import {IconArrowLeft, IconArrowRight, IconPlus} from "@tabler/icons-react";

import DadosPessoais from "@/Components/UserData/DadosPessoais.jsx";
import Endereco from "@/Components/UserData/Endereco.jsx";
import Contato from "@/Components/UserData/Contato.jsx";
import DadosAcesso from "@/Components/UserData/DadosAcesso.jsx";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {useState} from "react";
import Grid from "@mui/material/Grid2";
import ConsumoDados from "@/Pages/Admin/User/Cliente/Create/ConsumoDados.jsx";
import Informacoes from "@/Pages/Admin/User/Produtor/Create/Informacoes.jsx";

const steps = [
    'Dados do Cliente',
    'Dados da Consumo',
    'Confirmar Informações',
];

const Page = () => {
    const [step, setStep] = useState(0);

    const [enderecoCliente, setEnderecoCliente] = useState({});
    const [enderecoUC, setEnderecoUC] = useState({});

    const {data, setData} = useForm({
        tipo_pessoa: 'pj'
    })

    const submit = (e) => {
        e.preventDefault()
        router.post(route('admin.user.cliente.store'),
            {...data, endereco: enderecoCliente})
    }

    const handleStepForward = () => {
        if (validateStep()) {
            setStep(e => ++e);
        }
    };

    const handleStepBack = () => {
        setStep((e) => --e);
    };

    const validateStep = () => {
        return true
    }

    return (
        <Layout titlePage="Cadastro de Cliente Consumidor" menu="clientes" subMenu="clientes-cadastrar" backPage>
            <Card sx={{marginBlockEnd: 3}}>
                <CardContent>
                    <Box sx={{width: '100%'}}>
                        <Stepper activeStep={step} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </CardContent>
            </Card>

            <form onSubmit={submit}>
                {step === 0 && (
                    <Box>
                        <DadosPessoais data={data} setData={setData}/>
                        <Endereco title="Endereço do Cliente" endereco={enderecoCliente} setEndereco={setEnderecoCliente}/>
                        <Contato data={data} setData={setData}/>
                        <DadosAcesso data={data} setData={setData}/>

                        <Paper sx={{padding: 2}}>
                            <Grid container justifyContent="center">
                                <Grid/>
                                <Grid>
                                    <Button
                                        color="warning"
                                        endIcon={<IconArrowRight/>}
                                        onClick={handleStepForward}
                                    >
                                        Avançar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                )}

                {step === 1 && (
                    <Box>
                        <ConsumoDados data={data} setData={setData}/>
                        <Endereco title="Endereço da Unidade Consumidora" endereco={enderecoUC} setEndereco={setEnderecoUC}/>

                        <Paper sx={{padding: 2}}>
                            <Grid container justifyContent="space-between">
                                <Grid>
                                    <Button
                                        color="info"
                                        startIcon={<IconArrowLeft/>}
                                        onClick={handleStepBack}
                                    >
                                        Voltar
                                    </Button>
                                </Grid>
                                <Grid>
                                    <Button
                                        color="warning"
                                        endIcon={<IconArrowRight/>}
                                        onClick={handleStepForward}
                                    >
                                        Avançar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                )}

                {step === 2 && (
                    <Box>
                        <Informacoes data={data} enderecoUsuario={enderecoCliente}/>
                        <Paper sx={{padding: 2}}>
                            <Grid container justifyContent="space-between">
                                <Grid>
                                    <Button
                                        color="info"
                                        startIcon={<IconArrowLeft/>}
                                        onClick={handleStepBack}
                                    >
                                        Voltar
                                    </Button>
                                </Grid>
                                <Grid>
                                    <Button type="submit" startIcon={<IconPlus/>} color="success">
                                        Cadastrar Cliente
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                )}
            </form>
        </Layout>
    )
}
export default Page
