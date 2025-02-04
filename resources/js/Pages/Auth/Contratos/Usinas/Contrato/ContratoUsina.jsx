import { Container, Typography, Box, Divider } from '@mui/material';
import Grid from "@mui/material/Grid2";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const ContratoUsina = () => {
    const dataFormatada = format(new Date(), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

    return (
        <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Contrato de Locação de Usina Solar e Gestão de Créditos de Energia
            </Typography>

            <Typography variant="subtitle1" align="center" gutterBottom>
                CONTRATANTE: [Nome do Cliente], pessoa física ou jurídica, inscrita no CPF/CNPJ sob o nº [número], residente ou com sede em [endereço completo].
            </Typography>

            <Typography variant="subtitle1" align="center" gutterBottom>
                CONTRATADA: Cooperativa de Energia Solar, com sede em [endereço completo], inscrita no CNPJ sob o nº [número], doravante denominada "COOPERATIVA".
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 1 - Do Objeto do Contrato
            </Typography>
            <Typography>
                1.1. O presente contrato tem por objeto a locação de usina solar fotovoltaica de propriedade da COOPERATIVA, destinada à geração de energia elétrica, e a gestão dos créditos de energia elétrica excedentes.
            </Typography>
            <Typography>
                1.2. A COOPERATIVA compromete-se a administrar, monitorar e manter a usina solar em perfeito estado de funcionamento durante a vigência deste contrato.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 2 - Das Obrigações da Cooperativa
            </Typography>
            <Typography>
                2.1. A COOPERATIVA obriga-se a:
            </Typography>
            <Box ml={2}>
                <Typography>
                    a) Fornecer ao CONTRATANTE a energia elétrica gerada pela usina solar, de acordo com os padrões e normas técnicas aplicáveis.
                </Typography>
                <Typography>
                    b) Monitorar e manter o sistema fotovoltaico em pleno funcionamento, realizando a manutenção preventiva e corretiva necessária.
                </Typography>
                <Typography>
                    c) Disponibilizar relatórios periódicos de geração de energia e economia obtida, com frequência mínima mensal.
                </Typography>
                <Typography>
                    d) Administrar os créditos de energia excedentes, sendo responsável por alugar tais créditos para terceiros, quando aplicável.
                </Typography>
            </Box>

            <Typography>
                2.2. A COOPERATIVA se responsabiliza pela operação, manutenção e controle do desempenho da usina solar, assumindo os custos relacionados à gestão e operação da mesma.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 3 - Das Obrigações do Contratante
            </Typography>
            <Typography>
                3.1. O CONTRATANTE compromete-se a:
            </Typography>
            <Box ml={2}>
                <Typography>
                    a) Utilizar a energia fornecida pela usina solar de forma consciente e de acordo com as instruções da COOPERATIVA.
                </Typography>
                <Typography>
                    b) Facilitar o acesso à usina solar para a realização de manutenções e inspeções periódicas, quando necessário.
                </Typography>
                <Typography>
                    c) Pagar as mensalidades referentes à locação da usina e à gestão dos créditos de energia, conforme estabelecido na Cláusula 4 deste contrato.
                </Typography>
            </Box>
            <Typography>
                3.2. O CONTRATANTE deverá informar imediatamente à COOPERATIVA sobre qualquer falha ou irregularidade no funcionamento da usina.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 4 - Do Preço e Condições de Pagamento
            </Typography>
            <Typography>
                4.1. O valor mensal pela locação da usina solar será de R$ [valor], a ser pago pelo CONTRATANTE até o dia [dia] de cada mês.
            </Typography>
            <Typography>
                4.2. Em caso de atraso no pagamento, será aplicada uma multa de [X]% sobre o valor da mensalidade em atraso, além de juros de mora de [Y]% ao mês.
            </Typography>
            <Typography>
                4.3. A COOPERATIVA poderá reajustar o valor das mensalidades anualmente, com base na variação do índice [índice de referência].
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 5 - Da Duração do Contrato
            </Typography>
            <Typography>
                5.1. O presente contrato terá duração de [número] meses, contados a partir da data de sua assinatura.
            </Typography>
            <Typography>
                5.2. O contrato poderá ser renovado por iguais períodos, mediante acordo entre as partes, formalizado por meio de aditivo contratual.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 6 - Da Rescisão do Contrato
            </Typography>
            <Typography>
                6.1. O presente contrato poderá ser rescindido nas seguintes hipóteses:
            </Typography>
            <Box ml={2}>
                <Typography>
                    a) Pelo inadimplemento de qualquer das partes, mediante notificação prévia de [número] dias.
                </Typography>
                <Typography>
                    b) Por interesse unilateral de qualquer das partes, mediante notificação por escrito com antecedência mínima de [número] dias.
                </Typography>
                <Typography>
                    c) Pela impossibilidade técnica de continuidade do fornecimento de energia, devidamente justificada pela COOPERATIVA.
                </Typography>
            </Box>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 7 - Das Penalidades e Multas
            </Typography>
            <Typography>
                7.1. Em caso de rescisão antecipada do contrato, por iniciativa do CONTRATANTE, será aplicada uma multa equivalente a [X]% do valor total das mensalidades restantes.
            </Typography>
            <Typography>
                7.2. Caso a rescisão seja motivada por descumprimento de qualquer obrigação contratual pela COOPERATIVA, o CONTRATANTE estará isento de qualquer multa ou penalidade.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 8 - Da Gestão dos Créditos de Energia
            </Typography>
            <Typography>
                8.1. Os créditos de energia elétrica excedentes gerados pela usina solar serão administrados pela COOPERATIVA, que poderá alugá-los para terceiros, revertendo os benefícios ao CONTRATANTE, na forma de descontos ou repasses financeiros.
            </Typography>
            <Typography>
                8.2. A COOPERATIVA se compromete a utilizar práticas de mercado para maximizar os ganhos com a locação dos créditos de energia excedentes.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 9 - Das Disposições Gerais
            </Typography>
            <Typography>
                9.1. Este contrato obriga as partes, seus herdeiros e sucessores a qualquer título.
            </Typography>
            <Typography>
                9.2. Qualquer alteração ou aditivo a este contrato deverá ser feito por escrito e assinado por ambas as partes.
            </Typography>
            <Typography>
                9.3. O presente contrato será regido pelas leis brasileiras, especialmente pela legislação aplicável ao setor de energia.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography variant="h6" gutterBottom>
                Cláusula 10 - Do Foro
            </Typography>
            <Typography>
                10.1. As partes elegem o foro da comarca de [cidade], Estado [estado], para dirimir quaisquer controvérsias oriundas do presente contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </Typography>

            <Divider style={{ margin: '20px 0' }} />

            <Typography gutterBottom>
                E, por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor e forma, na presença de duas testemunhas.
            </Typography>

            <Typography gutterBottom marginTop={4}>
                Maringá/PR, {dataFormatada}
            </Typography>

            <Grid container marginTop={15}>
                <Grid size={5} sx={{textAlign: 'center', borderTop: 1}}>
                    <Typography>(Produtor Solar)</Typography>
                </Grid>
                <Grid size={2}></Grid>
                <Grid size={5} sx={{textAlign: 'center', borderTop: 1}}>
                <Typography>SOLMAR COOPERATIVA</Typography>
                </Grid>
            </Grid>
        </Container>
    )

}
export default ContratoUsina
