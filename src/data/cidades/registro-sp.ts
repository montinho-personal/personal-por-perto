import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'registro-sp',
  nome: 'Registro',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'registrense',
  tipo: 'cidade',

  populacao: 54137,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 15,

  resumoEconomico:
    'Conhecida como a capital do Vale do Ribeira, Registro é o principal polo econômico, comercial e de serviços de uma das regiões mais preservadas da Mata Atlântica paulista. Às margens do rio Ribeira de Iguape e cortada pela BR-116 (Régis Bittencourt), concentra comércio, saúde e educação para municípios vizinhos. A economia tem forte base agrícola — chá, banana e pupunha estão entre os principais produtos — e carrega a marca de uma das mais expressivas colônias japonesas do interior de São Paulo, que ajudou a estruturar a agricultura local.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média do interior: academias de bairro, estúdios de musculação e treinamento funcional atendem a população urbana, enquanto a orla do rio e as praças funcionam como extensão natural do treino ao ar livre. Como polo regional, Registro também atrai moradores das cidades próximas em busca de serviços, o que sustenta uma demanda constante por personal trainers com preços compatíveis com o interior paulista.',

  bairrosNobres: ['Centro', 'Jardim das Palmeiras', 'Vila Tupy', 'Jardim Vitória Régia'],
  bairrosPopulares: ['Agrochá', 'João Batista Fogaça', 'Vila Nova', 'Arapongal'],

  parques: [
    {
      nome: 'Parque Prefeito José de Carvalho (Praça Beira Rio)',
      descricao:
        'Orla urbana às margens do rio Ribeira de Iguape, com pista de caminhada, ciclovia, pista de skate e área de lazer — o principal cartão-postal e ponto de treino ao ar livre da cidade.',
    },
    {
      nome: 'Orla do rio Ribeira de Iguape',
      descricao:
        'A faixa ribeirinha do centro reúne caminhantes e corredores no fim da tarde, com vista para o rio e arborização que ameniza o calor do Vale do Ribeira.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'Espaços públicos com equipamentos de ginástica e percursos curtos, usados para caminhada, alongamento e treinos funcionais ao ar livre.',
    },
  ],
  ciclovias:
    'A orla do rio Ribeira de Iguape conta com ciclovia integrada à pista de caminhada do Parque Beira Rio, o principal eixo de mobilidade ativa e lazer da cidade.',

  clima:
    'O clima é tropical úmido, típico do Vale do Ribeira: quente e bastante chuvoso, com média anual em torno de 24 °C, umidade elevada (perto de 84%) e índice pluviométrico alto, influenciado pela baixa altitude, pela Mata Atlântica e pela proximidade do oceano.',
  climaTreino:
    'O calor e a umidade pedem hidratação reforçada e horários mais frescos — manhã cedo e fim de tarde são as melhores janelas para treinar ao ar livre. A chuva é frequente o ano todo, então vale ter um plano alternativo coberto para os dias mais úmidos.',

  mobilidade:
    'Registro é cortada pela BR-116, a rodovia Régis Bittencourt, principal ligação rodoviária entre São Paulo e Curitiba, o que reforça seu papel de entroncamento e polo de serviços do Vale do Ribeira. A capital paulista fica a cerca de 190 km. Dentro da cidade, os deslocamentos são curtos e o trânsito é tranquilo se comparado aos grandes centros.',

  corridas: [
    {
      nome: 'Circuito das Estações do Vale do Ribeira',
      descricao:
        'Prova de rua realizada em Registro com percursos voltados a corredores de diferentes níveis, reunindo participantes de toda a região do Vale do Ribeira.',
    },
    {
      nome: 'Corridas e caminhadas na orla do Ribeira',
      descricao:
        'Eventos de rua promovidos ao longo do ano aproveitam a pista do Parque Beira Rio e as ruas do centro, com largadas próximas ao rio.',
    },
  ],
  culturaEsportiva:
    'Como polo regional, Registro concentra a vida esportiva do Vale do Ribeira, da caminhada na orla do rio às provas de rua que reúnem corredores das cidades vizinhas. A herança da colônia japonesa também marca a cultura local, e a orla do Ribeira de Iguape é o palco preferido para quem treina ao ar livre.',
  academias:
    'A cidade tem boa cobertura de academias de bairro, estúdios de musculação e espaços de treinamento funcional, complementados pelas praças e pela orla do rio, que servem de área aberta para corrida, caminhada e treinos ao ar livre.',

  destaquesFitness: [
    'Orla do rio Ribeira de Iguape com pista de caminhada e ciclovia (Parque Beira Rio).',
    'Polo regional do Vale do Ribeira, com a maior estrutura de serviços da região.',
    'Calendário de corridas de rua, como o Circuito das Estações do Vale do Ribeira.',
    'Preços de personal acessíveis, no padrão de cidade média do interior paulista.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Capital do Vale do Ribeira, Registro combina o ritmo tranquilo de uma cidade média com a estrutura de um polo regional. Um personal trainer ajuda a transformar a orla do rio Ribeira de Iguape e as academias locais em um plano de treino consistente, ajustado ao clima quente e úmido da região.',

  vizinhas: ['itanhaem-sp', 'praia-grande-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Registro', url: 'https://cidades.ibge.gov.br/brasil/sp/registro/panorama' },
    { nome: 'Prefeitura de Registro', url: 'https://registro.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
