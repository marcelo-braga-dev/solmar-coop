import React from "react";
import {
    IconBolt,
    IconBrandWhatsapp,
    IconHeadset, IconReportMoney,
    IconSolarPanel2, IconUserBolt,
    IconUserCog,
    IconUserDollar,
    IconUsers,
    IconUserSquare
} from "@tabler/icons-react";

export const adminMenu = [
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
            {id: 'produtores-solar-cadastrados-2', title: 'Cadastrar Produtor', link: route('auth.produtor.create')},
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
        title: 'Consultores',
        icon: <IconUserDollar/>,
        id: 'vendedores',
        subItems: [
            {id: 'vendedores-cadastrados', title: 'Consultores Cadastrados', link: route('admin.user.vendedor.index')},
            {id: 'vendedores-cadastrar', title: 'Cadastrar Consultor', link: route('admin.user.vendedor.create')},
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
        title: 'Financeiro',
        icon: <IconReportMoney/>,
        id: 'financeiro',
        subItems: [
            {id: 'financeiro-produtor', title: 'Fluxo de Caixa', link: route('admin.financeiro.produtor.index')},
        ],
    }, {
        title: 'Concessionárias Energia',
        icon: <IconBolt/>,
        id: 'concessionarias',
        subItems: [
            {id: 'concessionarias-todas', title: 'Todas Concessionárias', link: route('admin.concessionaria.index')},
        ],
    },
    // {
    //     title: 'Relatórios',
    //     icon: <IconChartHistogram/>,
    //     id: 'dashboards',
    //     subItems: [
    //         {id: 'dashboards-cadastrados', title: 'Produtores', link: route('admin.produtor.store')},
    //         {id: 'dashboards-cadastrar', title: 'Clientes', link: route('admin.produtor.show', 1)},
    //         {id: 'dashboards-cadastrar', title: 'Usinas', link: route('admin.produtor.show', 1)},
    //         {id: 'dashboards-cadastrar', title: 'Consultores', link: route('admin.produtor.show', 1)},
    //     ],
    // },
    // {
    //     title: 'Contratos',
    //     icon: <IconFileLike/>,
    //     id: 'contratos',
    //     subItems: [
    //         {id: 'contratos-usinas', title: 'Contratos Usinas', link: route('auth.contratos.usina.index')},
    //         {id: 'contratos-clientes', title: 'Contratos Clientes', link: route('auth.contratos.cliente.index')},
    //     ],
    // },
    {
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
