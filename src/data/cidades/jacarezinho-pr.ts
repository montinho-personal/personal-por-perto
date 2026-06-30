import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jacarezinho-pr',
  nome: 'Jacarezinho',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'jacarezinhense',
  tipo: 'cidade',

  populacao: 40375,
  populacaoAno: 2022,
  idhm: 0.743,
  idhmClasse: 'alto',
  altitudeM: 435,

  resumoEconomico:
    'Conhecida como Capital do Norte Pioneiro do Paraná, Jacarezinho nasceu da expansão cafeeira sobre a terra roxa e ainda guarda forte tradição agropecuária, com lavouras de grãos, cana-de-açúcar e a cultura do café que marca a identidade regional. Polo administrativo, educacional e de serviços de saúde, a cidade sedia a sede da diocese e atende como referência um conjunto de municípios da região.',

  mercado:
    'Sede da Universidade Estadual do Norte do Paraná (UENP) e tradicional cidade estudantil, Jacarezinho reúne um público jovem que sustenta a procura por academias e estúdios. A oferta combina academias locais de musculação, estúdios de treino funcional e crossfit, com a Praça Rui Barbosa e a pista de caminhada às margens da BR-153 como principais pontos de treino ao ar livre, além da etapa local do Circuito Sesc de Corridas movimentando a cena de corrida de rua.',

  bairrosNobres: ['Centro', 'Jardim Panorama', 'Parque Universitário', 'Vila Setti'],
  bairrosPopulares: ['Bairro Aeroporto', 'Jardim São Luís', 'Nova Jacarezinho', 'Parque Bela Vista'],

  parques: [
    {
      nome: 'Praça Rui Barbosa',
      descricao:
        'Principal praça do centro de Jacarezinho, arborizada e movimentada, próxima à Catedral Imaculada Conceição. É ponto de encontro de quem caminha e treina no centro, com entorno plano favorável a percursos leves e tiros de ritmo.',
    },
    {
      nome: 'Pista de caminhada da BR-153',
      descricao:
        'Pista de caminhada e ciclofaixa implantada ao longo das margens da BR-153, com iluminação e áreas de descanso. Concentra a prática de caminhada e corrida ao ar livre em um traçado contínuo afastado do trânsito local.',
    },
    {
      nome: 'Estádio Municipal Pedro Vilela',
      descricao:
        'Principal praça esportiva da cidade, próxima ao centro, serve de referência para o público que combina atividade física e esporte coletivo e de apoio a eventos de corrida e caminhada.',
    },
  ],
  ciclovias:
    'A cidade vem ampliando sua estrutura para mobilidade ativa, com pista de caminhada e ciclofaixa construídas ao longo das margens da BR-153, em traçado relativamente plano usado tanto para lazer quanto para deslocamento de bicicleta.',

  clima:
    'O clima do Norte Pioneiro é subtropical, com estações bem definidas: verões quentes e chuvosos, que podem ultrapassar os 30 °C, e invernos amenos e mais secos, com geadas ocasionais. A altitude em torno de 435 metros deixa o calor do verão um pouco mais presente que no restante do Paraná.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano. No verão, o ideal é evitar o início da tarde por causa do calor e das pancadas de chuva e, no inverno, aproveitar as manhãs ensolaradas e secas.',

  mobilidade:
    'Jacarezinho é cortada pela BR-153 (Transbrasiliana) e fica na divisa com o estado de São Paulo, o que reforça seu papel de polo regional e facilita o acesso a cidades paulistas vizinhas como Ourinhos. A BR-369 complementa as ligações com o restante do Norte Pioneiro e com Londrina. O deslocamento interno é facilitado pelo porte médio da cidade e pelo terreno em boa parte plano.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — Etapa Jacarezinho',
      descricao:
        'Etapa jacarezinhense do circuito do Sesc-PR, com provas de caminhada e corrida de 5 km e 10 km que reúnem corredores da cidade e de toda a região do Norte Pioneiro, com largada noturna no centro.',
    },
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Provas e caminhadas promovidas por escolas, grupos de corrida e a comunidade universitária da UENP, muitas vinculadas a datas religiosas e cívicas, que mantêm ativa a cultura de corrida de rua na cidade.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua tem espaço firme em Jacarezinho, ancorada na etapa local do Circuito Sesc e em provas comunitárias. O forte caráter estudantil da cidade, com a UENP e tradicionais colégios, alimenta uma cultura ativa de musculação, treino funcional e atividades ao ar livre na praça central e na pista da BR-153. A tradição católica também marca o calendário, com a devoção ao Senhor Bom Jesus da Cana Verde mobilizando romeiros do Norte Pioneiro.',
  academias:
    'A oferta inclui academias locais de musculação, estúdios de treino funcional e crossfit, atendendo o público universitário, famílias da cidade e moradores de municípios vizinhos que buscam estrutura no polo regional.',

  destaquesFitness: [
    'Pista de caminhada e ciclofaixa às margens da BR-153 como principal espaço de treino ao ar livre.',
    'Etapa local do Circuito Sesc de Corridas, referência de corrida de rua no Norte Pioneiro.',
    'Sede da UENP e tradição estudantil, com público jovem e ativo.',
    'Cidade de porte médio e em boa parte plana, favorável a treinos de rua e ciclismo.',
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
    'Capital do Norte Pioneiro, estudantil e ligada à tradição do café e à fé do Senhor Bom Jesus da Cana Verde, Jacarezinho tem na praça central, na pista da BR-153 e na etapa do Circuito Sesc o seu coração esportivo. Um personal trainer ajuda a transformar essa estrutura em um plano de treino consistente, ajustado ao seu objetivo e à sua rotina.',

  vizinhas: ['cornelio-procopio-pr', 'londrina-pr', 'ourinhos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Jacarezinho', url: 'https://cidades.ibge.gov.br/brasil/pr/jacarezinho/panorama' },
    { nome: 'Prefeitura de Jacarezinho', url: 'https://www.jacarezinho.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
