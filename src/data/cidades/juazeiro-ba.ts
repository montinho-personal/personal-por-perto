import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'juazeiro-ba',
  nome: 'Juazeiro',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'juazeirense',
  tipo: 'cidade',

  populacao: 237821,
  populacaoAno: 2022,
  idhm: 0.677,
  idhmClasse: 'médio',
  altitudeM: 368,

  resumoEconomico:
    'Polo regional do norte da Bahia, às margens do Rio São Francisco e conurbada com Petrolina-PE, Juazeiro é o centro da fruticultura irrigada do Submédio São Francisco — grande exportador de uva e manga, com produção de vinhos. O comércio e os serviços fortes atendem todo o sertão regional.',

  mercado:
    'Cidade média em crescimento, tem redes e academias de musculação no centro e nos bairros de classe média; a demanda é puxada pelo clima quente o ano todo e pela orla como espaço de atividade física.',

  bairrosNobres: ['Country Club', 'Santo Antônio', 'Alto da Maravilha', 'Piranga'],
  bairrosPopulares: ['João XXIII', 'Castelo Branco', 'Alto do Cruzeiro', 'Alto do Alencar'],

  parques: [
    {
      nome: 'Orla Oeste do Rio São Francisco',
      descricao:
        'A orla mais ampla, com prainha e monumentos, boa para caminhada e corrida à beira do rio.',
    },
    {
      nome: 'Orla Leste',
      descricao:
        'Trecho arborizado, ideal para caminhada à sombra.',
    },
    {
      nome: 'Parque da Lagoa de Calu',
      descricao:
        'Às margens da BR-407, tem lago, pista de caminhada, ciclovia, quadras e quiosques.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque da Lagoa de Calu; a extensão da rede urbana total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente, com sol o ano todo e baixa umidade.',
  climaTreino:
    'O calor forte recomenda treinar no início da manhã ou no fim de tarde, com hidratação reforçada.',

  mobilidade:
    'Juazeiro tem travessia urbana sobre as BR-235 e BR-407, com conexão direta a Petrolina-PE pela ponte sobre o São Francisco.',

  corridas: [
    {
      nome: 'Meia Maratona Tiradentes',
      descricao:
        'Prova tradicional do calendário municipal, realizada em torno de 30 de abril.',
    },
    {
      nome: 'Corrida da Integração',
      descricao:
        'Corrida de rua local, que reforça o eixo esportivo Juazeiro–Petrolina.',
    },
  ],
  culturaEsportiva:
    'A orla fluvial é o principal palco de caminhada e corrida, com calendário de corridas de rua consolidado e forte adesão regional no eixo Juazeiro–Petrolina.',
  academias:
    'A oferta reúne redes e academias de musculação no centro e nos bairros de classe média, complementada pela orla do São Francisco e pelo Parque da Lagoa de Calu.',

  academiasProximas: [
    { nome: 'Smart Fit Juazeiro' },
  ],

  destaquesFitness: [
    'Orla do São Francisco (Oeste e Leste) como academia a céu aberto.',
    'Parque da Lagoa de Calu, com pista, ciclovia e quadras.',
    'Clima quente, que exige periodização de horários e hidratação.',
    'Mercado integrado com Petrolina, que amplia a base de clientes e eventos.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Capital baiana da fruticultura irrigada e gêmea de Petrolina, Juazeiro tem na orla do São Francisco seu grande espaço de treino. Um personal trainer ajuda a aproveitá-la com método, ajustando horários e hidratação ao sol do semiárido.',

  vizinhas: ['petrolina-pe', 'salvador-ba'],

  capaArte: {
    src: '/capas-cidade/juazeiro-ba.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Juazeiro (BA) em arte quadrada com a orla do rio São Francisco ao entardecer, a Ponte Presidente Dutra iluminada e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Juazeiro: foco, disciplina e constância com acompanhamento profissional às margens do São Francisco.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Juazeiro', url: 'https://cidades.ibge.gov.br/brasil/ba/juazeiro/panorama' },
    { nome: 'Prefeitura de Juazeiro', url: 'https://www.juazeiro.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
};
