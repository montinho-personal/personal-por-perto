import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mateiros-to',
  nome: 'Mateiros',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'mateirense',
  tipo: 'cidade',

  populacao: 2748,
  populacaoAno: 2022,
  idhm: 0.607,
  idhmClasse: 'médio',
  altitudeM: 493,

  resumoEconomico:
    'No sudeste do Tocantins, em pleno Cerrado, Mateiros é o principal município de acesso ao Jalapão e abriga grande parte do Parque Estadual do Jalapão, unidade de conservação de cerca de 158 mil hectares com dunas alaranjadas, fervedouros e cachoeiras que atraem visitantes de todo o país. Emancipado de Ponte Alta do Tocantins no início dos anos 1990, o município é reconhecido oficialmente como Capital Nacional do Capim Dourado, artesanato produzido sobretudo na comunidade quilombola do Mumbuca a partir de uma fibra nativa exclusiva do Cerrado tocantinense. Ao lado do turismo de aventura, a economia combina agropecuária — com avanço da fronteira agrícola de grãos típica do Matopiba — e a administração pública, que responde por parcela relevante do PIB de um município muito pequeno e de baixíssima densidade demográfica.',

  mercado:
    'Mateiros é um dos municípios mais isolados do circuito turístico do Tocantins, e o mercado fitness formal é praticamente inexistente: não há indícios de rede estruturada de academias na sede. A procura por atividade orientada tende a se misturar ao próprio turismo de aventura — guias de trekking, rapel e passeios 4x4 pelas dunas e cachoeiras —, e quem busca treino individualizado depende de atendimento domiciliar ou de acompanhamento online.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Mumbuca', 'Prata', 'Boa Esperança'],

  parques: [
    {
      nome: 'Parque Estadual do Jalapão',
      descricao:
        'Unidade de conservação de cerca de 158 mil hectares que se estende por Mateiros e municípios vizinhos, reunindo dunas, cachoeiras e fervedouros. É o principal cenário de trekking e ecoturismo da região, com trilhas que variam de curtas caminhadas a travessias mais longas pelo Cerrado.',
    },
    {
      nome: 'Dunas do Jalapão (Serra do Espírito Santo)',
      descricao:
        'Formação de areia alaranjada junto à Serra do Espírito Santo, cercada por buritis e pequenas lagoas. É um dos trekkings mais procurados da região, geralmente feito ao entardecer, quando o calor é menor e a luz realça a cor da areia.',
    },
    {
      nome: 'Cachoeiras e fervedouros do Jalapão',
      descricao:
        'Quedas d\'água como a Cachoeira da Formiga e fervedouros como o Bela Vista e o Encontro das Águas — nascentes onde a correnteza subterrânea impede o banhista de afundar — formam um circuito de trilhas, rapel e banho bastante explorado por quem treina ao ar livre na região.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária no município; as vias internas e de acesso às atrações são majoritariamente de terra e areia, mais associadas a passeios de quadriciclo e veículos 4x4 do que ao ciclismo urbano.',

  clima:
    'O clima é tropical de Cerrado, com duas estações bem marcadas: a seca, de maio a setembro, considerada a melhor época para visitar o Jalapão, com estradas mais firmes e baixa umidade; e o período chuvoso, de outubro a abril, que eleva o volume de água nos rios e dificulta o acesso às atrações pelas estradas de terra.',
  climaTreino:
    'O calor e o sol forte do Cerrado pedem atividade bem cedo ou no fim da tarde, com hidratação reforçada, principalmente na estação seca, quando a baixa umidade aumenta o desgaste físico. Na estação chuvosa, trilhas e estradas de acesso às dunas e cachoeiras ficam mais difíceis ou impraticáveis, concentrando boa parte do treino ao ar livre no período seco.',

  mobilidade:
    'O acesso a Mateiros é feito a partir de Palmas, a cerca de 300 km de distância pelas rodovias TO-050 e TO-255, em viagem de 5 a 6 horas de carro — a rodovia pavimentada mais próxima fica em Ponte Alta do Tocantins, e o trecho final até a cidade e as atrações do Jalapão é de estrada de terra e areia, que pede veículo 4x4 e cuidado redobrado na estação chuvosa. Não há transporte coletivo urbano estruturado, e o deslocamento interno e até as comunidades rurais do município depende de veículo próprio.',

  corridas: [
    {
      nome: 'Corridas de Montanha – Deserto do Jalapão',
      descricao:
        'Prova de trail running disputada em Mateiros, com largada no CEIT (Centro de Exposição e Informação Turística) e percursos que já reuniram distâncias de 8 km, 13 km, 21 km e 42 km (Endurance), além de caminhada, aproveitando o terreno arenoso do Jalapão.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Mateiros gira em torno do turismo de aventura: trekking pelas dunas e cachoeiras, rapel em quedas d\'água, banho em fervedouros e passeios de quadriciclo e 4x4 pelas estradas de areia do Jalapão. O município também é ponto de passagem do Rally Jalapão, etapa do Brasileiro de Rally Raid que já teve trechos cronometrados entre Mateiros e São Félix do Tocantins, reforçando a vocação off-road da região. Mais recentemente, a prova de trail running Deserto do Jalapão passou a integrar o calendário esportivo local.',
  academias:
    'A oferta de academias estruturadas é praticamente inexistente, compatível com o porte muito pequeno e isolado do município; quem busca treino orientado costuma recorrer a atendimento domiciliar, aulas ao ar livre ou acompanhamento online, num modelo próximo ao dos guias de turismo de aventura que já atuam na região.',

  destaquesFitness: [
    'Porta de entrada mais conhecida do Jalapão, com grande parte do Parque Estadual do Jalapão dentro do município.',
    'Capital Nacional do Capim Dourado, com a comunidade quilombola do Mumbuca como polo de artesanato e cultura local.',
    'Corridas de Montanha – Deserto do Jalapão, prova de trail running realizada na cidade com percursos de 8 a 42 km.',
    'Cidade isolada e de acesso por estradas de terra e areia, praticamente sem rede de academias — predomina o treino ao ar livre e guiado.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cercada pelas dunas, cachoeiras e fervedouros do Jalapão, Mateiros vive muito mais do turismo de aventura do que de uma estrutura fitness tradicional, quase inexistente na cidade. Um personal trainer com atendimento domiciliar ou online ajuda moradores a manter a constância em um município isolado, respeitando o calor do Cerrado e os limites de acesso impostos pelas estradas de terra na estação chuvosa.',

  vizinhas: ['palmas-to', 'porto-nacional-to'],

  fontes: [
    { nome: 'IBGE Cidades — Mateiros', url: 'https://cidades.ibge.gov.br/brasil/to/mateiros/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Mateiros', url: 'https://www.mateiros.to.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
