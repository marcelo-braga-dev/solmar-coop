import React from "react";
import {
    IconHeadset,
    IconSolarPanel2,
    IconUserBolt,
    IconUsers,
    IconUserSquare
} from "@tabler/icons-react";

export const consultorMenu = [
    {
        title: 'Cliente Consumidor',
        icon: <IconUsers/>,
        id: 'clientes',
        subItems: [
            {id: 'clientes-cadastrados', title: 'Clientes Cadastrados', link: route('auth.cliente.index')},
            {id: 'clientes-propostas', title: 'Propostas Cliente', link: route('auth.cliente.proposta.index')},
        ],
    }, {
        title: 'Produtores Solar',
        icon: <IconUserBolt/>,
        id: 'produtores-solar',
        subItems: [
            {id: 'produtores-solar-cadastrados', title: 'Produtores Cadastrados', link: route('auth.produtor.index')},
            {id: 'produtores-propostas', title: 'Propostas Produtor', link: route('auth.produtor.proposta.index')},
        ],
    }, {
        title: 'Usinas Solar',
        icon: <IconSolarPanel2/>,
        id: 'usinas',
        subItems: [
            {id: 'produtores-kanban', title: 'Quadro de Status', link: route('auth.produtor.kanban.index')},
            {id: 'usinas-cadastrados', title: 'Todas Usinas', link: route('auth.usinas.index')},
        ],
    }, {
        title: 'Suporte',
        icon: <IconHeadset/>,
        id: 'suporte',
        subItems: [
            {id: 'suporte-produtores', title: 'Suporte Geral', link: route('auth.suporte.produtor.index')},
        ],
    }, {
        title: 'Perfil',
        icon: <IconUserSquare/>,
        id: 'perfil',
        subItems: [
            {id: 'perfil-usuario', title: 'Sua Conta', link: route('auth.perfil.usuario.index')},
        ],
    },
];
