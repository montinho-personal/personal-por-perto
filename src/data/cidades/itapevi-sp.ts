import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapevi-sp',
  nome: 'Itapevi',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itapeviense',
  tipo: 'cidade',
  populacao: 232297,
  populacaoAno: 2022,
  idhm: 0.735,
  idhmClasse: 'alto',
  altitudeM: 657,
  resumoEconomico:
    'Itapevi fica na região oeste da Grande São Paulo e tinha 232.297 habitantes no Censo IBGE de 2022, em pouco mais de 82 km² — uma das cidades mais densas do estado. A economia se apoia em um parque industrial relevante à beira da Rodovia Castello Branco, com forte presença dos setores farmacêutico, alimentício, químico e de logística de e-commerce; grandes empregadores como Pfizer, Catalent e Henkel mantêm unidades no município. É uma cidade de perfil popular e de classe média trabalhadora, muito integrada ao mercado de trabalho de Barueri, Osasco e da capital.',
  mercado:
    'Por ser uma cidade-dormitório populosa e compacta, Itapevi oferece ao personal trainer uma base ampla de clientes que treinam de manhã cedo, antes de pegar o trem rumo à capital, ou no fim do dia ao voltar para casa. Os parques municipais com academia ao ar livre e os bairros adensados favorecem o atendimento em domicílio e em pequenos grupos, com deslocamentos curtos. A faixa de preços tende a ser mais acessível que a das vizinhas de renda mais alta, como Barueri e Santana de Parnaíba, o que estimula pacotes mensais e o acompanhamento online.',
  bairrosNobres: ['Vila Nova Itapevi', 'Jardim Briquet', 'Centro', 'Parque Suburbano'],
  bairrosPopulares: ['Cohab', 'Jardim Dona Elvira', 'Cidade da Saúde', 'Jardim Santa Rita'],
  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Primeiro parque municipal de Itapevi, na Vila Nova Itapevi, com cerca de 110 mil m² de área. Reúne pista de caminhada e ciclismo, bicicletário, academia ao ar livre, espaço de crossfit, playgrounds e área para skate — um dos melhores pontos da cidade para treino funcional, corrida e mobilidade.',
    },
    {
      nome: 'Parque da Cohab',
      descricao:
        'Inaugurado em setembro de 2024 na Avenida Pedro Paulino, no bairro Cohab. Tem ginásio CIEF reformado, quadras de basquete, vôlei e futsal, três quadras de streetball, pista de caminhada, playground, academia ao ar livre e iluminação em LED, ampliando a estrutura de treino gratuito na zona mais populosa do município.',
    },
    {
      nome: 'Ginásio de Esportes João Salvarani',
      descricao:
        'Principal ginásio público da cidade, na Avenida Rubens Caramez, no Parque Suburbano. Concentra parte da programação esportiva da Prefeitura e serve de referência para aulas coletivas, treino indoor e modalidades de quadra ao longo do ano.',
    },
  ],
  ciclovias:
    'As melhores opções para pedalar e caminhar com segurança estão dentro dos parques municipais: o Parque da Cidade tem pista compartilhada de caminhada e ciclismo, com bicicletário. Fora deles, o tráfego intenso das avenidas principais e da Rodovia Castello Branco exige cautela do ciclista, e a malha cicloviária urbana ainda é limitada.',
  clima:
    'Por integrar a Região Metropolitana de São Paulo, Itapevi tem clima tropical de altitude (Cwa de Köppen), com verão quente e chuvoso e inverno ameno e mais seco. A cidade fica a cerca de 657 m de altitude, com temperaturas médias anuais em torno de 19 °C a 21 °C.',
  climaTreino:
    'O início da manhã, sobretudo no verão, é a melhor janela para o treino ao ar livre, antes do calor e das pancadas de chuva de fim de tarde. No inverno, as manhãs frias e secas favorecem corridas mais longas nos parques. Em dias de chuva, vale alternar para academia coberta ou ginásio.',
  mobilidade:
    'Itapevi é a ponta da Linha 8-Diamante da CPTM (operada pela ViaMobilidade): a Estação Itapevi é a principal da cidade, integrada ao terminal urbano de ônibus e ao ramal de Amador Bueno, e é o ponto de partida do trem rumo a Osasco e à Estação Júlio Prestes, na capital. A Rodovia Castello Branco corta o município e dá acesso rápido a Barueri, Santana de Parnaíba, ao Rodoanel e ao interior, sustentando tanto a indústria local quanto o deslocamento pendular dos moradores.',
  corridas: [
    {
      nome: 'Corrida Oficial de Itapevi',
      descricao:
        'Prova de rua promovida pela Prefeitura, com percursos de 5 km e 10 km e inscrição gratuita, integrada às comemorações de aniversário da cidade. A largada acontece na Avenida Feres Nacif Chaluppe e reúne corredores e caminhantes da cidade e da região oeste da Grande SP — a 7ª edição foi realizada em março de 2025.',
    },
    {
      nome: 'Atividades da Secretaria de Esportes e Lazer',
      descricao:
        'A Prefeitura mantém programação esportiva nos parques e equipamentos públicos, com caminhadas orientadas, uso das academias ao ar livre e atividades de quadra — um ponto de partida acessível para quem quer começar a treinar com acompanhamento.',
    },
  ],
  culturaEsportiva:
    'Itapevi tem forte tradição de esporte comunitário, com campos de várzea, quadras de bairro e ginásios públicos movimentando o futebol amador e modalidades coletivas. A corrida de rua ganhou espaço com a prova oficial anual da cidade, e as academias ao ar livre espalhadas pelos bairros consolidaram o hábito de treino gratuito entre os moradores.',
  academias:
    'A oferta combina academias de bairro e redes de baixo custo, como a Smart Fit, com as academias ao ar livre gratuitas dos parques e dos bairros, como no Jardim Dona Elvira, na Cidade da Saúde e no Parque da Cidade. Esse mix atende tanto quem prefere o treino indoor quanto quem busca alternativas de custo zero, reforçando a vocação popular do município.',
  destaquesFitness: [
    'Cidade muito populosa e densa (~82 km², 232 mil habitantes) — base ampla de clientes e deslocamentos curtos para atendimento em domicílio.',
    'Parques com academia ao ar livre gratuita: Parque da Cidade (~110 mil m²) e Parque da Cohab.',
    'Eixo ferroviário forte: Itapevi é a ponta da Linha 8-Diamante da CPTM, com terminal de ônibus integrado.',
    'Faixa de preços mais acessível que a das vizinhas de renda alta, favorecendo pacotes mensais e treino online.',
  ],
  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },
  conclusao:
    'Itapevi é uma cidade densa, popular e bem conectada por trem ao coração econômico da Grande SP, o que cria demanda constante por treino flexível e de bom custo-benefício. Para o personal trainer, a combinação de parques públicos equipados, bairros adensados e clientes que treinam cedo ou no fim do dia abre espaço para atendimento em domicílio, grupos ao ar livre e acompanhamento online.',
  vizinhas: ['jandira-sp', 'barueri-sp', 'cotia-sp', 'santana-de-parnaiba-sp'],
  fontes: [
    { nome: 'IBGE Cidades — Itapevi', url: 'https://cidades.ibge.gov.br/brasil/sp/itapevi/panorama' },
    { nome: 'Prefeitura de Itapevi', url: 'https://itapevi.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/352250' },
  ],
  atualizadoEm: '2026-06-29',
};
