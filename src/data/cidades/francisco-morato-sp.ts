import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'francisco-morato-sp',
  nome: 'Francisco Morato',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'moratense',
  tipo: 'cidade',

  populacao: 165139,
  populacaoAno: 2022,
  idhm: 0.703,
  idhmClasse: 'alto',
  altitudeM: 761,

  resumoEconomico:
    'Francisco Morato fica na sub-região norte da Região Metropolitana de São Paulo e é uma típica cidade-dormitório: emancipada de Franco da Rocha em 1965, cresceu ao longo da ferrovia, em relevo muito acidentado, com boa parte da população trabalhando na capital ou em municípios vizinhos. A economia local é fortemente baseada em comércio e serviços de bairro, e a alta densidade demográfica e a dependência do transporte para São Paulo marcam o dia a dia da cidade.',

  mercado:
    'Por ser uma cidade-dormitório de renda média mais baixa dentro da RM de SP, o mercado fitness de Francisco Morato é enxuto e concentrado em academias de bairro e treino funcional a preços acessíveis. A procura por personal trainers tende a vir de quem quer aproveitar melhor o pouco tempo livre entre os longos deslocamentos diários, buscando treinos objetivos e adaptados à rotina de quem depende do trem.',

  bairrosNobres: ['Centro', 'Jardim Santo Antônio', 'Vila Heloísa', 'Jardim Silvia'],
  bairrosPopulares: ['Belém Capela', 'Belém Estação', 'Chácara Camponesa', 'Jardim Cinira'],

  parques: [
    {
      nome: 'Centro Social Urbano (CSU)',
      descricao:
        'Espaço público municipal de esporte e lazer, com quadras e área para atividades físicas; é ponto de partida de eventos esportivos da cidade e um dos principais locais para treino ao ar livre.',
    },
    {
      nome: 'Entorno da Serra dos Cristais',
      descricao:
        'O relevo acidentado que cerca a cidade oferece ladeiras e vias íngremes que acabam servindo de percurso desafiador para quem corre, pedala ou treina resistência ao ar livre.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'As praças e ruas da região central, próximas à estação da CPTM, concentram parte da caminhada e da corrida do dia a dia dos moradores.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e o relevo muito acidentado dificulta o pedal urbano; boa parte da atividade ao ar livre acontece nas vias dos bairros e nas ladeiras da cidade.',

  clima:
    'O clima é subtropical de altitude, ameno em comparação à capital, com verões chuvosos e invernos mais secos e frios. A posição na serra e a altitude em torno de 760 metros deixam as noites e madrugadas frias no inverno, quando as temperaturas podem cair de forma acentuada.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano; no verão, as chuvas de fim de tarde pedem flexibilidade de horário, e no inverno vale aquecer bem antes de treinar cedo, por causa do frio da serra.',

  mobilidade:
    'A mobilidade de Francisco Morato gira em torno da Linha 7-Rubi da CPTM, que liga a cidade a São Paulo (Palmeiras-Barra Funda) e a Jundiaí, com as estações Francisco Morato e Botujuru — o trem é o principal meio de ligação com a capital. Ônibus municipais e intermunicipais complementam o sistema, mas os deslocamentos diários costumam ser longos, reforçando o caráter de cidade-dormitório.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Moratense',
      descricao:
        'Prova ligada às comemorações de aniversário da cidade, com percursos de corrida e de caminhada, promovida para incentivar a prática esportiva entre os moradores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é comunitária, apoiada em equipamentos públicos como o Centro Social Urbano, em corridas de rua ligadas ao calendário da cidade e no uso das vias íngremes dos bairros para caminhada e corrida.',
  academias:
    'A oferta é formada sobretudo por academias de bairro e estúdios de treino funcional espalhados pelas regiões residenciais, com portes e preços compatíveis com uma cidade-dormitório da periferia metropolitana.',

  destaquesFitness: [
    'Cidade-dormitório da sub-região norte da RM de SP, com rotina marcada por longos deslocamentos.',
    'Ligação com a capital pela Linha 7-Rubi da CPTM, com as estações Francisco Morato e Botujuru.',
    'Relevo muito acidentado, com ladeiras que viram percurso natural de treino de resistência.',
    'Clima ameno de altitude na serra, favorável ao treino ao ar livre boa parte do ano.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade-dormitório de relevo acidentado e clima ameno na serra ao norte de São Paulo, Francisco Morato tem uma rotina apertada entre trabalho na capital e longos deslocamentos de trem. Um personal trainer ajuda a encaixar treinos objetivos nesse dia a dia corrido, aproveitando as ladeiras e os espaços públicos da cidade para manter a constância.',

  vizinhas: ['franco-da-rocha-sp', 'caieiras-sp', 'mairipora-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Francisco Morato', url: 'https://cidades.ibge.gov.br/brasil/sp/francisco-morato/panorama' },
    { nome: 'Prefeitura de Francisco Morato', url: 'https://www.franciscomorato.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3516309' },
  ],
  atualizadoEm: '2026-06-29',
};
