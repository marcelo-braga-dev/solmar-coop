import React from "react";
import {
    IconBrandWhatsapp, IconChartHistogram, IconDashboard,
    IconFileCheck,
    IconFileLike,
    IconHeadphones,
    IconHeadset, IconReportMoney,
    IconSettings,
    IconSolarPanel2, IconUserBolt,
    IconUserCog,
    IconUserDollar,
    IconUsers,
    IconUsersGroup, IconUserSquare
} from "@tabler/icons-react";

export const adminMenu = [
    {
        title: 'Produtores Solar',
        icon: <IconUserBolt/>,
        id: 'produtores-solar',
        subItems: [
            {id: 'produtores-kanban', title: 'Quadro Produtores', link: route('auth.produtor.kanban.index')},
            {id: 'produtores-solar-cadastrados', title: 'Produtores Cadastrados', link: route('admin.produtor.index')},
            {id: 'produtores-solar-cadastrados-2', title: 'Cadastrar Produtor', link: route('admin.produtor.create')},
        ],
    }, {
        title: 'Cliente Consumidor',
        icon: <IconUsers/>,
        id: 'clientes',
        subItems: [
            {id: 'clientes-cadastrados', title: 'Clientes Cadastrados', link: route('admin.user.cliente.index')},
            {id: 'clientes-cadastrar', title: 'Cadastrar Cliente', link: route('admin.user.cliente.create')},
        ],
    }, {
        title: 'Colsultores',
        icon: <IconUserDollar/>,
        id: 'vendedores',
        subItems: [
            {id: 'vendedores-cadastrados', title: 'Colsultores Cadastrados', link: route('admin.user.vendedor.index')},
            {id: 'vendedores-cadastrar', title: 'Cadastrar Colsultor', link: route('admin.user.vendedor.create')},
        ],
    }, {
        title: 'Administradores',
        icon: <IconUserCog/>,
        id: 'admin',
        subItems: [
            {id: 'admin-cadastrados', title: 'Admins Cadastrados', link: route('admin.user.admin.index')},
            {id: 'admin-cadastrar', title: 'Cadastrar Admins', link: route('admin.user.admin.create')},
        ],
    }, {
        title: 'Usinas Solar',
        icon: <IconSolarPanel2/>,
        id: 'usinas',
        subItems: [
            {id: 'usinas-cadastrados', title: 'Todas Usinas', link: route('auth.usinas.index')},
        ],
    }, {
        title: 'Financeiro',
        icon: <IconReportMoney/>,
        id: 'financeiro',
        subItems: [
            {id: 'financeiro-produtor', title: 'Produtores', link: route('admin.financeiro.produtor.index')},
            {id: 'financeiro-cliente', title: 'Clientes', link: route('admin.financeiro.cliente.index')},
            {id: 'financeiro-vendedor', title: 'Vendedores', link: route('admin.financeiro.vendedor.index')},
        ],
    }, {
        title: 'Relatórios',
        icon: <IconChartHistogram/>,
        id: 'dashboards',
        subItems: [
            {id: 'dashboards-cadastrados', title: 'Produtores', link: route('admin.produtor.store')},
            {id: 'dashboards-cadastrar', title: 'Clientes', link: route('admin.produtor.show', 1)},
            {id: 'dashboards-cadastrar', title: 'Usinas', link: route('admin.produtor.show', 1)},
            {id: 'dashboards-cadastrar', title: 'Consultores', link: route('admin.produtor.show', 1)},
        ],
    }, {
        title: 'Propostas Comerciais',
        icon: <IconFileCheck/>,
        id: 'propostas',
        subItems: [
            {id: 'propostas-cliente', title: 'Propostas Clientes', link: route('auth.propostas.cliente.index')},
            {id: 'propostas-produtor', title: 'Propostas Produtores', link: route('auth.propostas.produtor.index')},
        ],
    }, {
        title: 'Contratos',
        icon: <IconFileLike/>,
        id: 'contratos',
        subItems: [
            {id: 'contratos-usinas', title: 'Contratos Usinas', link: route('auth.contratos.usina.index')},
            {id: 'contratos-clientes', title: 'Contratos Clientes', link: route('auth.contratos.cliente.index')},
        ],
    }, {
        title: 'Whatsapp',
        icon: <IconBrandWhatsapp/>,
        id: 'whatsapp',
        subItems: [
            {id: 'whatsapp-chat', title: 'Whatsapp App', link: route('auth.ferramentas.whatsapp.chat.index')},
            {id: 'whatsapp-chatbot', title: 'Respostas Automáticas', link: route('auth.ferramentas.whatsapp.chatbot.index')},
        ],
    }, {
        title: 'Suporte',
        icon: <IconHeadset/>,
        id: 'suporte',
        subItems: [
            {id: 'suporte-produtores', title: 'Suporte a Produtores', link: route('auth.suporte.produtor.index')},
            {id: 'suporte-clientes', title: 'Suporte a Clientes', link: route('auth.suporte.cliente.index')},
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
