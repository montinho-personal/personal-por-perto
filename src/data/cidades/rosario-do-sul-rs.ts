import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rosario-do-sul-rs',
  nome: 'Rosário do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'rosariense',
  tipo: 'cidade',

  populacao: 36212,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 132,

  resumoEconomico:
    'Cidade do pampa gaúcho na região da fronteira oeste, Rosário do Sul vive da pecuária e da lavoura de arroz, com o rio Santa Maria — e sua famosa praia fluvial das Areias Brancas — como marca registrada. A tradição campeira molda a cultura local, dos rodeios ao churrasco de domingo.',

  mercado:
    'O mercado de treino é o de cidade média do interior: academias de bairro, profissionais conhecidos pelo nome e uma vida ativa ligada ao campo e ao rio. No verão, a praia das Areias Brancas vira o centro esportivo da cidade, com caminhada, corrida e esportes de areia à beira do Santa Maria.',

  bairrosNobres: ['Centro', 'Ponche Verde', 'Vila Nova', 'Harmonia'],
  bairrosPopulares: ['Vila Delacroix', 'Wenceslau Dutra', 'Rui Ramos', 'Vila Tereza'],

  parques: [
    {
      nome: 'Praia das Areias Brancas',
      descricao:
        'A praia fluvial do rio Santa Maria, com faixa larga de areia clara, é o cartão-postal e o point esportivo do verão rosariense — caminhada, corrida na areia e esportes de praia a poucos minutos do centro.',
    },
    {
      nome: 'Praças centrais',
      descricao:
        'As praças do centro concentram a caminhada diária e a vida social da cidade o ano inteiro.',
    },
    {
      nome: 'Estradas do pampa',
      descricao:
        'As estradas planas e abertas do pampa rendem pedais longos e caminhadas com o horizonte infinito da fronteira como paisagem.',
    },
  ],
  ciclovias:
    'O pedal acontece nas estradas do pampa e no perímetro urbano; a malha cicloviária dedicada ainda é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima subtropical com amplitude térmica marcada: verões quentes que pedem o rio, invernos frios com mínimas baixas e o vento minuano como personagem.',
  climaTreino:
    'No verão, treina-se cedo, no fim de tarde ou na beira do rio; no inverno, o meio do dia é a janela — e a academia coberta é o plano B dos dias de minuano.',

  mobilidade:
    'Pela BR-158 e pelas rodovias da fronteira, Rosário do Sul se conecta a Santa Maria, Alegrete e Santana do Livramento — os polos regionais que completam os serviços da região.',

  corridas: [
    {
      nome: 'Provas da fronteira oeste',
      descricao:
        'O calendário de corridas da região circula por Santa Maria, Alegrete e cidades vizinhas, com percursos de 5 km e 10 km ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura campeira convive com o esporte de rio: no verão, as Areias Brancas concentram a vida ativa da cidade; no resto do ano, praças, ginásios e o futebol de bairro mantêm o movimento.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, no formato próximo e pessoal das cidades do pampa.',

  destaquesFitness: [
    'Praia fluvial das Areias Brancas como arena de verão à beira do rio Santa Maria.',
    'Estradas planas do pampa para pedais e caminhadas longas.',
    'Cultura campeira que valoriza força e resistência no dia a dia.',
    'Proximidade de Santa Maria e seu calendário de provas de rua.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Entre o pampa e a praia de rio, Rosário do Sul tem cenários de treino que grande cidade nenhuma copia. Um personal trainer ajuda a transformar as Areias Brancas, as estradas abertas e a rotina campeira em resultado — com método e constância o ano inteiro.',

  vizinhas: ['santa-maria-rs', 'alegrete-rs', 'santana-do-livramento-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Rosário do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/rosario-do-sul/panorama' },
    { nome: 'Prefeitura de Rosário do Sul', url: 'https://www.rosariodosul.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
