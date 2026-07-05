import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'afonso-claudio-es',
  nome: 'Afonso Cláudio',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'afonso-claudense',
  tipo: 'cidade',

  populacao: 30684,
  populacaoAno: 2022,
  idhm: 0.667,
  idhmClasse: 'médio',
  pibPerCapita: 18800,
  pibPerCapitaAno: 2021,
  altitudeM: 350,

  resumoEconomico:
    'Afonso Cláudio fica na Região das Montanhas Capixabas, na microrregião Sudoeste Serrana, a cerca de 89 km de Vitória pela BR-262 e pela ES-165. A localidade nasceu como São Sebastião do Alto Guandu, às margens do rio Três Pontões e do rio Guandu, virou sede de distrito em 1888 e foi elevada a município em 1890, já com o nome de Afonso Cláudio, em homenagem ao jurista e primeiro governador republicano do estado. À base indígena botocudo e aos primeiros povoadores somaram-se, ao longo do século XX, famílias de origem italiana — hoje maioria da população — e pomeranos e alemães vindos de Domingos Martins e Santa Maria de Jetibá. A economia gira em torno do café: são mais de 3 mil produtores, e os cafés especiais da região integram a Indicação Geográfica Montanhas do Espírito Santo, com grãos premiados que já chegaram aos mercados dos Estados Unidos, do Japão e da Coreia do Sul. Ao lado da cafeicultura, a extração de granito (rocha ornamental) é uma das atividades características do município, que também tem na administração pública um dos maiores empregadores. O PIB soma cerca de R$ 569,8 milhões, com participação de 37% dos serviços, 29,6% da administração pública, 24,2% da agropecuária e 9,2% da indústria, resultando em um PIB per capita de R$ 18,8 mil — abaixo da média estadual.',

  mercado:
    'O mercado de personal trainers em Afonso Cláudio é pequeno e concentrado no Centro, típico de uma cidade média do interior serrano capixaba movida pela cafeicultura e pela extração de rocha ornamental. A demanda parte sobretudo de produtores rurais e de trabalhadores do comércio e da administração pública que buscam treino individualizado como complemento às poucas academias locais, e o acompanhamento online ajuda a alcançar moradores dos distritos mais afastados da sede, como Piracema, Fazenda Guandu e Pontões.',

  bairrosNobres: ['Centro', 'Bela Vista'],
  bairrosPopulares: ['Piracema', 'Fazenda Guandu', 'Pontões', 'Serra Pelada'],

  parques: [
    {
      nome: 'Praça Saudável da Praça da Independência',
      descricao:
        'Instalada pelo Governo do Estado (Sesport) na Praça da Independência, em frente à sede da Prefeitura, reúne 17 equipamentos de academia ao ar livre e foi entregue com apoio de profissionais de Educação Física treinados pela própria Sesport — um dos principais pontos de atividade física ao ar livre da sede.',
    },
    {
      nome: 'Estradas rurais e Serra do Guandu',
      descricao:
        'As estradas de terra e asfalto que ligam a sede aos distritos, entre elas o acesso à Fazenda Guandu pela BR-262 e pela ES-165, incluem subidas exigentes como a da Serra do Guandu — cerca de 4 km com inclinação média de 7% —, procuradas por ciclistas de estrada e mountain bike da região.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o ciclismo é praticado nas estradas rurais e nas rodovias BR-262 e ES-165 (Rodovia Sebastião Alves de Lima), em percursos de montanha que incluem subidas longas como a da Serra do Guandu.',

  clima:
    'O clima é tropical de altitude, com temperaturas que costumam variar entre 14 °C e 31 °C ao longo do ano — estação chuvosa quente e abafada, e estação seca amena e mais clara. A altitude da sede, de cerca de 350 m, contrasta com distritos mais altos, como Pontões, a 800 m, onde as manhãs são mais frescas.',
  climaTreino:
    'O calor e a umidade do período chuvoso pedem atenção à hidratação e a horários mais amenos para o treino ao ar livre, de manhã cedo ou no fim da tarde. Nos distritos de maior altitude, como Pontões e Ibicaba, o clima mais fresco favorece caminhada e corrida em praticamente qualquer horário do dia.',

  mobilidade:
    'O acesso à Grande Vitória se dá pela BR-262 até o entroncamento com a ES-165 (Rodovia Sebastião Alves de Lima), que liga a sede do município à BR-262 rumo à capital, num percurso de cerca de 89 km. Internamente, o deslocamento até distritos como Piracema, Fazenda Guandu, Pontões, Serra Pelada e São Francisco Xavier do Guandu depende de estradas vicinais, o que torna a localização do treino na sede um fator prático para grande parte da população.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local é marcada pelo cotidiano rural da cafeicultura e pela vida de cidade pequena de montanha: a Praça Saudável da Praça da Independência concentra a caminhada e o treino funcional ao ar livre, enquanto as estradas de terra e as rodovias que cortam o relevo acidentado do município, com destaque para a subida da Serra do Guandu, atraem ciclistas de estrada e de mountain bike da região serrana.',
  academias:
    'A oferta de academias é modesta, concentrada no Centro e voltada a musculação e treino funcional, compatível com o porte de um município do interior serrano capixaba, complementada pela academia ao ar livre da Praça da Independência e pelo treino em estradas rurais.',

  destaquesFitness: [
    'Mais de 3 mil produtores de café, com grãos especiais premiados que já chegaram aos mercados dos Estados Unidos, do Japão e da Coreia do Sul, dentro da Indicação Geográfica Montanhas do Espírito Santo.',
    'Extração de granito (rocha ornamental), ao lado da administração pública, entre as atividades econômicas características do município.',
    'Praça Saudável da Praça da Independência, com 17 equipamentos de academia ao ar livre em frente à sede da Prefeitura.',
    'Estradas rurais de montanha, como a subida da Serra do Guandu, com cerca de 4 km e inclinação média de 7%, procuradas por ciclistas.',
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
    'Cidade cafeeira e de extração de rocha ornamental na Região das Montanhas Capixabas, Afonso Cláudio combina a herança italiana, pomerana e alemã com um relevo acidentado que convida ao treino ao ar livre. Da Praça Saudável da Praça da Independência às subidas exigentes de estradas rurais como a da Serra do Guandu, um personal trainer ajuda a organizar o treino com segurança, aproveitando o clima mais fresco dos distritos altos e adaptando a rotina ao calor da estação chuvosa.',

  vizinhas: ['venda-nova-do-imigrante-es', 'domingos-martins-es', 'santa-maria-de-jetiba-es'],

  fontes: [
    { nome: 'IBGE Cidades — Afonso Cláudio', url: 'https://cidades.ibge.gov.br/brasil/es/afonso-claudio/panorama' },
    { nome: 'Prefeitura Municipal de Afonso Cláudio', url: 'https://www.afonsoclaudio.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Incaper — Perfil municipal de Afonso Cláudio', url: 'https://incaper.es.gov.br/media/incaper/proater/municipios/Afonso_claudio.pdf' },
  ],
  atualizadoEm: '2026-07-05',
};
