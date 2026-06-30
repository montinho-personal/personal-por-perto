import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'coari-am',
  nome: 'Coari',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'coariense',
  tipo: 'cidade',

  populacao: 70616,
  populacaoAno: 2022,
  idhm: 0.586,
  idhmClasse: 'baixo',
  altitudeM: 47,

  resumoEconomico:
    'Localizada no médio Solimões, às margens do Lago de Coari, a cidade é um dos principais polos de petróleo e gás natural do Amazonas, com a Província Petrolífera de Urucu em seu território e o gasoduto Coari-Manaus partindo do Polo Arara. Além da indústria de óleo e gás, a economia se apoia na pesca, no extrativismo e no comércio ribeirinho que abastece comunidades do interior, fazendo da cidade um centro regional de serviços para o médio Solimões.',

  mercado:
    'O mercado de personal trainers em Coari é pequeno e concentrado em poucas academias do Centro e bairros próximos, somando-se ao atendimento ligado às estruturas do setor de petróleo e gás. Pela escala de cidade média do interior amazonense, o acompanhamento individual costuma ser combinado em academia ou em casa, e o formato online ganha espaço para quem tem rotina puxada ou mora em comunidades mais distantes.',

  bairrosNobres: ['Centro', 'Itamaraty', 'Pêra', 'Urucu'],
  bairrosPopulares: ['São Francisco', 'Tabocal', 'Espírito Santo', 'Cristo Rei'],

  parques: [
    {
      nome: 'Orla do Lago de Coari',
      descricao:
        'Principal cartão-postal da cidade, a orla às margens do Lago de Coari concentra caminhadas e encontros ao entardecer, com vista para o lago e o rio Solimões.',
    },
    {
      nome: 'Praças e áreas livres do Centro',
      descricao:
        'As praças centrais funcionam como pontos de caminhada e atividade física ao ar livre nos horários mais frescos do dia, especialmente no fim da tarde.',
    },
  ],
  ciclovias:
    'A cidade não possui malha cicloviária estruturada; o deslocamento por bicicleta acontece pelas vias urbanas, e a circulação na área central é curta e adensada.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com temperaturas médias elevadas, umidade alta e chuvas abundantes típicas do médio Solimões.',
  climaTreino:
    'O calor e a umidade altos pedem treinos no início da manhã ou após o pôr do sol, com hidratação reforçada. As chuvas frequentes tornam recomendável ter uma alternativa em ambiente coberto para manter a regularidade.',

  mobilidade:
    'Coari é acessível principalmente por transporte fluvial pelo rio Solimões e por via aérea, já que não há ligação rodoviária consolidada com Manaus. A presença da Província Petrolífera de Urucu e do gasoduto Coari-Manaus reforça o papel logístico da cidade. Dentro da área urbana, os deslocamentos são curtos, o que favorece treinar perto de casa ou no formato online.',

  corridas: [
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'O calendário esportivo local gira em torno de corridas e caminhadas pontuais promovidas pela prefeitura e por grupos locais, geralmente associadas a datas comemorativas da cidade.',
    },
  ],
  culturaEsportiva:
    'A vida ativa em Coari acontece sobretudo ao ar livre, na orla do Lago de Coari e nas praças centrais, com futebol e caminhadas como atividades mais populares. A cultura de treino estruturado é mais recente e cresce junto com a chegada de academias e profissionais à cidade.',
  academias:
    'A oferta de academias é restrita e concentrada no Centro e bairros vizinhos, atendendo tanto a população local quanto trabalhadores ligados ao setor de petróleo e gás. A orla e as praças funcionam como extensões ao ar livre nos horários mais frescos.',

  destaquesFitness: [
    'Orla do Lago de Coari como principal ponto de caminhada e vida ao ar livre.',
    'Cidade polo de petróleo e gás (Urucu) e centro de serviços do médio Solimões.',
    'Treinos preferencialmente ao amanhecer ou anoitecer por causa do clima equatorial.',
    'Acesso por via fluvial e aérea favorece o acompanhamento online para rotinas distantes.',
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
    'Em uma cidade ribeirinha do médio Solimões como Coari, treinar com método significa, antes de tudo, lidar bem com o calor e a umidade e manter a constância apesar das distâncias. Um personal trainer ajuda a ajustar horários, intensidade e hidratação, seja na academia, na orla do lago ou no acompanhamento online.',

  vizinhas: ['manaus-am', 'tefe-am'],

  fontes: [
    { nome: 'IBGE Cidades — Coari', url: 'https://cidades.ibge.gov.br/brasil/am/coari/panorama' },
    { nome: 'Prefeitura de Coari', url: 'https://prefeitura.coari.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
