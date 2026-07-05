import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alegre-es',
  nome: 'Alegre',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'alegrense',
  tipo: 'cidade',

  populacao: 29177,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  pibPerCapita: 24100,
  pibPerCapitaAno: 2021,
  altitudeM: 129,

  resumoEconomico:
    'Alegre fica no sul do Espírito Santo, na Região do Caparaó, a cerca de 220 km de Vitória pela BR/ES-482, e é a sede da microrregião que leva seu nome, com área de 778,6 km² dividida entre a sede e sete distritos: Araraí, Café, Rive, Celina, Santa Angélica, Anutiba e São João do Norte. A cidade nasceu em torno da Igreja Matriz Nossa Senhora da Penha, erguida em taipa e madeira em 1851, e hoje é um dos três maiores produtores de leite do Espírito Santo, ao lado de Ecoporanga e Presidente Kennedy — juntos, os três municípios respondem por 22% da produção leiteira do estado. A cafeicultura também tem peso na economia: Alegre integra a região produtora do Caparaó Sul e é um dos dez municípios capixabas incluídos na Indicação Geográfica do Café do Caparaó. Desde 1971, o alto do bairro Alto Universitário abriga o campus da UFES, herdeiro da antiga Escola Superior de Agronomia do Espírito Santo (ESAES) — depois Centro Agropecuário (Caufes) e hoje Centro de Ciências Agrárias e Engenharias, com 17 cursos de graduação, entre eles Agronomia, Medicina Veterinária, Zootecnia e Engenharia Florestal. O PIB municipal soma cerca de R$ 702,1 milhões, com 37,2% de serviços, 24,8% de administração pública, 24,7% de indústria e 13,3% de agropecuária, resultando em PIB per capita de R$ 24,1 mil.',

  mercado:
    'O mercado de personal trainers em Alegre combina a demanda típica de uma cidade média do interior capixaba com a presença da comunidade universitária da UFES no Alto Universitário — estudantes e servidores dos cursos de Agronomia, Veterinária, Zootecnia e Engenharias, muitos vindos de fora do município. A procura se concentra no Centro e no entorno do campus, e o acompanhamento online amplia o alcance para os distritos rurais afastados da sede, como Rive, Celina e Araraí.',

  bairrosNobres: ['Centro', 'Alto Universitário'],
  bairrosPopulares: ['Rive', 'Celina', 'Café', 'Anutiba', 'Araraí'],

  parques: [
    {
      nome: 'Parque Estadual da Cachoeira da Fumaça',
      descricao:
        'Unidade de conservação na divisa entre Alegre e Ibitirama, a cerca de 33 km da sede, protege uma queda d\'água de aproximadamente 144 m de altura — uma das maiores do Espírito Santo, batizada assim pela neblina formada quando a água se choca com as rochas — além de nascentes e remanescentes de Mata Atlântica do rio Braço Norte Direito, afluente do Itapemirim.',
    },
    {
      nome: 'ARIE Laerth Paiva Gama',
      descricao:
        'Área de Relevante Interesse Ecológico de 27,57 hectares criada pelo município em 2005, às margens da rodovia ES-482 (sentido Guaçuí), no km 1. Tem viveiro florestal, trilha em área de mata ciliar e atividades de educação ambiental voltadas a escolas e à comunidade.',
    },
    {
      nome: 'Praça em frente à Prefeitura (Centro)',
      descricao:
        'Ponto de concentração e largada da tradicional Corrida da Penha, é também onde a caminhada e a corrida leve acontecem no cotidiano do Centro, próximo à Igreja Matriz Nossa Senhora da Penha.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o ciclismo é praticado nas estradas rurais dos distritos e nas rodovias que cortam o relevo do Caparaó, aproveitando o entorno de fazendas de leite e café.',

  clima:
    'O clima da sede é tropical subúmido, mais quente que o das cidades da Região Serrana do Espírito Santo: a temperatura média anual gira em torno de 23 °C, com máximas diárias próximas de 29 °C entre dezembro e abril, quando também se concentram de 60% a 70% dos cerca de 1.200 mm de chuva que caem no ano. A altitude varia de 129 m na sede a mais de 1.300 m nas partes altas do município, perto da Cachoeira da Fumaça.',
  climaTreino:
    'O calor do verão, sobretudo entre dezembro e abril, pede hidratação reforçada e horários mais frescos — de manhã cedo ou ao entardecer — para o treino ao ar livre. No inverno, mais seco e ameno, as condições costumam favorecer a atividade física em qualquer horário, e as partes altas do município, perto da Cachoeira da Fumaça, oferecem alívio do calor para quem busca trilha e caminhada.',

  mobilidade:
    'O acesso à Grande Vitória e a Cachoeiro de Itapemirim se dá pela rodovia BR/ES-482, que liga Alegre a Jerônimo Monteiro, Cachoeiro de Itapemirim e, no sentido oposto, a Guaçuí — corredor também usado pelo tráfego de toda a região Centro-Sul do estado. O município não tem aeroporto; o mais próximo fica em Cachoeiro de Itapemirim. Internamente, o deslocamento aos sete distritos depende de estradas vicinais pelo relevo do Caparaó.',

  corridas: [
    {
      nome: 'Corrida da Penha',
      descricao:
        'Prova de rua tradicional de Alegre, com cerca de 7 km de percurso e largada e chegada na praça em frente à sede da Prefeitura, em homenagem à padroeira Nossa Senhora da Penha. Já chegou à 11ª edição e costuma reunir milhares de participantes entre corredores e caminhantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Alegre combina o cotidiano da pecuária leiteira e da cafeicultura do Caparaó com a vida universitária trazida pelo campus da UFES no Alto Universitário, que atrai estudantes de Agronomia, Veterinária, Zootecnia e Engenharias vindos de fora do município. A Corrida da Penha, disputada há mais de uma década em torno da tradição religiosa da cidade, é o principal evento de rua do calendário local.',
  academias:
    'A oferta de academias é modesta, concentrada no Centro e no entorno do Alto Universitário, voltada a musculação e treino funcional e impulsionada em parte pela demanda da comunidade acadêmica da UFES, complementada por opções de treino ao ar livre nas trilhas da ARIE Laerth Paiva Gama e no acesso à Cachoeira da Fumaça.',

  destaquesFitness: [
    'Um dos três maiores produtores de leite do Espírito Santo, ao lado de Ecoporanga e Presidente Kennedy.',
    'Sede do campus da UFES no Alto Universitário desde 1971, herdeiro da antiga Escola Superior de Agronomia (Caufes), hoje Centro de Ciências Agrárias e Engenharias.',
    'Parque Estadual da Cachoeira da Fumaça, com queda d\'água de cerca de 144 m, uma das maiores do Espírito Santo, na divisa com Ibitirama.',
    'Corrida da Penha, prova de rua tradicional de 7 km disputada há mais de uma década no Centro da cidade.',
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
    'Cidade leiteira e cafeeira do Caparaó capixaba, Alegre soma a vida universitária trazida pelo campus da UFES no Alto Universitário à tradição da Corrida da Penha e ao cenário natural da Cachoeira da Fumaça. Um personal trainer ajuda a adaptar o treino ao calor mais intenso do verão e a aproveitar as trilhas e estradas rurais do município com segurança e constância.',

  vizinhas: ['castelo-es', 'cachoeiro-de-itapemirim-es'],

  fontes: [
    { nome: 'IBGE Cidades — Alegre', url: 'https://cidades.ibge.gov.br/brasil/es/alegre/panorama' },
    { nome: 'Prefeitura Municipal de Alegre', url: 'https://www.alegre.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'UFES — Campus de Alegre, história', url: 'https://alegre.ufes.br/historia' },
    { nome: 'Incaper — Perfil municipal de Alegre', url: 'https://incaper.es.gov.br/media/incaper/proater/municipios/Alegre.pdf' },
  ],
  atualizadoEm: '2026-07-05',
};
