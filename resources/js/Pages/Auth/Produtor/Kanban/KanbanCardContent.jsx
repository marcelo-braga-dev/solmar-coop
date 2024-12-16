import Grid from "@mui/material/Grid2";
import {IconEye, IconHash, IconId, IconUser} from "@tabler/icons-react";
import {IconButton, Stack, Typography} from "@mui/material";
import React, {useMemo} from "react";
import {Link} from "@inertiajs/react";
import KanbanButton from "@/Pages/Auth/Produtor/Kanban/KanbanButton.jsx";

const KanbanCardContent = ({card}) => {

    return useMemo(() => {
        return (
            <Grid container>
                <Grid size={11}>
                    <Stack spacing={1}>
                        <Grid container gap={1}>
                            <Grid size={1}>
                                <IconUser/>
                            </Grid>
                            <Grid size={10}>
                                <Typography>{card.proprietario.data_user.nome ?? card.proprietario.data_user.razao_social}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container gap={1}>
                            <Grid size={1}>
                                <IconId/>
                            </Grid>
                            <Grid size={10}>
                                <Typography>{card.proprietario.data_user.cnpj}</Typography>
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
                        <Grid container gap={1} justifyContent="end">
                            <KanbanButton cardId={card.id} status={card.status}/>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid size={1}>
                    <IconButton component={Link} href={route('admin.produtor.show', card.proprietario.id)}>
                        <IconEye/>
                    </IconButton>
                </Grid>
            </Grid>
        )
    }, [card.proprietario.data_user.nome, card.proprietario.data_user.razao_social, card.proprietario.data_user.cnpj, card.id, card.proprietario.id, card.status])
}
export default KanbanCardContent
