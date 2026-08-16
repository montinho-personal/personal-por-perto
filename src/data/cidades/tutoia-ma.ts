import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tutoia-ma',
  nome: 'Tutóia',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'tutoiense',
  tipo: 'cidade',

  populacao: 53356,
  populacaoAno: 2022,

  resumoEconomico:
    'No litoral oriental do Maranhão, Tutóia é a porta maranhense do Delta do Parnaíba — o único delta em mar aberto das Américas — e uma das estações da Rota das Emoções, o roteiro que liga Jericoacoara aos Lençóis Maranhenses. Pesca artesanal, carcinicultura, comércio regional e o turismo de delta e dunas movem a economia de uma cidade que cresceu como entreposto entre o mar e os Lençóis.',

  mercado:
    'O mercado de treino acompanha o porte de cidade média litorânea: academias simples no centro e nos bairros, demanda de trabalhadores do turismo, barqueiros e pescadores, e um fluxo constante de visitantes na temporada. O treino ao ar livre na orla e nas dunas é parte natural da rotina, e o acompanhamento online complementa a oferta local.',

  bairrosNobres: ['Centro', 'Beira Mar', 'Aeroporto', 'Barro Duro'],
  bairrosPopulares: ['Cebola', 'Barreiro', 'Arpoador', 'Paulino Neves (estrada)'],

  parques: [
    {
      nome: 'Delta do Parnaíba',
      descricao:
        'Dezenas de ilhas, igarapés e dunas entre o Maranhão e o Piauí; os passeios de barco saem do porto de Tutóia rumo às ilhas do Caju e das Canárias — território de caminhada em areia e banho de rio.',
    },
    {
      nome: 'Praias e dunas da orla',
      descricao:
        'A faixa litorânea da cidade combina praias de maré, coqueirais e cordões de dunas — pista natural de caminhada e corrida nas horas frescas.',
    },
    {
      nome: 'Rota das Emoções',
      descricao:
        'Tutóia é elo do roteiro que liga os Lençóis Maranhenses ao Delta e a Jericoacoara — fluxo constante de viajantes ativos, de 4x4 e de bicicleta.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; as avenidas da orla e as estradas de areia são o terreno de quem pedala, incluindo cicloturistas da Rota das Emoções.',

  clima:
    'Tropical quente e úmido, com chuvas de janeiro a junho e estiagem ventosa no segundo semestre — os alísios que sopram do mar são marca registrada do litoral oriental maranhense.',
  climaTreino:
    'Cedo de manhã e fim de tarde são as janelas do treino ao ar livre; o vento constante do segundo semestre alivia a sensação térmica e muda o esforço da corrida na orla. Hidratação reforçada o ano inteiro.',

  mobilidade:
    'A MA-315 liga Tutóia a Paulino Neves e Barreirinhas (rumo aos Lençóis), e a MA-034/BR-402 conecta ao restante do estado; os passeios de barco pelo delta saem do porto da cidade. Parnaíba, do outro lado do delta, fica a cerca de uma hora e meia por terra.',

  corridas: [
    {
      nome: 'Provas e festivais da temporada',
      descricao:
        'O calendário local gira em torno das festas da cidade e da temporada turística, com corridas de rua e eventos esportivos na orla.',
    },
  ],
  culturaEsportiva:
    'O corpo tutoiense treina no trabalho e no território: pesca, remo, caminhada em areia fofa e as subidas de duna que não perdoam sedentarismo. Somam-se o futebol de praia e de bairro, o kitesurf que cresce com os ventos do segundo semestre e o movimento dos viajantes da Rota das Emoções.',
  academias:
    'A oferta reúne academias de musculação simples no centro e nos bairros maiores; quem busca acompanhamento estruturado costuma combinar a estrutura local com consultoria online.',

  destaquesFitness: [
    'Porta maranhense do Delta do Parnaíba, com passeios que já são caminhada e natação.',
    'Dunas e praias de maré como pista natural de treino.',
    'Ventos fortes do segundo semestre: kitesurf em crescimento.',
    'Elo da Rota das Emoções, com fluxo constante de viajantes ativos.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 130,
    onlineMax: 330,
  },

  conclusao:
    'Tutóia treina entre o delta e as dunas: areia fofa, vento de proa e o maior playground aquático do Nordeste na porta de casa. Um personal trainer daqui constrói pernas, fôlego e força de remo para o trabalho e para o passeio — presencial na cidade ou a distância para quem vive do turismo.',

  vizinhas: ['paulino-neves-ma', 'parnaiba-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Tutóia', url: 'https://cidades.ibge.gov.br/brasil/ma/tutoia/panorama' },
    { nome: 'Prefeitura de Tutóia', url: 'https://tutoia.ma.gov.br/' },
    { nome: 'ICMBio — APA Delta do Parnaíba', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/marinho/lista-de-ucs/apa-delta-do-parnaiba' },
  ],
  atualizadoEm: '2026-08-16',
};
