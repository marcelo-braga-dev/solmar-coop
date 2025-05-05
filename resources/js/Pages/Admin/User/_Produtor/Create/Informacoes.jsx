import {Box, Card, CardContent, CardHeader} from "@mui/material";
import {IconClipboardText} from "@tabler/icons-react";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import Grid from "@mui/material/Grid2";
import {convertData} from "@/Utils/Datas/convertData.js";
import {IconPhoneCall} from "@tabler/icons-react";
import {IconKey} from "@tabler/icons-react";

const Informacoes = ({data, enderecoUsuario}) => {

    return (
        <Box>
            <Card sx={{marginBottom: 4}}>
                <CardHeader title="Dados Cadastrais" avatar={<IconClipboardText/>}/>
                <CardContent>
                    {data.tipo_pessoa === 'pj' && <Grid container>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="CNPJ" text={data.cnpj}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Razão Social" text={data.razao_social}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Nome Fantasia" text={data.nome_fantasia}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Tipo de Empresa" text={data.tipo_empresa}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Ramo Atividade" text={data.ramo_atividade}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Estadual" text={data.ie}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Inscrição Municipal" text={data.im}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Data Fundação" text={data.data_fundacao}/>
                        </Grid>
                    </Grid>}

                    {data.tipo_pessoa === 'pf' && <Grid container>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Nome" text={data.nome}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="CPF" text={data.cpf}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="RG" text={data.rg}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Data de Nascimento" text={convertData(data.data_nascimento)}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Gênero" text={data.genero === 'm' ? 'Marculino' : 'Feminino'}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Estado Civil" text={data.estado_civil}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo title="Ocupação Profissional" text={data.profissao}/>
                        </Grid>
                    </Grid>}

                    <Grid container>
                        <Grid size={{xs: 12, md: 6}}>
                            <TextInfo
                                title="Endereço do Cliente Consumidor"
                                text={`
                                    ${enderecoUsuario?.rua ? enderecoUsuario.rua + ', ' : ''}
                                    ${enderecoUsuario?.numero ? enderecoUsuario.numero + ',' : ''}
                                    ${enderecoUsuario?.bairro ? enderecoUsuario.bairro + ', ' : ''}
                                    ${enderecoUsuario?.complemento ? enderecoUsuario.complemento + ', ' : ''}
                                    ${enderecoUsuario?.referencia ? enderecoUsuario.referencia + ', ' : ''}
                                    ${enderecoUsuario?.cidade ? enderecoUsuario.cidade + ' - ' : ''}
                                    ${enderecoUsuario?.estado ? enderecoUsuario.estado + ', ' : ''}
                                    ${enderecoUsuario?.cep ? 'Cep: ' + enderecoUsuario.cep : ''}
                                    `}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card sx={{marginBottom: 4}}>
                <CardHeader title="Contatos" avatar={<IconPhoneCall/>}/>
                <CardContent>
                    <Grid container>
                        <Grid size={{xs: 12, md: 3}}>
                            <TextInfo title="Celular" text={data?.contato?.celular}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 3}}>
                            <TextInfo title="Celular" text={data?.contato?.celular_2}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 3}}>
                            <TextInfo title="Telefone" text={data?.contato?.telefone}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 3}}>
                            <TextInfo title="E-mail Contato" text={data?.contato?.email}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card sx={{marginBottom: 4}}>
                <CardHeader title="Dados de Acesso" avatar={<IconKey/>}/>
                <CardContent>
                    <Grid container>
                        <Grid size={{xs: 12, md: 4}}>
                            <TextInfo title="E-mail de Usuário" text={data?.email}/>
                        </Grid>
                        {data?.senha && (
                            <Grid size={{xs: 12, md: 4}}>
                                <TextInfo title="Senha de Acesso" text={data?.senha}/>
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}
export default Informacoes



