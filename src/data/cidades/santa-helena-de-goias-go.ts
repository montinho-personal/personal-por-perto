import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-helena-de-goias-go',
  nome: 'Santa Helena de Goiás',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'santa-helenense',
  tipo: 'cidade',

  populacao: 38492,
  populacaoAno: 2022,
  idhm: 0.724,
  idhmClasse: 'alto',
  pibPerCapita: 51848,
  pibPerCapitaAno: 2023,
  altitudeM: 570,

  resumoEconomico:
    'No sudoeste goiano, a cerca de 209 km de Goiânia e 31 km a leste de Rio Verde, Santa Helena de Goiás viveu seu primeiro grande ciclo econômico entre as décadas de 1960 e 1970, quando se tornou a "capital do ouro branco" — maior polo de algodão de Goiás, com produtores locais chegando a plantar milhares de hectares da cultura. O algodão perdeu espaço a partir dos anos 1980, mas deixou uma tradição agrícola que hoje sustenta a economia do município, apoiada em soja, milho e algodão irrigado por pivô central, típicos do sudoeste goiano — região que concentra a maior parte da área plantada de soja, milho e algodão herbáceo do estado. O PIB municipal soma cerca de R$ 1,6 bilhão, com os serviços respondendo por 36,8% do valor adicionado, a agropecuária por 36,3%, a administração pública por 14,5% e a indústria por 12,3%; no parque agroindustrial local estão uma destilaria de álcool e uma unidade da Parmalat. A cidade também é sede do HURSO, hospital estadual de urgências que atende cerca de 27 municípios da região Sudoeste.',

  mercado:
    'O mercado de personal trainers em Santa Helena de Goiás é o de uma cidade média do interior goiano, com academias concentradas no Centro e nos setores mais valorizados, em torno do eixo da BR-060. A demanda por acompanhamento individual vem sobretudo de produtores rurais, funcionários da HURSO e do comércio local, que buscam constância de treino em meio a uma rotina de trabalho marcada pelo calendário agrícola e pelos plantões hospitalares.',

  bairrosNobres: ['Centro', 'Parque Residencial Isaura', 'Jardim Europa'],
  bairrosPopulares: ['Bairro Lucilene', 'Bairro Brasil', 'Jardim Oeste', 'Jardim das Oliveiras'],

  parques: [
    {
      nome: 'Parque Municipal',
      descricao:
        'Área verde da cidade com trilhas sinalizadas, espaço para piquenique e lago, usada para caminhada e contato com a fauna e a vegetação nativas — um dos principais pontos de lazer ao ar livre de Santa Helena de Goiás.',
    },
    {
      nome: 'Lagoa do Lobo',
      descricao:
        'Espelho d\'água natural nos arredores da cidade, com paisagem tranquila usada para caminhada, pesca e observação de aves, reforçando a vocação de Santa Helena como "Terra das Águas".',
    },
    {
      nome: 'Pista de caminhada da Avenida Jabuticaba',
      descricao:
        'Trecho de caminhada no bairro Rodrigues que serve de ponto de encontro e largada para passeios ciclísticos e caminhadas em grupo pela cidade.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada na cidade; o pedal acontece nas ruas e avenidas urbanas e ganha um momento de destaque em eventos como o Circuito Regional de Cicloturismo, realizado em parceria com a Adetur.',

  clima:
    'O clima é tropical de savana (Cerrado), com duas estações bem marcadas: a chuvosa, de outubro a abril, e a seca, de maio a setembro, quando a umidade do ar cai bastante e as tardes ficam quentes. A abundância de rios e córregos na região — que rendeu à cidade o apelido de "Terra das Águas" — não altera o regime típico de seca acentuada no inverno do sudoeste goiano.',
  climaTreino:
    'Na estação seca, o calor da tarde e a baixa umidade pedem treino no início da manhã ou no fim do dia, com atenção redobrada à hidratação; na estação chuvosa, as pancadas de fim de tarde costumam exigir flexibilidade de horário ou a migração pontual para ambientes cobertos.',

  mobilidade:
    'A cidade é cortada pela BR-060, eixo que liga o sudoeste goiano a Goiânia e a Brasília e conecta Santa Helena a Rio Verde, principal polo regional a 31 km de distância. O transporte urbano é feito por ônibus, e o acesso rodoviário facilita tanto o escoamento da produção agrícola quanto os deslocamentos para os municípios vizinhos.',

  corridas: [
    {
      nome: 'Corrida de Rua Mega Supermercados',
      descricao:
        'Prova de rua com percurso de 7 km, primeira edição realizada em novembro de 2025, reunindo corredores locais e da região sudoeste de Goiás.',
    },
    {
      nome: 'Corrida de aniversário da cidade',
      descricao:
        'Nas comemorações do aniversário de emancipação, a programação oficial costuma incluir corrida de rua ao lado de atrações musicais e homenagens aos pioneiros do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina eventos tradicionais, como o Festival da Costela e os Jogos Terra das Águas 60+ — competições recreativas voltadas à terceira idade, com modalidades como vôlei de areia e bocha —, com iniciativas mais recentes, como o Campeonato Municipal de Beach Tennis e as corridas de rua promovidas pelo comércio local.',
  academias:
    'A oferta de academias e estúdios se concentra no Centro e nos bairros de maior movimento comercial, com porte compatível com uma cidade média do interior goiano, complementada por personal trainers que atendem em domicílio e em propriedades rurais.',

  destaquesFitness: [
    'Ex-"capital do ouro branco" do algodão goiano nos anos 1960 e 1970, hoje polo de soja, milho e algodão irrigado por pivô central.',
    'Sede do HURSO, hospital estadual de urgências que atende 27 municípios do sudoeste de Goiás.',
    'Parque Municipal com trilhas e lago, e a Lagoa do Lobo, que reforçam a identidade de "Terra das Águas" da cidade.',
    'Estação seca de maio a setembro, com calor e baixa umidade que pedem treino ao ar livre nos horários mais frescos do dia.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 230,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 330,
  },

  conclusao:
    'Marcada pela história do algodão e hoje sustentada por soja, milho e algodão irrigado, Santa Helena de Goiás é uma cidade média do sudoeste goiano com rotina de trabalho ligada ao agronegócio e à saúde regional, sediada no HURSO. Um personal trainer ajuda a organizar o treino em torno dessa rotina, aproveitando o Parque Municipal e a Lagoa do Lobo nos dias bons e adaptando os horários ao calor e à baixa umidade da estação seca.',

  vizinhas: ['rio-verde-go', 'acreuna-go', 'maurilandia-go'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Helena de Goiás', url: 'https://cidades.ibge.gov.br/brasil/go/santa-helena-de-goias/panorama' },
    { nome: 'Prefeitura de Santa Helena de Goiás', url: 'https://www.santahelena.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'HERSO/HURSO — Secretaria de Estado da Saúde de Goiás', url: 'https://goias.gov.br/saude/herso/' },
  ],
  atualizadoEm: '2026-07-04',
};
