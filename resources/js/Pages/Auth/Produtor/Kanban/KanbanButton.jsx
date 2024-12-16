import {Button} from "@mui/material";
import {IconFilePencil, IconFileSearch} from "@tabler/icons-react";
import React from "react";
import {useKanbanProdutor} from "@/Pages/Auth/Produtor/Kanban/ContextKanban.jsx";

const KanbanButton = ({cardId, status}) => {
    const {openDialogStatus} = useKanbanProdutor();

    const handleClick = () => {
        openDialogStatus(cardId, status);
    };

    const buttonConfig = {
        analizar_documento: {
            label: "Analizar Documentos",
            color: "success",
            icon: <IconFileSearch/>,
        },
        assinar_contrato: {
            label: "Assinar Contrato",
            color: "success",
            icon: <IconFilePencil/>,
        },
    };

    const buttonProps = buttonConfig[status];

    if (!buttonProps) return null;

    return (
        <Button
            startIcon={buttonProps.icon}
            color={buttonProps.color}
            size="small"
            onClick={handleClick}
        >
            {buttonProps.label}
        </Button>
    );
};

export default KanbanButton;
