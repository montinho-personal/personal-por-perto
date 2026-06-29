import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'belford-roxo-rj',
  nome: 'Belford Roxo',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'belford-roxense',
  tipo: 'cidade',

  populacao: 483087,
  populacaoAno: 2022,
  idhm: 0.684,
  idhmClasse: 'médio',
  altitudeM: 26,

  resumoEconomico:
    'Município populoso da Baixada Fluminense, na Região Metropolitana do Rio de Janeiro, Belford Roxo combina forte caráter residencial e operário com um parque industrial relevante. A economia é puxada por serviços e comércio de bairro, mas a cidade abriga o parque industrial da Bayer — inaugurado em 1958 e referência em produção química e petroquímica na região —, que se firmou como o maior empregador formal e principal símbolo industrial do município.',

  mercado:
    'Cidade grande e popular, com perfil de quem se desloca diariamente para a capital e cidades vizinhas, Belford Roxo tem um mercado fitness apoiado em academias de bairro, espalhadas pelo Centro e pelos eixos comerciais, e em forte demanda por atendimento domiciliar e personal trainer perto de casa. A cultura do futebol é onipresente, o que sustenta procura por preparo físico, e o público busca planos de custo acessível.',

  bairrosNobres: ['Centro', 'Heliópolis', 'Areia Branca', 'Bom Pastor'],
  bairrosPopulares: ['Lote XV', 'Santa Maria', 'Itaipu', 'Parque São Vicente'],

  parques: [
    {
      nome: 'Calçadão do Lote XV',
      descricao:
        'Calçadão comercial no bairro Lote XV, reformado e reaberto em 2023, que concentra fluxo de pedestres e comércio popular — ponto de caminhada urbana no dia a dia.',
    },
    {
      nome: 'Margens do Rio Botas',
      descricao:
        'Principal curso d’água urbano da cidade, alvo de obras de limpeza e requalificação pela prefeitura, atravessando bairros como Heliópolis e Itaipu.',
    },
    {
      nome: 'Praças e quadras de bairro',
      descricao:
        'Praças e campos espalhados pelos bairros funcionam como espaços de lazer, futebol e treino ao ar livre para a população local.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é limitada e a extensão consolidada da malha não é divulgada em fonte oficial; o deslocamento por bicicleta ocorre sobretudo nas vias de bairro.',

  clima:
    'O clima é tropical quente e úmido, típico das terras baixas da Baixada Fluminense, com verões quentes e chuvosos.',
  climaTreino:
    'O calor e a umidade pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada — nas horas mais quentes, o treino em ambiente coberto ou domiciliar tende a render mais.',

  mobilidade:
    'Belford Roxo é atendida pelo trem da SuperVia e tem fácil ligação rodoviária à capital e à Baixada pela Rodovia Presidente Dutra (BR-116), próxima ao município, e pelos eixos que conectam à Via Light, em Nova Iguaçu.',

  corridas: [
    {
      nome: 'Corridas e caminhadas de bairro',
      descricao:
        'A cidade recebe corridas de rua e caminhadas pontuais promovidas pela prefeitura e por grupos locais, geralmente com largada em vias e praças centrais.',
    },
    {
      nome: 'Treinos de rua em grupo',
      descricao:
        'Grupos de corrida e treino funcional ao ar livre se reúnem em praças e vias de bairro, alternativa acessível de prática regular.',
    },
  ],
  culturaEsportiva:
    'O futebol é a marca esportiva de Belford Roxo, presente em campos e quadras de bairro e representado no cenário estadual pela Sociedade Esportiva Belford Roxo, clube fundado em 2020 que disputa divisões do Campeonato Carioca. A prática de futebol amador e de várzea é difundida e movimenta a vida esportiva local.',
  academias:
    'A oferta se concentra em academias de bairro e estúdios de pequeno e médio porte, distribuídos pelo Centro e pelos eixos comerciais, complementados por atendimento domiciliar e personal trainer — formato que atende bem quem tem rotina de deslocamento para a capital.',

  destaquesFitness: [
    'Forte cultura de futebol amador e de várzea nos campos e quadras de bairro.',
    'Academias de bairro e estúdios espalhados pelo Centro e eixos comerciais.',
    'Demanda relevante por atendimento domiciliar e personal trainer perto de casa.',
    'Calçadão do Lote XV e praças como espaços de caminhada e treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade grande e popular da Baixada Fluminense, com parque industrial relevante e cultura de futebol enraizada, Belford Roxo tem um mercado fitness voltado a academias de bairro e ao atendimento domiciliar. Um personal trainer ajuda a estruturar o treino com método e custo acessível, respeitando o clima quente e a rotina de quem se desloca para o Rio.',

  vizinhas: ['nova-iguacu-rj', 'duque-de-caxias-rj', 'sao-joao-de-meriti-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Belford Roxo', url: 'https://cidades.ibge.gov.br/brasil/rj/belford-roxo/panorama' },
    { nome: 'Prefeitura de Belford Roxo', url: 'https://prefeituradebelfordroxo.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM (Belford Roxo)', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3300456' },
  ],
  atualizadoEm: '2026-06-29',
};
