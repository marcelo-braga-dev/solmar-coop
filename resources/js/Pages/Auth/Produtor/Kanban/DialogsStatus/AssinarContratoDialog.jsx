import React, {useEffect} from "react";
import {Box, Button, Dialog, DialogContent} from "@mui/material";
import {useKanbanProdutor} from "@/Pages/Auth/Produtor/Kanban/ContextKanban.jsx";
import {IconCheck} from "@tabler/icons-react";
import axios from "axios";
import Contratos from "@/Pages/Admin/User/Produtor/Show/Contratos.jsx";

const AnalisarDocumentosDialog = () => {
    const {openDialog, closeDialog, usinaId, handleUpdatePage, status} = useKanbanProdutor();
    // const [date, setDate] = useState(null);

    const fetch = async () => {
        if (!usinaId) return;
        try {
            // const response = await axios.get(route("auth.usinas.api.get", usinaId));
            // setDate(response.data);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    };

    const aprovar = async () => {
        try {
            await axios.post(route("auth.usinas.api.update-status", usinaId), {
                status: "assinar_contrato",
                _method: "PUT",
            });
            closeDialog();
            handleUpdatePage();
        } catch (error) {
            console.error("Erro ao aprovar documentos:", error);
        }
    };

    useEffect(() => {
        fetch();
    }, [usinaId]);

    if (status !== "assinar_contrato") {
        return null;
    }

    const handleCloneDialog = () => {
        closeDialog();
        // setDate(null);
    }

    return (
        <Dialog
            open={openDialog}
            onClose={handleCloneDialog}
            maxWidth="md"
            fullWidth
        >
            <DialogContent>
                <Contratos />

                <Box sx={{textAlign: "center", marginTop: "20px"}}>
                    <Button
                        color="success"
                        startIcon={<IconCheck/>}
                        onClick={aprovar}
                    >
                        Aprovar Documentos
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AnalisarDocumentosDialog;
