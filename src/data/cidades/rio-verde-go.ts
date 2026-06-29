import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-verde-go',
  nome: 'Rio Verde',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'rio-verdense',
  tipo: 'cidade',

  populacao: 225696,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 748,

  resumoEconomico:
    'Maior potência do agronegócio do sudoeste goiano e uma das maiores do país, Rio Verde é grande produtora de soja, milho, suínos e aves, e sedia a maior unidade da BRF, com milhares de funcionários. Seu PIB triplicou em uma década, tornando-a a segunda maior economia de Goiás, com crescimento acelerado e alta renda.',

  mercado:
    'O público jovem e de alta renda ligado ao agro sustenta forte demanda fitness, com presença de redes, boxes de crossfit e academias locais consolidadas — um terreno fértil para personal trainers, inclusive online.',

  bairrosNobres: ['Setor Central', 'Setor Morada do Sol', 'Jardim Goiás', 'Setor Santa Cruz'],
  bairrosPopulares: ['Setor Popular', 'Vila Borges', 'Parque Gameleira', 'Setor Promissão'],

  parques: [
    {
      nome: 'Parque Lauro Martins Filho',
      descricao:
        'Tem pista de caminhada e ciclismo, academia da saúde ao ar livre, lago com cascata e iluminação LED — ponto de largada de corridas de rua.',
    },
    {
      nome: 'Parque Ecológico',
      descricao:
        'Cerca de 17 hectares na encosta, com pista para corrida e caminhada, lago e área de preservação.',
    },
    {
      nome: 'Espaço Recanto dos Buritis',
      descricao:
        'Área verde para recreação e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'O Parque Lauro Martins Filho tem trilha de ciclismo interna; a extensão da malha cicloviária municipal ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de cerrado, com estação seca (de maio a outubro) e chuvosa (de novembro a abril), e temperaturas que vão de cerca de 20 °C a 35 °C.',
  climaTreino:
    'O calor intenso e o ar muito seco no inverno recomendam treinar no início da manhã ou no fim de tarde, com hidratação reforçada.',

  mobilidade:
    'Rio Verde é cortada pelas BR-060 e BR-452 e abriga uma plataforma logística multimodal ligada à Ferrovia Norte-Sul, conectando a cidade aos portos de Santos e Itaqui.',

  corridas: [
    {
      nome: 'Meia Maratona Unimed Rio Verde',
      descricao:
        'Circuito esportivo-social com percursos de 6 km, 12 km e 21 km, com largada no Parque Lauro Martins Filho.',
    },
    {
      nome: 'Corrida de Rua de Rio Verde',
      descricao:
        'Prova de rua local que reúne centenas de corredores, parte de um calendário em consolidação.',
    },
  ],
  culturaEsportiva:
    'O município incentiva o esporte por meio de secretaria própria, com infraestrutura para várias modalidades; a cena de corrida de rua e crossfit está em ascensão, acompanhando o crescimento econômico.',
  academias:
    'A oferta reúne redes, boxes de crossfit e academias funcionais já estabelecidas, com público de renda alta, complementada pelo Parque Lauro Martins Filho.',

  destaquesFitness: [
    'Capital do agronegócio com renda alta e público jovem — terreno fértil para personal trainers.',
    'Boxes de crossfit e academias funcionais já estabelecidos.',
    'Parque Lauro Martins Filho como hub de treino ao ar livre e corridas.',
    'Calendário de corridas de rua em consolidação (Unimed e provas locais).',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Potência do agronegócio goiano, Rio Verde tem renda alta, público jovem e cena fitness em ascensão. Um personal trainer ajuda a aproveitar o Parque Lauro Martins Filho com método, ajustando horários e hidratação ao calor do cerrado.',

  vizinhas: ['goiania-go', 'aparecida-de-goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Verde', url: 'https://cidades.ibge.gov.br/brasil/go/rio-verde/panorama' },
    { nome: 'Prefeitura de Rio Verde', url: 'https://www.rioverde.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
