import {Stack, Typography} from "@mui/material";
import TextInfo from "@/Components/DataDisplay/TextInfo.jsx";

const Financeiro = ({financeiro}) => {
    return (
        <Stack spacing={2}>
            {!financeiro && <Typography>Não há registros financeiros.</Typography>}
        </Stack>
    )
}
export default Financeiro
