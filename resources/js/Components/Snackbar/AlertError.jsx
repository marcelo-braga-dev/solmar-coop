import {Alert, Snackbar} from "@mui/material";
import React from "react";

export const AlertError = ({message, close}) => {

    return (
        <Snackbar
            open={true}
            autoHideDuration={5000}
            onClose={() => close(false)}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            <Alert
                onClose={() => close(false)}
                severity="error"
                sx={{width: '100%'}}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}
