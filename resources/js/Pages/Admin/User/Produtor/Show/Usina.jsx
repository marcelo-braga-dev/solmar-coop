import {Stack, Typography} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Usina = ({usina}) => {
    return (
        <Stack spacing={2}>
            {!usina && <Typography>Não há registros de usinas solar.</Typography>}
            {usina?.media_geracao && <TextInfo title="Média Geração" text={`${usina.media_geracao} kWh/mes`}/>}
            {usina?.prazo_locacao && <TextInfo title="Prazo Locação" text={`${usina.prazo_locacao} dias`}/>}
            {usina?.taxa_reducao_consumo && <TextInfo title="Taxa de Redução de Consumo" text={`${usina.taxa_reducao_consumo}%`}/>}
            {usina?.potencia_usina && <TextInfo title="Potência Total da Usina" text={`${usina.potencia_usina} kWp`}/>}
            {usina?.inversores && <TextInfo title="Inversores" text={usina.inversores}/>}
            {usina?.modulos && <TextInfo title="Módulos" text={usina.modulos}/>}
            {usina?.concessionaria_id && <TextInfo title="Concessionária" text={`${usina.concessionaria.nome}/${usina.concessionaria.estado}`}/>}
        </Stack>
    )
}
export default Usina
