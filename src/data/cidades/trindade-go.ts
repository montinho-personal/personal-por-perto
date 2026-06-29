import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'trindade-go',
  nome: 'Trindade',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'trindadense',
  tipo: 'cidade',

  populacao: 142431,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 754,

  resumoEconomico:
    'Integrante da Região Metropolitana de Goiânia e a cerca de 16 km da capital, Trindade é uma das principais cidades de turismo religioso do Brasil, abrigando o Santuário Basílica do Divino Pai Eterno — a única basílica do mundo dedicada ao Divino Pai Eterno. A economia local se apoia em comércio, serviços e, sobretudo, no fluxo de romeiros, com pico durante a Romaria do Divino Pai Eterno, uma das maiores festas religiosas do país.',

  mercado:
    'Cidade da Região Metropolitana de Goiânia, com forte conurbação ligada à capital pela GO-060, Trindade tem perfil de renda médio-popular e um mercado fitness movido a academias de bairro e ao atendimento domiciliar. O personal trainer encontra demanda em condomínios e residências, complementando a oferta de academias locais, num clima de cerrado que exige atenção à hidratação no inverno seco.',

  bairrosNobres: ['Setor Central', 'Jardim Salvador', 'Setor Tradição', 'Residencial Pênfigo'],
  bairrosPopulares: ['Vila Mariana', 'Setor Maysa', 'Jardim Petrópolis', 'Setor Industrial'],

  parques: [
    {
      nome: 'Praças e academias ao ar livre dos bairros',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças e áreas públicas, ampliando o acesso ao treino gratuito nos bairros.',
    },
    {
      nome: 'Entorno do Santuário Basílica',
      descricao:
        'A região do Santuário do Divino Pai Eterno concentra largas calçadas e espaços abertos muito usados para caminhada por moradores e romeiros.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em vias do setor central; boa parte do pedal e da caminhada acontece em calçadas e na própria Rodovia dos Romeiros (GO-060).',

  clima:
    'O clima é tropical de cerrado, com inverno seco e verão chuvoso, a cerca de 754 m de altitude.',
  climaTreino:
    'O inverno seco e as temperaturas altas no fim da tarde pedem hidratação reforçada e horários mais frescos (início da manhã ou fim do dia); a baixa umidade na estiagem é o principal cuidado para quem treina ao ar livre.',

  mobilidade:
    'Trindade é ligada a Goiânia pela GO-060, a Rodovia dos Romeiros, eixo que conurba a cidade à capital e que, durante a Romaria, recebe milhares de fiéis a pé no trajeto de cerca de 18 km entre as duas cidades.',

  corridas: [
    {
      nome: 'Caminhada dos Romeiros (GO-060)',
      descricao:
        'Na Romaria do Divino Pai Eterno, multidões percorrem a pé cerca de 18 km de Goiânia a Trindade pela Rodovia dos Romeiros, em pista de caminhada iluminada e sinalizada com pontos de apoio — a maior expressão de esforço físico coletivo da cidade.',
    },
    {
      nome: 'Provas e treinos de rua locais',
      descricao:
        'A corrida de rua se organiza em provas pontuais e treinos de grupos da cidade e do entorno metropolitano de Goiânia.',
    },
  ],
  culturaEsportiva:
    'A cultura do movimento em Trindade tem forte marca na caminhada: a tradição de percorrer a pé a Rodovia dos Romeiros, durante a Romaria, mobiliza milhões de pessoas e dialoga com o hábito de caminhar e correr da Região Metropolitana de Goiânia.',
  academias:
    'A oferta é dominada por academias de bairro e estúdios, adequadas ao perfil médio-popular da cidade, e complementada pelo atendimento de personal trainers em domicílio e condomínios.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Goiânia, conurbada à capital pela GO-060.',
    'Tradição de caminhada na Rodovia dos Romeiros (cerca de 18 km na Romaria).',
    'Mercado de academias de bairro e forte espaço para atendimento domiciliar.',
    'Clima de cerrado com inverno seco — atenção redobrada à hidratação.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade do Divino Pai Eterno e integrante da Região Metropolitana de Goiânia, Trindade combina tradição de caminhada com um mercado fitness de bairro e domiciliar. Um personal trainer ajuda o morador a treinar com método e segurança, ajustando carga e hidratação ao clima de cerrado.',

  vizinhas: ['goiania-go', 'aparecida-de-goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Trindade', url: 'https://cidades.ibge.gov.br/brasil/go/trindade/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Goiás Turismo — Santuário Basílica do Divino Pai Eterno', url: 'https://www.goiasturismo.go.gov.br/pt/atracoes/santuario-basilica-do-divino-pai-eterno' },
  ],
  atualizadoEm: '2026-06-29',
};
