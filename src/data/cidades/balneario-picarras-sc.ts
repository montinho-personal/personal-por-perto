import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'balneario-picarras-sc',
  nome: 'Balneário Piçarras',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'piçarrense',
  tipo: 'cidade',

  populacao: 27127,
  populacaoAno: 2022,
  idhm: 0.756,
  idhmClasse: 'alto',
  altitudeM: 3,

  resumoEconomico:
    'No litoral norte catarinense, entre Penha e Barra Velha, Balneário Piçarras integra a região turística Costa Verde & Mar. A cidade tem origem na pesca artesanal de colonizadores açorianos e, ao longo do século XX, ganhou fama como um polo de esportes náuticos a motor, chegando a ser chamada de "capital brasileira do jet-ski". Hoje a economia gira em torno do turismo de veraneio, da construção civil e do mercado imobiliário — impulsionados pela proximidade com Balneário Camboriú e Penha —, além do comércio e de resquícios da pesca artesanal, com a população multiplicando-se na alta temporada de verão.',

  mercado:
    'O mercado fitness de Balneário Piçarras é enxuto e fortemente sazonal, concentrado em academias de porte pequeno e médio no Centro e nos bairros próximos à orla. A procura por personal trainers tende a aumentar no verão, com a chegada de veranistas e donos de segundas residências, enquanto a proximidade com polos maiores como Balneário Camboriú e Itajaí amplia as referências de preço e de serviço para quem mora na cidade o ano todo.',

  bairrosNobres: ['Centro', 'Itacolomi', 'Nossa Senhora da Paz'],
  bairrosPopulares: ['Santo Antônio', 'Iate Clube', 'Costa e Silva'],

  parques: [
    {
      nome: 'Praia Central e orla da Avenida Getúlio Vargas',
      descricao:
        'Faixa de areia mais movimentada da cidade, com calçadão à beira-mar que concentra caminhada, corrida e treino ao ar livre, além de sediar eventos esportivos na alta temporada.',
    },
    {
      nome: 'Praia Norte (Itacolomi)',
      descricao:
        'Trecho de praia mais tranquilo, próximo a condomínios e a bairros residenciais, usado por moradores para caminhada e corrida fora do eixo mais turístico do Centro.',
    },
    {
      nome: 'Praia do Jaca (Jaques)',
      descricao:
        'Praia mais afastada, com ondas maiores e procurada por surfistas; o entorno oferece um cenário mais natural para quem busca treinar longe da movimentação central.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da orla; boa parte do pedal e da corrida acontece na Avenida Beira-Mar e nos calçadões junto à Praia Central.',

  clima:
    'O clima é subtropical úmido, com verões quentes e chuvosos e invernos amenos, típico do litoral catarinense. A brisa marítima ameniza o calor, mas a alta temporada (dezembro a março) combina temperaturas elevadas, umidade e forte incidência solar, enquanto o outono e o inverno trazem dias mais frescos e agradáveis para atividades ao ar livre.',
  climaTreino:
    'No verão, o ideal é treinar bem cedo ou no fim da tarde, com hidratação e proteção solar reforçadas, aproveitando a brisa do mar na orla; no outono e no inverno, mais amenos, a janela de conforto para treinar ao ar livre se amplia ao longo do dia.',

  mobilidade:
    'O acesso principal a Balneário Piçarras se dá pela BR-101, que corta o município e o liga a Penha, Navegantes, Itajaí e Balneário Camboriú, com forte aumento de fluxo na alta temporada. O transporte coletivo urbano, que passou a interligar todos os bairros a partir de 2023, é feito por ônibus, e o Aeroporto de Navegantes, nas proximidades, atende parte da demanda turística da região.',

  corridas: [
    {
      nome: 'Aquathlon Balneário Piçarras',
      descricao:
        'Prova organizada pela Correr e Nadar Eventos Esportivos na Praia Central, que combina natação em águas abertas e corrida (trechos de até 5 km); já soma diversas edições e reúne atletas de natação e triathlon do litoral catarinense.',
    },
    {
      nome: 'Travessia entre os Molhes',
      descricao:
        'Tradicional prova de natação em águas abertas realizada junto ao molhe da Avenida Getúlio Vargas, com mais de duas dezenas de edições e realizada no mesmo fim de semana do Aquathlon local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Balneário Piçarras é voltada ao mar: vela, jet-ski e outros esportes náuticos a motor marcaram a história recente da cidade, ao lado do surfe na Praia do Jaca e de provas de natação em águas abertas e aquathlon na Praia Central. Caminhada e corrida na orla completam a rotina de quem treina ao ar livre, com programação de esportes de praia reforçada no verão.',
  academias:
    'A oferta reúne academias locais de musculação e treino funcional, concentradas no Centro e nos bairros próximos à orla, com porte compatível com uma cidade litorânea pequena cuja demanda cresce na alta temporada.',

  destaquesFitness: [
    'Cidade de veraneio do litoral norte catarinense, com praias como a Central, a Norte (Itacolomi) e a do Jaca.',
    'Histórico como polo de esportes náuticos a motor, ao lado de vela, surfe e provas de natação em águas abertas.',
    'Orla da Avenida Getúlio Vargas usada para caminhada, corrida e treino ao ar livre o ano todo.',
    'Proximidade com Balneário Camboriú e Penha pela BR-101, o que amplia opções de serviços fitness na região.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade litorânea, turística e marcada pela sazonalidade do verão, Balneário Piçarras pede um treino que aproveite as praias e a orla e que respeite o calor e a umidade da alta temporada. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância ao longo do ano, dentro e fora da temporada.',

  vizinhas: ['penha-sc', 'barra-velha-sc', 'balneario-camboriu-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Balneário Piçarras', url: 'https://cidades.ibge.gov.br/brasil/sc/balneario-picarras/panorama' },
    { nome: 'Prefeitura de Balneário Piçarras', url: 'https://balneariopicarras.atende.net/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/4212809' },
  ],
  atualizadoEm: '2026-07-02',
};
