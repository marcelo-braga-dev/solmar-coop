import React, {useEffect} from "react";
import {Dialog, DialogContent} from "@mui/material";
import {useKanbanProdutor} from "@/Pages/Auth/Produtor/Kanban/ContextKanban.jsx";
// import Contratos from "@/Pages/Admin/User/Produtor/Show/Contratos.jsx";

const AnalisarDocumentosDialog = () => {
    const {openDialog, closeDialog, usinaId, status} = useKanbanProdutor();
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
                {/*<Contratos/>*/}
            </DialogContent>
        </Dialog>
    );
};

export default AnalisarDocumentosDialog;
