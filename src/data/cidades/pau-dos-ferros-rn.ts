import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pau-dos-ferros-rn',
  nome: 'Pau dos Ferros',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'pau-ferrense',
  tipo: 'cidade',

  populacao: 30479,
  populacaoAno: 2022,
  idhm: 0.678,
  idhmClasse: 'médio',
  altitudeM: 193,

  resumoEconomico:
    'Pau dos Ferros é o principal polo regional do Alto Oeste potiguar, exercendo influência sobre dezenas de municípios em uma área de fronteira entre Rio Grande do Norte, Ceará e Paraíba. A economia se apoia no comércio e nos serviços, que atraem consumidores de toda a região, e no setor de educação, com a presença da UERN, da UFERSA e do IFRN. A tradicional feira livre e eventos como a FINECAP, a feira intermunicipal de negócios e cultura, reforçam o papel de centralidade da cidade.',

  mercado:
    'O mercado fitness é o de uma cidade média do interior nordestino, sustentado pelo comércio, pelos serviços e pelo grande público universitário das três instituições públicas de ensino superior. A oferta concentra academias e estúdios, e o calor do semiárido empurra o treino ao ar livre para os horários mais amenos.',

  bairrosNobres: ['Centro', 'Manoel Deodato', 'Nações Unidas', 'Alto da Conceição'],
  bairrosPopulares: ['Riacho do Meio', 'Manoel Domingos', 'Chico Cajá', 'Princesinha'],

  parques: [
    {
      nome: 'Açude Pau dos Ferros',
      descricao:
        'Reservatório no curso do rio Apodi, um dos maiores açudes do Rio Grande do Norte (construído pelo DNOCS), a cerca de 6 km do centro; suas margens e os acessos servem de cenário para caminhada, corrida e lazer ao ar livre.',
    },
    {
      nome: 'Açude 25 de Março (Riacho do Meio)',
      descricao:
        'O mais antigo reservatório da cidade, no bairro Riacho do Meio, com entorno usado para caminhada e atividade física próximo da água.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'O Centro, que concentra o comércio, reúne praças e vias usadas para caminhada e como ponto de partida de eventos esportivos da cidade.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no dia a dia, mas a cidade ainda dispõe de pouca infraestrutura cicloviária dedicada.',

  clima:
    'O clima é semiárido quente e seco, típico do Alto Oeste potiguar, com temperaturas elevadas ao longo do ano, baixa umidade e chuvas concentradas no primeiro semestre.',
  climaTreino:
    'O calor forte e o ar seco exigem treino ao ar livre preferencialmente no início da manhã ou no fim da tarde, com atenção redobrada à hidratação e à proteção solar.',

  mobilidade:
    'O acesso se dá pelas BR-405 e BR-226, que cruzam o município, além da RN-177 que liga a cidade aos demais municípios do Alto Oeste; a posição de entroncamento entre RN, Ceará e Paraíba reforça o papel de polo regional. O trânsito interno é leve.',

  corridas: [
    {
      nome: 'Circuito de Corridas do Servidor — Etapa Pau dos Ferros',
      descricao:
        'Etapa regional do circuito de corrida de rua realizada na cidade, com largada em praça do Centro e percursos que reúnem corredores do Alto Oeste.',
    },
    {
      nome: 'Corrida de rua do 4 de Setembro',
      descricao:
        'Prova de rua promovida no entorno das comemorações cívicas da cidade, parte de uma cena de corrida que ganha espaço no calendário local.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva acompanha o porte de polo regional: o público universitário e a vida de comércio sustentam a prática, e o calendário de corridas de rua vem se consolidando com etapas regionais. O trânsito leve e o custo de vida acessível favorecem a adesão à atividade física.',
  academias:
    'A oferta reúne academias e estúdios voltados ao público da cidade e dos municípios vizinhos que a utilizam como centro de serviços, com forte demanda dos estudantes da UERN, da UFERSA e do IFRN.',

  destaquesFitness: [
    'Açude Pau dos Ferros, no rio Apodi, como principal cartão de paisagem para treino ao ar livre.',
    'Grande público universitário das três instituições públicas (UERN, UFERSA e IFRN).',
    'Papel de polo regional do Alto Oeste, com comércio e feira tradicional que movimentam a cidade.',
    'Calendário emergente de corridas de rua com etapas regionais.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Polo do Alto Oeste potiguar, Pau dos Ferros combina vida de comércio, forte presença universitária e a paisagem do açude no rio Apodi. Um personal trainer ajuda a montar uma rotina segura para o clima semiárido quente e seco, ajustando horários e hidratação e aproveitando os espaços públicos da cidade.',

  vizinhas: ['mossoro-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Pau dos Ferros', url: 'https://cidades.ibge.gov.br/brasil/rn/pau-dos-ferros/panorama' },
    { nome: 'Prefeitura de Pau dos Ferros', url: 'https://paudosferros.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
