import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'navegantes-sc',
  nome: 'Navegantes',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'navegantino',
  tipo: 'cidade',

  populacao: 86401,
  populacaoAno: 2022,
  idhm: 0.736,
  idhmClasse: 'alto',
  altitudeM: 3,

  resumoEconomico:
    'Na foz do Rio Itajaí-Açu, na margem oposta a Itajaí, Navegantes é um dos municípios mais estratégicos do litoral norte catarinense. A economia é puxada pelo Porto de Navegantes (Portonave), um dos terminais de contêineres mais produtivos do país, e pelo Aeroporto Internacional Ministro Victor Konder, que movimenta cerca de um milhão de passageiros por ano. A logística portuária e aeroportuária, somada ao turismo de praia, sustenta um crescimento acelerado, com forte alta na geração de empregos formais nos últimos anos.',

  mercado:
    'O mercado fitness acompanha o crescimento da cidade litorânea e portuária, com academias de bairro, estúdios de funcional e crossfit e oferta crescente de atendimento domiciliar. A orla das praias Central, de Navegantes e do Gravatá é um ambiente natural para treino ao ar livre, e a presença de trabalhadores do porto e do aeroporto amplia a demanda por planos flexíveis e horários alternativos.',

  bairrosNobres: ['Centro', 'Meia Praia', 'Gravatá', 'São Pedro'],
  bairrosPopulares: ['São Domingos', 'Machados', 'Nossa Senhora das Graças', 'Volta Grande'],

  parques: [
    {
      nome: 'Orla da Praia Central',
      descricao:
        'Faixa de areia e calçadão ao longo da Avenida Prefeito Cirino Adolfo Cabral, com arenas esportivas no verão e espaço para caminhada, corrida e treino funcional.',
    },
    {
      nome: 'Molhe do Pontal (Praia de Navegantes)',
      descricao:
        'Ponto de encontro junto ao farol, palco de provas de rua e do circuito de vôlei de praia, com vista para a barra do Rio Itajaí-Açu.',
    },
    {
      nome: 'Praia do Gravatá',
      descricao:
        'No extremo norte da cidade, com extensa faixa de areia dourada — boa para caminhadas longas e treino de corrida na areia.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovias e ciclofaixas na orla e nos principais corredores; o futuro túnel submerso sob o Rio Itajaí-Açu (ligando Navegantes a Itajaí) prevê faixas exclusivas para bicicletas e pedestres.',

  clima:
    'O clima é subtropical úmido, com verões quentes e úmidos e invernos amenos, típico do litoral catarinense.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre o ano todo; no verão, vale priorizar o início da manhã ou o fim de tarde na orla e reforçar a hidratação.',

  mobilidade:
    'A BR-470 conecta Navegantes ao Vale do Itajaí e a Blumenau, enquanto a proximidade do aeroporto e da BR-101 facilita o deslocamento regional; a ligação com Itajaí, hoje feita por balsa e pontes, será reforçada pelo túnel submerso projetado sob o rio.',

  corridas: [
    {
      nome: 'Meia Maratona de Navegantes',
      descricao:
        'Prova de agosto com largada e chegada no Molhe do Pontal (bairro São Pedro), com percursos de 5 km, 10 km, 21 km e provas infantis.',
    },
    {
      nome: 'Corrida de Praia de Navegantes',
      descricao:
        'Prova tradicional na areia, que alia esporte, comunidade e sustentabilidade na orla da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente ligada ao mar: a cidade sedia o Festival Náutico de Navegantes, com etapa do catarinense de vela e mais de 200 velejadores, além do Circuito Brasileiro de Vôlei de Praia. A corrida de rua cresce com provas solidárias e institucionais entre janeiro e março e a Meia Maratona em agosto.',
  academias:
    'A oferta combina academias de bairro, estúdios de funcional e boxes de crossfit, complementados pela orla das praias Central e do Gravatá e por academias ao ar livre — base sólida para o trabalho de um personal trainer.',

  destaquesFitness: [
    'Orla da Praia Central e calçadão: corredor natural para corrida, caminhada e funcional.',
    'Praia do Gravatá: faixa extensa de areia para treino de corrida e caminhadas longas.',
    'Forte cena náutica e de vôlei de praia (Festival Náutico e Circuito Brasileiro).',
    'Calendário de corridas de rua, com a Meia Maratona de Navegantes em agosto.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade portuária e litorânea em pleno crescimento, Navegantes une orla, praias extensas e uma cultura esportiva ligada ao mar. Um personal trainer ajuda a transformar a Praia Central, o Gravatá e o atendimento domiciliar em um plano consistente, do treino funcional na areia à preparação para a Meia Maratona.',

  vizinhas: ['itajai-sc', 'balneario-camboriu-sc', 'blumenau-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Navegantes', url: 'https://cidades.ibge.gov.br/brasil/sc/navegantes/panorama' },
    { nome: 'Prefeitura de Navegantes', url: 'https://navegantes.sc.gov.br/a-cidade/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
