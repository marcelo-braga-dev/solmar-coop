import Layout from "@/Layouts/UserLayout/Layout.jsx";
import {Button, Card, CardContent} from "@mui/material";
import {IconCheck} from "@tabler/icons-react";
import {router} from "@inertiajs/react";
import DadoPessoaisData from "@/Components/DataUser/DadoPessoaisData.jsx";
import EnderecoData from "@/Components/DataUser/EnderecoData.jsx";
import ContatoData from "@/Components/DataUser/ContatoData.jsx";
import Proposta from "@/Components/Usina/Proposta.jsx";

const AnalizarDocumentos = ({produtor}) => {

    const aprovarProdutor = () => {
        router.post(route('admin.produtor.status.analizar-documentos.update', produtor.id), {_method: 'PUT'})
    }

    return (
        <Layout titlePage="Analizar Documentos do Produtor" menu="produtores-solar" backPage>
            <DadoPessoaisData user={produtor}/>

            {/*Endereco*/}
           <EnderecoData user={produtor}/>

           {/* /!*Contato*!/*/}
            <ContatoData user={produtor}/>

           {/* /!*Usina*!/*/}
            <Proposta proposta={produtor.propostas}/>

            <Card>
                <CardContent className="text-center">
                    <Button
                        startIcon={<IconCheck/>}
                        color="success"
                        onClick={aprovarProdutor}
                    >
                        Aprovar Documentação
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    )
}
export default AnalizarDocumentos
