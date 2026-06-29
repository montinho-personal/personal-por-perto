import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaguariuna-sp', nome: 'Jaguariúna', uf: 'SP', estado: 'São Paulo', estadoSlug: 'sao-paulo', regiao: 'Sudeste', gentilico: 'jaguariunense', tipo: 'cidade',
  populacao: 59347, populacaoAno: 2022, idhm: 0.784, idhmClasse: 'alto', altitudeM: 584,
  resumoEconomico: 'Integrante da Região Metropolitana de Campinas, Jaguariúna é um dos municípios de maior PIB per capita do estado de São Paulo e do país, sustentado por um robusto parque industrial e tecnológico instalado ao longo da Rodovia Dom Pedro I (SP-065) e da SP-340. A cidade abriga unidades de grandes empresas e a Embrapa Meio Ambiente, centro de pesquisa agropecuária de referência nacional. Entre 2010 e 2022 a população cresceu de 44.311 para 59.347 habitantes, um dos maiores avanços relativos da região metropolitana, refletindo a forte atração de investimentos e de mão de obra qualificada.',
  mercado: 'A combinação de renda elevada, expansão de condomínios fechados e crescimento populacional acelerado cria um ambiente favorável ao trabalho do personal trainer em Jaguariúna. O público local valoriza acompanhamento individualizado e atendimento domiciliar ou em condomínio, e a presença de profissionais qualificados acompanha o perfil econômico da cidade. A oferta é boa e os valores praticados situam-se na faixa alta do interior paulista, em linha com municípios vizinhos da RM Campinas.',
  bairrosNobres: ['Parque Florianópolis', 'Vila Roseira', 'Roseira de Cima', 'João Aldo Nassif'],
  bairrosPopulares: ['Nova Jaguariúna', 'Jardim Zeni', 'Berlandia', 'Cruzeiro do Sul'],
  parques: [
    { nome: 'Parque dos Lagos', descricao: 'Maior complexo de lazer da cidade, com cerca de 70 mil m², três lagos, playground e quadras. Um túnel coberto liga a uma área esportiva com pista de caminhada, ciclovia e estação de exercícios, muito procurada para treino ao ar livre.' },
    { nome: 'Parque Santa Maria', descricao: 'Parque no centro da cidade com pista de caminhada, quadras de vôlei e de futsal e arquibancadas, palco histórico das primeiras edições do rodeio e ponto tradicional de atividade física.' },
    { nome: 'Parque Serra Dourada', descricao: 'Área verde no bairro João Aldo Nassif com infraestrutura para caminhada e projetos esportivos e educativos, opção de treino para moradores da região.' },
  ],
  ciclovias: 'A cidade conta com ciclovia e pista de caminhada integradas à área esportiva do Parque dos Lagos, além de trechos cicláveis em vias urbanas, favorecendo o deslocamento ativo e o treino de baixo impacto.',
  clima: 'Clima tropical de altitude, com verões quentes e chuvosos e invernos amenos e mais secos; a altitude em torno de 584 m suaviza as temperaturas em relação a áreas mais baixas do interior.',
  climaTreino: 'O inverno seco e ameno é a melhor janela para treinos ao ar livre e corrida; no verão, recomenda-se priorizar o início da manhã ou o fim da tarde para evitar calor e pancadas de chuva.',
  mobilidade: 'A Rodovia Dom Pedro I (SP-065) e a SP-340 conectam Jaguariúna a Campinas e à capital, e a malha urbana relativamente compacta facilita o atendimento domiciliar e em condomínios pelo personal trainer.',
  corridas: [
    { nome: 'Corrida Turística de Jaguariúna', descricao: 'Prova de rua tradicional do calendário municipal, realizada com apoio da Prefeitura em percursos de 5 km e 10 km pelas vias e pontos turísticos da cidade.' },
    { nome: 'Circuito de Corrida e Caminhada de Jaguariúna', descricao: 'Série de provas de corrida e caminhada apoiada pela Prefeitura, que movimenta a comunidade local de corredores ao longo do ano.' },
  ],
  culturaEsportiva: 'A cultura esportiva jaguariunense é forte e diversificada: a cidade é nacionalmente conhecida pelo Jaguariúna Rodeo Festival, um dos maiores eventos do gênero do país, e mantém um calendário ativo de corridas de rua, além de parques bem equipados que estimulam a prática regular de atividade física.',
  academias: 'A rede de academias e estúdios acompanha o alto poder aquisitivo local, com unidades modernas nos bairros centrais e nas regiões de condomínios, complementando a oferta de treino ao ar livre nos parques.',
  destaquesFitness: ['Pista de caminhada e ciclovia do Parque dos Lagos', 'Corrida Turística de Jaguariúna', 'Parques públicos bem estruturados para treino', 'Forte cultura de corrida de rua'],
  precos: { avulsaMin: 75, avulsaMax: 170, mensalMin: 380, mensalMax: 1050, onlineMin: 170, onlineMax: 470 },
  conclusao: 'Com renda elevada, crescimento populacional acelerado, expansão de condomínios e uma cultura esportiva consolidada, Jaguariúna oferece um cenário promissor para personal trainers. A boa infraestrutura de parques e o perfil exigente do público local sustentam uma demanda qualificada por acompanhamento personalizado.',
  vizinhas: ['campinas-sp', 'paulinia-sp', 'mogi-guacu-sp'],
  fontes: [
    { nome: 'IBGE Cidades e Estados — Jaguariúna (SP)', url: 'https://www.ibge.gov.br/cidades-e-estados/sp/jaguariuna.html' },
    { nome: 'Prefeitura de Jaguariúna — Turismo (Parques)', url: 'https://municipio.jaguariuna.sp.gov.br/turismo/locais/5/parque-dos-lagos.html' },
    { nome: 'Prefeitura de Jaguariúna — Jaguariúna Rodeo Festival', url: 'https://municipio.jaguariuna.sp.gov.br/turismo/atrativos/18/jaguariuna-rodeo-festival.html' },
  ], atualizadoEm: '2026-06-29',
};
