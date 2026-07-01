import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cajamar-sp',
  nome: 'Cajamar',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cajamarense',
  tipo: 'cidade',

  populacao: 92689,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 734,

  resumoEconomico:
    'Na Região Metropolitana de São Paulo, a cerca de 30 km do centro da capital, Cajamar se firmou como um dos maiores polos logísticos do país. Cortada pelas rodovias Anhanguera e Bandeirantes, a cidade concentra grandes centros de distribuição e condomínios de galpões, especialmente no distrito de Jordanésia, além de indústria. Formada pela sede e pelos distritos de Polvilho e Jordanésia, é uma das cidades de maior crescimento populacional da região, impulsionada pela geração de empregos no setor logístico e industrial.',

  mercado:
    'O mercado fitness de Cajamar acompanha o perfil de cidade-dormitório e polo de trabalho da Região Metropolitana: parte da população treina perto de casa, nos bairros residenciais, e parte busca horários alternativos por causa do deslocamento diário para a capital e cidades vizinhas. A procura por personal trainers tende a se concentrar em quem quer otimizar o tempo com treinos objetivos, seja em academia, em condomínio ou em atendimento domiciliar.',

  bairrosNobres: ['Centro', 'Jordanésia', 'Portais (Polvilho)', 'Gato Preto'],
  bairrosPopulares: ['Polvilho', 'Ponunduva', 'Água Fria', 'Cristina (Jordanésia)'],

  parques: [
    {
      nome: 'Rota Turística de Cajamar',
      descricao:
        'Percurso que passa por áreas de natureza e patrimônio do município e serve de trajeto para caminhadas e provas de rua, como a Corrida Verde, aproveitando trechos de relevo variado da cidade.',
    },
    {
      nome: 'Distrito de Ponunduva (zona rural)',
      descricao:
        'Área rural de morros e vegetação onde fica o ponto mais alto do município (Morro da Placa, com mais de mil metros), procurada por quem busca trilhas e treino ao ar livre longe do fluxo urbano.',
    },
    {
      nome: 'Praças e vias dos bairros residenciais',
      descricao:
        'Nos bairros da sede, de Polvilho e de Jordanésia, praças e ruas mais tranquilas concentram a caminhada e a corrida do dia a dia da população.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos urbanos; boa parte do pedal e da corrida acontece nas vias dos bairros residenciais, com atenção redobrada nas rotas próximas aos eixos rodoviários e às áreas de tráfego pesado de caminhões.',

  clima:
    'O clima é subtropical de altitude, típico do planalto paulista, com verões quentes e chuvosos (de dezembro a março) e invernos mais amenos e secos. As temperaturas costumam ser agradáveis na maior parte do ano, com noites frias no inverno graças à altitude em torno de 730 metros.',
  climaTreino:
    'Na maior parte do ano o clima favorece o treino ao ar livre; no verão chuvoso vale reservar o início da manhã ou o fim da tarde e ter um plano B coberto para os dias de pancada de chuva, enquanto o inverno pede aquecimento mais cuidadoso por causa das manhãs frias.',

  mobilidade:
    'Cajamar é cortada pelas rodovias Anhanguera (SP-330) e Bandeirantes (SP-348), que ligam a cidade à capital, a Jundiaí e ao interior e sustentam sua vocação logística. O transporte urbano é feito por ônibus, e o intenso fluxo de caminhões dos centros de distribuição marca o trânsito nos principais acessos, sobretudo em Jordanésia e Polvilho.',

  corridas: [
    {
      nome: 'Corrida de São Sebastião',
      descricao:
        'Prova tradicional de rua realizada em janeiro, em homenagem ao padroeiro da cidade, que reúne centenas de atletas de Cajamar e da região em percurso pelas ruas do município.',
    },
    {
      nome: 'Corrida Verde de Cajamar',
      descricao:
        'Evento anual associado à celebração do meio ambiente, com percurso pela rota turística do município e participação aberta de corredores da cidade e do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura provas de rua tradicionais, como a Corrida de São Sebastião, ações de corrida ligadas a datas de conscientização e competições municipais que incluem atletismo, refletindo uma cidade em crescimento que aos poucos amplia suas opções de esporte e lazer.',
  academias:
    'A oferta é formada principalmente por academias de musculação e treino funcional distribuídas pela sede e pelos distritos de Polvilho e Jordanésia, com estúdios menores atendendo os bairros residenciais e condomínios da cidade.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de São Paulo, a cerca de 30 km da capital.',
    'Grande polo logístico do país, com centros de distribuição concentrados em Jordanésia.',
    'Cortada pelas rodovias Anhanguera e Bandeirantes, com forte fluxo de caminhões.',
    'Provas de rua tradicionais, como a Corrida de São Sebastião e a Corrida Verde.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade em crescimento acelerado na Região Metropolitana de São Paulo, marcada pela logística e pela rotina de deslocamento, Cajamar pede um treino que caiba na agenda de quem divide o dia entre trabalho e trânsito. Um personal trainer ajuda a organizar horários, aproveitar o clima ameno do planalto e manter a constância, seja na academia, em casa ou nos espaços ao ar livre dos bairros.',

  vizinhas: ['caieiras-sp', 'franco-da-rocha-sp', 'osasco-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cajamar', url: 'https://cidades.ibge.gov.br/brasil/sp/cajamar/panorama' },
    { nome: 'Prefeitura de Cajamar', url: 'https://cajamar.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
