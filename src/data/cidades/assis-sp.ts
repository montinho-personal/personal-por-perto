import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'assis-sp',
  nome: 'Assis',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'assisense',
  tipo: 'cidade',

  populacao: 101409,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 546,

  resumoEconomico:
    'Polo regional do sudoeste paulista, Assis articula serviços, comércio e agronegócio em uma microrregião de forte vocação agrícola e sucroenergética (cana-de-açúcar, grãos e usinas). A presença da UNESP, com tradicional campus de Ciências e Letras, reforça o papel da cidade como referência em educação superior e serviços para os municípios vizinhos.',

  mercado:
    'Cidade-polo universitária e de serviços, Assis reúne público estudantil da UNESP, classe média consolidada e calendário de corridas que sustentam a demanda por treino orientado. O mercado de personal trainers se apoia em uma rede ativa de academias e estúdios, complementada pelo atendimento domiciliar, formato que cresce entre quem busca acompanhamento individual sem deslocamento.',

  bairrosNobres: ['Jardim Europa', 'Vila Operária', 'Centro', 'Jardim Paraná'],
  bairrosPopulares: ['Jardim Santa Clara', 'Parque dos Pioneiros', 'Vila Ouro Verde', 'Jardim Aeroporto'],

  parques: [
    {
      nome: 'Bosque Municipal de Assis',
      descricao:
        'Área verde tradicional da cidade, com trilhas e caminhos arborizados usados para caminhada e lazer, de acesso gratuito.',
    },
    {
      nome: 'Floresta Estadual de Assis',
      descricao:
        'Unidade de conservação de cerrado e cerradão, com cerca de 2.800 hectares no ponto mais alto do município, voltada à pesquisa, educação ambiental e contato com a natureza.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixas em avenidas e na malha urbana; a extensão total da rede não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical com estação seca no inverno (Aw/Cwa na transição), com verão quente e chuvoso e inverno mais ameno e seco; a altitude em torno de 546 m suaviza as temperaturas.',
  climaTreino:
    'O inverno seco e ameno abre ampla janela para treino ao ar livre; no verão, o calor e as chuvas concentradas no fim da tarde pedem hidratação e horários estratégicos (manhã ou início da noite).',

  mobilidade:
    'O principal eixo de acesso é a Rodovia Raposo Tavares (SP-270), que liga Assis à capital e ao oeste paulista, consolidando a cidade como entroncamento regional no sudoeste do estado.',

  corridas: [
    {
      nome: 'Corrida da Floresta — Etapa Assis',
      descricao:
        'Prova de rua realizada na região de área verde da cidade, com edições recorrentes e distância em torno de 7 km, parte de um circuito que passa por Assis.',
    },
    {
      nome: 'Corrida Pedestre de São Francisco de Assis',
      descricao:
        'Tradicional corrida pedestre da cidade, com percurso pela Avenida Rui Barbosa e largada na região central, em dezenas de edições já realizadas.',
    },
  ],
  culturaEsportiva:
    'Assis tem cultura de corrida e caminhada de rua com eventos próprios consolidados, como a Corrida de São Francisco de Assis e etapas da Corrida da Floresta, somadas a iniciativas esportivas ligadas à UNESP e à prefeitura.',
  academias:
    'A oferta reúne academias e estúdios espalhados pelos bairros e pelo centro, complementada pelo Bosque Municipal e pelas áreas verdes da cidade como espaços de treino ao ar livre.',

  destaquesFitness: [
    'Bosque Municipal de Assis: área verde gratuita para caminhada e treino ao ar livre.',
    'Floresta Estadual de Assis: remanescente de cerrado para contato com a natureza e educação ambiental.',
    'Inverno seco e ameno como ampla janela para treino externo o ano todo.',
    'Calendário de corridas próprio (Corrida da Floresta e Corrida de São Francisco de Assis) que movimenta o público corredor.',
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
    'Polo universitário e de serviços do sudoeste paulista, Assis combina clima favorável, áreas verdes e cultura de corrida em ascensão. Um personal trainer ajuda a aproveitar o Bosque Municipal e o calendário de provas com método, ajustando o treino ao calor do verão e à rotina de quem estuda ou trabalha na cidade.',

  vizinhas: ['marilia-sp', 'presidente-prudente-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Assis', url: 'https://cidades.ibge.gov.br/brasil/sp/assis/panorama' },
    { nome: 'Prefeitura de Assis', url: 'https://www.assis.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
