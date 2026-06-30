import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'marechal-candido-rondon-pr',
  nome: 'Marechal Cândido Rondon',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'rondonense',
  tipo: 'cidade',

  populacao: 55836,
  populacaoAno: 2022,
  idhm: 0.774,
  idhmClasse: 'alto',
  altitudeM: 392,

  resumoEconomico:
    'Município do extremo oeste paranaense marcado por forte colonização alemã, Marechal Cândido Rondon tem na agroindústria a base da sua economia, com destaque para a avicultura, a suinocultura, a piscicultura e a produção de grãos como soja e milho. As cadeias de aves e suínos, integradas a cooperativas e frigoríficos, sustentam emprego e renda, e a presença da Unioeste (Universidade Estadual do Oeste do Paraná) agrega um polo universitário e de pesquisa agronômica à cidade.',

  mercado:
    'A combinação de renda estável do agronegócio, perfil universitário da Unioeste e cultura de qualidade de vida sustenta um mercado consistente, com academias locais, estúdios de musculação, funcional e personal atendendo público adulto e jovem.',

  bairrosNobres: ['Centro', 'Jardim Líder', 'Jardim Bandeirantes', 'Vila Gloria'],
  bairrosPopulares: ['Jardim São Lucas', 'Vila Operária', 'Jardim Eldorado', 'Distrito de Porto Mendes'],

  parques: [
    {
      nome: 'Balneário de Porto Mendes (Lago de Itaipu)',
      descricao:
        'Distrito às margens do Lago de Itaipu, com praia artificial de água doce, quiosques e estrutura náutica — espaço usado para caminhada, atividades ao ar livre e lazer.',
    },
    {
      nome: 'Praias artificiais e orla do Lago de Itaipu',
      descricao:
        'Trechos de orla e áreas de lazer no reservatório, próprios para banho na temporada, que viram cenário de treino outdoor e atividade física na água doce.',
    },
    {
      nome: 'Praças e Estádio Municipal',
      descricao:
        'Praças da malha urbana e o Estádio Municipal, que recebe programas como o Movimento e Saúde e atividades de atletismo e caminhada.',
    },
  ],
  ciclovias:
    'A cidade conta com vias arborizadas e trechos de ciclovia na malha urbana, usados por ciclistas e corredores; a extensão total da rede não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, típico do oeste paranaense, com verões quentes e úmidos e invernos amenos e curtos, médias anuais em torno de 21 °C.',
  climaTreino:
    'Os invernos são suaves e permitem treino outdoor o ano todo, enquanto o verão quente e úmido pede hidratação e sessões nas primeiras horas da manhã ou no fim da tarde.',

  mobilidade:
    'Marechal Cândido Rondon é servida pela BR-163, principal eixo rodoviário do oeste do Paraná, que liga a cidade a Toledo, Cascavel e à região de fronteira; o deslocamento interno é predominantemente por carro e moto.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — Etapa Marechal Cândido Rondon',
      descricao:
        'Etapa local do circuito do Sesc com provas de 5 km e 10 km e largada no centro de eventos da cidade.',
    },
    {
      nome: 'Corrida Rústica do Trabalhador',
      descricao:
        'Prova rústica promovida anualmente na cidade, voltada a atletas amadores e profissionais, com foco em saúde e integração social.',
    },
    {
      nome: 'Provas da Acorre Rondon',
      descricao:
        'A Associação de Corredores de Marechal Cândido Rondon (Acorre Rondon) incentiva o atletismo, a corrida de rua e a caminhada, levando atletas locais a provas no Paraná e no Mato Grosso do Sul.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura esportiva ativa, organizada em torno de associações como a Acorre Rondon e de programas municipais de movimento e saúde, com o Lago de Itaipu e o balneário de Porto Mendes como referências de lazer e atividade ao ar livre.',
  academias:
    'A oferta reúne academias e estúdios locais de musculação, funcional e personal, sustentados pela renda do agronegócio e pelo público universitário da Unioeste, complementados por praças e pela orla do Lago de Itaipu.',

  destaquesFitness: [
    'Lago de Itaipu e balneário de Porto Mendes como cenário de treino e lazer ao ar livre.',
    'Renda estável da agroindústria de aves, suínos e grãos, com público disposto a investir em saúde.',
    'Polo universitário da Unioeste, que amplia o público jovem e ativo.',
    'Clima subtropical de invernos amenos, favorável ao treino outdoor o ano todo.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Cidade de colonização alemã e forte agroindústria no oeste paranaense, Marechal Cândido Rondon une renda estável, perfil universitário e o Lago de Itaipu como referência de vida ao ar livre. Um personal trainer encontra aqui um público consistente para o trabalho presencial e online, em um clima favorável ao treino durante todo o ano.',

  vizinhas: ['cascavel-pr', 'toledo-pr'],

  fontes: [
    {
      nome: 'IBGE Cidades — Marechal Cândido Rondon',
      url: 'https://cidades.ibge.gov.br/brasil/pr/marechal-candido-rondon/panorama',
    },
    { nome: 'Prefeitura de Marechal Cândido Rondon', url: 'https://marechalcandidorondon.atende.net/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
