import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-grande-da-serra-sp',
  nome: 'Rio Grande da Serra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'rio-grandense',
  tipo: 'cidade',

  populacao: 44170,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 783,

  resumoEconomico:
    'Menor município do Grande ABC em população e o de menor PIB da região, Rio Grande da Serra tem todo o território dentro da Área de Proteção e Recuperação dos Mananciais da Billings (APRM-B), cercado por remanescentes de Mata Atlântica e pela Serra do Mar. A economia é dominada pelo setor de serviços e pela administração pública, com indústria e comércio de pequeno porte; historicamente é uma cidade-dormitório, cuja população depende de empregos em Ribeirão Pires, Santo André e nos demais municípios do ABC e da capital. A restrição ambiental de área de mananciais limita a expansão industrial e molda o perfil residencial do município.',

  mercado:
    'Por ser uma cidade pequena e com renda média mais baixa que a das vizinhas do ABC, o mercado fitness de Rio Grande da Serra é enxuto, formado sobretudo por academias de bairro e treino ao ar livre. A procura por personal trainer tende a vir de quem quer treino orientado sem depender de deslocamento até Ribeirão Pires ou Santo André, além de moradores que aproveitam o relevo de serra e as áreas verdes para atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Vila Conde', 'Vila Lopes', 'Vila Niwa'],
  bairrosPopulares: ['Pouso Alegre', 'Pedreira', 'Vila Ota', 'Tsuzuki'],

  parques: [
    {
      nome: 'Remanescentes de Mata Atlântica e Serra do Mar',
      descricao:
        'Com todo o território em área de mananciais e cercado por trechos preservados de Mata Atlântica junto à Serra do Mar, o município oferece trilhas e caminhos em meio à natureza que servem de cenário para caminhada e atividades ao ar livre, dentro dos limites da proteção ambiental.',
    },
    {
      nome: 'Entorno da Billings',
      descricao:
        'A cidade integra a bacia da Represa Billings, um dos maiores reservatórios da Região Metropolitana de São Paulo; as áreas de manancial no entorno marcam a paisagem e reforçam a vocação para atividades ao ar livre em ambiente de preservação.',
    },
    {
      nome: 'Estação Ferroviária de Rio Grande da Serra',
      descricao:
        'Estação histórica de arquitetura inglesa, tombada pelo Condephaat, no centro da cidade; o entorno e as vias centrais concentram o fluxo de pedestres e servem de ponto de referência para quem circula a pé pela área urbana.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, condizente com uma cidade pequena e de relevo acidentado de serra; boa parte do pedal e da corrida acontece nas vias da área urbana central e nos acessos que ligam os bairros.',

  clima:
    'O clima é subtropical, com verões quentes e chuvosos e invernos amenos, marcados por neblina frequente entre maio e outubro por causa da umidade da Serra do Mar. A temperatura média anual fica em torno de 18 °C, com julho como mês mais frio (média perto de 14 °C) e fevereiro como o mais quente (média perto de 22 °C); a chuva anual gira em torno de 1.400 mm, com concentração no verão.',
  climaTreino:
    'A umidade elevada e as chuvas de verão pedem atenção ao calendário e a alternativas cobertas nos dias mais úmidos; no inverno ameno e com neblina, o treino ao ar livre é agradável, exigindo apenas cuidado com a menor visibilidade nas primeiras horas da manhã e agasalho nos dias mais frios.',

  mobilidade:
    'Rio Grande da Serra é a estação terminal da Linha 10-Turquesa da CPTM, que liga a cidade ao centro de São Paulo passando por Santo André e São Bernardo do Campo — o principal meio de acesso para quem trabalha ou estuda fora do município. Por rodovia, a ligação se dá pela SP-122 (Rodovia Índio Tibiriçá), que conecta a cidade a Ribeirão Pires e ao restante do ABC.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário do ABC',
      descricao:
        'Moradores costumam participar de provas de rua realizadas nas cidades vizinhas do Grande ABC, como Ribeirão Pires e Santo André, aproveitando a proximidade e a ligação por trem e rodovia.',
    },
    {
      nome: 'Festival do Cambuci',
      descricao:
        'Evento cultural ligado ao cambuci, fruto endêmico da Mata Atlântica, que reúne a comunidade em torno de atividades ao ar livre e reforça a identidade da cidade com a natureza e a Serra do Mar.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o uso das áreas verdes e trilhas em meio à Mata Atlântica, a participação em provas de rua das cidades vizinhas do ABC e a rotina de quem treina em academias de bairro, tudo dentro de uma cidade pequena e cercada por área de mananciais.',
  academias:
    'A oferta é formada principalmente por academias de bairro de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com o menor município do Grande ABC.',

  destaquesFitness: [
    'Município inteiramente em área de proteção de mananciais da Billings, cercado por Mata Atlântica e pela Serra do Mar.',
    'Relevo de serra e trilhas em meio à natureza como cenário para atividades ao ar livre.',
    'Clima subtropical úmido, com invernos amenos, neblina frequente e chuvas concentradas no verão.',
    'Estação terminal da Linha 10-Turquesa da CPTM, que integra a cidade ao ABC e à capital.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade pequena, de serra e cercada por área de mananciais, Rio Grande da Serra pede um treino que aproveite as áreas verdes e o relevo, respeitando a umidade e as chuvas de verão. Um personal trainer ajuda a organizar a rotina sem depender de deslocamento até as vizinhas do ABC, definindo horários e mantendo a constância ao longo do ano.',

  vizinhas: ['ribeirao-pires-sp', 'santo-andre-sp', 'maua-sp'],

  fontes: [
    {
      nome: 'IBGE Cidades — Rio Grande da Serra',
      url: 'https://cidades.ibge.gov.br/brasil/sp/rio-grande-da-serra/panorama',
    },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    {
      nome: 'Prefeitura de Rio Grande da Serra',
      url: 'https://www.riograndedaserra.sp.gov.br/',
    },
  ],
  atualizadoEm: '2026-06-29',
};
