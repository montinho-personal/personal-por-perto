import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'arroio-do-meio-rs',
  nome: 'Arroio do Meio',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'arroio-meense',
  tipo: 'cidade',

  populacao: 21958,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',

  resumoEconomico:
    'Arroio do Meio fica no Alto Taquari, região do Vale do Taquari, às margens dos rios Taquari e Forqueta, a cerca de 9 km de Lajeado. A colônia surgiu em 1853 e recebeu os primeiros imigrantes alemães a partir de 1860, seguidos por famílias italianas nas décadas seguintes; o município se emancipou de Lajeado em 1934. Hoje a indústria responde por mais de 59% da economia local — com destaque para calçados (como a Calçados Bottero), têxtil, metalmecânica e alimentos e bebidas —, o que faz de Arroio do Meio a segunda maior economia do Vale do Taquari. O comércio e os serviços completam a base urbana, enquanto a zona rural, formada por pequenas propriedades de tradição alemã e italiana, mantém a produção de milho, fumo, suínos, aves e leite.',

  mercado:
    'O mercado fitness de Arroio do Meio é típico de uma cidade média e industrial do interior gaúcho: academias de bairro, estúdios de treino funcional e profissionais de personal trainer atendem sobretudo quem trabalha em turnos nas fábricas de calçados, têxteis e alimentos. A procura por acompanhamento individualizado cresce entre trabalhadores da indústria que buscam horários alternativos de treino e entre moradores do Centro que valorizam estrutura como a da Área de Lazer Pérola do Vale para caminhada e corrida.',

  bairrosNobres: ['Centro', 'São Caetano', 'Dom Pedro II', 'Navegantes'],
  bairrosPopulares: ['Aimoré', 'Bela Vista', 'Medianeira', 'Barra do Forqueta'],

  parques: [
    {
      nome: 'Área de Lazer Pérola do Vale',
      descricao:
        'Principal espaço público de lazer ativo do município, no Centro. Reúne caminhódromo, academia ao ar livre, quadras esportivas, pista de skate, banheiros, iluminação e área verde — é também o ponto de largada de provas do calendário regional de corrida.',
    },
    {
      nome: 'Praça Flores da Cunha',
      descricao:
        'Praça central em homenagem a José Antônio Flores da Cunha, que decretou a criação do município. Tem área de lazer infantil, quadra para prática esportiva e acesso à internet, funcionando como ponto de encontro no Centro.',
    },
    {
      nome: 'Centro de Lazer Arroio Grande',
      descricao:
        'Espaço de lazer e eventos comunitários no distrito de Arroio Grande, na área rural do município — opção de convivência e atividade física fora do perímetro urbano central.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal ainda é limitada e não há dados oficiais amplamente divulgados sobre extensão de ciclovias; o deslocamento de bicicleta e a corrida ao ar livre concentram-se nas vias do Centro e no entorno da Área de Lazer Pérola do Vale.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios, com geadas ocasionais nas manhãs mais rigorosas. Por ficar no vale dos rios Taquari e Forqueta, o município é historicamente sujeito a cheias — a mais grave nos registros recentes ocorreu em maio de 2024, quando a ponte sobre o rio Taquari que liga Arroio do Meio a Lajeado foi destruída, chegando a isolar parte do município.',
  climaTreino:
    'No verão, o calor e a umidade pedem treino no início da manhã ou no fim da tarde, com boa hidratação; no inverno, as manhãs frias favorecem horários mais quentes do dia ou o treino indoor. Em períodos de chuva intensa, é preciso evitar as áreas baixas próximas aos rios Taquari e Forqueta, sujeitas a cheias, e priorizar a Área de Lazer Pérola do Vale ou academias do Centro.',

  mobilidade:
    'O município é cortado pela BR-386, principal eixo rodoviário que liga a região a Lajeado (cerca de 9 km) e a Porto Alegre (cerca de 126 km, por volta de 1h30 de carro). O acesso também se dá pela RS-130, que faz a ligação com a BR-386 e a RS-483 em Lajeado. O deslocamento urbano é feito majoritariamente por carro, e as enchentes de 2024 chegaram a destruir pontes sobre os rios Taquari e Forqueta, exigindo o uso emergencial de balsa para transporte de moradores.',

  corridas: [
    {
      nome: 'Circuito dos Vales — Etapa Pérola do Vale',
      descricao:
        'Etapa do Circuito dos Vales realizada em Arroio do Meio, com largada na Área de Lazer Pérola do Vale e provas de 3 km, 5 km e 10 km, além de caminhada e corridinha infantil — reúne milhares de atletas do Vale do Taquari, geralmente na abertura da temporada.',
    },
    {
      nome: 'Circuito Trilhas e Montanhas RS — Etapa Morro Gaúcho',
      descricao:
        'Etapa de trail running do Circuito Trilhas e Montanhas sediada em Arroio do Meio, com percurso de cerca de 6,5 km em trechos de trilha, subidas e terreno de terra, testando corredores em contato com a área rural do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a herança da colonização alemã e italiana, presente em festas e associações comunitárias, com uma cena de corrida de rua e trail running em crescimento, puxada pela etapa local do Circuito dos Vales e pela etapa do Circuito Trilhas e Montanhas RS. A Área de Lazer Pérola do Vale funciona como ponto de encontro diário para caminhada e corrida.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de treino funcional, como Vital Academia, Academia Corpo e Alma, Bioteam Academias e Estúdio FUNcional, concentrados principalmente no Centro, com porte compatível com uma cidade média e industrial do interior gaúcho.',

  destaquesFitness: [
    'Segunda maior economia do Vale do Taquari, com indústria de calçados, têxtil, metalmecânica e alimentos respondendo por mais de 59% do PIB municipal.',
    'Área de Lazer Pérola do Vale, no Centro, com caminhódromo, academia ao ar livre, quadras e pista de skate — o principal espaço de treino ao ar livre da cidade.',
    'Colonização alemã e italiana iniciada em 1860, base da identidade cultural do Alto Taquari, região formada por pequenas propriedades rurais.',
    'Cheias recorrentes dos rios Taquari e Forqueta, como as de maio de 2024, que exigem atenção a horários e a áreas seguras para o treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 125,
    onlineMax: 350,
  },

  conclusao:
    'Cidade industrial do Alto Taquari, com economia puxada por calçados, têxtil e metalmecânica e uma rotina marcada pelos turnos de fábrica, Arroio do Meio tem na Área de Lazer Pérola do Vale seu principal ponto de treino ao ar livre. Um personal trainer ajuda a encaixar o treino na rotina da indústria local, respeitando as estações do Vale do Taquari e o histórico de cheias dos rios Taquari e Forqueta, para manter a constância ao longo do ano.',

  vizinhas: ['lajeado-rs', 'estrela-rs', 'teutonia-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Arroio do Meio', url: 'https://cidades.ibge.gov.br/brasil/rs/arroio-do-meio/panorama' },
    { nome: 'Atlas Brasil — IDHM Arroio do Meio', url: 'https://www.atlasbrasil.org.br/perfil/municipio/430100' },
    { nome: 'Prefeitura de Arroio do Meio', url: 'https://arroiodomeio.rs.gov.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
