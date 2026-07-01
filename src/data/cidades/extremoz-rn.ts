import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'extremoz-rn',
  nome: 'Extremoz',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'extremozense',
  tipo: 'cidade',

  populacao: 61571,
  populacaoAno: 2022,
  idhm: 0.660,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'Integrante da Região Metropolitana de Natal e situada no litoral norte do Rio Grande do Norte, Extremoz foi um dos municípios que mais cresceram no país entre 2010 e 2022, mais que dobrando de população. A economia é puxada pelos serviços e pela administração pública, com peso crescente do turismo litorâneo: a cidade abriga praias que são cartão-postal do estado, como Genipabu e Pitangui, além da Lagoa de Extremoz, importante manancial que abastece parte da Zona Norte de Natal. A proximidade com a capital e com o Aeroporto Internacional Aluízio Alves, em São Gonçalo do Amarante, reforça a vocação metropolitana e turística.',

  mercado:
    'O mercado fitness de Extremoz acompanha o crescimento acelerado da cidade e a integração com Natal: parte dos moradores treina em academias locais e parte busca serviços na capital. A procura por personal trainers tende a crescer com o adensamento de novos bairros e condomínios e com o apelo das praias e dunas como cenário de treino ao ar livre.',

  bairrosNobres: ['Centro', 'Genipabu', 'Pitangui', 'Barra do Rio'],
  bairrosPopulares: ['Estivas', 'Gruta', 'Capim Macio de Extremoz', 'Jacumã'],

  parques: [
    {
      nome: 'Praia de Genipabu e Parque das Dunas',
      descricao:
        'Cartão-postal do Rio Grande do Norte, reúne dunas móveis, mar e a Lagoa de Genipabu em uma área de proteção ambiental. A orla e as dunas são cenário para caminhada, corrida na areia e passeios, com o clássico visual dos buggies e dromedários.',
    },
    {
      nome: 'Praia e Lagoa de Pitangui',
      descricao:
        'Uma das praias mais movimentadas de Extremoz, cercada por dunas douradas e pela Lagoa de Pitangui. O trecho oferece orla e areia para atividade ao ar livre, além de opções de lazer aquático na lagoa.',
    },
    {
      nome: 'Lagoa de Extremoz',
      descricao:
        'Manancial que abastece parte da Zona Norte de Natal e principal espelho d\'água da cidade; seu entorno é referência paisagística e ponto de contato dos moradores com a natureza no dia a dia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e concentrada em trechos urbanos e de acesso às praias; boa parte do pedal e da corrida acontece nas vias locais, nas estradas de acesso à orla e nos calçadões próximos ao mar.',

  clima:
    'O clima é tropical litorâneo, quente durante todo o ano, com temperaturas médias elevadas e amenizadas pela brisa do mar. Há uma estação mais chuvosa concentrada no outono e no início do inverno (por volta de março a julho) e um período mais seco no restante do ano, com forte insolação típica do litoral potiguar.',
  climaTreino:
    'O calor constante e a alta insolação pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada e proteção solar; a brisa marinha ajuda na sensação térmica junto à orla, mas nos horários de sol a pino ambientes cobertos ou climatizados são a opção mais segura.',

  mobilidade:
    'Extremoz se conecta a Natal e ao restante da Região Metropolitana principalmente pela BR-101 e pela Estrada de Genipabu, com linhas de ônibus integradas ao sistema da capital ligando bairros do município à Zona Norte de Natal. A cidade fica a poucos minutos do Aeroporto Internacional Aluízio Alves, em São Gonçalo do Amarante, e faz fronteira com Natal, São Gonçalo do Amarante e Ceará-Mirim.',

  corridas: [
    {
      nome: 'Circuito de corridas do litoral norte potiguar',
      descricao:
        'A orla de Genipabu e Pitangui e as praias do litoral norte servem de cenário para provas de corrida de rua e desafios em areia e dunas promovidos ao longo do ano na Região Metropolitana de Natal.',
    },
    {
      nome: 'Provas e travessias em Genipabu',
      descricao:
        'As dunas e a faixa de praia de Genipabu atraem eventos esportivos e travessias que exploram o terreno arenoso, reforçando a vocação da cidade para atividades ao ar livre à beira-mar.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Extremoz gira em torno do mar e das dunas: caminhada e corrida na orla de Genipabu e Pitangui, esportes de areia, banho e lazer nas lagoas, e o fluxo de turistas e metropolitanos que usam o litoral como espaço de atividade física durante todo o ano.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros em expansão, complementada pela proximidade com a estrutura fitness de Natal.',

  destaquesFitness: [
    'Praias de Genipabu e Pitangui, com dunas e orla que servem de cenário para corrida, caminhada e esportes de areia.',
    'Lagoa de Extremoz, principal manancial que abastece parte da Zona Norte de Natal.',
    'Um dos municípios que mais cresceram no Brasil entre 2010 e 2022, com forte expansão urbana.',
    'Integração metropolitana com Natal pela BR-101 e proximidade do Aeroporto Internacional Aluízio Alves.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade litorânea em rápido crescimento e integrada a Natal, Extremoz une praia, dunas e lagoas a uma vida metropolitana em expansão. Um personal trainer ajuda a aproveitar a orla de Genipabu e Pitangui como espaço de treino, ajustando horários ao calor e à insolação do litoral potiguar e mantendo a constância ao longo do ano.',

  vizinhas: ['natal-rn', 'ceara-mirim-rn', 'sao-goncalo-do-amarante-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Extremoz', url: 'https://cidades.ibge.gov.br/brasil/rn/extremoz/panorama' },
    { nome: 'Prefeitura de Extremoz', url: 'https://extremoz.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
