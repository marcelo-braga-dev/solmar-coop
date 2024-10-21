import React from 'react';

const PropostaComercial = ({cliente, proposta}) => {

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.headerTitle}>Proposta Comercial</h1>
                <p style={styles.headerSubtitle}>Cooperativa de Energia Solar</p>
            </div>

            <div style={styles.content}>
                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Detalhes do Cliente</div>
                    {cliente.nome && <p><strong>Nome:</strong> {cliente.nome}</p>}
                    {cliente.nome_fantasia && <p><strong>Nome Fantasia:</strong> {cliente.nome_fantasia}</p>}
                    {cliente.razao_social && <p><strong>Razão Social:</strong> {cliente.razao_social}</p>}
                    {cliente.cnpj && <p><strong>CNPJ:</strong> {cliente.cnpj}</p>}
                    {cliente.cpf && <p><strong>CPF:</strong> {cliente.cpf}</p>}
                    {/*<p><strong>Email:</strong> joao@example.com</p>*/}
                    {/*<p><strong>Telefone:</strong> (11) 99999-9999</p>*/}
                </div>

                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Detalhes do Contrato</div>
                    <p><strong>Tipo de Usina:</strong> Solar Fotovoltaica</p>
                    <p><strong>Concessionária de Energia Elétrica:</strong> {proposta.concessionaria.nome} / {proposta.concessionaria.estado} </p>
                    <p><strong>Localização:</strong> Fazenda Solar ABC, São Paulo - SP</p>
                    <p><strong>Duração do Contrato:</strong> {proposta.prazo_locacao} meses</p>
                </div>

                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Serviços Inclusos</div>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Monitoramento remoto</span> - Acompanhamento em tempo real da produção de energia.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Manutenção preventiva e corretiva</span> - Garantia de operação contínua da usina.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Suporte técnico especializado</span> - Equipe disponível para atendimento de emergências.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Relatórios mensais</span> - Relatórios de desempenho e economia gerada.
                        </li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <div style={styles.sectionTitle}>Benefícios do Contrato</div>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Economia e sustentabilidade</span> - Reduza sua fatura de energia e contribua para um futuro mais sustentável
                            com energia limpa.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Geração de receita adicional</span> - Alugue os créditos de energia excedentes para outros clientes,
                            transformando sua usina em uma fonte de renda.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Gestão completa pela cooperativa</span> - A cooperativa cuida de todos os aspectos operacionais, para que você
                            não precise se preocupar com a administração da usina.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.highlight}>Aproveitamento máximo dos créditos de energia</span> - Otimize o uso da energia produzida e aproveite ao máximo
                            os benefícios fiscais e de compensação.
                        </li>
                    </ul>
                </div>

                <div style={{pageBreakAfter: 'always'}}/>

                <div style={styles.whyJoin}>
                    <div style={styles.sectionTitle}>Por Que se Juntar à Cooperativa?</div>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            Ao se associar à nossa cooperativa, você passa a fazer parte de um grupo que valoriza a sustentabilidade e a inovação.
                        </li>
                        <li style={styles.listItem}>
                            Você não precisa se preocupar com a gestão da usina – cuidamos de tudo para você, enquanto você aproveita os benefícios econômicos.
                        </li>
                        <li style={styles.listItem}>
                            Garante um uso mais eficiente da energia gerada e potencializa a rentabilidade ao alugar créditos excedentes para outros clientes.
                        </li>
                        <li style={styles.listItem}>
                            Conta com suporte técnico e administrativo especializado, além de relatórios regulares que mostram o impacto positivo do seu investimento.
                        </li>
                    </ul>
                </div>

                <div style={styles.testimonial}>
                    <div style={styles.sectionTitle}>Depoimento de um Cliente Satisfeito</div>
                    <p style={styles.testimonialText}>
                        "Desde que me tornei membro da cooperativa, minha usina solar se tornou uma fonte de receita adicional. Além disso, sinto-me orgulhoso por
                        contribuir com um futuro mais sustentável. A gestão da cooperativa é excepcional e cuida de todos os detalhes para que eu não precise me
                        preocupar."
                    </p>
                    <p><strong>- Maria Fernandes, São Paulo - SP</strong></p>
                </div>
            </div>

            <div style={styles.footer}>
                <p>&copy; 2024 SOLMAR Cooperativa de Energia Solar. Todos os direitos reservados.</p>
                <p>Endereço: Rua | E-mail: </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '90%',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
    },
    header: {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '4px solid #ffc107',
    },
    logo: {
        width: '100px',
        marginBottom: '10px',
    },
    headerTitle: {
        margin: '0',
        fontSize: '24px',
        color: '#343a40',
    },
    headerSubtitle: {
        margin: '0',
        color: '#6c757d',
    },
    content: {
        marginTop: '20px',
    },
    section: {
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '20px',
        color: '#343a40',
        borderBottom: '2px solid #ffc107',
        paddingBottom: '5px',
        marginBottom: '15px',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        backgroundColor: '#f1f3f5',
        borderLeft: '4px solid #ffc107',
        marginBottom: '10px',
        padding: '10px',
    },
    highlight: {
        color: '#ffc107',
        fontWeight: 'bold',
    },
    total: {
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: '20px',
        color: '#28a745',
    },
    whyJoin: {
        backgroundColor: '#e9f7ef',
        padding: '15px',
        borderLeft: '4px solid #28a745',
        marginTop: '30px',
    },
    testimonial: {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderLeft: '4px solid #ffc107',
        marginTop: '30px',
    },
    testimonialText: {
        fontStyle: 'italic',
        color: '#6c757d',
    },
    footer: {
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        padding: '20px',
        marginTop: '150px',
        fontSize: '12px',
        color: '#6c757d',
        borderTop: '4px solid #ffc107',
    },
};

export default PropostaComercial;
