import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uruacu-go',
  nome: 'Uruaçu',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'uruaçuense',
  tipo: 'cidade',

  populacao: 42546,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  pibPerCapita: 38484,
  pibPerCapitaAno: 2023,
  altitudeM: 502,

  resumoEconomico:
    'No norte de Goiás, às margens da BR-153 (Belém-Brasília), Uruaçu fica a cerca de 269 km de Goiânia e 244 km de Brasília, no eixo rodoviário que liga o Centro-Oeste ao Norte do país. A cidade é banhada a leste pelo lago da Usina Hidrelétrica de Serra da Mesa, um dos maiores reservatórios do Brasil em volume de água, que também margeia Minaçu, Niquelândia, Colinas do Sul, Campinaçu e Campinorte — o lago virou atrativo de pesca e turismo náutico e garante energia para o Sistema Interligado Nacional. No solo, a base é a pecuária de corte e a agricultura familiar, com expansão recente de soja e cana-de-açúcar, somadas aos serviços e à administração pública. O Distrito Agroindustrial de Uruaçu reúne cerca de 31 empresas em 258 mil m², dos setores metalúrgico, moveleiro e de beneficiamento de grãos, reforçando o papel da cidade como polo industrial do norte goiano.',

  mercado:
    'O mercado de personal trainers em Uruaçu é modesto e ainda em formação, típico de uma cidade média do interior goiano com pouco mais de 42 mil habitantes. A demanda vem principalmente de trabalhadores do Distrito Agroindustrial, do comércio e do funcionalismo público, que buscam treino individualizado diante de uma oferta limitada de academias especializadas, além de moradores que aproveitam o Lago de Serra da Mesa nos fins de semana para caminhada e atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Setor Central'],
  bairrosPopulares: ['Vila Santana', 'Vila Padre Eterno'],

  parques: [
    {
      nome: 'Parque das Araras',
      descricao:
        'Principal área verde urbana de Uruaçu, no bairro Vila Santana, com ampla arborização e lagos povoados de peixes. É o espaço mais procurado por quem caminha na cidade, embora venha passando por obras de revitalização.',
    },
    {
      nome: 'Lago de Serra da Mesa',
      descricao:
        'Reservatório da usina hidrelétrica de mesmo nome, um dos maiores do Brasil em volume d’água, que margeia o município a leste. Atrai pesca esportiva, passeios de barco e caminhada nas margens, sendo o principal cartão-postal da região.',
    },
    {
      nome: 'Parque de Exposições Agropecuárias',
      descricao:
        'Espaço usado para feiras e eventos do agronegócio local, também aproveitado por moradores para caminhada e atividades ao ar livre fora dos dias de evento.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada e contínua; o deslocamento de bicicleta acontece principalmente nas vias do Centro e do Setor Central, além das estradas vicinais que levam à zona rural e às margens do lago.',

  clima:
    'O clima é tropical, com verão chuvoso e inverno seco, característico do Cerrado goiano. A temperatura média anual gira em torno de 23°C, com mínimas próximas de 17°C nas manhãs mais frias do inverno e máximas que passam dos 35°C na transição para o período chuvoso.',
  climaTreino:
    'Entre maio e setembro, a estação seca reduz bastante a umidade do ar, o que pede hidratação reforçada e treinos no início da manhã ou no fim da tarde. Na estação chuvosa, de outubro a abril, o calor e as pancadas de chuva à tarde tornam o período da manhã o mais indicado para atividades ao ar livre.',

  mobilidade:
    'Uruaçu fica na BR-153 (Belém-Brasília), a cerca de 269 km de Goiânia e 244 km de Brasília, o que faz da rodovia o principal eixo de circulação de pessoas e cargas do município. O Distrito Agroindustrial, instalado às margens da rodovia, reforça esse papel logístico. O deslocamento interno é feito majoritariamente de carro e moto, com transporte coletivo urbano limitado, comum a cidades desse porte no interior goiano.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Uruaçu gira em torno do Lago de Serra da Mesa, usado para pesca esportiva, esportes náuticos e caminhada nas margens, e do Parque das Araras, principal espaço público de exercício da cidade. Não há um calendário consolidado e amplamente divulgado de corridas de rua no município.',
  academias:
    'A oferta de academias é modesta e concentrada no Centro e no Setor Central, com estúdios de musculação e funcional compatíveis com o porte da cidade; parte das academias locais está presente em plataformas como o Wellhub (ex-Gympass), sinal de um mercado fitness pequeno, mas já organizado.',

  destaquesFitness: [
    'BR-153 (Belém-Brasília) corta o município, ligando Uruaçu a Goiânia (269 km) e Brasília (244 km).',
    'Lago de Serra da Mesa, um dos maiores reservatórios do Brasil, oferece pesca esportiva, esportes náuticos e caminhada nas margens.',
    'Distrito Agroindustrial com cerca de 31 empresas sustenta parte da economia e da demanda por treino entre trabalhadores da indústria.',
    'Clima de Cerrado com seca marcante de maio a setembro, que exige hidratação reforçada e ajuste de horário no treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Banhada pelo Lago de Serra da Mesa e cortada pela BR-153, Uruaçu combina economia agroindustrial com um entorno natural que convida à atividade física ao ar livre. Um personal trainer ajuda a aproveitar bem o Parque das Araras e as margens do lago, ajustando o treino ao calor e à seca marcante do Cerrado goiano.',

  vizinhas: ['niquelandia-go', 'goianesia-go'],

  fontes: [
    { nome: 'IBGE Cidades — Uruaçu', url: 'https://cidades.ibge.gov.br/brasil/go/uruacu/panorama' },
    { nome: 'Prefeitura Municipal de Uruaçu', url: 'https://uruacu.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-05',
};
