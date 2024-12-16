import KanbanColumns from "@/Pages/Auth/Produtor/Kanban/KanbanColumns.jsx";
import React, {useEffect, useState} from "react";
import {Box, LinearProgress} from "@mui/material";
import {useKanbanProdutor} from "@/Pages/Auth/Produtor/Kanban/ContextKanban.jsx";
import AnalisarDocumentosDialog from "@/Pages/Auth/Produtor/Kanban/DialogsStatus/AnalisarDocumentosDialog.jsx";
import AssinarContratoDialog from "@/Pages/Auth/Produtor/Kanban/DialogsStatus/AssinarContratoDialog.jsx";

const initialColumns = [
    {status: 'analizar_documento', nome: 'Analizar Documentos', cor: '#007bff', corTexto: '#fff'},
    {status: 'assinar_contrato', nome: 'Assinar Contrato', cor: '#fe8a18', corTexto: '#fff'},
    {status: 'ficha_inscricao', nome: 'Preencher Ficha Inscrição', cor: '#28a745', corTexto: '#fff'},
    {status: 'contrato_adesao', nome: 'Assinar Contrato Adesão', cor: '#1128b8', corTexto: '#fff'},
    {status: 'contrato_aluguel', nome: 'Assinar Contrato Aluguel', cor: '#ea0b91', corTexto: '#fff'},
    {status: 'troca_titularidade', nome: 'Troca de Titularidade', cor: '#0ecf3b', corTexto: '#fff'},
    {status: 'concluido', nome: 'Concluído', cor: '#28a745', corTexto: '#fff'},
];

const KanbanUsinas = () => {
    const {updatePage} = useKanbanProdutor()

    const columns = initialColumns;
    const [cards, setCards] = useState([]);

    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        fetchUsinas()
    }, [updatePage]);

    const fetchUsinas = async () => {
        try {
            const response = await axios.get(route('auth.usinas.api.kanban.get'))

            setCards(response.data)
        } finally {
            setCarregando(false)
        }
    }

    return (
        <Box>
            {carregando && <LinearProgress color="inherit"/>}

            {!carregando && <KanbanColumns columns={columns} cards={cards}/>}

            <AnalisarDocumentosDialog/>
            <AssinarContratoDialog/>
        </Box>
    )
}
export default KanbanUsinas
