import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'capitolio-mg',
  nome: 'Capitólio',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'capitolino',
  tipo: 'cidade',

  populacao: 10380,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  altitudeM: 745,

  resumoEconomico:
    'Conhecida como a "Rainha dos Lagos" e parte do chamado "Mar de Minas", Capitólio é a principal porta de entrada para os cânions do Lago de Furnas, um dos maiores espelhos d\'água artificiais do país, formado na década de 1960 pela represa da usina de Furnas. A economia do município gira em torno do turismo náutico de lazer: passeios de lancha, escuna e catamarã até os paredões rochosos e cachoeiras, marinas, pousadas, condomínios à beira do lago e o comércio ligado à alta temporada de visitantes. A piscicultura no reservatório também tem peso na economia local.',

  mercado:
    'Sendo um município pequeno com economia fortemente sazonal, voltada ao turismo, o mercado de personal trainers em Capitólio ainda é incipiente e concentrado em poucas academias e estúdios da cidade. A demanda tende a combinar moradores que buscam treino de força e condicionamento regular com visitantes e proprietários de casas de veraneio interessados em preparo físico para as atividades náuticas e de aventura oferecidas na região.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Nossa Senhora de Fátima'],

  parques: [
    {
      nome: 'Cânions de Furnas',
      descricao:
        'Paredões rochosos de até 20 metros de altura às margens do Lago de Furnas, com cachoeiras que despencam direto na água; acessados por passeios de barco regulados pela Marinha, são o principal cartão-postal da cidade e um cenário para atividades físicas ligadas à água.',
    },
    {
      nome: 'Lago de Furnas',
      descricao:
        'Represa formada pela usina hidrelétrica de Furnas, com centenas de quilômetros de orla; abriga marinas, praias de água doce e é o principal palco de esportes náuticos como wakeboard, stand up paddle, caiaque e jet ski.',
    },
    {
      nome: 'Cachoeiras e trilhas do entorno rural',
      descricao:
        'A zona rural de Capitólio reúne diversas cachoeiras e trilhas de acesso a mirantes e cânions, muitas vezes conciliadas com rapel e voo livre, aproveitando o relevo acidentado nas proximidades da Serra da Canastra.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal é limitada; o pedal e a corrida ao ar livre acontecem principalmente nas vias do centro e em estradas rurais de acesso aos mirantes e cachoeiras, sem estrutura segregada.',

  clima:
    'O clima é tropical de altitude, moldado pelo relevo acidentado nas proximidades da Serra da Canastra. Os verões são quentes e mais chuvosos, com temperaturas entre 23°C e 36°C, enquanto as noites de inverno podem cair a valores próximos de 7°C; fora do verão predominam dias ensolarados.',
  climaTreino:
    'A amplitude térmica entre dia e noite, especialmente no inverno, favorece o treino ao ar livre nas primeiras horas da manhã ou no fim da tarde; no verão, o calor e a maior incidência de chuvas pedem atenção à hidratação e a horários mais amenos.',

  mobilidade:
    'O acesso principal é pela rodovia estadual MG-050, que liga Capitólio a Belo Horizonte (cerca de 280 km) e passa por cidades como Piumhi. A locomoção interna é predominantemente feita por veículo próprio, e boa parte do deslocamento turístico dentro do município ocorre por via aquática, com embarcações levando visitantes até os cânions e praias do lago.',

  corridas: [
    {
      nome: 'Corrida Alterosa – Capitólio',
      descricao:
        'Etapa em Capitólio da Corrida Alterosa, série de corridas de rua realizada em parceria com emissora de TV em diversos municípios de Minas Gerais, com percursos de 5 km e 10 km para corredores amadores e profissionais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é marcada pelos esportes náuticos praticados no Lago de Furnas — wakeboard, stand up paddle, caiaque e jet ski, com competições regionais e nacionais — além de atividades de aventura como rapel e voo livre aproveitando os paredões e mirantes da região. Corrida e caminhada ficam mais restritas às vias do centro e estradas rurais.',
  academias:
    'A oferta de academias é pequena e concentrada no centro da cidade, com estúdios e espaços de treino funcional, musculação e modalidades como muay thai voltados principalmente à população fixa, já que o fluxo turístico prioriza as atividades náuticas e de aventura.',

  destaquesFitness: [
    'Rainha dos Lagos: porta de entrada para os cânions do Lago de Furnas, um dos maiores lagos artificiais do país.',
    'Forte cultura de esportes náuticos, como wakeboard, stand up paddle e caiaque, com competições no lago.',
    'Atividades de aventura na região, como rapel e voo livre, aproveitando o relevo perto da Serra da Canastra.',
    'Amplitude térmica entre dia e noite que favorece o treino ao ar livre em horários estratégicos.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Com uma rotina marcada pelo turismo náutico e por atividades de aventura no Lago de Furnas, Capitólio pede um preparo físico que dê conta tanto do dia a dia de quem mora na cidade quanto das exigências de esportes como wakeboard e trilhas. Um personal trainer ajuda a estruturar o treino considerando a oferta local reduzida de academias, o clima de altitude e a rotina sazonal do município.',

  vizinhas: ['passos-mg', 'formiga-mg', 'arcos-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Capitólio', url: 'https://cidades.ibge.gov.br/brasil/mg/capitolio/panorama' },
    { nome: 'Prefeitura de Capitólio-MG', url: 'https://www.capitolio.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
