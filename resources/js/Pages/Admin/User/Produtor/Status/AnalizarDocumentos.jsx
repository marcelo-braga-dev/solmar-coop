import Layout from "@/Layouts/UserLayout/Layout.jsx";
import Grid from "@mui/material/Grid2";
import {Button, Card, CardContent, CardHeader} from "@mui/material";
import {IconCheck, IconClipboardText, IconMapPin, IconPhoneCall, IconSolarPanel2} from "@tabler/icons-react";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";
import {router} from "@inertiajs/react";
import DadoPessoaisData from "@/Components/DataUser/DadoPessoaisData.jsx";
import EnderecoData from "@/Components/DataUser/EnderecoData.jsx";
import ContatoData from "@/Components/DataUser/ContatoData.jsx";
import UsinaData from "@/Components/Usina/UsinaData.jsx";

const AnalizarDocumentos = ({produtor}) => {

    const aprovarProdutor = () => {
        router.post(route('admin.produtor.status.analizar-documentos.update', produtor.id), {_method: 'PUT'})
    }

    return (
        <Layout titlePage="Analizar Documentos do Produtor" menu="produtores-solar" back>
            <DadoPessoaisData user={produtor}/>

            {/*Endereco*/}
           <EnderecoData user={produtor}/>

            {/*Contato*/}
            <ContatoData user={produtor}/>

            {/*Usina*/}
            <UsinaData usina={produtor.usina}/>

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
