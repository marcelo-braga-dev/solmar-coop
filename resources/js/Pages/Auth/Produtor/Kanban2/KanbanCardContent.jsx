import Grid from "@mui/material/Grid2";
import {IconEye, IconFileTypePdf, IconHash, IconId, IconMapPin, IconUser} from "@tabler/icons-react";
import {Button, Stack, Typography} from "@mui/material";
import React, {useMemo} from "react";
import {Link} from "@inertiajs/react";

const KanbanCardContent = ({card}) => {

    return useMemo(() => {
        return (
            <Stack spacing={1}>
                <Grid container gap={1}>
                    <Grid size={1}>
                        <IconUser/>
                    </Grid>
                    <Grid size={10}>
                        <Typography>{card.data_user.nome ?? card.data_user.razao_social}</Typography>
                    </Grid>
                </Grid>
                <Grid container gap={1}>
                    <Grid size={1}>
                        <IconId/>
                    </Grid>
                    <Grid size={10}>
                        <Typography>{card.data_user.cnpj}</Typography>
                    </Grid>
                </Grid>
                <Grid container gap={1}>
                    <Grid size={1}>
                        <IconHash/>
                    </Grid>
                    <Grid size={10}>
                        <Typography>{card.id}</Typography>
                    </Grid>
                </Grid>
                <Grid container gap={1}>
                    <Grid size={1}>
                        <IconMapPin/>
                    </Grid>
                    <Grid size={10}>
                        <Typography>{card.endereco.cidade_estado}</Typography>
                    </Grid>
                </Grid>
                <Grid container gap={1} justifyContent="end">
                    {card.status === 'assinar_contrato' && <Grid size="auto">
                        <Link href={`${route('admin.produtor.show', card.id)}?tab=contratos`}>
                            <Button color="error" startIcon={<IconFileTypePdf/>} size="small">Contrato</Button>
                        </Link>
                    </Grid>}
                    <Link href={route('admin.produtor.show', card.id)}>
                        <Button startIcon={<IconEye/>} color="success" size="small">Abrir</Button>
                    </Link>
                </Grid>
            </Stack>
        )
    }, [card.data_user.nome, card.data_user.razao_social, card.data_user.cnpj, card.id, card.endereco.cidade_estado, card.status])
}
export default KanbanCardContent
