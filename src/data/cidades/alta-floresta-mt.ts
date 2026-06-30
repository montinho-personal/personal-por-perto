import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alta-floresta-mt',
  nome: 'Alta Floresta',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'alta-florestense',
  tipo: 'cidade',

  populacao: 58613,
  populacaoAno: 2022,
  idhm: 0.714,
  idhmClasse: 'alto',
  altitudeM: 283,

  resumoEconomico:
    'Polo do extremo norte mato-grossense, na divisa com o Pará e às margens do rio Teles Pires, Alta Floresta nasceu de um projeto de colonização nos anos 1970 e viveu o ciclo do garimpo de ouro nos anos 1980. Hoje a economia se apoia na pecuária e no agronegócio, com forte presença do ecoturismo — a região é destino de observação de aves e pesca esportiva, tendo a floresta amazônica e o Parque Estadual Cristalino como vitrine.',

  mercado:
    'Cidade média e referência regional de serviços no norte do estado, Alta Floresta concentra a demanda fitness de um amplo entorno. O mercado é atendido por academias locais e personal trainers, com espaço também para acompanhamento online de quem mora em propriedades rurais e municípios vizinhos.',

  bairrosNobres: ['Cidade Alta', 'Jardim Panorama', 'Setor Central'],
  bairrosPopulares: ['Vila Nova', 'Boa Nova', 'Jardim Primavera'],

  parques: [
    {
      nome: 'Parque Estadual Cristalino',
      descricao:
        'Área protegida da Amazônia mato-grossense entre o rio Teles Pires e a divisa com o Pará, com mais de 180 mil hectares de floresta. É um dos principais destinos de observação de aves do país, com centenas de espécies registradas, além de trilhas e ecoturismo.',
    },
    {
      nome: 'Orla do Rio Teles Pires',
      descricao:
        'Margem do rio que banha a cidade, ponto de lazer, pesca esportiva e contato com a natureza, com travessia de balsa e paisagens amazônicas.',
    },
    {
      nome: 'Complexo Esportivo Municipal',
      descricao:
        'Estrutura pública da cidade com quadras, campo e espaços para a prática esportiva, que recebe melhorias periódicas da prefeitura.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é pontual; o pedal e a caminhada acontecem sobretudo nas avenidas largas dos setores planejados e na orla do Teles Pires.',

  clima:
    'O clima é equatorial/tropical úmido, típico do norte de Mato Grosso, com calor e umidade altos o ano todo, estação chuvosa no verão e período mais seco no inverno.',
  climaTreino:
    'O calor e a umidade elevados pedem treinos no início da manhã ou no fim da tarde, com atenção redobrada à hidratação e à proteção solar.',

  mobilidade:
    'A cidade é articulada pela MT-208, principal eixo de ligação rumo ao sul do estado e ao entroncamento com a BR-163, rota de escoamento que conecta a região aos demais polos de Mato Grosso.',

  corridas: [
    {
      nome: 'Corrida da OAB',
      descricao:
        'Prova de rua já realizada na cidade, reunindo a comunidade esportiva local e atletas da região.',
    },
  ],
  culturaEsportiva:
    'Com perfil de natureza e ecoturismo, Alta Floresta tem na orla do Teles Pires e no entorno de mata cenário para corrida, caminhada e ciclismo. A cidade mantém complexo esportivo público e revela atletas em modalidades como o triathlon, além de provas de rua pontuais.',
  academias:
    'A oferta reúne academias locais que atendem o público da cidade e dos municípios vizinhos, complementadas pelo complexo esportivo municipal e pelos espaços ao ar livre da orla.',

  destaquesFitness: [
    'Referência regional de serviços no extremo norte de MT, com demanda de um amplo entorno rural.',
    'Orla do rio Teles Pires e mata amazônica como cenário para treino ao ar livre.',
    'Complexo esportivo municipal e tradição em ecoturismo, pesca esportiva e observação de aves.',
    'Mercado aberto a acompanhamento online para quem vive em propriedades rurais e cidades próximas.',
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
    'Polo do extremo norte mato-grossense às margens do Teles Pires, Alta Floresta combina natureza amazônica e clima quente o ano todo. Um personal trainer ajuda a aproveitar a orla e os espaços ao ar livre com método, ajustando horários e hidratação ao calor e à umidade da região.',

  vizinhas: ['sinop-mt', 'sorriso-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Alta Floresta', url: 'https://cidades.ibge.gov.br/brasil/mt/alta-floresta/panorama' },
    { nome: 'Prefeitura de Alta Floresta', url: 'https://www.altafloresta.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/5100250' },
  ],
  atualizadoEm: '2026-06-29',
};
