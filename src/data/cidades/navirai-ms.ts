import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'navirai-ms',
  nome: 'Naviraí',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'naviraiense',
  tipo: 'cidade',

  populacao: 50457,
  populacaoAno: 2022,
  idhm: 0.7,
  idhmClasse: 'alto',
  altitudeM: 362,

  resumoEconomico:
    'Naviraí é um dos principais polos do cone-sul de Mato Grosso do Sul, com economia ancorada no agronegócio e na agroindústria. O município concentra usinas sucroalcooleiras — a Usina Naviraí S/A e a Rio Amambaí Agroindústria — que processam cana-de-açúcar para açúcar e etanol, ao lado de forte produção de soja, milho e pecuária. Comércio e serviços atendem toda a região imediata de Naviraí, e a presença de um campus da UFMS e de um campus do IFMS reforça o perfil de cidade-referência do sul do estado.',

  mercado:
    'Como cidade média e polo regional, Naviraí reúne academias de bairro e centros de musculação que atendem tanto os moradores quanto a população universitária dos campi da UFMS e do IFMS. A procura por treino ao ar livre cresce em torno do Parque Sucupira, o que abre espaço para o trabalho de personal trainers com acompanhamento individualizado.',

  bairrosNobres: ['Centro', 'Jardim Progresso', 'Jardim Paraíso', 'Jardim União'],
  bairrosPopulares: ['Lagoa Nova', 'Vila Industrial', 'Jardim Bandeirantes', 'Jardim Boa Vista'],

  parques: [
    {
      nome: 'Parque Sucupira',
      descricao:
        'Maior parque urbano da cidade, na região central, com mais de 71 mil m² e pistas arborizadas ao redor de um lago — o principal ponto de caminhada e corrida da comunidade.',
    },
    {
      nome: 'Parque Natural Municipal do Córrego Cumandaí',
      descricao:
        'Unidade de conservação de proteção integral em área urbana, a leste da cidade, que preserva a mata ao longo do Córrego Cumandaí e funciona como pulmão verde de Naviraí.',
    },
    {
      nome: 'Balneário Paraíso das Águas',
      descricao:
        'Ampla área de lazer no Jardim Paraíso, próxima à BR-163, voltada ao convívio e às atividades ao ar livre da população.',
    },
  ],
  ciclovias:
    'A cidade tem deslocamentos curtos e relevo plano que favorecem a bicicleta no dia a dia; a extensão da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical, com verão quente e chuvoso e inverno seco. As máximas médias ficam em torno de 28 °C e as mínimas chegam a cerca de 12 °C no período mais frio.',
  climaTreino:
    'O calor e a umidade do verão pedem treino no início da manhã ou no fim da tarde, com boa hidratação; o inverno seco e ameno é a época mais confortável para correr ao ar livre.',

  mobilidade:
    'Naviraí é cortada pela BR-163, principal eixo rodoviário que liga o município ao restante de Mato Grosso do Sul, e conta com a MS-141 no acesso à região de Ivinhema, onde fica o campus da UFMS.',

  corridas: [
    {
      nome: 'Caminhadas e corridas no Parque Sucupira',
      descricao:
        'As pistas arborizadas em torno do lago do Parque Sucupira concentram a prática diária de caminhada e corrida, sendo o principal palco do esporte de rua na cidade.',
    },
    {
      nome: 'Eventos esportivos municipais',
      descricao:
        'A prefeitura promove ações de incentivo à atividade física e eventos esportivos ao longo do ano, ampliando o acesso da população ao treino ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Naviraí se organiza em torno do Parque Sucupira e dos campi da UFMS e do IFMS, com público jovem e universitário que sustenta a prática de caminhada, corrida e musculação.',
  academias:
    'A oferta reúne academias de bairro e centros de musculação, com demanda complementada pelo treino ao ar livre no Parque Sucupira e nas áreas de lazer do município.',

  destaquesFitness: [
    'Parque Sucupira, com mais de 71 mil m² e pistas arborizadas ao redor de um lago.',
    'Parque Natural Municipal do Córrego Cumandaí, unidade de conservação em área urbana.',
    'Campi da UFMS e do IFMS, que trazem público jovem e universitário.',
    'Relevo plano e clima tropical que favorecem a caminhada e a corrida ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo sucroalcooleiro e agropecuário do cone-sul de Mato Grosso do Sul, Naviraí combina parques arborizados, áreas de lazer e uma comunidade universitária ativa. Um personal trainer ajuda a aproveitar o Parque Sucupira e o relevo plano da cidade com método, ajustando horários e hidratação ao calor do verão.',

  vizinhas: ['dourados-ms', 'ponta-pora-ms', 'campo-grande-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Naviraí', url: 'https://cidades.ibge.gov.br/brasil/ms/navirai/panorama' },
    { nome: 'Prefeitura de Naviraí', url: 'https://navirai.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
