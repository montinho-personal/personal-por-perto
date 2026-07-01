import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-limpo-paulista-sp',
  nome: 'Campo Limpo Paulista',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'campo-limpense',
  tipo: 'cidade',

  populacao: 77186,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  altitudeM: 745,

  resumoEconomico:
    'Campo Limpo Paulista integra a Região Metropolitana de Jundiaí, no interior de São Paulo, e cresceu à sombra da ferrovia que liga a região à capital. A economia combina indústria de transformação (herança do polo industrial da bacia do rio Jundiaí), comércio e serviços de bairro, além de forte relação de emprego com Jundiaí e Várzea Paulista, cidades vizinhas com mercado de trabalho mais amplo. A posição junto ao eixo ferroviário e rodoviário e o entorno da Serra do Japi marcam o perfil da cidade.',

  mercado:
    'Cidade de porte médio ligada ao dia a dia de Jundiaí, Campo Limpo Paulista tem um mercado fitness formado por academias de bairro e estúdios de treino, com boa parte dos moradores também frequentando estabelecimentos nos municípios vizinhos. A procura por personal trainers tende a vir de quem quer treino orientado perto de casa, aproveitando o relevo de morros e a proximidade com áreas verdes da Serra do Japi para atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim América', 'Vila São Paulo', 'Botujuru'],
  bairrosPopulares: ['Vila Tavares', 'Jardim Europa', 'Jardim Marsola', 'Rio Acima'],

  parques: [
    {
      nome: 'Entorno da Serra do Japi',
      descricao:
        'A Serra do Japi, importante remanescente de mata atlântica no interior paulista, cerca a região e oferece trilhas e estradas rurais usadas para caminhada, pedal e treino ao ar livre, com relevo de morros que aumenta o desafio dos percursos.',
    },
    {
      nome: 'Botujuru',
      descricao:
        'Distrito de origem rural da cidade, com trechos de mata e estradas de terra no pé da serra; a região é procurada por quem busca percursos mais tranquilos e contato com a natureza para correr e pedalar.',
    },
    {
      nome: 'Bacia do rio Jundiaí',
      descricao:
        'O rio Jundiaí atravessa a cidade e a bacia dá forma ao vale onde se concentra a área urbana; várzeas e vias ao longo do curso d’água servem de apoio para caminhada e atividade física no dia a dia.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e o pedal acontece sobretudo em vias urbanas e nas estradas do entorno rural e da Serra do Japi, muito procuradas por ciclistas da região metropolitana de Jundiaí que buscam subidas e paisagem.',

  clima:
    'O clima é tropical de altitude, ameno pela posição junto à Serra do Japi, com temperatura média anual em torno de 21 °C, verões chuvosos e invernos mais secos e frescos. As mínimas do inverno costumam ficar baixas para o padrão paulista, e a média das máximas raramente chega a valores extremos.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano; no verão, o começo da manhã e o fim da tarde são os melhores horários por causa do calor e das pancadas de chuva, enquanto no inverno vale um agasalho extra para os treinos mais cedo, quando as temperaturas caem bastante.',

  mobilidade:
    'Campo Limpo Paulista é servida pela Linha 7-Rubi de trens metropolitanos (que liga a região à capital e a Jundiaí, hoje operada por concessionária), com estação na cidade, e pela Rodovia Dom Gabriel Paulino Bueno Couto (SP-354), eixos que estruturam o deslocamento diário para Jundiaí, Várzea Paulista e São Paulo. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Circuito Popular de Corrida de Rua de Campo Limpo Paulista',
      descricao:
        'Provas de corrida e caminhada organizadas pela Secretaria Municipal de Esportes, com percursos pelas vias da cidade voltados a corredores locais e participantes de todos os níveis.',
    },
    {
      nome: 'Trail Running na Serra do Japi',
      descricao:
        'Provas de trilha realizadas na região da Serra do Japi, com percursos em terra que exploram o relevo de morros e a mata do entorno, atraindo corredores da região metropolitana de Jundiaí.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura corridas de rua promovidas pela prefeitura, uso das estradas e trilhas da Serra do Japi para pedal e trail running, e o vínculo com a agenda esportiva de Jundiaí, cidade vizinha de maior porte na região metropolitana.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios de musculação e treino funcional, distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média integrada ao mercado de Jundiaí.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Jundiaí, no pé da Serra do Japi, com clima ameno favorável ao treino ao ar livre.',
    'Relevo de morros e trilhas da Serra do Japi, usados para caminhada, pedal e trail running.',
    'Ligação por trem metropolitano (Linha 7-Rubi) e pela Rodovia Dom Gabriel Paulino Bueno Couto com Jundiaí e São Paulo.',
    'Corridas de rua promovidas pela prefeitura e mercado fitness integrado ao das cidades vizinhas.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade tranquila da Região Metropolitana de Jundiaí, com clima ameno e a Serra do Japi por perto, Campo Limpo Paulista favorece o treino ao ar livre e a atividade física na rotina. Um personal trainer ajuda a montar um plano que aproveite o relevo e as trilhas da região, definindo horários e mantendo a constância ao longo do ano.',

  vizinhas: ['jundiai-sp', 'atibaia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Limpo Paulista', url: 'https://cidades.ibge.gov.br/brasil/sp/campo-limpo-paulista/panorama' },
    { nome: 'Prefeitura de Campo Limpo Paulista', url: 'https://campolimpopaulista.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
