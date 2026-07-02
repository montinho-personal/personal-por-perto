import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pinheiro-machado-rs',
  nome: 'Pinheiro Machado',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'pinheirense',
  tipo: 'cidade',

  populacao: 11214,
  populacaoAno: 2022,
  idhm: 0.661,
  idhmClasse: 'médio',
  altitudeM: 439,

  resumoEconomico:
    'Instalado em 1878 no coração da Campanha gaúcha, entre Bagé e Pelotas, Pinheiro Machado é conhecido como a "Terra da Ovelha": a ovinocultura é símbolo histórico do município, celebrado todo ano pela Feira e Festa Estadual da Ovelha (Feovelha), realizada no Parque de Exposições Charrua e considerada a maior feira de ovinos do país. A economia do município, que tem território extenso (cerca de 2.250 km²) e baixa densidade populacional, é apoiada na agropecuária — pecuária de corte, lã e lavouras como soja e arroz —, que responde por quase 30% do valor adicionado local, além do comércio e dos serviços do Centro.',

  mercado:
    'Por ser um município pequeno do interior da Campanha, com pouco mais de 11 mil habitantes, o mercado fitness de Pinheiro Machado é bastante enxuto, restrito a academias locais de musculação no Centro. A procura por personal trainer costuma vir de quem não encontra estrutura suficiente nessas academias e busca acompanhamento individualizado, muitas vezes combinando treino em ambiente fechado nos meses mais frios com atividade ao ar livre na Praça Angelino Goulart ou nas estradas rurais do entorno.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Vila Umbu'],

  parques: [
    {
      nome: 'Praça Angelino Goulart e Igreja Matriz Nossa Senhora da Luz',
      descricao:
        'Praça central ao lado da Igreja Matriz, erguida em 1904, que concentra o convívio da cidade e serve de ponto de caminhada e encontro no dia a dia dos moradores.',
    },
    {
      nome: 'Marco dos Porongos',
      descricao:
        'Monumento histórico erguido no alto de um cerro em memória do Massacre dos Porongos (1844) e dos Lanceiros Negros da Revolução Farroupilha, com vista da paisagem de coxilhas do Pampa.',
    },
    {
      nome: 'Parque de Exposições Charrua',
      descricao:
        'Sede da Feovelha e de eventos agropecuários do município, com pavilhões e áreas abertas que também recebem atividades da comunidade ao longo do ano.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária formal; caminhada e pedal acontecem nas ruas do Centro, no entorno da Praça Angelino Goulart e nas estradas vicinais que cortam as coxilhas do Pampa em direção às áreas rurais.',

  clima:
    'O clima é subtropical (Cfb na classificação de Köppen), com temperatura média anual em torno de 16 °C. Janeiro, o mês mais quente, tem média de 21 °C, enquanto julho, o mais frio, fica perto de 11 °C, com geadas frequentes no inverno e chuvas bem distribuídas ao longo do ano (cerca de 1.380 mm anuais).',
  climaTreino:
    'Os verões amenos para os padrões gaúchos favorecem o treino ao ar livre na maior parte do dia, com atenção à hidratação nas tardes mais quentes de janeiro. Já o inverno, com geadas e mínimas próximas de zero em junho e julho, pede aquecimento cuidadoso e, em dias mais rigorosos, a opção por ambientes fechados.',

  mobilidade:
    'Pinheiro Machado é cortada pela BR-293, rodovia que liga Pelotas a Bagé e atravessa a principal região produtora de lã e ovinos do país — o trecho vem recebendo obras de segurança e requalificação de acessos do DNIT. Não há sistema de transporte coletivo urbano estruturado; a ligação com as cidades vizinhas e com a rede rural de distritos se dá por ônibus intermunicipal e veículo próprio.',

  corridas: [
    {
      nome: 'JERGS — Jogos Escolares do Rio Grande do Sul (etapa regional)',
      descricao:
        'Pinheiro Machado sediou em 2025 a etapa regional dos JERGS, com provas de corrida e atletismo disputadas no Campo Luz e Ordem, reunindo estudantes da rede municipal e estadual.',
    },
    {
      nome: 'Circuito Verão Sesc de Esportes (etapa Pinheiro Machado)',
      descricao:
        'Etapa classificatória do circuito esportivo do Sesc-RS, que também passa por Bagé, Candiota, Hulha Negra e outros municípios da Campanha.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva do município é marcada pela tradição campeira da Campanha — laço, cavalgadas e a Feovelha, que movimenta a cidade em torno da ovinocultura — combinada com o esporte escolar, que tem em Pinheiro Machado uma sede de etapas regionais dos JERGS.',
  academias:
    'A oferta de estrutura para treino é pequena, concentrada em academias locais de musculação no Centro, típica de um município pequeno da Campanha gaúcha.',

  destaquesFitness: [
    'Terra da Ovelha: sede da Feovelha, a maior feira de ovinos do país, no Parque de Exposições Charrua.',
    'Marco dos Porongos, no alto de um cerro, memória do Massacre dos Porongos e dos Lanceiros Negros.',
    'Clima subtropical (Cfb) do Pampa, com verão ameno e inverno de geadas frequentes.',
    'Campanha gaúcha cortada pela BR-293 entre Bagé e Pelotas, com economia apoiada na pecuária e na lã.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 320,
  },

  conclusao:
    'Pequena, rural e marcada pela tradição da ovinocultura, Pinheiro Machado tem no clima ameno da maior parte do ano e nas coxilhas do Pampa um cenário favorável ao treino ao ar livre, desde que respeitado o rigor do inverno. Como a oferta de academias é limitada, um personal trainer é o caminho mais direto para quem busca acompanhamento individualizado na cidade.',

  vizinhas: ['bage-rs', 'pelotas-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Pinheiro Machado', url: 'https://cidades.ibge.gov.br/brasil/rs/pinheiro-machado/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Pinheiro Machado', url: 'https://www.pinheiromachado.rs.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
