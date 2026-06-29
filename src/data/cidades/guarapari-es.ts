import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guarapari-es',
  nome: 'Guarapari',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'guarapariense',
  tipo: 'cidade',

  populacao: 124656,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 15,

  resumoEconomico:
    'No litoral sul do Espírito Santo, a cerca de 50 km de Vitória, Guarapari é a principal cidade turística do estado. A economia é movida pelo turismo de praia (com mais de 50 praias) e pela fama de "Cidade Saúde", graças às areias monazíticas. Tem forte sazonalidade de verão e setor imobiliário e de serviços aquecido.',

  mercado:
    'A orla estruturada e o perfil de saúde e turismo sustentam academias e treino ao ar livre, e a cidade sedia uma das corridas litorâneas mais conhecidas do país.',

  bairrosNobres: ['Enseada Azul', 'Setiba', 'Praia do Morro', 'Centro'],
  bairrosPopulares: ['Muquiçaba', 'Adalberto Simão Nader', 'Kubitschek', 'Olaria'],

  parques: [
    {
      nome: 'Orla da Praia do Morro',
      descricao:
        'Orla urbana de cerca de 4 km com calçadão, ciclovia, quadra de esportes e quiosques — ideal para corrida e caminhada.',
    },
    {
      nome: 'Praia da Areia Preta',
      descricao:
        'Orla das famosas areias monazíticas, usada para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Praia de Graçaí',
      descricao:
        'Tem calçadão e ciclovia, entre Ipiranga e Nova Guarapari.',
    },
  ],
  ciclovias:
    'Há ciclovias na orla da Praia do Morro e na Praia de Graçaí; a extensão total da malha ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, com média em torno de 24,4 °C e verões quentes.',
  climaTreino:
    'O calor predominante pede treinos cedo de manhã ou no fim de tarde, com hidratação, aproveitando a brisa litorânea.',

  mobilidade:
    'O acesso se dá pela Rodovia do Sol (ES-060), ligando a Vitória, e pela BR-101, em rota costeira de fácil chegada da capital.',

  corridas: [
    {
      nome: 'Meia Maratona das Praias',
      descricao:
        'Percorre dezenas de praias num único trajeto, com provas de 21 km, 10 km, 5 km e night run, atraindo atletas de vários estados.',
    },
    {
      nome: 'Desafio Cidade Saúde',
      descricao:
        'Prova de 6 km e 21 km, parte do calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Há forte tradição em corrida litorânea e esportes de praia (com a orla do Morro como palco), e a identidade de "Cidade Saúde" reforça o apelo fitness e de bem-estar.',
  academias:
    'A oferta reúne academias e estúdios, com a orla da Praia do Morro e as demais praias estruturadas funcionando como academia a céu aberto.',

  destaquesFitness: [
    'Orla da Praia do Morro: calçadão, ciclovia e cerca de 4 km de areia.',
    'Meia Maratona das Praias (dezenas de praias), referência nacional.',
    'Identidade "Cidade Saúde" e areias monazíticas.',
    'Múltiplas praias estruturadas para treino outdoor.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 160,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Principal cidade turística do Espírito Santo e "Cidade Saúde", Guarapari tem mais de 50 praias e a orla do Morro como academia a céu aberto. Um personal trainer ajuda a aproveitar a orla e as provas litorâneas com método, ajustando horários e hidratação ao calor do verão.',

  vizinhas: ['vila-velha-es', 'vitoria-es', 'cariacica-es'],

  fontes: [
    { nome: 'IBGE Cidades — Guarapari', url: 'https://cidades.ibge.gov.br/brasil/es/guarapari/panorama' },
    { nome: 'Prefeitura de Guarapari', url: 'https://www.guarapari.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
