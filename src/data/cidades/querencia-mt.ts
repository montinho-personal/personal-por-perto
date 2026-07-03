import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'querencia-mt',
  nome: 'Querência',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'querenciano',
  tipo: 'cidade',

  populacao: 26769,
  populacaoAno: 2022,
  idhm: 0.690,
  idhmClasse: 'médio',
  altitudeM: 350,

  resumoEconomico:
    'Emancipada em 1991, desmembrada de Canarana e São Félix do Araguaia, Querência fica no nordeste de Mato Grosso, a cerca de 927 km de Cuiabá, numa região de transição entre o Cerrado e a Floresta Amazônica. O município se transformou em um dos polos mais dinâmicos do agronegócio brasileiro: cultiva soja, milho, algodão e gergelim, aparece entre os maiores produtores agrícolas do país e chegou a figurar entre os municípios mais ricos do agro nacional. Essa expansão das lavouras ocorre ao lado de uma fronteira sensível — cerca de 39% do território municipal está dentro do Parque Indígena do Xingu, a maior terra indígena multiétnica do Brasil, criada em 1961 e hoje ocupada por mais de 30 aldeias de povos como Kalapalo, Kuikuro e Kaiabi. Foi o Censo 2022 do IBGE que revelou o outro lado desse boom: Querência foi o município que mais cresceu em Mato Grosso na década, mais que dobrando a população.',

  mercado:
    'O mercado fitness de Querência é pequeno, mas aquecido pela renda alta puxada pelo agronegócio: proprietários rurais e famílias ligadas às fazendas de soja e milho sustentam procura por academias de musculação e por personal trainers, inclusive no formato online. Como cidade em crescimento acelerado, a estrutura de treino ainda se concentra nos setores centrais, com espaço para o serviço personalizado ganhar força à medida que a cidade se consolida como polo regional.',

  bairrosNobres: ['Centro (Setor C)', 'Setor B', 'Setor E'],
  bairrosPopulares: ['Setor F', 'Setor G', 'Setor Área'],

  parques: [
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Querência foi um dos municípios contemplados pelo programa estadual de academias ao ar livre da Secel-MT, que instalou equipamentos de ginástica (simuladores de caminhada, aparelhos de musculação e alongamento) em praças públicas, ampliando o acesso gratuito ao treino.',
    },
    {
      nome: 'Avenida Central e Setor C',
      descricao:
        'O eixo comercial e administrativo da cidade, onde fica a sede da prefeitura, concentra o movimento urbano e serve de referência para caminhadas no início da manhã e no fim da tarde.',
    },
    {
      nome: 'Entorno rural e Parque Indígena do Xingu',
      descricao:
        'A paisagem do município é dominada por lavouras de soja e milho e pela fronteira com o Parque Indígena do Xingu, o que dá à zona rural um caráter de transição entre Cerrado e Amazônia, sem estrutura voltada ao turismo de natureza.',
    },
  ],
  ciclovias:
    'A cidade ainda não tem malha cicloviária estruturada; o deslocamento por bicicleta e a corrida acontecem principalmente nas ruas dos setores centrais.',

  clima:
    'O clima é tropical, de transição entre o Cerrado e a Floresta Amazônica, com duas estações bem marcadas: verão chuvoso (novembro a março) e inverno seco (abril a setembro). Em junho, mês mais seco, as médias históricas giram em torno de 30,6 °C de máxima e 19 °C de mínima, segundo dados da NASA POWER (1991–2020).',
  climaTreino:
    'O calor e a umidade do período chuvoso pedem treinos no início da manhã ou no fim da tarde, com boa hidratação; já na estação seca, o ar mais seco e as baixas umidades relativas do inverno exigem atenção redobrada para o treino ao ar livre.',

  mobilidade:
    'Querência é servida pela BR-242, que se conecta à MT-243 no perímetro urbano, principal ligação pavimentada com Canarana e o restante do estado — asfalto que chegou de forma gradual à região nos últimos anos, reduzindo o isolamento histórico do município. A cerca de 927 km de Cuiabá, a cidade depende do transporte rodoviário por carro e moto para o deslocamento interno, sem sistema de ônibus urbano estruturado.',

  corridas: [],
  culturaEsportiva:
    'O futsal é a principal paixão esportiva local, com torneios como o "24 Horas de Futsal" reunindo dezenas de equipes e casas cheias nos ginásios da cidade. A corrida de rua também vem ganhando espaço, com atletas de Querência competindo em provas da região do Vale do Araguaia, como a "Vem Pra Rua" realizada em Bom Jesus do Araguaia — sinal de uma cultura de corrida ainda mais regional do que local.',
  academias:
    'A oferta de treino é formada por academias e estúdios locais, como a Academia Corpo em Movimento, no Setor G, e a Up Fit Studio Personal Trainer, que atende com foco em treino personalizado — um mercado pequeno, mas em expansão junto com o crescimento da cidade.',

  destaquesFitness: [
    'Um dos municípios mais produtivos do agronegócio brasileiro, com soja, milho, algodão e gergelim sustentando alta renda local.',
    'Cidade que mais cresceu em Mato Grosso no Censo 2022, mais que dobrando a população em uma década.',
    'Cerca de 39% do território está dentro do Parque Indígena do Xingu, marcando a relação da cidade com a fronteira agrícola.',
    'Praças com academias ao ar livre instaladas pelo programa estadual da Secel-MT, ampliando o treino gratuito.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Polo agrícola em rápida expansão no nordeste de Mato Grosso, Querência combina alta renda do agronegócio com uma estrutura urbana ainda em consolidação e a vizinhança sensível do Parque Indígena do Xingu. Um personal trainer ajuda a organizar o treino em meio ao calor da transição Cerrado-Amazônia e ao ritmo de uma cidade que cresce rápido, aproveitando as praças com academia ao ar livre e os estúdios locais com método e constância.',

  vizinhas: ['barra-do-garcas-mt', 'sinop-mt', 'colider-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Querência', url: 'https://cidades.ibge.gov.br/brasil/mt/querencia/panorama' },
    { nome: 'Prefeitura de Querência', url: 'https://www.querencia.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
