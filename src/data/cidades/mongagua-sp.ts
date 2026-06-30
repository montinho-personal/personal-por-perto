import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mongagua-sp',
  nome: 'Mongaguá',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mongaguaense',
  tipo: 'cidade',

  populacao: 61951,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'No litoral sul paulista, integrada à Baixada Santista, Mongaguá é um clássico balneário de veraneio com cerca de 13 km de praias de areia larga voltadas para o mar aberto. A economia é movida pelo turismo de temporada, pelo comércio e pelos serviços, com forte sazonalidade no verão, quando a população multiplica. Entre a Serra do Mar e a orla, a cidade combina mata atlântica preservada e uma extensa faixa de areia que organiza a vida ativa local.',

  mercado:
    'Mongaguá registra um dos maiores índices de crescimento populacional do litoral sul paulista, com moradores permanentes — entre eles aposentados e famílias vindas da capital — somando-se aos veranistas. Esse adensamento amplia a procura por treino durante o ano inteiro, e não apenas na alta temporada. A oferta reúne academias de bairro, estúdios e a própria orla, com seus calçadões e ciclovias, formando um cenário propício ao trabalho de personal trainers.',

  bairrosNobres: ['Centro', 'Vila Atlântica', 'Vera Cruz', 'Itaóca'],
  bairrosPopulares: ['Agenor de Campos', 'Flórida Mirim', 'Itaguaí', 'Santa Eugênia'],

  parques: [
    {
      nome: 'Poço das Antas (Parque Turístico Umberto Salomone)',
      descricao:
        'Recanto ecológico encravado entre a Serra do Mar e o Centro, com cachoeiras, piscinas naturais e corredeiras em meio à mata atlântica. As trilhas e o ambiente preservado convidam a caminhadas e atividades ao ar livre fora da orla.',
    },
    {
      nome: 'Orla e calçadão de Mongaguá',
      descricao:
        'Faixa de cerca de 13 km de praias urbanizadas, com avenida da praia, calçadão arborizado e ciclovia que acompanham o mar — o principal palco de caminhada, corrida e pedal de moradores e veranistas.',
    },
    {
      nome: 'Praia de Vera Cruz e Praia da Vila Atlântica',
      descricao:
        'Trechos de orla com largas faixas de areia e estrutura de quiosques, usados para caminhadas à beira-mar, esportes de praia e atividade física em frente ao Oceanópolis e à região central.',
    },
  ],
  ciclovias:
    'A ciclovia da orla é o eixo da malha cicloviária da cidade: acompanha a avenida da praia ao longo de boa parte dos cerca de 13 km de faixa de areia, ligando os balneários do Centro ao Agenor de Campos e favorecendo o pedal e o treino de longa distância à beira-mar.',

  clima:
    'O clima é litorâneo úmido, quente e chuvoso no verão e ameno no inverno, com a umidade do mar e a Serra do Mar ao fundo marcando o tempo durante todo o ano.',
  climaTreino:
    'A orla extensa permite treinar ao ar livre em qualquer estação; no verão, a atenção fica para o calor, a umidade e as chuvas de fim de tarde, priorizando a manhã e o começo da noite e cuidando da hidratação.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pela Rodovia Padre Manoel da Nóbrega (SP-055), que liga Mongaguá à Praia Grande, a Itanhaém e às demais cidades da Baixada Santista; dentro da cidade, a orla plana e arejada torna a bike e a caminhada opções reais de deslocamento.',

  corridas: [
    {
      nome: 'Meia Maratona de Mongaguá',
      descricao:
        'Prova de rua com percursos de 21 km, 10 km, 5 km e caminhada, com largada na região central e trajeto pela avenida da praia, reunindo corredores do litoral e da Grande São Paulo.',
    },
    {
      nome: 'Corrida e Caminhada Aniversário de Mongaguá',
      descricao:
        'Evento tradicional do calendário municipal, realizado em dezembro com corrida de 7 km, caminhada de 3 km e corrida kids, com largada na Praça Dudu Samba e percurso pela avenida da praia.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Mongaguá gira em torno do mar e da orla: caminhada e corrida no calçadão, pedal na ciclovia da avenida da praia e esportes na areia fazem parte da rotina de moradores e veranistas, complementados por trilhas e banhos de cachoeira no Poço das Antas.',
  academias:
    'A oferta reúne academias de bairro, estúdios e espaços de treino funcional, complementados pelos calçadões e pela ciclovia da orla, que funcionam como uma grande extensão de treino ao ar livre.',

  destaquesFitness: [
    'Cerca de 13 km de praias de areia larga no litoral sul paulista, com a Serra do Mar ao fundo.',
    'Calçadão arborizado e ciclovia ao longo da avenida da praia, do Centro ao Agenor de Campos.',
    'Poço das Antas: cachoeiras e piscinas naturais na mata atlântica para trilhas e atividade ao ar livre.',
    'Calendário de corridas na orla, com a Meia Maratona de Mongaguá e a Corrida Aniversário da cidade.',
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
    'Com cerca de 13 km de praias, orla plana, ciclovia à beira-mar e o refúgio verde do Poço das Antas, Mongaguá é um cenário convidativo para treinar ao ar livre o ano todo. Um personal trainer ajuda a transformar o calçadão da avenida da praia e a faixa de areia em um plano consistente, do iniciante a quem busca encarar a meia maratona.',

  vizinhas: ['praia-grande-sp', 'itanhaem-sp', 'peruibe-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mongaguá', url: 'https://cidades.ibge.gov.br/brasil/sp/mongagua/panorama' },
    { nome: 'Prefeitura de Mongaguá', url: 'https://mongagua.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
