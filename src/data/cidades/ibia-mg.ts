import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ibia-mg',
  nome: 'Ibiá',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ibiaense',
  tipo: 'cidade',

  populacao: 22229,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  pibPerCapita: 76543,
  pibPerCapitaAno: 2023,
  altitudeM: 895,

  resumoEconomico:
    'Ibiá fica no Alto Paranaíba/Triângulo Mineiro e é conhecida como "Capital Nacional do Leite" — título conquistado em 2005/2006, quando se tornou o maior produtor de leite do Brasil, com cerca de 104 milhões de litros naquele ano e produção mantida na casa dos 100 milhões de litros anuais desde então. A cadeia do leite sustenta uma fábrica da Nestlé, uma das maiores da América Latina em leite em pó, além do Laticínio União, que produz queijos Provolone, Prato, Mozzarela e Parmesão. A agricultura complementa a economia com lavouras de café, milho, feijão, batata e soja, favorecidas pelo clima ameno de altitude e pelo solo fértil do Cerrado. O PIB per capita de R$ 76,5 mil (2023) está bem acima da média mineira, puxado pela cadeia de laticínios.',

  mercado:
    'O mercado de personal trainer em Ibiá acompanha o perfil de uma cidade pequena do Alto Paranaíba com boa renda per capita puxada pela indústria de laticínios — a procura tende a vir de famílias ligadas à cadeia do leite e do agronegócio, funcionários públicos e comerciantes locais, buscando treino de força, emagrecimento e constância. A oferta de treino é modesta e concentrada em poucas estruturas, o que torna o acompanhamento individual e o formato online alternativas relevantes.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['São João', 'Niterói', 'Gameleiras', 'São Benedito'],

  parques: [
    {
      nome: 'Praça Santa Cruz',
      descricao:
        'Praça central revitalizada pela prefeitura, principal ponto de encontro da cidade e sede oficial do carnaval local, o "Ibiá Folia" — também usada por moradores para caminhada nos horários mais frescos do dia.',
    },
    {
      nome: 'Parque de Exposições Manoel Terra Cruz',
      descricao:
        'Espaço para eventos agropecuários, shows e rodeios, sede da Festa do Ibiaense Ausente — um dos principais equipamentos públicos de grande porte da cidade.',
    },
  ],
  ciclovias:
    'Não há evidência pública de ciclovia ou ciclofaixa formal em Ibiá — o deslocamento de bicicleta compartilha as vias comuns com o tráfego geral.',

  clima:
    'A quase 900 metros de altitude, no Alto Paranaíba, Ibiá tem clima tropical de altitude e ameno, com noites frias e geadas esporádicas no inverno (estimadas em cerca de uma vez a cada cinco anos), quando as temperaturas mínimas podem chegar a 4-5°C.',
  climaTreino:
    'No inverno, as manhãs frias e as geadas ocasionais pedem agasalho e aquecimento mais cuidadoso antes do treino ao ar livre. No restante do ano, o clima ameno da altitude favorece bem a caminhada e a corrida, sem o calor extremo comum em cidades mais baixas do Cerrado.',

  mobilidade:
    'O acesso a Ibiá é feito pela BR-262 — eixo que liga São Paulo, Rio de Janeiro, Belo Horizonte e Goiânia —, com entroncamento entre Araxá e Pratinha seguido de cerca de 15 km pela MG-187 até o centro da cidade. A MG-187 também liga Ibiá a Patrocínio, e a MG-235 dá acesso à BR-354, rota usada para chegar a São Gotardo.',

  corridas: [],
  culturaEsportiva:
    'O Ipiranga Futebol Clube é um dos clubes amadores mais tradicionais do Alto Paranaíba e do Triângulo Mineiro. Nos Jogos Escolares de Minas Gerais (JEMG), Ibiá tem se destacado no vôlei — campeão invicto do Módulo II masculino em disputa recente — e no vôlei de praia, com classificação em todas as categorias na etapa microrregional. A Secretaria Municipal de Esportes mantém atividades para crianças e jovens ao longo do ano. A Praça Santa Cruz, coração da cidade, é também o palco do carnaval "Ibiá Folia", um dos eventos mais tradicionais do calendário local.',
  academias:
    'A oferta de estruturas de treino é modesta e concentrada em academias e estúdios de pequeno porte, compatível com o tamanho do município — sem grandes redes fitness, mas suficiente para atender a demanda local de musculação e treino funcional.',

  destaquesFitness: [
    'Ibiá é a "Capital Nacional do Leite", título conquistado como maior produtor de leite do Brasil em 2005.',
    'Fábrica da Nestlé em Ibiá está entre as maiores da América Latina em leite em pó.',
    'Altitude de quase 900 metros no Alto Paranaíba garante clima ameno favorável ao treino ao ar livre na maior parte do ano.',
    'Praça Santa Cruz é o centro da vida pública da cidade e sede do tradicional carnaval "Ibiá Folia".',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Erguida sobre a maior produção de leite do país e o clima ameno de quase 900 metros de altitude, Ibiá tem uma vida esportiva concentrada em torno do vôlei escolar e do tradicional Ipiranga Futebol Clube. Um personal trainer ajuda a manter a constância do treino nas manhãs mais frias do Alto Paranaíba, aproveitando espaços como a Praça Santa Cruz para caminhada e atividade ao ar livre.',

  vizinhas: ['araxa-mg', 'campos-altos-mg', 'rio-paranaiba-mg', 'serra-do-salitre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Ibiá', url: 'https://cidades.ibge.gov.br/brasil/mg/ibia/panorama' },
    { nome: 'Prefeitura Municipal de Ibiá/MG', url: 'https://www.ibia.mg.gov.br/' },
    { nome: 'Infosanbas — Perfil municipal de Ibiá', url: 'https://infosanbas.org.br/municipio/ibia-mg/' },
  ],
  atualizadoEm: '2026-07-04',
};
