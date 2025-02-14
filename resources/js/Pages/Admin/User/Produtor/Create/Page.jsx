import {useState} from "react";
import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {router, useForm} from "@inertiajs/react";
import {Button, Card, CardContent, Paper} from "@mui/material";
import {IconArrowLeft, IconArrowRight, IconCheck} from "@tabler/icons-react";
import DadosPessoais from "@/Components/UserData/DadosPessoais.jsx";
import Endereco from "@/Components/UserData/Endereco.jsx";
import Contato from "@/Components/UserData/Contato.jsx";
import DadosAcesso from "@/Components/UserData/DadosAcesso.jsx";
import Usina from "@/Pages/Admin/User/Produtor/Create/Usina.jsx";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Grid from "@mui/material/Grid2";
import Informacoes from "@/Pages/Admin/User/Produtor/Create/Informacoes.jsx";

const steps = [
    'Informações do Produtor',
    'Informações da Usina',
    'Confirmar Informações',
];

const Page = () => {
    const [step, setStep] = useState(0);
    const [enderecoUsina, setEnderecoUsina] = useState({});
    const [enderecoProdutor, setEnderecoProdutor] = useState({});

    const {data, setData} = useForm({
        tipo_pessoa: 'pj'
    });

    const handleStepForward = () => {
        setStep((e) => ++e);
    };

    const handleStepBack = () => {
        setStep((e) => --e);
    };

    const submit = (e) => {
        e.preventDefault();

        if (step === 2) {
            router.post(route('auth.produtor.store'), {
                ...data,
                usina_endereco: enderecoUsina,
                endereco: enderecoProdutor,
            });
            return
        }

        handleStepForward()
    };

    return (
        <Layout titlePage="Cadastro de Produtor" menu="produtores-solar" subMenu="produtores-solar-cadastrados-2" backPage>
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
                        <Endereco title="Endereço do Produtor" endereco={enderecoProdutor} setEndereco={setEnderecoProdutor}/>
                        <Contato data={data} setData={setData}/>
                        <DadosAcesso data={data} setData={setData}/>

                        <Paper sx={{padding: 2}}>
                            <Grid container justifyContent="center">
                                <Grid/>
                                <Grid>
                                    <Button
                                        color="warning"
                                        endIcon={<IconArrowRight/>}
                                        type="submit"
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
                        <Usina data={data} setData={setData}/>
                        <Endereco title="Endereço da Usina Solar" endereco={enderecoUsina} setEndereco={setEnderecoUsina}/>

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
                                        type="submit"
                                        endIcon={<IconArrowRight/>}
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
                        <Informacoes data={data}/>

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
                                    <Button type="submit" startIcon={<IconCheck/>} color="success">
                                        Cadastrar Produtor
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                )}
            </form>
        </Layout>
    );
};

export default Page;
