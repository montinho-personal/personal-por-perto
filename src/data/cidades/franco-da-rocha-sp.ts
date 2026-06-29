import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'franco-da-rocha-sp',
  nome: 'Franco da Rocha',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'franco-rochense',
  tipo: 'cidade',

  populacao: 144849,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 760,

  resumoEconomico:
    'Ao norte da capital, na Região Metropolitana de São Paulo, Franco da Rocha nasceu às margens da ferrovia Santos–Jundiaí e se consolidou como cidade de moradia e serviços, marcada historicamente pela presença do Complexo Hospitalar do Juquery. Hoje a economia combina comércio, serviços e pequena indústria, com forte vínculo de deslocamento diário para São Paulo e municípios vizinhos, num território que ainda preserva extensas áreas de cerrado e mata.',

  mercado:
    'A condição de cidade conectada à capital pelo trem e pela Rodovia Fernão Dias, somada à proximidade do Parque Estadual do Juquery, sustenta a procura por treino ao ar livre e por personal a domicílio. A demanda concentra-se em condicionamento físico, emagrecimento, saúde e preparo para corridas e trilhas, com público que valoriza a atividade na natureza num dos cenários mais singulares da Grande São Paulo.',

  bairrosNobres: ['Estância Londres', 'Jardim Vila Rica', 'Vila Bazu', 'Centro'],
  bairrosPopulares: ['Parque Vitória', 'Jardim Luciana', 'Vila Santista', 'Jardim Áurea'],

  parques: [
    {
      nome: 'Parque Estadual do Juquery',
      descricao:
        'Maior remanescente de cerrado da Grande São Paulo, a unidade de conservação se estende entre Franco da Rocha e Caieiras e protege uma paisagem rara de campos, trilhas e mirantes. É o principal cenário para caminhada, trekking e corrida em meio à natureza no município.',
    },
    {
      nome: 'Trilhas e mirantes do Juquery',
      descricao:
        'Os percursos do parque levam a mirantes com vista ampla da região e variam em distância e dificuldade, oferecendo opções para caminhada leve, trekking e treino de resistência em terreno natural.',
    },
    {
      nome: 'Áreas verdes e praças urbanas',
      descricao:
        'Praças e espaços abertos no Centro e nos bairros complementam a oferta do parque estadual e servem de apoio para caminhada, corrida leve e treino funcional ao ar livre no dia a dia.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana não é divulgada em fonte oficial; o uso da bicicleta concentra-se em vias do entorno e em trajetos ligados às áreas verdes e ao acesso ao Parque Estadual do Juquery.',

  clima:
    'O clima é subtropical úmido (Cfb na classificação de Köppen), ameno, com temperatura média anual em torno de 19 °C, verões quentes e chuvosos e invernos mais secos, com manhãs frias.',
  climaTreino:
    'As condições favorecem o treino ao ar livre, a corrida e a trilha na maior parte do ano, com atenção às chuvas de verão no fim da tarde e ao frio nas primeiras horas do dia no inverno.',

  mobilidade:
    'Franco da Rocha integra a Região Metropolitana de São Paulo e tem como principais eixos de acesso a Rodovia Fernão Dias (BR-381) e a malha viária que liga a cidade à capital e aos municípios vizinhos. O transporte sobre trilhos é feito pela CPTM, na Linha 7–Rubi (Luz–Jundiaí), com a Estação Franco da Rocha conectando o município ao centro de São Paulo.',

  corridas: [
    {
      nome: 'Corrida do Cerrado — Parque do Juquery',
      descricao:
        'Prova de trail running realizada dentro do Parque Estadual do Juquery, em Franco da Rocha, com percursos de diferentes distâncias por trilhas e campos do cerrado, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Circuito das Serras — Parque do Juquery',
      descricao:
        'Etapa de circuito de corrida em trilha sediada no Parque Estadual do Juquery, com largada no município e percursos que exploram o relevo e a paisagem natural da unidade de conservação.',
    },
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas pedestres organizadas no município ao longo do ano reúnem corredores em percursos urbanos, complementando o calendário de corridas em trilha do parque estadual.',
    },
  ],
  culturaEsportiva:
    'A cidade combina cultura de corrida de rua com forte vocação para a vida ao ar livre, aproveitando o Parque Estadual do Juquery — maior remanescente de cerrado da Grande São Paulo — para caminhada, trilha e treino na natureza.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros mais adensados, complementada pelas trilhas e áreas abertas do Parque Estadual do Juquery, que ampliam as opções de treino fora dos espaços fechados.',

  destaquesFitness: [
    'Parque Estadual do Juquery — maior remanescente de cerrado da Grande São Paulo, ideal para trilha e corrida.',
    'Trilhas e mirantes do Juquery para trekking e condicionamento em terreno natural.',
    'Calendário de corridas em trilha, com a Corrida do Cerrado e etapas de circuito no parque.',
    'Conexão pela CPTM Linha 7–Rubi e pela Rodovia Fernão Dias facilita o acesso à capital.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 290,
    mensalMax: 760,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Cidade verde da Região Metropolitana de São Paulo, Franco da Rocha une herança ferroviária, vínculo diário com a capital e um patrimônio natural raro: o Parque Estadual do Juquery, maior remanescente de cerrado da Grande São Paulo. Um personal trainer ajuda o morador a aproveitar esse cenário ao ar livre com método e segurança, do preparo para corridas e trilhas ao treino de saúde e longevidade, num clima ameno propício à atividade física o ano todo.',

  vizinhas: ['caieiras-sp', 'mairipora-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Franco da Rocha', url: 'https://cidades.ibge.gov.br/brasil/sp/franco-da-rocha/panorama' },
    { nome: 'Prefeitura de Franco da Rocha', url: 'https://www.francodarocha.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3516408' },
  ],
  atualizadoEm: '2026-06-29',
};
