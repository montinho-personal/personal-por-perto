import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paraiso-do-tocantins-to',
  nome: 'Paraíso do Tocantins',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'paraisense',
  tipo: 'cidade',

  populacao: 52360,
  populacaoAno: 2022,
  idhm: 0.764,
  idhmClasse: 'alto',
  altitudeM: 387,

  resumoEconomico:
    'Localizada no centro do Tocantins, a cerca de 60 km de Palmas, Paraíso do Tocantins nasceu às margens da rodovia Belém–Brasília e se firmou como importante polo de comércio, serviços e logística do estado. A economia tem forte base agropecuária — pecuária de corte, grãos e algodão —, com leilões de gado tradicionais na região, e a posição estratégica no entroncamento rodoviário sustenta o crescimento da cidade.',

  mercado:
    'Cidade média em expansão e cada vez mais conhecida como referência esportiva no interior tocantinense, Paraíso reúne uma demanda crescente por treino. O calor forte do Cerrado, o hábito de caminhada e corrida em praças e vias arborizadas e o investimento público em infraestrutura esportiva criam espaço real para o trabalho de personal trainers, tanto presencial quanto online.',

  bairrosNobres: ['Centro', 'Jardim das Palmeiras', 'Jardim Bela Vista', 'Parque das Nações'],
  bairrosPopulares: ['Vila Rica', 'Setor F', 'Bom Jesus', 'Jardim Paraíso'],

  parques: [
    {
      nome: 'Parque Ecológico de Paraíso do Tocantins',
      descricao:
        'Principal área verde da cidade, com trilhas, mata preservada típica do Cerrado, lagos e espaços de lazer — ponto de encontro para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Praças e vias arborizadas do Centro',
      descricao:
        'Praças centrais e calçadões servem de circuito improvisado para caminhada e corrida no fim da tarde, quando o calor diminui.',
    },
  ],
  ciclovias:
    'A cidade, de relevo plano e com avenidas largas herdadas do traçado às margens da BR-153, favorece o deslocamento de bicicleta; o uso da bike no dia a dia e para lazer é comum entre os moradores.',

  clima:
    'O clima é tropical de Cerrado, quente o ano todo, com estação seca bem marcada no inverno (de maio a setembro) e chuvas concentradas no verão. As temperaturas costumam ultrapassar os 35 °C nos meses mais secos, com baixa umidade do ar.',
  climaTreino:
    'Pelo calor intenso e pela seca acentuada, o treino ao ar livre rende muito mais no início da manhã ou no fim da tarde, com atenção redobrada à hidratação e à proteção solar — sobretudo no auge da estiagem, quando a umidade despenca.',

  mobilidade:
    'Paraíso é um entroncamento rodoviário: é cortada pela BR-153 (Belém–Brasília), liga-se à BR-010 e ao eixo da TO-080, que faz a conexão direta com Palmas. Essa posição estratégica garante acesso rápido à capital e ao restante do estado, com deslocamento interno facilitado pelo relevo plano.',

  corridas: [
    {
      nome: 'Circuito estadual de corrida de rua do Tocantins',
      descricao:
        'Paraíso integra o calendário de provas de rua do interior tocantinense, recebendo etapas regionais com percursos de 5 km e 10 km.',
    },
    {
      nome: 'Provas comunitárias e festivais esportivos',
      descricao:
        'A cidade promove corridas e festivais esportivos para a comunidade, parte do movimento que a tem consolidado como referência esportiva no interior do estado.',
    },
  ],
  culturaEsportiva:
    'Paraíso do Tocantins vem ganhando fama de polo esportivo do interior, com investimento em ginásios, quadras de areia, campos e pistas que recebem praticantes diariamente. A cultura de caminhada e corrida nas praças e vias arborizadas é forte, alimentada pela proximidade com Palmas e por um calendário esportivo ativo.',
  academias:
    'A oferta de academias acompanha o crescimento da cidade média, concentrada no Centro e nos bairros em expansão. O treino ao ar livre em praças, no Parque Ecológico e em pistas públicas complementa a estrutura privada e amplia o acesso à atividade física.',

  destaquesFitness: [
    'Referência esportiva crescente no interior do Tocantins, com ginásios, quadras de areia e pistas movimentadas.',
    'Parque Ecológico de Paraíso como principal espaço de trilha e caminhada em meio ao Cerrado.',
    'Relevo plano e avenidas largas, favoráveis à corrida e ao uso da bicicleta.',
    'Proximidade com Palmas (cerca de 60 km), que amplia o acesso a eventos e circuitos esportivos.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 660,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Polo agropecuário e entroncamento rodoviário no coração do Tocantins, Paraíso une crescimento econômico a uma cultura esportiva em ascensão. Um personal trainer ajuda a aproveitar o Parque Ecológico, as praças e as pistas da cidade com um plano sob medida — e a treinar com segurança diante do calor forte e da seca marcante do Cerrado.',

  vizinhas: ['palmas-to', 'gurupi-to'],

  fontes: [
    {
      nome: 'IBGE Cidades — Paraíso do Tocantins',
      url: 'https://cidades.ibge.gov.br/brasil/to/paraiso-do-tocantins/panorama',
    },
    { nome: 'Prefeitura de Paraíso do Tocantins', url: 'https://paraiso.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
