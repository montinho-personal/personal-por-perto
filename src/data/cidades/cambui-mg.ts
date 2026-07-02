import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cambui-mg',
  nome: 'Cambuí',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'cambuiense',
  tipo: 'cidade',

  populacao: 29536,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',
  altitudeM: 860,

  resumoEconomico:
    'No extremo sul de Minas Gerais, cercada pelas montanhas da Serra da Mantiqueira, Cambuí integra o Circuito Turístico Serras Verdes e fica próxima ao Circuito das Malhas, região do Sul de Minas responsável por boa parte do tricô comercializado no país. A economia local combina comércio e turismo de compras — que atrai visitantes de São Paulo e do próprio estado —, indústria (fabricação de produtos de metal, brinquedos e peças para máquinas) e agropecuária, favorecidos pela proximidade com a Rodovia Fernão Dias (BR-381), que liga Belo Horizonte a São Paulo.',

  mercado:
    'Por ser uma cidade pequena de perfil turístico e comercial, o mercado fitness de Cambuí é formado principalmente por academias de bairro e estúdios locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre moradores que buscam treino ao ar livre aproveitando o clima ameno de altitude e entre quem viaja à cidade a trabalho ou passeio e mantém a rotina de treinos durante a estada.',

  bairrosNobres: ['Centro', 'Vila Nossa Senhora Aparecida', 'Jardim América', 'Santa Edwiges'],
  bairrosPopulares: ['Vazes', 'Jardim São Benedito', 'Aterrado', 'Rio do Peixe'],

  parques: [
    {
      nome: 'Praça Coronel Justiniano',
      descricao:
        'Praça histórica tombada no coração do Centro, ponto de partida de eventos da cidade e de caminhadas pelo comércio e pelos casarios ao redor.',
    },
    {
      nome: 'Morro do Cruzeiro',
      descricao:
        'Mirante natural com vista panorâmica sobre a cidade e a Serra da Mantiqueira, usado por quem busca trilha e caminhada com subida ao ar livre.',
    },
    {
      nome: 'Cachoeiras da Meia Légua, da Usina e do Fonseca',
      descricao:
        'Atrativos naturais no entorno rural do município, com trilhas de acesso que servem de opção para caminhada e atividade física em contato com a natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; o relevo montanhoso e as ruas do Centro e dos bairros próximos são o espaço mais usado para caminhada e corrida, junto com trilhas nas áreas rurais e serranas do entorno.',

  clima:
    'Cambuí tem clima tropical de altitude, ameno, com verões agradáveis e invernos frios — reflexo da localização na Serra da Mantiqueira, com altitude média em torno de 860 m no Centro e pontos que chegam a mais de 2.000 m no município. É considerado um dos climas mais amenos do país, sem os extremos de calor comuns a outras regiões de Minas.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre durante boa parte do ano, mas as manhãs e noites de inverno pedem aquecimento mais cuidadoso e roupas adequadas ao frio antes de treinar em áreas abertas.',

  mobilidade:
    'A Rodovia Fernão Dias (BR-381) passa pelo município e conecta Cambuí a Pouso Alegre, Belo Horizonte e São Paulo, enquanto a MG-290 faz a ligação regional com cidades vizinhas do Circuito das Malhas e da Serra da Mantiqueira, como Camanducaia. O deslocamento interno é predominantemente feito a pé ou de carro, dado o porte compacto da cidade.',

  corridas: [
    {
      nome: 'Corrida de Rua "Parabéns Cambuí"',
      descricao:
        'Prova de rua tradicional promovida pela Prefeitura de Cambuí, com largada na Praça Coronel Justiniano, no Centro, celebrando o aniversário da cidade com percursos de 5 km e 10 km.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno das provas de rua organizadas pela Secretaria de Esporte, Juventude e Lazer do município, das trilhas e cachoeiras do entorno serrano e do uso do Centro histórico como espaço de caminhada, favorecido pelo clima ameno durante praticamente todo o ano.',
  academias:
    'A oferta é formada por academias de bairro de pequeno e médio porte, com musculação, aulas coletivas e treino funcional, compatível com o porte de uma cidade pequena e de perfil turístico do Sul de Minas.',

  destaquesFitness: [
    'Clima tropical de altitude, ameno o ano todo, considerado um dos mais agradáveis do país para treinar ao ar livre.',
    'Cidade cercada pela Serra da Mantiqueira, com trilhas, cachoeiras e o Morro do Cruzeiro como opções de treino em contato com a natureza.',
    'Polo de turismo de compras e proximidade com o Circuito das Malhas, o que movimenta visitantes e mantém o comércio aquecido.',
    'Acesso direto pela Rodovia Fernão Dias (BR-381), ligando a cidade a Pouso Alegre, Belo Horizonte e São Paulo.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Pequena, serrana e de clima ameno, Cambuí oferece cenário natural favorável ao treino ao ar livre o ano inteiro, equilibrado com uma oferta enxuta de academias de bairro. Um personal trainer ajuda a aproveitar as trilhas, o Centro histórico e o clima de altitude da cidade, adaptando a rotina de treino às estações mais frias e ao ritmo de uma cidade turística do Sul de Minas.',

  vizinhas: ['pouso-alegre-mg', 'braganca-paulista-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cambuí', url: 'https://cidades.ibge.gov.br/brasil/mg/cambui/panorama' },
    { nome: 'Prefeitura de Cambuí', url: 'https://www.prefeituradecambui.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
