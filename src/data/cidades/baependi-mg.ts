import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'baependi-mg',
  nome: 'Baependi',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'baependiano',
  tipo: 'cidade',

  populacao: 18366,
  populacaoAno: 2022,
  idhm: 0.681,
  idhmClasse: 'médio',
  altitudeM: 893,

  resumoEconomico:
    'Baependi fica no Sul de Minas, na Serra da Mantiqueira, e é uma das cidades mais antigas da região, remanescente do ciclo do ouro e cortada pela Estrada Real. A economia combina pecuária leiteira e de corte, comércio local diversificado e um turismo histórico e religioso crescente — a cidade é conhecida como terra de Nhá Chica, beatificada em 2013, e reúne mais de 50 cachoeiras no seu território, entre elas a do Cavalo Baio, uma das maiores quedas d\'água do país. Artesanato em bambu, palha, milho e madeira de café também tem espaço na economia local.',

  mercado:
    'Por ser uma cidade pequena do interior mineiro, o mercado fitness de Baependi é enxuto, formado por academias locais de pequeno e médio porte. A procura por personal trainers tende a vir de quem busca treino individualizado, aproveitando o clima ameno de altitude da Mantiqueira para atividade ao ar livre, além de moradores que precisam se deslocar às cidades vizinhas do Circuito das Águas em busca de mais opções.',

  bairrosNobres: ['Centro', 'Santa Cruz', 'Piracicaba', 'Vargem da Laje'],
  bairrosPopulares: ['São José', 'Rego D\'Água', 'Palmeiras', 'Ponte'],

  parques: [
    {
      nome: 'Praça central e entorno da Igreja de Nossa Senhora do Monte Serrat',
      descricao:
        'No coração do Centro histórico, reúne o casario colonial e é palco de eventos como a tradicional Semana Santa; suas ruas e ladeiras de pedra são usadas por moradores para caminhada no fim de tarde.',
    },
    {
      nome: 'Cachoeira e Cânion do Cavalo Baio',
      descricao:
        'Uma das maiores quedas d\'água do Brasil, com cerca de 215 metros de altura, integra a travessia de trekking entre Baependi e Aiuruoca, na Serra da Mantiqueira — destino de caminhada de longa distância e observação da natureza.',
    },
    {
      nome: 'Parque Estadual da Serra do Papagaio (entorno)',
      descricao:
        'Unidade de conservação que abrange parte do território de Baependi e municípios vizinhos, com trilhas em meio à Mata Atlântica de altitude, opção para quem busca caminhada e contato com a natureza da Mantiqueira.',
    },
  ],
  ciclovias:
    'A cidade não tem estrutura cicloviária relevante; o pedal e a corrida acontecem nas vias do Centro histórico e nas estradas rurais que sobem em direção à serra e às comunidades do interior do município.',

  clima:
    'O clima é tropical de altitude, ameno, com verões mais chuvosos e invernos secos e frios — a sede do município fica a 893 metros, mas o relevo varia de pouco menos de 900 até cerca de 2.300 metros nos pontos mais altos da Mantiqueira, o que deixa as madrugadas de inverno bastante frias.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre em boa parte do ano, especialmente pela manhã. No inverno, o frio de altitude pede aquecimento mais cuidadoso e roupas adequadas, e no verão chuvoso vale ter alternativa para os dias de temporal, comuns na serra.',

  mobilidade:
    'O acesso a Baependi é feito pela BR-267, que passa pela cidade e liga a região a Cruzília e São Lourenço, e pela BR-354, que conecta a Caxambu e ao eixo Resende (RJ)–Sul de Minas; rodovias estaduais como a AMG-1030 e a AMG-1045 completam as ligações locais. O transporte interno é por carro e ônibus, com boa parte dos deslocamentos concentrada na malha compacta do Centro histórico.',

  corridas: [
    {
      nome: 'Travessia de trekking Baependi x Aiuruoca',
      descricao:
        'Percurso de longa distância (cerca de 48 km, feito em 3 a 4 dias) que cruza a Serra da Mantiqueira entre Baependi e Aiuruoca, passando pelo Cânion do Cavalo Baio; organizado por clubes de trekking, atrai caminhantes de fora da região.',
    },
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Como em outras cidades pequenas do Circuito das Águas, Baependi tem grupos locais de caminhada e corrida que se reúnem pelas ruas do Centro e nas estradas rurais, muitas vezes ligados a ações da prefeitura ou de academias da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é mais voltada à caminhada e ao contato com a natureza da Mantiqueira do que a grandes provas de rua: trilhas, travessias entre municípios e o uso das ruas do Centro histórico marcam o dia a dia de quem treina ao ar livre, num ritmo de cidade pequena e histórica.',
  academias:
    'A oferta de academias é pequena, formada por estúdios e academias de bairro com musculação e treino funcional, compatível com o porte do município; quem busca mais variedade de modalidades costuma recorrer também às cidades vizinhas do Circuito das Águas.',

  destaquesFitness: [
    'Cidade histórica da Estrada Real, na Serra da Mantiqueira, com clima ameno de altitude favorável ao treino ao ar livre.',
    'Mais de 50 cachoeiras no território, incluindo a do Cavalo Baio, uma das maiores quedas d\'água do país.',
    'Rota de trekking de longa distância até Aiuruoca, atravessando a serra e o Parque Estadual da Serra do Papagaio.',
    'Economia de base agropecuária e turística, com mercado fitness pequeno e concentrado no Centro histórico.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 340,
  },

  conclusao:
    'Cidade pequena e histórica cercada pela Serra da Mantiqueira, Baependi oferece um clima ameno de altitude e cenários naturais que convidam à caminhada e ao treino ao ar livre, mesmo com um mercado fitness enxuto. Um personal trainer ajuda a aproveitar esse cenário com segurança, adaptando o treino às variações de temperatura da serra e mantendo a constância ao longo do ano.',

  vizinhas: ['sao-lourenco-mg', 'caxambu-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Baependi', url: 'https://cidades.ibge.gov.br/brasil/mg/baependi/panorama' },
    { nome: 'Prefeitura de Baependi', url: 'https://www.baependi.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
