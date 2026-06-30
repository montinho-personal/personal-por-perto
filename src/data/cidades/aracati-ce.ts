import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aracati-ce',
  nome: 'Aracati',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'aracatiense',
  tipo: 'cidade',

  populacao: 75113,
  populacaoAno: 2022,
  idhm: 0.655,
  idhmClasse: 'médio',
  altitudeM: 5,

  resumoEconomico:
    'Fundada em 1747 às margens do rio Jaguaribe, Aracati é o principal polo do litoral leste cearense e abriga um dos centros históricos mais preservados do estado, com sobrados e igrejas dos séculos 18 e 19. A economia gira em torno do turismo — puxado pela fama internacional de Canoa Quebrada e suas falésias avermelhadas — somado à pesca, ao comércio e aos serviços. As praias, dunas e a vida ao ar livre fazem da atividade física parte natural da rotina local.',

  mercado:
    'O mercado fitness de Aracati é movimentado pelo fluxo turístico do litoral, especialmente em Canoa Quebrada, onde pousadas, estúdios e atividades de praia atraem moradores e visitantes. Na sede, academias de bairro e personal trainers atendem uma rotina mais urbana, enquanto a orla concentra treino funcional e esportes de areia. A distância de cerca de 150 km de Fortaleza pela CE-040 e BR-304 mantém o município com oferta própria, sem a circulação intensa de profissionais típica da Região Metropolitana.',

  bairrosNobres: ['Centro', 'Canoa Quebrada', 'Lagoa do Mato'],
  bairrosPopulares: ['Cidade Nova', 'Sesmaria', 'Aningas', 'Majorlândia'],

  parques: [
    {
      nome: 'Falésias de Canoa Quebrada',
      descricao:
        'Cartão-postal de Aracati, as falésias avermelhadas e as dunas de Canoa Quebrada formam um cenário único para caminhadas, corrida na areia e treinos ao ar livre com vista para o mar.',
    },
    {
      nome: 'Praia de Majorlândia',
      descricao:
        'Praia tranquila de águas claras e faixa de areia larga, vizinha a Canoa Quebrada, ideal para caminhadas longas, corrida e esportes de praia longe do burburinho turístico.',
    },
    {
      nome: 'Centro Histórico e orla do rio Jaguaribe',
      descricao:
        'Às margens do Jaguaribe, o conjunto de sobrados coloniais, a Rua Grande e o casario tombado convidam a caminhadas e corridas leves em meio à arquitetura preservada da cidade.',
    },
  ],
  ciclovias:
    'A mobilidade ativa se concentra na sede e nos acessos às praias, com pedaladas comuns entre Canoa Quebrada, Majorlândia e o centro; a infraestrutura cicloviária ainda é pontual, e a bicicleta é bastante usada no dia a dia pelos moradores.',

  clima:
    'O clima é quente e semiárido do litoral leste cearense, com sol predominante o ano inteiro, temperaturas em geral entre 24 °C e 32 °C e chuvas concentradas no primeiro semestre. A brisa marítima e os ventos fortes — que dão fama às dunas de Canoa Quebrada — amenizam a sensação de calor.',
  climaTreino:
    'Com calor intenso e alta insolação, o ideal é treinar cedo de manhã ou no fim da tarde, reforçando a hidratação e a proteção solar. O vento constante da orla ajuda no conforto térmico durante os exercícios na areia e nas falésias.',

  mobilidade:
    'O acesso a Aracati se dá principalmente pela CE-040 e pela BR-304, a cerca de 150 km de Fortaleza, com travessias urbanas e vias vicinais ligando a sede às praias de Canoa Quebrada e Majorlândia. A cidade depende do transporte rodoviário e do carro, e os deslocamentos internos curtos favorecem o uso de bicicleta e a caminhada.',

  corridas: [
    {
      nome: 'Corridas em Canoa Quebrada',
      descricao:
        'O litoral turístico costuma sediar provas de rua e corridas na areia ligadas ao turismo e a datas como o carnaval — vale conferir o calendário atualizado antes de se inscrever.',
    },
    {
      nome: 'Esportes de praia e dunas',
      descricao:
        'Beach tennis, futevôlei e sandboard nas dunas são fortes na cultura esportiva de Aracati, somando treino ao lazer característico do litoral leste cearense.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Aracati gira em torno do mar e das dunas: corrida e caminhada na orla, esportes de areia como beach tennis e futevôlei e aventuras nas falésias de Canoa Quebrada. O carnaval, um dos mais animados do estado, e o sol o ano todo reforçam uma rotina ativa ao ar livre.',
  academias:
    'A oferta vai das academias e estúdios da sede a espaços voltados ao público turístico em Canoa Quebrada, com presença marcante de treino funcional e atividades de praia.',

  destaquesFitness: [
    'Falésias e dunas de Canoa Quebrada: cenário único para treino ao ar livre.',
    'Praia de Majorlândia, tranquila e ideal para caminhadas e corridas longas.',
    'Sol o ano todo e vento constante favorecem o exercício ao ar livre (com cuidado térmico).',
    'Centro histórico às margens do Jaguaribe convida a caminhadas e corridas leves.',
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
    'Com falésias e dunas de fama internacional, praias tranquilas e um centro histórico preservado, Aracati reúne ótimos cenários para treinar. Um personal trainer ajuda a aproveitar Canoa Quebrada, Majorlândia e as academias da cidade com método e segurança, respeitando o calor e o seu objetivo.',

  vizinhas: ['fortaleza-ce', 'aquiraz-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Aracati', url: 'https://cidades.ibge.gov.br/brasil/ce/aracati/panorama' },
    { nome: 'Prefeitura de Aracati', url: 'https://aracati.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
