import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vitoria-es',
  nome: 'Vitória',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'vitoriense',
  tipo: 'cidade',

  populacao: 322869,
  populacaoAno: 2022,
  idhm: 0.845,
  idhmClasse: 'muito alto',
  altitudeM: 4,

  resumoEconomico:
    'Capital do Espírito Santo e cidade-ilha, Vitória tem a maior economia do estado, baseada em serviços, comércio e logística portuária — abriga o Complexo Portuário de Tubarão, um dos principais corredores de exportação de minério do país. Mais do que os números, a cidade se destaca por uma marca rara: é a capital brasileira com maior prática de atividade física no tempo livre.',

  mercado:
    'Vitória é a capital nº 1 do Brasil em atividade física, segundo o Vigitel do Ministério da Saúde: cerca de 53,3% dos moradores praticam ao menos 150 minutos por semana. A cidade tem política pública pioneira — o Serviço de Orientação ao Exercício (SOE), criado em 1990, que oferece educação física gratuita na orla e nas praças e inspirou o Programa Academia da Saúde nacional. A isso somam-se redes como a Smart Fit, boxes de CrossFit e a rede de Academias Populares — uma cultura de treino a céu aberto que é marca local.',

  bairrosNobres: ['Praia do Canto', 'Barro Vermelho', 'Jardim da Penha', 'Mata da Praia'],
  bairrosPopulares: ['São Pedro', 'Itararé', 'Maruípe', 'Jardim Camburi'],

  parques: [
    {
      nome: 'Orla de Camburi',
      descricao:
        'Calçadão à beira-mar com pista de cooper, ciclovia e quiosques ao longo de toda a praia — o principal corredor de corrida e caminhada da cidade.',
    },
    {
      nome: 'Parque Pedra da Cebola',
      descricao:
        'No Jardim da Penha, tem trilhas de caminhada, lagos, campo e um módulo do SOE com orientação gratuita; aberto das 5h às 22h.',
    },
    {
      nome: 'Curva da Jurema / Praia do Canto',
      descricao:
        'Calçadão à beira da baía, com faixa de areia para corrida e prática de esportes aquáticos, muito movimentado o dia inteiro.',
    },
  ],
  ciclovias:
    'Vitória tem cerca de 70 km de ciclovias, e a Grande Vitória soma mais de 200 km, incluindo a Ciclovia da Vida (cerca de 3,4 km) acoplada à Terceira Ponte.',

  clima:
    'O clima é tropical quente e úmido, com média em torno de 25 °C e umidade alta o ano todo, mas com baixa pluviosidade (cerca de 1.400 mm por ano).',
  climaTreino:
    'A baixa pluviosidade favorece a regularidade do treino ao ar livre, mas o calor e a umidade pedem os horários mais frescos (manhã e fim de tarde) e boa hidratação. O relevo plano da orla é convidativo para corrida e bike.',

  mobilidade:
    'Cidade-ilha conectada ao continente por pontes — com destaque para a Terceira Ponte, que liga a Vila Velha — e integrada à Grande Vitória pelo sistema Transcol. A orla plana favorece o deslocamento a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Maratona de Vitória',
      descricao:
        'Prova de 5 km, 10 km, 21 km e 42 km pela orla, que reuniu cerca de 7 mil corredores em 2025 — o principal evento de rua da capital.',
    },
    {
      nome: 'Meia Maratona Volta da Ilha',
      descricao:
        'Prova tradicional com largada na orla, reunindo milhares de atletas e reforçando a vocação esportiva da cidade.',
    },
  ],
  culturaEsportiva:
    'Vitória tem uma vocação rara para o esporte ao ar livre, sustentada pelo clima, pelo relevo plano do litoral e por políticas públicas pioneiras (SOE e Academias Populares gratuitas). Corrida, caminhada, ciclismo e esportes de areia fazem parte da rotina — não à toa é a capital mais ativa do país.',
  academias:
    'A oferta combina redes como a Smart Fit (Praia do Canto, Reta da Penha, Jardim Camburi) e boxes de CrossFit nos bairros nobres com a rede pública de Academias Populares e os módulos do SOE na orla — acesso ao treino para todos os perfis.',

  destaquesFitness: [
    'A capital nº 1 do Brasil em prática de atividade física (Vigitel: 53,3%).',
    'Políticas públicas pioneiras: SOE e Academias Populares gratuitas.',
    'Orla de Camburi e Curva da Jurema como corredores naturais de treino.',
    'Mais de 70 km de ciclovias e eventos de corrida de grande porte.',
  ],

  precos: {
    avulsaMin: 85,
    avulsaMax: 200,
    mensalMin: 420,
    mensalMax: 1200,
    onlineMin: 190,
    onlineMax: 490,
  },

  conclusao:
    'Em uma cidade que já é a mais ativa do Brasil, treinar com um personal trainer é potencializar uma cultura que já existe. Da orla de Camburi aos módulos gratuitos do SOE, Vitória oferece estrutura de sobra — e o acompanhamento profissional garante método, segurança e evolução constante.',

  vizinhas: ['rio-de-janeiro-rj', 'belo-horizonte-mg', 'niteroi-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Vitória', url: 'https://cidades.ibge.gov.br/brasil/es/vitoria/panorama' },
    { nome: 'Prefeitura de Vitória', url: 'https://www.vitoria.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
