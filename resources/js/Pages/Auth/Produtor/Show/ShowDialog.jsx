import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";

const ShowDialog = ({id, action}) => {
    const [openDialogId, setOpenDialogId] = useState(null);

    const handleClickOpen = (dialogId) => {
        setOpenDialogId(dialogId);
    };

    const handleClose = () => {
        console.log("Fechando diálogo");
        setOpenDialogId(null);
    };

    return (
        <>
            <div onClick={() => handleClickOpen(id)}>
                {action}
            </div>
            <Dialog
                open={openDialogId === id}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{zIndex: 5000}}
            >
                <DialogTitle id="alert-dialog-title">{"Diálogo " + id}</DialogTitle>
                <DialogContent>
                    Conteúdo do Diálogo {id}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ShowDialog;
