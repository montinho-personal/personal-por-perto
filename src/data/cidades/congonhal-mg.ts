import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'congonhal-mg',
  nome: 'Congonhal',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'congonhalense',
  tipo: 'cidade',

  populacao: 11083,
  populacaoAno: 2022,
  idhm: 0.712,
  idhmClasse: 'alto',
  altitudeM: 862,

  resumoEconomico:
    'Congonhal fica no Sul de Minas, cerca de 17 km de Pouso Alegre, e nasceu no início do século XIX a partir de terras doadas pelo Comendador José Ferreira de Matos para erguer uma capela dedicada a São José — o núcleo que hoje é a praça central da cidade. Banhado pelo rio Cervo, o município tem economia apoiada nos serviços e na administração pública, mas mantém forte vínculo com o campo: a lavoura de café é a atividade agrícola mais tradicional da região, ao lado da pecuária, do beneficiamento de minério de manganês e da fabricação de artefatos plásticos para construção. É um dos pequenos municípios da microrregião de Pouso Alegre, com cerca de 11 mil habitantes.',

  mercado:
    'Sendo uma cidade pequena, o mercado de personal trainers em Congonhal é reduzido e concentrado em poucas academias locais no Centro. A procura tende a vir de moradores que buscam atendimento próximo de casa, de produtores rurais e cafeicultores com rotina irregular, e de quem prefere treinar sem precisar se deslocar até Pouso Alegre. O acompanhamento online é uma alternativa natural diante da oferta enxuta de profissionais na própria cidade.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['São Domingos', 'Zona Rural (entorno das fazendas de café)'],

  parques: [
    {
      nome: 'Praça Comendador Ferreira de Matos (Praça da Matriz)',
      descricao:
        'Praça central em frente à Igreja Matriz de São José, com coreto, chafariz e palmeiras; é o principal ponto de encontro da cidade e serve de largada para a corrida de aniversário do município.',
    },
    {
      nome: 'Parque Municipal de Congonhal',
      descricao:
        'Espaço arborizado com trilhas para caminhada em meio à vegetação, usado por moradores para atividade ao ar livre e contato com a natureza local.',
    },
    {
      nome: 'Entorno rural e fazendas de café',
      descricao:
        'Fora da pequena malha urbana, estradas vicinais cortam as fazendas de café e áreas de pecuária que cercam o município, servindo de percurso para caminhada, corrida leve e pedal em paisagem aberta.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária formal relevante; caminhada, corrida e pedal acontecem nas ruas do Centro e nas estradas rurais que ligam a cidade às fazendas de café do entorno.',

  clima:
    'O clima é ameno, típico do Sul de Minas, favorecido pela altitude de cerca de 862 metros — condição que também explica a vocação da região para a cafeicultura. As temperaturas são mais suaves que em áreas de menor altitude do estado, com verão chuvoso e inverno seco, quando as manhãs costumam ser bem frias.',
  climaTreino:
    'A altitude e o clima ameno tornam boa parte do dia agradável para treinar ao ar livre, mas as manhãs de inverno pedem aquecimento mais cuidadoso pelo frio, enquanto o período chuvoso de verão concentra as pancadas de chuva no fim da tarde.',

  mobilidade:
    'O acesso principal é pela BR-459, que liga Congonhal a Pouso Alegre, cerca de 17 km de distância, e a outras cidades do Sul de Minas; a MG-179, que também parte de Pouso Alegre, atende a região. O deslocamento interno é curto, compatível com o porte pequeno da cidade, e depende majoritariamente de veículo próprio ou transporte intermunicipal para quem trabalha ou estuda em Pouso Alegre.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Aniversário de Congonhal',
      descricao:
        'Prova de rua de 7 km com largada na Praça Comendador Ferreira de Matos, realizada em comemoração ao aniversário do município, com premiação por categoria e caminhada livre para os mais novos.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva da cidade gira em torno da praça central e de eventos tradicionais como a corrida de aniversário do município e o Encontro de Carreiros, que reúne carros de boi em desfile pelas ruas — manifestações que misturam atividade física e tradição rural típica do interior do Sul de Minas.',
  academias:
    'A oferta de academias é pequena, concentrada no Centro, com estabelecimentos locais de musculação e treino funcional compatíveis com o porte do município; parte da demanda por estruturas maiores acaba se apoiando em cidades vizinhas como Pouso Alegre.',

  destaquesFitness: [
    'Altitude de cerca de 862 metros, que garante clima ameno favorável ao treino ao ar livre.',
    'Praça Comendador Ferreira de Matos, ponto de encontro e largada da corrida de aniversário da cidade.',
    'Economia ligada à cafeicultura, com fazendas e estradas rurais no entorno usadas para caminhada e pedal.',
    'Cidade pequena e próxima de Pouso Alegre, com mercado fitness enxuto e forte espaço para o atendimento online.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 330,
  },

  conclusao:
    'Pequena, cafeeira e cercada por fazendas, Congonhal tem no clima ameno da altitude e na praça central seus principais aliados para o treino ao ar livre. Diante de uma oferta local enxuta de academias, um personal trainer — presencial ou online — ajuda a estruturar uma rotina de treino consistente sem depender do deslocamento até Pouso Alegre.',

  vizinhas: ['pouso-alegre-mg', 'cambui-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Congonhal', url: 'https://cidades.ibge.gov.br/brasil/mg/congonhal/panorama' },
    { nome: 'Prefeitura de Congonhal', url: 'https://congonhal.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
