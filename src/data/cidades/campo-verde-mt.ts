import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-verde-mt',
  nome: 'Campo Verde',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'campo-verdense',
  tipo: 'cidade',

  populacao: 44585,
  populacaoAno: 2022,
  idhm: 0.75,
  idhmClasse: 'alto',
  altitudeM: 736,

  resumoEconomico:
    'Localizada no sul de Mato Grosso, a cerca de 130 km de Cuiabá, Campo Verde é um dos grandes polos agroindustriais do estado. O município figura entre os maiores produtores de algodão, soja e milho do país, com o algodão como principal lavoura e uma das maiores áreas plantadas de Mato Grosso. A produção é exportada para mais de 20 países e a economia se diversifica com avicultura (um dos maiores plantéis de aves do estado), indústrias de produtos químicos, adubo, biocombustível e alimentos. O dinamismo do agronegócio sustenta um dos maiores PIBs agropecuários do estado e impulsiona a expansão dos serviços, incluindo o setor fitness.',

  mercado:
    'O mercado fitness acompanha o crescimento econômico e populacional puxado pelo agronegócio, com academias concentradas nas regiões mais valorizadas e procura crescente por treino ao ar livre. O calendário de corridas de rua ligado ao aniversário da cidade e a eventos do SESI sinaliza uma cultura esportiva em consolidação.',

  bairrosNobres: ['Centro', 'Jardim América', 'Bela Vista', 'Residencial Belvedere'],
  bairrosPopulares: ['Jupiara', 'Santa Rosa', 'Recanto dos Pássaros', 'Jardim Cidade Verde'],

  parques: [
    {
      nome: 'Parque das Araras',
      descricao:
        'Espaço de lazer e referência urbana da cidade, usado como ponto de largada de corridas e caminhadas e para atividades ao ar livre.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'O município distribui equipamentos de ginástica em praças dos bairros, ampliando o acesso público ao treino próximo de casa.',
    },
  ],
  ciclovias:
    'A cidade tem estrutura cicloviária em desenvolvimento; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical do cerrado, típico do sul de Mato Grosso, com estação seca bem definida no inverno e chuvas concentradas na primavera e no verão. As temperaturas são elevadas boa parte do ano, amenizadas pela altitude em torno de 736 metros.',
  climaTreino:
    'O calor e a baixa umidade da estação seca tornam recomendável treinar ao ar livre cedo de manhã ou no fim da tarde, com hidratação reforçada e atenção ao ar seco do período de estiagem.',

  mobilidade:
    'Campo Verde é cortada pela MT-130 e fica a cerca de 130 km de Cuiabá e próxima a Rondonópolis e Primavera do Leste, posição que a integra ao eixo logístico do agronegócio do sul de Mato Grosso. Os deslocamentos urbanos são curtos, o que facilita o treino antes ou depois do trabalho.',

  corridas: [
    {
      nome: 'Corrida Cidade de Campo Verde',
      descricao:
        'Prova de rua realizada nas comemorações de aniversário da cidade, com percursos para adultos e crianças e largada na região central.',
    },
    {
      nome: 'Corrida Nacional do SESI',
      descricao:
        'Prova de caráter social com percursos de 5 km e 10 km e caminhada de 5 km, com largada em frente ao Parque das Araras e arrecadação de alimentos.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva gira em torno das corridas de rua promovidas no aniversário da cidade e dos eventos do SESI, que combinam prova competitiva e caminhada aberta, indicando boa adesão aos esportes de rua apesar do clima quente do cerrado.',
  academias:
    'A oferta de academias acompanha o crescimento da cidade e se concentra nas regiões mais valorizadas, complementada pelo Parque das Araras e pelas academias ao ar livre das praças dos bairros.',

  destaquesFitness: [
    'Corrida Cidade de Campo Verde, ligada às comemorações de aniversário do município.',
    'Corrida Nacional do SESI, com percursos de 5 km e 10 km e caminhada de 5 km.',
    'Parque das Araras como principal ponto de largada e área para atividade ao ar livre.',
    'Mercado fitness em crescimento, puxado pela força do agronegócio local.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Polo agroindustrial do sul de Mato Grosso e uma das maiores produtoras de algodão do país, Campo Verde tem um mercado fitness em crescimento e uma cena de corrida de rua em consolidação. Um personal trainer ajuda a montar uma rotina que respeite o calor e a estação seca do cerrado e a aproveitar o Parque das Araras e as provas locais com método.',

  vizinhas: ['cuiaba-mt', 'primavera-do-leste-mt', 'rondonopolis-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Verde', url: 'https://cidades.ibge.gov.br/brasil/mt/campo-verde/panorama' },
    { nome: 'Prefeitura de Campo Verde', url: 'https://campoverde.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
