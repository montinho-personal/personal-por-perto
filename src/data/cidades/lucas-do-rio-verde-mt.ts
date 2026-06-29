import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lucas-do-rio-verde-mt',
  nome: 'Lucas do Rio Verde',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'lucasriverdense',
  tipo: 'cidade',

  populacao: 83798,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 390,

  resumoEconomico:
    'No norte de Mato Grosso, Lucas do Rio Verde é conhecida como "Capital da Agroindústria" e é um dos maiores polos do agronegócio brasileiro (soja, milho, algodão, suínos e aves). Sedia um grande complexo da BRF e uma usina de etanol de milho. Cidade jovem, planejada e de altíssima renda per capita, com um dos melhores IDHs do interior de Mato Grosso.',

  mercado:
    'O público jovem com alta renda vinda do agro e da agroindústria, somado a uma forte cultura de qualidade de vida, forma um terreno muito favorável para academias premium e personal trainers, inclusive online.',

  bairrosNobres: ['Bandeirantes', 'Parque das Araras', 'Jardim Primaveras', 'Parque das Américas'],
  bairrosPopulares: ['Tessele Junior', 'Parque das Emas', 'Vida Nova', 'Rio Verde'],

  parques: [
    {
      nome: 'Parque Ecológico Harri Müller',
      descricao:
        'Área verde entre o Parque das Américas e o Parque das Araras, usada para caminhada e lazer.',
    },
    {
      nome: 'Parque Municipal dos Buritis',
      descricao:
        'Reserva de preservação no perímetro urbano, boa para caminhada, no Centro.',
    },
    {
      nome: 'Praças com Academia da Terceira Idade',
      descricao:
        'Praças de bairro com pistas de caminhada, equipamentos de ginástica e parquinhos.',
    },
  ],
  ciclovias:
    'A cidade tem cerca de 68 km de ciclovias (entre urbanas e rurais), apontada como a maior malha cicloviária de Mato Grosso.',

  clima:
    'O clima é tropical de savana, com média anual em torno de 25 °C e estação chuvosa bem marcada.',
  climaTreino:
    'O treino ao ar livre é mais confortável no início da manhã ou no fim de tarde, com atenção à hidratação no calor.',

  mobilidade:
    'Lucas do Rio Verde é cortada pela BR-163 (eixo Cuiabá–Santarém), a espinha dorsal logística do agronegócio.',

  corridas: [
    {
      nome: 'Meia Maratona "O Semeador"',
      descricao:
        'Reuniu mais de 1.800 corredores nas distâncias de 7 km, 14 km e 21 km, entrando no calendário oficial do município.',
    },
    {
      nome: 'Treinões em praças e parques',
      descricao:
        'Eventos recorrentes da Secretaria de Esporte e Lazer nas praças com pista e academia ao ar livre.',
    },
  ],
  culturaEsportiva:
    'Cidade jovem e planejada, com forte investimento público em lazer (ciclovias, praças e academias da terceira idade) e adesão crescente à corrida de rua.',
  academias:
    'A oferta tende ao premium, acompanhando a renda do agro, complementada pela maior malha cicloviária de MT e por praças bem equipadas.',

  destaquesFitness: [
    'Renda per capita elevada e público jovem do agro — forte demanda por treino personalizado.',
    'Maior malha de ciclovias de Mato Grosso, favorável a corrida e ciclismo.',
    'Meia Maratona "O Semeador" como vitrine esportiva local.',
    'Rede de praças com academia ao ar livre espalhadas pelos bairros.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Capital da Agroindústria no norte de MT, Lucas do Rio Verde une altíssima renda, cidade planejada e a maior malha de ciclovias do estado. Um personal trainer encontra aqui um público jovem e exigente, ideal para treino presencial e online.',

  vizinhas: ['sinop-mt', 'cuiaba-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Lucas do Rio Verde', url: 'https://cidades.ibge.gov.br/brasil/mt/lucas-do-rio-verde/panorama' },
    { nome: 'Prefeitura de Lucas do Rio Verde', url: 'https://www.lucasdorioverde.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
