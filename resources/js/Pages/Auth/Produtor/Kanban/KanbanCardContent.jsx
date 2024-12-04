import Grid from "@mui/material/Grid2";
import {IconFileSearch, IconEye, IconHash, IconId, IconUser} from "@tabler/icons-react";
import {Button, IconButton, Stack, Typography} from "@mui/material";
import React, {useMemo} from "react";
import {Link} from "@inertiajs/react";
import {useKanbanProdutor} from "@/Pages/Auth/Produtor/Kanban/ContextKanban.jsx";

const KanbanCardContent = ({card}) => {

    const {buttonClick} = useKanbanProdutor()

    const handleClick = () => {
        buttonClick(card.id, card.status)
    }

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
                        {/*<Grid container gap={1}>*/}
                        {/*    <Grid size={1}>*/}
                        {/*        <IconMapPin/>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid size={10}>*/}
                        {/*        /!*<Typography>{card.endereco.cidade_estado}</Typography>*!/*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                        <Grid container gap={1} justifyContent="end">
                            <Button
                                startIcon={<IconFileSearch/>}
                                color="success"
                                size="small"
                                onClick={handleClick}
                            >
                                Analisar Documentos
                            </Button>
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
    }, [card.proprietario.data_user.nome, card.proprietario.data_user.razao_social, card.proprietario.data_user.cnpj, card.id, card.proprietario.id])
}
export default KanbanCardContent
