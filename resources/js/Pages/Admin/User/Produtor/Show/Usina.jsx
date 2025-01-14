import {Stack, Typography} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Usina = ({usina}) => {
    return (
        <Stack spacing={2}>
            {!usina && <Typography>Não há registros de usinas solar.</Typography>}
            {usina?.media_geracao && <TextInfo title="Média Geração" text={`${usina.media_geracao} kWh/mes`}/>}
            {usina?.prazo_locacao && <TextInfo title="Prazo Locação" text={`${usina.prazo_locacao} dias`}/>}
            {usina?.potencia_usina && <TextInfo title="Potência Total da Usina" text={`${usina.potencia_usina} kWp`}/>}
            {usina?.inversores && <TextInfo title="Inversores" text={usina.inversores}/>}
            {usina?.modulos && <TextInfo title="Módulos" text={usina.modulos}/>}
            {usina?.concessionaria_id && <TextInfo title="Concessionária" text={`${usina.concessionaria.nome}/${usina.concessionaria.estado}`}/>}
            {usina?.endereco?.endereco_completo && <TextInfo title="Endereço da Usina" text={usina?.endereco?.endereco_completo}/>}
        </Stack>
    )
}
export default Usina
