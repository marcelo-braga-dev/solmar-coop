import React, {useState, useEffect, createContext, useContext} from 'react';
import {Snackbar, Alert} from '@mui/material';

const SnackbarContext = createContext();

export const useAlertMessage = () => useContext(SnackbarContext);

export const SnackbarProvider = ({children, initialAlert}) => {

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    useEffect(() => {
        if (initialAlert?.message) {
            setSnackbar({
                open: true,
                message: initialAlert.message,
                severity: initialAlert.type || 'success',
            });
        }
    }, [initialAlert]);

    const alertError = (message) => {
        setSnackbar({open: true, message, severity: 'error'});
    }

    const closeSnackbar = () => {
        setSnackbar((prev) => ({...prev, open: false}));
    };

    return (
        <SnackbarContext.Provider value={{alertError}}>
            {children}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={snackbar.severity === 'error' ? null : 5000}
                onClose={closeSnackbar}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <Alert
                    onClose={closeSnackbar}
                    severity={snackbar.severity}
                    sx={{width: '100%'}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};
