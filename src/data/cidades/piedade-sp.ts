import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piedade-sp',
  nome: 'Piedade',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'piedadense',
  tipo: 'cidade',

  populacao: 52970,
  populacaoAno: 2022,
  idhm: 0.72,
  idhmClasse: 'alto',
  altitudeM: 781,

  resumoEconomico:
    'Nos altos da Serra de Paranapiacaba e a cerca de uma hora da capital, Piedade integra o chamado cinturão verde de São Paulo pela forte produção de hortifrutigranjeiros. A economia é puxada pela agricultura familiar diversificada — caqui, tomate, cebola, alcachofra, morango e uma extensa lista de verduras e legumes que abastecem a região metropolitana. À produção soma-se o agroturismo e o turismo rural, com destaque para o tradicional Colha & Pague do Kaki Fuyu, além do comércio e dos serviços que atendem a cidade e os bairros rurais.',

  mercado:
    'Piedade é uma cidade de porte médio-pequeno, e o mercado fitness gira em torno de academias locais de musculação e treino funcional, sobretudo na área urbana central. A procura por personal trainers cresce entre quem quer aproveitar o clima ameno de montanha e o relevo de serra para treinar ao ar livre, e também entre moradores dos bairros rurais que buscam acompanhamento mais próximo e adaptado à rotina.',

  bairrosNobres: ['Centro', 'Jardim Represa', 'Vila Santa Cruz', 'Jardim Sorocabano'],
  bairrosPopulares: ['Serrote', 'Vila Élvio', 'Ciriaco', 'Bairro dos Leites'],

  parques: [
    {
      nome: 'Serra de Paranapiacaba (entorno rural)',
      descricao:
        'A cidade se assenta nos altos da serra, e as estradas e trilhas dos bairros rurais oferecem percursos com boa altimetria e clima fresco — muito procurados para caminhada, corrida e pedal em meio à natureza.',
    },
    {
      nome: 'Praça e área central',
      descricao:
        'O núcleo urbano, com a igreja matriz e as praças, concentra o vaivém da cidade e serve de ponto de partida para caminhadas e para eventos esportivos de rua.',
    },
    {
      nome: 'Roteiros de turismo rural',
      descricao:
        'Sítios e propriedades de agroturismo, como os do Colha & Pague do caqui fuyu, integram passeios pelo campo que combinam atividade física leve, contato com a produção agrícola e paisagem de montanha.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta, mas o município é referência regional para o ciclismo fora de estrada: as estradas rurais e o relevo de serra atraem praticantes de mountain bike, e a cidade já sediou etapas de circuitos de MTB, como o GP Ravelli.',

  clima:
    'O clima é ameno e influenciado pela altitude da Serra de Paranapiacaba, com temperaturas mais baixas que as do interior paulista de menor altitude. Os invernos são frios e podem registrar madrugadas de temperatura baixa, enquanto os verões são amenos e chuvosos. A umidade e a neblina de serra são frequentes, e a comunidade japonesa da cidade celebra a floração das cerejeiras nos meses mais frios.',
  climaTreino:
    'O clima de montanha favorece o treino ao ar livre em boa parte do ano, com dias amenos que facilitam a corrida e o pedal. No inverno, o frio das primeiras horas pede aquecimento reforçado e roupa adequada; nos dias de chuva e neblina, redobra-se a atenção com pisos escorregadios das estradas de serra e trilhas.',

  mobilidade:
    'O principal eixo de acesso é a Rodovia SP-250 (Rodovia Bunjiro Nakao no trecho Vargem Grande Paulista–Piedade), que liga a cidade a Ibiúna e à Grande São Paulo e segue rumo a Pilar do Sul; Sorocaba fica a cerca de 50 km e a capital a cerca de 100 km. O deslocamento interno é feito por vias urbanas e por uma extensa malha de estradas rurais que conectam os muitos bairros do campo, e o transporte coletivo é atendido por linhas de ônibus.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da Padroeira (Nossa Senhora da Piedade)',
      descricao:
        'Prova de rua ligada às celebrações da padroeira que reúne atletas de Piedade e de municípios vizinhos, como Sorocaba, Ibiúna e Pilar do Sul.',
    },
    {
      nome: 'GP Ravelli de Mountain Bike',
      descricao:
        'Competição de mountain bike que já teve etapa em Piedade, aproveitando o relevo de serra e as estradas rurais que fazem da cidade um destino para o ciclismo fora de estrada.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das estradas e trilhas de serra para corrida, caminhada e mountain bike, o agroturismo que aproxima moradores e visitantes do campo, e provas de rua ligadas ao calendário da cidade — tudo favorecido pelo clima ameno de montanha.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, concentradas na área urbana central, com porte compatível com uma cidade média-pequena do interior paulista.',

  destaquesFitness: [
    'Clima ameno de montanha, nos altos da Serra de Paranapiacaba, favorável ao treino ao ar livre.',
    'Estradas rurais e relevo de serra que atraem corredores e praticantes de mountain bike.',
    'Cidade do cinturão verde paulista, com forte agricultura de caqui, tomate e hortifrúti e agroturismo (Colha & Pague do caqui fuyu).',
    'Acesso pela Rodovia SP-250 (Bunjiro Nakao), a cerca de 50 km de Sorocaba e 100 km da capital.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cercada por serra, agricultura e clima ameno de montanha, Piedade oferece um cenário convidativo para treinar ao ar livre o ano todo. Um personal trainer ajuda a aproveitar as estradas e trilhas da região com segurança, ajustar os horários ao frio do inverno e à neblina de serra, e manter a constância seja na área urbana, seja nos bairros rurais.',

  vizinhas: ['sorocaba-sp', 'ibiuna-sp', 'tatui-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Piedade', url: 'https://cidades.ibge.gov.br/brasil/sp/piedade/panorama' },
    { nome: 'Prefeitura de Piedade', url: 'https://www.piedade.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
