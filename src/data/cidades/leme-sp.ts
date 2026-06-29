import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'leme-sp',
  nome: 'Leme',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'lemense',
  tipo: 'cidade',

  populacao: 98161,
  populacaoAno: 2022,
  idhm: 0.744,
  idhmClasse: 'alto',
  altitudeM: 619,

  resumoEconomico:
    'Leme é uma cidade média do interior paulista, tradicionalmente reconhecida pelo polo calçadista e por um parque industrial diversificado, além de forte presença do agronegócio (cana-de-açúcar e citricultura) no entorno. Integra a Região Metropolitana de Piracicaba e fica em um eixo dinâmico do interior, próxima de Limeira, Araras, Rio Claro e Pirassununga.',

  mercado:
    'O mercado fitness acompanha o perfil de cidade média do interior: academias de bairro, estúdios e boxes de treinamento funcional, com demanda crescente por acompanhamento personalizado. A boa oferta de parques e áreas verdes favorece o trabalho de personal trainers ao ar livre, além do atendimento em academias e a domicílio.',

  bairrosNobres: ['Jardim do Bosque', 'Jardim Nova Leme', 'Parque Residencial Itamaraty', 'Vila Santa Maria'],
  bairrosPopulares: ['Jardim Santa Paula', 'Parque São Manoel', 'Vila Bela Vista', 'Vila Bom Jesus'],

  parques: [
    {
      nome: 'Parque Ecológico Mourão',
      descricao:
        'Conhecido pelos lemenses como "Bosque", o parque tem mais de 130 mil m², com lagos, trilhas, academia ao ar livre, playground, áreas de piquenique e churrasqueiras de acesso público, sendo o principal espaço para caminhada e treino externo da cidade.',
    },
    {
      nome: 'Parque de Exposições Orlando Arrais Seródio',
      descricao:
        'Amplo espaço público usado para eventos e atividades ao ar livre, com áreas abertas que servem de apoio para caminhadas e práticas esportivas em parte do calendário da cidade.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos cicláveis e ruas de tráfego mais tranquilo nos bairros, mas a extensão total de ciclovias não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical com estação seca (Aw na classificação de Köppen), com média anual em torno de 21,6 °C, verão quente e chuvoso (concentração de chuvas entre dezembro e fevereiro) e inverno ameno e seco.',
  climaTreino:
    'No verão, o ideal é treinar ao ar livre no começo da manhã ou no fim da tarde, evitando o calor e as pancadas de chuva; o inverno seco e ameno é o período mais confortável para corrida e atividades externas.',

  mobilidade:
    'Leme tem boa conexão rodoviária no interior paulista, com acesso à Rodovia Anhanguera (SP-330) e ligações para Limeira, Araras, Rio Claro e Pirassununga, o que facilita o deslocamento de profissionais e o atendimento na região.',

  corridas: [
    {
      nome: 'Calendário esportivo municipal',
      descricao:
        'A Secretaria de Esportes e Lazer mantém um calendário anual de atividades, com competições e eventos que incluem práticas de rua e provas de atletismo entre as modalidades organizadas na cidade.',
    },
    {
      nome: 'Provas de rua da região',
      descricao:
        'Lemenses costumam complementar o calendário local participando de corridas de rua em cidades vizinhas como Limeira e Rio Claro, no eixo do interior paulista.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso dos parques municipais para caminhada e treino ao ar livre com um calendário esportivo organizado pela prefeitura, que abrange diversas modalidades. A proximidade de polos esportivos regionais amplia as opções de provas e eventos.',
  academias:
    'A oferta reúne academias de bairro, estúdios e espaços de treinamento funcional, complementada pelo Parque Ecológico Mourão e demais áreas verdes para o treino externo.',

  destaquesFitness: [
    'Parque Ecológico Mourão ("Bosque"), com mais de 130 mil m², trilhas e academia ao ar livre de acesso gratuito.',
    'Calendário esportivo municipal ativo, organizado pela Secretaria de Esportes e Lazer.',
    'Inverno seco e ameno, favorável à corrida e ao treino ao ar livre.',
    'Boa conexão rodoviária (Anhanguera/SP-330) com Limeira, Rio Claro e Pirassununga, ampliando o acesso a provas regionais.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo calçadista e industrial do interior paulista, Leme reúne parques de qualidade e um calendário esportivo municipal ativo. Um personal trainer ajuda o lemense a aproveitar o Parque Ecológico Mourão e os demais espaços com método, ajustando os horários ao calor do verão e à comodidade do inverno seco.',

  vizinhas: ['limeira-sp', 'rio-claro-sp', 'mogi-guacu-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Leme', url: 'https://cidades.ibge.gov.br/brasil/sp/leme/panorama' },
    { nome: 'Prefeitura de Leme', url: 'https://www.leme.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
