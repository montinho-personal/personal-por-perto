import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maringa-pr',
  nome: 'Maringá',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'maringaense',
  tipo: 'cidade',

  populacao: 409657,
  populacaoAno: 2022,
  idhm: 0.808,
  idhmClasse: 'muito alto',
  altitudeM: 555,

  resumoEconomico:
    'Terceira cidade mais populosa do Paraná, Maringá tem um dos maiores PIBs do interior do Brasil, impulsionado por serviços, comércio, agronegócio, educação e saúde, com tecnologia e indústria leve em alta. Cidade planejada e frequentemente citada como uma das mais arborizadas do país, é reconhecida nacionalmente pela organização urbana e pela qualidade de vida.',

  mercado:
    'O mercado fitness é maduro, com dezenas de academias de musculação, estúdios de crossfit e funcional e nomes locais conhecidos, além de redes e ampla cobertura de plataformas de benefícios. A cultura de musculação e funcional é forte, ligada ao perfil jovem e universitário da cidade.',

  bairrosNobres: ['Zona 02', 'Zona 05', 'Jardim Aclimação', 'Vila Bosque'],
  bairrosPopulares: ['Zona 07', 'Jardim Alvorada', 'Jardim Oriental', 'Jardim Guaporé'],

  parques: [
    {
      nome: 'Parque do Ingá',
      descricao:
        'Reserva florestal de cerca de 47 hectares, com pista de caminhada de aproximadamente 3 km no entorno, academia ao ar livre, playground e estação de saúde — o principal circuito de corrida e caminhada da cidade.',
    },
    {
      nome: 'Parque do Japão',
      descricao:
        'Complexo de cerca de 100 mil m² com ginásio esportivo (usado para artes marciais), lagos e espaços para eventos esportivos e culturais.',
    },
    {
      nome: 'Bosque das Grevíleas e praças arborizadas',
      descricao:
        'Em uma das cidades mais arborizadas do país, praças e bosques bem cuidados completam a oferta de espaços agradáveis para treino ao ar livre.',
    },
  ],
  ciclovias:
    'Maringá tem cerca de 45 km de ciclovias e ciclofaixas, e a bicicleta responde por cerca de 6% dos deslocamentos — o dobro da média nacional —, sinal de uma cultura de mobilidade ativa consolidada.',

  clima:
    'O clima é subtropical/temperado quente, com média anual em torno de 22 °C e estação quente e úmida de outubro a abril.',
  climaTreino:
    'As condições para treino ao ar livre são ótimas o ano todo. No verão úmido, vale priorizar as manhãs para fugir do calor e das chuvas de fim de tarde.',

  mobilidade:
    'Cidade planejada, com avenidas largas e forte cultura de bicicleta, Maringá é cortada pela BR-376, com obras de contorno metropolitano para aliviar o tráfego de carga, e tem aeroporto regional em modernização.',

  corridas: [
    {
      nome: 'Maratona Internacional de Maringá',
      descricao:
        'Prova com percursos de 5 km, 10 km, 21 km e 42 km, que vem colocando a cidade no circuito nacional de grandes maratonas.',
    },
    {
      nome: 'Meia Maratona MGA Capital Running',
      descricao:
        'Prova de 5 km, 10 km e 21 km, parte de um calendário de corrida de rua em ascensão.',
    },
  ],
  culturaEsportiva:
    'Maringá tem forte cultura de ciclismo urbano (uso de bike bem acima da média nacional) e uma cena de corrida de rua em ascensão, com a entrada no circuito nacional de maratonas. Os parques arborizados ajudam a fazer da atividade física um hábito.',
  academias:
    'A oferta reúne dezenas de academias de musculação, estúdios de crossfit e funcional e nomes locais conhecidos, além de redes nacionais, atendendo um público jovem e exigente.',

  destaquesFitness: [
    'Pista de cerca de 3 km no Parque do Ingá, com academia ao ar livre — referência outdoor.',
    'Entrada no circuito nacional de maratonas, que aquece a demanda por assessorias.',
    'Cerca de 45 km de ciclovias e alta cultura de bicicleta.',
    'Uma das cidades mais arborizadas do país, com clima e infraestrutura ideais para treino externo.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 170,
    mensalMin: 370,
    mensalMax: 1000,
    onlineMin: 175,
    onlineMax: 440,
  },

  conclusao:
    'Planejada, arborizada e com alta qualidade de vida, Maringá é um ambiente convidativo para treinar — do Parque do Ingá às ciclovias que cortam a cidade. Um personal trainer ajuda a aproveitar essa estrutura com método e a manter a constância, seja na musculação, seja na preparação para as corridas.',

  vizinhas: ['londrina-pr', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Maringá', url: 'https://cidades.ibge.gov.br/brasil/pr/maringa/panorama' },
    { nome: 'Prefeitura de Maringá', url: 'https://www.maringa.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
