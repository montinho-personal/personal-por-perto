import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vila-velha-es',
  nome: 'Vila Velha',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'vila-velhense',
  tipo: 'cidade',

  populacao: 467722,
  populacaoAno: 2022,
  idhm: 0.8,
  idhmClasse: 'muito alto',
  altitudeM: 4,

  resumoEconomico:
    'Cidade mais populosa do Espírito Santo, Vila Velha é litorânea e fortemente ligada ao turismo, ao comércio e aos serviços, com vocação imobiliária e de praia. Abriga o Convento da Penha, principal cartão-postal religioso do estado. A Praia da Costa, um dos endereços mais valorizados do ES, concentra boa parte da vida ativa da cidade.',

  mercado:
    'O mercado fitness de Vila Velha é aquecido pela forte cultura de praia e musculação, concentrada na orla. Os calçadões têm academias ao ar livre e há grande oferta de academias privadas nos bairros litorâneos valorizados, o que sustenta uma demanda consistente por personal trainers — da musculação ao preparo para corridas e esportes de areia.',

  bairrosNobres: ['Praia da Costa', 'Itapuã', 'Praia de Itaparica', 'Prainha'],
  bairrosPopulares: ['Cobilândia', 'Terra Vermelha', 'Ulisses Guimarães', 'Vila Garrido'],

  parques: [
    {
      nome: 'Orla da Praia da Costa',
      descricao:
        'Calçadão totalmente urbanizado com academias ao ar livre, ciclovia de cerca de 5 km e espaço para caminhada, corrida e esportes de areia (futevôlei, vôlei e frescobol). Bem iluminado, permite até treino noturno.',
    },
    {
      nome: 'Praia de Itaparica',
      descricao:
        'Orla com calçadão para caminhada e corrida, que serve de sede para provas de rua locais, como a Corrida Movimento Cidade.',
    },
    {
      nome: 'Morro do Moreno',
      descricao:
        'Com trilha e mirante, é ponto de partida de corridas e atividades ao ar livre, unindo esforço físico e uma das melhores vistas da Grande Vitória.',
    },
  ],
  ciclovias:
    'A Praia da Costa tem ciclovia de cerca de 5 km, e a Grande Vitória (Vitória, Vila Velha, Serra e Cariacica) soma mais de 220 km de ciclovias e ciclofaixas.',

  clima:
    'O clima é tropical litorâneo, quente e úmido o ano todo.',
  climaTreino:
    'O treino ao ar livre é viável quase o ano inteiro; vale evitar o sol forte do meio-dia, reforçar a hidratação e aproveitar a orla iluminada para treinar também à noite.',

  mobilidade:
    'Vila Velha é integrada à Grande Vitória pelo sistema Transcol (com integração tarifária) e ligada a Vitória pela Terceira Ponte, com bicicletários nos terminais — uma cidade convidativa ao deslocamento ativo.',

  corridas: [
    {
      nome: 'Dez Milhas Garoto',
      descricao:
        'A mais tradicional corrida de rua do Espírito Santo: cerca de 16 km ligando Vitória a Vila Velha, um clássico do calendário capixaba.',
    },
    {
      nome: 'Corrida da Penha',
      descricao:
        'Realizada no Domingo de Páscoa, une fé e esporte no entorno do Convento da Penha — uma corrida de forte identidade local.',
    },
  ],
  culturaEsportiva:
    'Vila Velha é uma cidade de praia com forte hábito de caminhada, corrida, esportes de areia e musculação na orla, e um calendário ativo de corridas de rua. A vida ativa acontece, sobretudo, à beira-mar.',
  academias:
    'A oferta de academias é ampla nos bairros litorâneos, complementada pelas academias ao ar livre dos calçadões da Praia da Costa e de Itaparica.',

  destaquesFitness: [
    'Orla da Praia da Costa com academias ao ar livre e ciclovia de cerca de 5 km.',
    'Calçadões iluminados que permitem treino noturno.',
    'Esportes de areia consolidados (futevôlei, vôlei e frescobol).',
    'Calendário robusto de corridas (Dez Milhas Garoto e Corrida da Penha).',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 185,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 185,
    onlineMax: 470,
  },

  conclusao:
    'Com uma das orlas mais agradáveis do Sudeste e forte cultura de praia, Vila Velha é feita para quem gosta de treinar ao ar livre. Um personal trainer ajuda a transformar a Praia da Costa e os calçadões em um plano consistente — da musculação à preparação para as corridas tradicionais da cidade.',

  vizinhas: ['vitoria-es', 'serra-es'],

  fontes: [
    { nome: 'IBGE Cidades — Vila Velha', url: 'https://cidades.ibge.gov.br/brasil/es/vila-velha/panorama' },
    { nome: 'Prefeitura de Vila Velha', url: 'https://www.vilavelha.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
