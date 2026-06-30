import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'abreu-e-lima-pe',
  nome: 'Abreu e Lima',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'abreu-limense',
  tipo: 'cidade',

  populacao: 98462,
  populacaoAno: 2022,
  idhm: 0.679,
  idhmClasse: 'médio',
  altitudeM: 20,

  resumoEconomico:
    'Integrante da Região Metropolitana do Recife, Abreu e Lima fica no litoral norte pernambucano e leva o nome em homenagem a José Inácio de Abreu e Lima, militar e jornalista herói da independência. O município combina vocação industrial e comercial — a fila ao longo da BR-101 concentra indústrias, serviços e o tradicional mercado municipal — com extensas áreas de Mata Atlântica preservada, que cobrem boa parte do território e abrigam reservas como as de São Bento e Caetés.',

  mercado:
    'O mercado de personal trainers acompanha a dinâmica metropolitana: há redes e academias de bairro concentradas no Centro, em Caetés e em Timbó, além de atendimento em condomínios e praças. A proximidade com Paulista e Recife amplia a oferta de profissionais, e o treino ao ar livre é favorecido pelas áreas verdes e pelos espaços públicos do município.',

  bairrosNobres: ['Centro', 'Caetés', 'Timbó', 'Jardim Planalto'],
  bairrosPopulares: ['Fosfato', 'Chã de Cruz', 'Desterro', 'Matinha'],

  parques: [
    {
      nome: 'Reserva de São Bento',
      descricao:
        'Remanescente de Mata Atlântica que integra a APA Aldeia-Beberibe; trilhas e área verde usadas para caminhada e atividade física em meio à natureza preservada.',
    },
    {
      nome: 'Mata de Caetés',
      descricao:
        'Outra área de floresta preservada no município, referência ambiental do litoral norte e ponto de contato com a natureza para quem treina ao ar livre.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'Praças do Centro e dos bairros contam com aparelhos de ginástica e espaços para treino funcional e caminhada no dia a dia.',
    },
  ],
  ciclovias:
    'O ciclismo urbano se apoia em vias locais e no acesso pela BR-101; ainda há pouca malha cicloviária estruturada, e parte dos ciclistas usa rotas compartilhadas dentro do município e em direção a Paulista.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral norte da Região Metropolitana do Recife, com calor o ano todo e chuvas concentradas no outono e inverno.',
  climaTreino:
    'O treino ao ar livre rende mais cedo pela manhã ou no fim de tarde, sempre com hidratação reforçada; nas áreas de mata, a sombra ajuda no conforto térmico durante o calor mais intenso.',

  mobilidade:
    'A BR-101 corta o município e é o principal eixo de mobilidade, conectando Abreu e Lima a Paulista, Igarassu e ao restante da Região Metropolitana do Recife — há forte conurbação com as cidades vizinhas. O deslocamento depende sobretudo de ônibus metropolitanos e veículos; a cidade não possui estação de metrô própria.',

  corridas: [
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Provas e caminhadas organizadas por grupos locais e pela prefeitura usam ruas do Centro e dos bairros, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Eventos do calendário metropolitano',
      descricao:
        'Corredores de Abreu e Lima também participam de provas de rua em Paulista, Olinda e Recife, aproveitando a proximidade pela BR-101.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol amador, presente em campos e quadras dos bairros, com o uso crescente de praças e áreas verdes para caminhada e corrida. A integração com a Região Metropolitana do Recife dá acesso a um calendário maior de eventos esportivos.',
  academias:
    'A oferta reúne academias de rede e de bairro no Centro, em Caetés e em Timbó, complementadas por estúdios de treino funcional e pelos espaços públicos com aparelhos ao ar livre.',

  destaquesFitness: [
    'Extensas áreas de Mata Atlântica (reservas de São Bento e Caetés) para treino em contato com a natureza.',
    'Praças e academias ao ar livre espalhadas pelo Centro e bairros.',
    'Proximidade com Paulista, Igarassu e Recife amplia a oferta de profissionais e eventos.',
    'BR-101 como eixo de integração para corridas e ciclismo na região metropolitana.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'Entre a Mata Atlântica preservada e a dinâmica industrial da BR-101, Abreu e Lima oferece um cenário variado para treinar, da floresta às praças dos bairros. Um personal trainer ajuda a transformar essa geografia em um plano consistente, respeitando o clima quente e úmido e o seu objetivo.',

  vizinhas: ['paulista-pe', 'olinda-pe', 'igarassu-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Abreu e Lima', url: 'https://cidades.ibge.gov.br/brasil/pe/abreu-e-lima/panorama' },
    { nome: 'Prefeitura de Abreu e Lima', url: 'https://abreuelima.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
