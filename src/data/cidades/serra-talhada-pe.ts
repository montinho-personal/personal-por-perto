import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'serra-talhada-pe',
  nome: 'Serra Talhada',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'serra-talhadense',
  tipo: 'cidade',

  populacao: 92228,
  populacaoAno: 2022,
  idhm: 0.661,
  idhmClasse: 'médio',
  altitudeM: 429,

  resumoEconomico:
    'Terra de Lampião e principal cidade do Sertão do Pajeú, Serra Talhada é o polo regional de comércio, serviços e educação do alto sertão pernambucano. Concentra forte rede varejista, atende a dezenas de municípios vizinhos e abriga a Unidade Acadêmica de Serra Talhada (UAST/UFRPE), que consolidou a cidade como polo universitário do interior. O Museu do Cangaço, instalado na antiga estação ferroviária, reforça a vocação cultural ligada à história do cangaço.',

  mercado:
    'O mercado fitness acompanha o porte de polo regional: há academias de musculação e funcional no Centro e nos bairros, estúdios de personal e a presença de uma população universitária jovem que aquece a demanda. Personal trainers atuam tanto em academias quanto a domicílio e nas praças, com forte sazonalidade ligada ao calor do semiárido.',

  bairrosNobres: ['Centro (Nossa Senhora da Penha)', 'AABB', 'Universitário', 'Ipsep'],
  bairrosPopulares: ['Borborema (São Sebastião)', 'COHAB (Tancredo Neves)', 'Caxixola', 'Bomba (São Cristóvão)'],

  parques: [
    {
      nome: 'Praça Agamenon Magalhães (Marco Zero)',
      descricao:
        'Coração da cidade, abriga a Concha Acústica e é ponto de encontro para caminhadas, eventos e atividade física ao ar livre no Centro.',
    },
    {
      nome: 'Orla do Rio Pajeú',
      descricao:
        'As margens do Pajeú, com a ponte que liga o Centro ao bairro Caxixola, formam um percurso usado para caminhada e corrida, com vista para o rio e a serra.',
    },
    {
      nome: 'Praça da AABB',
      descricao:
        'Área de lazer no bairro AABB que sedia eventos esportivos e serve de ponto de partida para corridas e treinos coletivos.',
    },
  ],
  ciclovias:
    'Serra Talhada não dispõe de uma malha cicloviária estruturada; o ciclismo de lazer acontece sobretudo nas avenidas do Centro e em rotas pelas estradas da zona rural no entorno.',

  clima:
    'O clima é semiárido quente e seco (tipo BSh), típico do Sertão do Pajeú: verões muito quentes, com máximas frequentemente entre 31 °C e 38 °C, invernos amenos e baixa umidade boa parte do ano, com chuvas concentradas no primeiro semestre.',
  climaTreino:
    'O calor intenso e a forte radiação solar exigem cuidado redobrado com hidratação e horários: o início da manhã e o fim da tarde são as melhores janelas para treino ao ar livre, evitando o período entre o meio-dia e a metade da tarde.',

  mobilidade:
    'O principal eixo de acesso é a BR-232, que liga Serra Talhada ao Recife (cerca de 415 km) e ao interior em direção a Salgueiro; a cidade funciona como hub rodoviário do alto sertão. Não há transporte sobre trilhos, e os deslocamentos urbanos são feitos por carro, moto, ônibus e a pé.',

  corridas: [
    {
      nome: 'Eco Running Serra Talhada',
      descricao:
        'Corrida e caminhada de cunho participativo e socioambiental, com largada na região da Praça da AABB e foco em sustentabilidade e mobilização da comunidade.',
    },
    {
      nome: 'Provas e treinos no Centro e na orla do Pajeú',
      descricao:
        'Circuitos e treinos coletivos organizados por grupos de corrida locais, aproveitando as praças do Centro e as margens do rio.',
    },
  ],
  culturaEsportiva:
    'A presença universitária da UAST/UFRPE e os grupos de corrida locais sustentam uma cultura esportiva crescente, voltada à corrida de rua, à musculação e ao treino funcional, mesmo diante do clima desafiador do sertão.',
  academias:
    'A oferta reúne academias de musculação e funcional no Centro e nos bairros, estúdios de personal e espaços de treino voltados ao público universitário, complementados pelas praças e pela orla para atividades ao ar livre.',

  destaquesFitness: [
    'Polo regional do Sertão do Pajeú, com mercado fitness aquecido pela população universitária da UAST/UFRPE.',
    'Praça Agamenon Magalhães (Marco Zero) e orla do Rio Pajeú como pontos de treino ao ar livre.',
    'Clima semiárido quente e seco exige planejar treinos para manhã e fim de tarde.',
    'Eco Running e grupos de corrida locais movimentam o calendário esportivo da cidade.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital do Sertão do Pajeú e terra de Lampião, Serra Talhada combina força de polo regional, vida universitária e cenários como o Marco Zero e a orla do Pajeú para treinar. Um personal trainer ajuda a montar uma rotina que respeite o calor do semiárido, aproveitando as melhores janelas do dia com método e segurança.',

  vizinhas: ['caruaru-pe', 'petrolina-pe', 'santa-cruz-do-capibaribe-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Serra Talhada', url: 'https://cidades.ibge.gov.br/brasil/pe/serra-talhada/panorama' },
    { nome: 'Prefeitura de Serra Talhada', url: 'https://www.serratalhada.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/261390' },
  ],
  atualizadoEm: '2026-06-29',
};
