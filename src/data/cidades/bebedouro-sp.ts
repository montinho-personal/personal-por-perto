import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bebedouro-sp',
  nome: 'Bebedouro',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'bebedourense',
  tipo: 'cidade',

  populacao: 76373,
  populacaoAno: 2022,
  idhm: 0.78,
  idhmClasse: 'alto',
  altitudeM: 573,

  resumoEconomico:
    'No norte paulista, entre o Vale do Rio Grande e a Serra de Jaboticabal, Bebedouro é um dos principais polos da citricultura do estado, com forte produção de laranja e presença histórica da Estação Experimental de Citricultura. A economia reúne o agronegócio dos citros, a agroindústria de sucos e o comércio e os serviços que atendem toda a região de Ribeirão Preto e Barretos.',

  mercado:
    'Como cidade média do interior paulista, Bebedouro tem um mercado fitness baseado em academias de bairro, estúdios e personal trainers, com atendimento que costuma ser próximo e personalizado. A vida ao ar livre, favorecida pelas áreas verdes e pela região do Lago, abre espaço para treinos em parques e praças além da musculação.',

  bairrosNobres: ['Jardim Nossa Senhora Aparecida', 'Jardim São Sebastião', 'Centenário', 'Alto do Sumaré'],
  bairrosPopulares: ['Jardim Paraíso', 'Monte Castelo', 'Vila Maria', 'Jardim Aeroporto'],

  parques: [
    {
      nome: 'Parque do Centenário',
      descricao:
        'Cartão-postal de Bebedouro no centro da cidade, reúne um grande lago e a chamada Região do Lago, com praças, quadras, campos e espaço para caminhantes, corredores e patinadores.',
    },
    {
      nome: 'Parque Sinésio Junqueira Franco',
      descricao:
        'Importante área verde por onde passa o rio Bebedouro, com entorno arborizado procurado para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Pista de atletismo municipal',
      descricao:
        'Estrutura esportiva da rede pública preparada para a prática de corrida e atletismo, usada em treinos e atividades organizadas pela cidade.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em algumas vias urbanas; a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'Bebedouro tem clima tropical, com média anual em torno de 23 °C, verões quentes e chuvosos e invernos secos e amenos, típico do norte paulista a cerca de 573 m de altitude.',
  climaTreino:
    'O calor e a umidade do verão pedem hidratação e horários estratégicos, como o início da manhã e o fim da tarde; o período seco de inverno, mais ameno, é o mais confortável para treino ao ar livre.',

  mobilidade:
    'Bebedouro é servida pela Rodovia Brigadeiro Faria Lima (SP-326), que a liga a Barretos e segue rumo à capital, com Ribeirão Preto a cerca de 80 km e São Paulo a aproximadamente 380 km. A cidade integra a região de Ribeirão Preto, com Barretos e Jaboticabal por perto.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'Provas pedestres e caminhadas organizadas ao longo do ano com apoio da prefeitura, integrando o calendário esportivo da cidade.',
    },
    {
      nome: 'Treinos na Região do Lago',
      descricao:
        'O entorno do lago do Parque do Centenário concentra corredores e caminhantes em treinos diários, sobretudo no início da manhã e no fim da tarde.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva bebedourense gira em torno das áreas públicas, com destaque para a Região do Lago, no Parque do Centenário, e para as praças e parques da cidade, onde caminhadas e corridas fazem parte da rotina dos moradores.',
  academias:
    'A oferta reúne academias de bairro, estúdios e personal trainers, complementada por espaços públicos como o Parque do Centenário, o Parque Sinésio Junqueira Franco e a pista de atletismo municipal para treino ao ar livre.',

  destaquesFitness: [
    'Parque do Centenário e a Região do Lago como principal espaço público para caminhada e corrida.',
    'Parque Sinésio Junqueira Franco e a pista de atletismo municipal ampliando as opções ao ar livre.',
    'Cidade média do interior, com atendimento de personal trainer tipicamente próximo e personalizado.',
    'Inverno seco e ameno favorável ao treino ao ar livre na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo da citricultura no norte paulista, Bebedouro combina tradição agro, áreas verdes e a tranquilidade de uma cidade média da região de Ribeirão Preto. Um personal trainer ajuda a aproveitar espaços como o Parque do Centenário e a Região do Lago com método, ajustando os horários ao calor do verão.',

  vizinhas: ['ribeirao-preto-sp', 'barretos-sp', 'jaboticabal-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Bebedouro', url: 'https://cidades.ibge.gov.br/brasil/sp/bebedouro/panorama' },
    { nome: 'Prefeitura de Bebedouro', url: 'https://www.bebedouro.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3506102' },
  ],
  atualizadoEm: '2026-06-29',
};
