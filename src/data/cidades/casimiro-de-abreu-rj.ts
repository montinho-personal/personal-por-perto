import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'casimiro-de-abreu-rj',
  nome: 'Casimiro de Abreu',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'casimirense',
  tipo: 'cidade',

  populacao: 46110,
  populacaoAno: 2022,
  idhm: 0.726,
  idhmClasse: 'alto',
  altitudeM: 11,

  resumoEconomico:
    'Na Baixada Litorânea fluminense, Casimiro de Abreu é a terra natal do poeta romântico Casimiro José Marques de Abreu e leva o título de "Capital da Poesia". A economia combina turismo, comércio e serviços, com forte peso do veraneio no balneário de Barra de São João. Por estar na área de influência da Bacia de Campos, o município também é beneficiado por royalties do petróleo, que ajudam a sustentar o orçamento público.',

  mercado:
    'O mercado fitness é o de uma cidade litorânea de porte médio, com sazonalidade ligada ao veraneio: a demanda cresce no verão, quando a população de Barra de São João aumenta com turistas e veranistas. Personal trainers atendem tanto moradores fixos quanto famílias que passam temporadas na orla, com espaço para treino em praia, calçadões e trilhas.',

  bairrosNobres: ['Centro', 'Barra de São João', 'Mar do Norte', 'Professor Souza'],
  bairrosPopulares: ['Cidade Nova', 'Rua Nova', 'Aldeia', 'Rio Dourado'],

  parques: [
    {
      nome: 'Orla e praias de Barra de São João',
      descricao:
        'No distrito balneário, as praias e o calçadão à beira-mar concentram a atividade física ao ar livre, com caminhada, corrida e treino na areia, especialmente no verão.',
    },
    {
      nome: 'Rio São João',
      descricao:
        'Curso d\'água que dá nome ao distrito de Barra de São João e atravessa a região; suas margens e a foz são usadas para remo, canoagem e atividades náuticas.',
    },
    {
      nome: 'Cachoeiras e trilhas da serra',
      descricao:
        'O relevo de morros, com destaque para o Morro de São João, abriga trilhas ecológicas que levam a cachoeiras e mirantes, opções para caminhada e treino em meio à natureza.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa na sede e em Barra de São João; a extensão total oficial não é divulgada em fonte pública.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, típico da Baixada Litorânea fluminense, com verões chuvosos e invernos mais amenos.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, mas o calor e a umidade do verão pedem hidratação e horários no começo da manhã ou no fim de tarde, sobretudo na orla.',

  mobilidade:
    'Casimiro de Abreu é cortada pela BR-101, principal eixo rodoviário que liga a cidade ao Rio de Janeiro, à Região dos Lagos e ao Norte Fluminense, facilitando o acesso entre a sede e o litoral.',

  corridas: [
    {
      nome: 'Corrida do Poeta',
      descricao:
        'Prova tradicional integrada às comemorações de aniversário da cidade, com percurso de corrida de cerca de 8 km e caminhada de 3 km, unindo esporte e a identidade literária do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a vida de orla de Barra de São João com a tradição da Corrida do Poeta e o turismo de natureza nas trilhas e cachoeiras da serra, terreno propício para caminhada e atividades ao ar livre.',
  academias:
    'A oferta reúne academias de bairro e estúdios na sede e no distrito litorâneo, complementados por praias, calçadões e trilhas que ampliam as opções de treino ao ar livre.',

  destaquesFitness: [
    'Praias e calçadão de Barra de São João para treino na areia e corrida.',
    'Trilhas e cachoeiras da serra, incluindo o entorno do Morro de São João.',
    'Margens do rio São João para remo e canoagem.',
    'Corrida do Poeta como evento esportivo tradicional da cidade.',
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
    'Terra natal do poeta Casimiro de Abreu e cidade litorânea de ritmo tranquilo, o município reúne praias em Barra de São João, rio e trilhas na serra. Um personal trainer ajuda a transformar esse cenário em treino consistente, conciliando a sazonalidade do veraneio com uma rotina de exercícios ao longo do ano.',

  vizinhas: ['rio-das-ostras-rj', 'macae-rj'],

  fontes: [
    {
      nome: 'IBGE Cidades — Casimiro de Abreu',
      url: 'https://cidades.ibge.gov.br/brasil/rj/casimiro-de-abreu/panorama',
    },
    { nome: 'Prefeitura de Casimiro de Abreu', url: 'https://casimirodeabreu.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
