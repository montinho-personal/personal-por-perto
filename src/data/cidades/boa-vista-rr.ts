import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'boa-vista-rr',
  nome: 'Boa Vista',
  uf: 'RR',
  estado: 'Roraima',
  estadoSlug: 'roraima',
  regiao: 'Norte',
  gentilico: 'boa-vistense',
  tipo: 'cidade',

  populacao: 413486,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 90,

  resumoEconomico:
    'Capital de Roraima e a cidade mais ao norte do país, Boa Vista é uma capital planejada, com traçado urbano radial — avenidas que partem do centro cívico em formato de leque. A economia se baseia em comércio, serviços e administração pública, com peso crescente do agronegócio no entorno. É um centro urbano organizado, com boa oferta de espaços públicos para atividade física.',

  mercado:
    'O mercado fitness conta com redes nacionais (Smart Fit no Roraima Garden Shopping) e centros de treino locais, além de academias de bairro. A prefeitura mantém o programa gratuito "Academia Aberta" em praças, e o calor favorece a cultura de treino ao ar livre nos parques e na orla.',

  bairrosNobres: ['Caçari', 'Paraviana', 'Mecejana', 'Centro'],
  bairrosPopulares: ['Aparecida', '13 de Setembro', 'Dos Estados', 'Senador Hélio Campos'],

  parques: [
    {
      nome: 'Parque Anauá',
      descricao:
        'O principal parque urbano da cidade, com pistas de caminhada e corrida, áreas verdes, lago e quadras; aberto diariamente das 6h30 às 22h, com entrada gratuita.',
    },
    {
      nome: 'Orla Taumanan (Parque do Rio Branco)',
      descricao:
        'Complexo às margens do Rio Branco com calçadões, ciclovia, mirante, quadras e praia — um cartão-postal usado para caminhada e corrida.',
    },
    {
      nome: 'Programa Academia Aberta',
      descricao:
        'Rede de polos em praças e espaços públicos com aulas gratuitas de ginástica, alongamento e dança, ampliando o acesso ao exercício pela cidade.',
    },
  ],
  ciclovias:
    'Boa Vista tem mais de 40 km de ciclovias, considerada a maior rede da Região Norte, ligando bairros como Senador Hélio Campos ao Caçari, com revitalizações recentes.',

  clima:
    'O clima é equatorial, quente o ano todo (frequentemente acima de 30 °C), com estação seca de outubro a março e chuvosa de abril a setembro.',
  climaTreino:
    'O treino ao ar livre rende mais cedo pela manhã ou após o pôr do sol, com hidratação reforçada e proteção solar — o calor equatorial é o principal fator a administrar.',

  mobilidade:
    'O traçado radial facilita os deslocamentos, e o acesso terrestre principal é pela BR-174 (sentido Manaus). O transporte é por ônibus municipal, complementado por uma boa malha cicloviária.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas (etapa Boa Vista)',
      descricao:
        'Prova de 5 km com corridinha kids, parte de um circuito nacional que movimenta a cena de corrida local.',
    },
    {
      nome: 'Corridas e treinões no Parque Anauá',
      descricao:
        'O Parque Anauá serve de base para circuitos e treinões de rua ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'Boa Vista tem forte adesão à corrida de rua e ao ciclismo, favorecido pela maior malha de ciclovias do Norte. Programas públicos gratuitos em praças ampliam a base de praticantes e tornam o exercício acessível.',
  academias:
    'A oferta reúne a Smart Fit e centros de treino locais, academias de bairro e o programa público "Academia Aberta", cobrindo musculação e treino funcional em diferentes perfis.',

  destaquesFitness: [
    'Maior rede de ciclovias do Norte — cidade amigável ao deslocamento ativo.',
    'Parque Anauá como hub de corrida, caminhada e treino funcional.',
    'Programa gratuito "Academia Aberta" em diversos polos.',
    'Smart Fit e centros de treino locais cobrindo musculação e funcional.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Capital planejada e amigável à bike, Boa Vista oferece do Parque Anauá à orla do Rio Branco um ambiente bom para treinar. Um personal trainer ajuda a aproveitar essa estrutura com método, ajustando horários e intensidade ao calor equatorial.',

  vizinhas: ['manaus-am', 'macapa-ap'],

  fontes: [
    { nome: 'IBGE Cidades — Boa Vista', url: 'https://cidades.ibge.gov.br/brasil/rr/boa-vista/panorama' },
    { nome: 'Prefeitura de Boa Vista', url: 'https://www.boavista.rr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
