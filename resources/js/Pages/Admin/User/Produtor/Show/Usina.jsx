import {Stack, Typography} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Usina = ({usina}) => {
    return (
        <Stack spacing={2}>
            {!usina && <Typography>Não há registros de usinas solar.</Typography>}
            {usina?.media_geracao && <TextInfo title="Média Geração" text={usina.media_geracao}/>}
            {usina?.prazo_locacao && <TextInfo title="Prazo Locação" text={usina.prazo_locacao}/>}
            {usina?.concessionaria_id && <TextInfo title="Concessionária" text={`${usina.concessionaria.nome}/${usina.concessionaria.estado}`}/>}
        </Stack>
    )
}
export default Usina
