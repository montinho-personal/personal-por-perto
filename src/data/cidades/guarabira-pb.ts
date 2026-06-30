import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guarabira-pb',
  nome: 'Guarabira',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'guarabirense',
  tipo: 'cidade',

  populacao: 57484,
  populacaoAno: 2022,
  idhm: 0.654,
  idhmClasse: 'médio',
  altitudeM: 98,

  resumoEconomico:
    'Conhecida como a "Rainha do Brejo", Guarabira é o principal polo regional do Brejo paraibano, exercendo forte influência sobre dezenas de municípios vizinhos pela sua função de centro de comércio e serviços. A economia gira em torno do comércio varejista e atacadista, dos serviços e da educação, com destaque para o Campus III da UEPB, que reforça o caráter universitário da cidade. O cartão-postal é a Serra da Jurema, onde fica a estátua de Cristo Rei, apontada como uma das maiores do Brasil.',

  mercado:
    'A condição de polo regional e a presença universitária sustentam um mercado fitness em crescimento, com academias, estúdios e profissionais autônomos atendendo tanto moradores quanto a população flutuante de estudantes e de quem vem de cidades menores do Brejo. O clima mais ameno do Brejo paraibano favorece o treino ao ar livre boa parte do ano.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Cidade Jardim', 'Primavera'],
  bairrosPopulares: ['Nações', 'Areia Branca', 'Cordeiro', 'Mutirão'],

  parques: [
    {
      nome: 'Serra da Jurema',
      descricao:
        'Ponto mais alto da cidade e principal atração, abriga a estátua de Cristo Rei — apontada como uma das maiores do Brasil — e oferece subida desafiadora com vista panorâmica, muito procurada por quem treina caminhada e corrida em aclive.',
    },
    {
      nome: 'Praça Lima e Moura',
      descricao:
        'Praça central tradicional de Guarabira, ponto de encontro e de caminhada no coração da cidade, com entorno arborizado e movimento constante no fim de tarde.',
    },
    {
      nome: 'Açude de Araçagi (entorno)',
      descricao:
        'Áreas de espelho d’água e estradas vicinais do Brejo no entorno servem de cenário para pedais e corridas mais longas, aproveitando o relevo e o clima da região.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é limitada e a extensão total não é divulgada em fonte oficial; o ciclismo de estrada pelas rodovias e vicinais do Brejo é forte, refletido em provas como o GP Rainha do Brejo.',

  clima:
    'Guarabira fica no Brejo paraibano, microrregião de relevo mais elevado e chuvas mais regulares que o Agreste e o Sertão vizinhos, o que lhe dá um clima semiúmido mais ameno e vegetação mais verde.',
  climaTreino:
    'O clima do Brejo, mais úmido e ameno que o restante do interior paraibano, torna o treino ao ar livre mais confortável — manhãs e fins de tarde agradáveis ajudam na constância, embora o período chuvoso peça atenção ao planejamento das atividades externas.',

  mobilidade:
    'A cidade é um entroncamento rodoviário do Brejo, cortada pela BR-035 e pela BR-075 (além da PB-075, que dá acesso ao Campus III da UEPB), posição que consolida seu papel de polo regional e facilita o fluxo de moradores das cidades vizinhas.',

  corridas: [
    {
      nome: 'Corrida Zenóbio Toscano',
      descricao:
        'Prova de rua tradicional realizada dentro do calendário cultural do Brejo, com percursos de 5 km e 21 km que atraem corredores da região.',
    },
    {
      nome: 'GP Rainha do Brejo de Ciclismo',
      descricao:
        'Tradicional prova de ciclismo sediada por Guarabira, que reforça a cultura de esportes de resistência aproveitando o relevo e as estradas do Brejo.',
    },
  ],
  culturaEsportiva:
    'Guarabira tem uma cena ativa de corridas de rua e ciclismo, com provas de 5 km, 10 km e até 21 km realizadas com frequência, além de eventos como o GP Rainha do Brejo. O público universitário e o papel de polo regional ajudam a sustentar esse calendário esportivo.',
  academias:
    'A oferta reúne academias de bairro, estúdios e profissionais autônomos, distribuídos do Centro aos bairros residenciais, com demanda reforçada pelo público universitário do Campus III da UEPB e por moradores das cidades vizinhas que buscam serviços em Guarabira.',

  destaquesFitness: [
    'Clima do Brejo paraibano, mais ameno e úmido, favorável ao treino ao ar livre.',
    'Serra da Jurema e a estátua de Cristo Rei como cenário e desafio de subida para caminhada e corrida.',
    'Papel de polo regional e público universitário (UEPB) que sustentam a demanda fitness.',
    'Calendário ativo de corridas de rua e ciclismo, do 5 km à meia maratona.',
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
    'Rainha do Brejo e polo regional de clima mais ameno, Guarabira combina cena universitária, calendário de corridas e cenários como a Serra da Jurema para quem quer treinar. Um personal trainer ajuda a aproveitar esse ambiente e a manter a constância, do iniciante a quem encara a subida do Cristo Rei ou uma meia maratona.',

  vizinhas: ['campina-grande-pb', 'joao-pessoa-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Guarabira', url: 'https://cidades.ibge.gov.br/brasil/pb/guarabira/panorama' },
    { nome: 'Prefeitura de Guarabira', url: 'https://www.guarabira.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
