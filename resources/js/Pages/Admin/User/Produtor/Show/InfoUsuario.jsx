import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import Grid from "@mui/material/Grid2";

const InfoUsuario = ({usuario, contatos, status}) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{xs: 12, md: 6}}>
                {status && <TextInfo title="Status" text={status}/>}
                {usuario?.nome && <TextInfo title="Nome" text={usuario.nome}/>}
                {usuario?.razao_social && <TextInfo title="Razão Social" text={usuario.razao_social}/>}
                {usuario?.nome_fantasia && <TextInfo title="Nome Fantasia" text={usuario.nome_fantasia}/>}
                {usuario?.cnpj && <TextInfo title="CNPJ" text={usuario.cnpj}/>}
                {usuario?.cpf && <TextInfo title="CPF" text={usuario.cpf}/>}
                {usuario?.rg && <TextInfo title="RG" text={usuario.rg}/>}
                {usuario?.ie && <TextInfo title="Inscrição Estadual" text={usuario.ie}/>}
                {usuario?.im && <TextInfo title="Inscrição Municipal" text={usuario.im}/>}
                {usuario?.data_nascimento && <TextInfo title="Data Nascimento" text={usuario.data_nascimento}/>}
                {usuario?.data_fundacao && <TextInfo title="Data Fundação" text={usuario.data_fundacao}/>}
                {usuario?.genero && <TextInfo title="Gênero" text={usuario.genero}/>}
                {usuario?.estado_civil && <TextInfo title="Estado Civil" text={usuario.estado_civil}/>}
                {usuario?.profissao && <TextInfo title="Profissão/Ocupação" text={usuario.profissao}/>}
                {usuario?.tipo_empresa && <TextInfo title="Tipo de Empresa" text={usuario.tipo_empresa}/>}
                {usuario?.ramo_atividade && <TextInfo title="Ramo de Atividade" text={usuario.ramo_atividade}/>}
                {usuario?.cadastrado_em && <TextInfo title="Data Cadastro" text={usuario.cadastrado_em}/>}
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                {contatos?.celular && <TextInfo title="Celular" text={contatos.celular}/>}
                {contatos?.celular_2 && <TextInfo title="Celular 2" text={contatos.celular_2}/>}
                {contatos?.telefone && <TextInfo title="Telefone" text={contatos.telefone}/>}
                {contatos?.email && <TextInfo title="Email" text={contatos.email}/>}
            </Grid>
            <Grid size={{xs: 12}}>
                {usuario?.endereco?.endereco_completo && <TextInfo title="Endereço do Produtor" text={usuario?.endereco?.endereco_completo}/>}
            </Grid>
        </Grid>

    )
}
export default InfoUsuario
