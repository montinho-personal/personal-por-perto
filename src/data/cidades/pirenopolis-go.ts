import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pirenopolis-go',
  nome: 'Pirenópolis',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'pirenopolino',
  tipo: 'cidade',

  populacao: 26690,
  populacaoAno: 2022,
  idhm: 0.690,
  idhmClasse: 'médio',
  altitudeM: 770,

  resumoEconomico:
    'Fundada no século XVIII no ciclo do ouro, Pirenópolis é uma cidade histórica goiana com centro tombado pelo IPHAN, encravada aos pés da Serra dos Pireneus. Sua economia gira em torno do turismo histórico e de natureza, das pousadas, da gastronomia e dos eventos culturais — com destaque para a Festa do Divino Espírito Santo e suas Cavalhadas. As cachoeiras da região e a proximidade de Brasília e Goiânia sustentam um fluxo constante de visitantes ao longo do ano.',

  mercado:
    'Cidade pequena e turística, Pirenópolis tem mercado fitness compacto, voltado tanto à comunidade local quanto a turistas que buscam atividade ao ar livre, trilhas e cachoeiras. A demanda por personal trainers se concentra em acompanhamento de trilhas, condicionamento para a serra e atendimento personalizado em pousadas e hospedagens.',

  bairrosNobres: ['Centro Histórico', 'Bairro do Carmo', 'Bonfim'],
  bairrosPopulares: ['Alto do Frota', 'Frota', 'Jardim Pireneus'],

  parques: [
    {
      nome: 'Parque Estadual da Serra dos Pireneus',
      descricao:
        'Área de conservação do Cerrado com trilhas, mirantes e formações rochosas, é o principal destino de caminhada e trekking da região, com paisagens de altitude.',
    },
    {
      nome: 'Cachoeiras dos Dragões e Bonsucesso',
      descricao:
        'Complexos de cachoeiras com trilhas de acesso que funcionam como percursos naturais de caminhada e atividade física ao ar livre.',
    },
    {
      nome: 'Centro Histórico e Rua do Lazer',
      descricao:
        'O casario tombado e as ruas de pedra do centro são percorridos a pé por moradores e turistas, servindo de cenário para caminhadas urbanas leves.',
    },
  ],
  ciclovias:
    'Por ser uma cidade histórica de pequeno porte, com ruas de pedra no centro tombado, Pirenópolis não tem malha cicloviária estruturada; o ciclismo acontece sobretudo nas estradas vicinais e em trilhas de mountain bike rumo à serra e às cachoeiras.',

  clima:
    'O clima é tropical de Cerrado, com inverno seco e verão chuvoso. A estação seca (de maio a setembro) traz baixa umidade do ar e amplitude térmica acentuada, com dias quentes e noites amenas pela altitude.',
  climaTreino:
    'Na estação seca, a baixa umidade pede hidratação reforçada e atenção às vias respiratórias; os horários de início da manhã e fim de tarde são os mais confortáveis para correr e fazer trilha. O verão concentra chuvas no fim do dia, o que favorece treinos pela manhã.',

  mobilidade:
    'O acesso principal se dá pela GO-338, ligada à BR-070, posicionando a cidade a cerca de 150 km de Brasília e de Goiânia. O deslocamento interno é curto, mas o centro histórico tem ruas de pedra e trânsito restrito; o acesso às cachoeiras e à serra costuma exigir veículo.',

  corridas: [
    {
      nome: 'Provas de trail run na Serra dos Pireneus',
      descricao:
        'A região recebe eventos de corrida em trilha que exploram os percursos de serra e Cerrado, atraindo corredores de Brasília e Goiânia em busca de altimetria e terreno técnico.',
    },
    {
      nome: 'Caminhadas e trilhas guiadas',
      descricao:
        'Roteiros até cachoeiras e mirantes funcionam como atividade física orientada, combinando esforço físico com o turismo de natureza da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Pirenópolis é fortemente ligada à natureza: trilhas, trail running, mountain bike e banhos de cachoeira fazem parte da rotina de quem vive e visita a cidade. As tradições culturais, como a Festa do Divino e as Cavalhadas, convivem com um público crescente de turismo de aventura.',
  academias:
    'A oferta de academias é enxuta e voltada à comunidade local e à rede de pousadas, com estúdios de menor porte e personal trainers que atuam ao ar livre, em trilhas e em atendimento individual aos hóspedes.',

  destaquesFitness: [
    'Serra dos Pireneus e cachoeiras como cenário natural para trilhas e trail running.',
    'Cidade histórica tombada, com centro percorrido a pé entre casario colonial.',
    'Proximidade de Brasília e Goiânia (cerca de 150 km), com fluxo turístico constante.',
    'Clima de Cerrado com altitude amena, favorável a treinos ao ar livre na seca.',
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
    'Cidade histórica aos pés da Serra dos Pireneus, Pirenópolis combina patrimônio colonial e natureza exuberante — um cenário ideal para quem quer treinar ao ar livre. Um personal trainer ajuda a aproveitar trilhas e cachoeiras com segurança, ajustando o esforço ao terreno de serra e à baixa umidade da estação seca.',

  vizinhas: ['anapolis-go', 'goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Pirenópolis', url: 'https://cidades.ibge.gov.br/brasil/go/pirenopolis/panorama' },
    { nome: 'Prefeitura de Pirenópolis', url: 'https://www.pirenopolis.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
