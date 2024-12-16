import React, {useState, createContext, useContext} from 'react';

const KanbanProdutorContext = createContext();

export const useKanbanProdutor = () => useContext(KanbanProdutorContext);

export const KanbanProdutorProvider = ({children}) => {

    const [status, setStatus] = useState()
    const [usinaId, setUsinaId] = useState()
    const [updatePage, setUpdatePage] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const openDialogStatus = (id, status) => {
        setUsinaId(id)
        setStatus(status)
        setOpenDialog(true)
    }

    const closeDialog = () => {
        setOpenDialog(false)
    }

    const handleUpdatePage = () => {
        setUpdatePage(value => !value)
    }

    return (
        <KanbanProdutorContext.Provider
            value={{status, usinaId, openDialogStatus, openDialog, closeDialog, updatePage, handleUpdatePage}}
        >
            {children}
        </KanbanProdutorContext.Provider>
    );
};
