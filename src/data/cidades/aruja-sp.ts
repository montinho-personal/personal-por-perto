import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aruja-sp',
  nome: 'Arujá',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'arujaense',
  tipo: 'cidade',

  populacao: 86678,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 755,

  resumoEconomico:
    'Município da Região Metropolitana de São Paulo, na sub-região do Alto Tietê, Arujá fica a cerca de 40 km da capital, no cruzamento estratégico das rodovias Presidente Dutra e Ayrton Senna, próximo ao Aeroporto Internacional de Guarulhos. Essa posição transformou a cidade em polo de logística, centros de distribuição e indústria, aproveitando terrenos disponíveis e o acesso facilitado a São Paulo, ao Vale do Paraíba e ao Rio de Janeiro. Ao mesmo tempo, Arujá é conhecida como "Cidade Natureza" e se firmou como endereço de condomínios residenciais de alto padrão, atraindo executivos e famílias em busca de qualidade de vida a uma curta distância dos grandes polos econômicos.',

  mercado:
    'O perfil de renda mais alto ligado aos condomínios fechados e a proximidade com a capital sustentam uma demanda relevante por treino personalizado em Arujá. A procura vem tanto de moradores dos condomínios de alto padrão, que valorizam o atendimento próximo de casa e o treino ao ar livre nas áreas verdes, quanto de quem trabalha nos polos logísticos e industriais e busca conciliar a rotina puxada com acompanhamento profissional.',

  bairrosNobres: ['Arujazinho', 'Arujá Country Club', 'Jardim Real', 'Arujá Hills'],
  bairrosPopulares: ['Jardim Rincão', 'Vila Flórida', 'Jardim Fazenda Rincão', 'Cidade Nova'],

  parques: [
    {
      nome: 'Parque dos Ipês "Alcy Machado Godoy"',
      descricao:
        'Primeiro parque ecológico oficial do município, no Jardim Fazenda Rincão, com cerca de 50 mil m² de área verde preservada, equipamentos de lazer e estrutura para exercícios físicos ao ar livre.',
    },
    {
      nome: 'Bosque do Real "Ladislau de Rossi"',
      descricao:
        'Área verde no Jardim Real com cerca de 20 mil m² de mata preservada, trilha de caminhada de mais de 650 metros, mirante e espaço infantil — opção para caminhada e treino leve em meio à natureza.',
    },
    {
      nome: 'Condomínios com áreas verdes e trilhas',
      descricao:
        'Muitos dos condomínios de alto padrão da cidade, como os Arujazinho, contam com amplas áreas verdes, trilhas para caminhada, quadras e espaços de convivência usados no dia a dia para atividade física.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é limitada e concentrada em trechos urbanos; boa parte do pedal e da corrida acontece nas vias internas dos condomínios, em avenidas locais e no entorno das áreas verdes, com atenção redobrada nas rodovias de tráfego pesado.',

  clima:
    'Arujá tem clima tropical de altitude, ameno para os padrões da Região Metropolitana graças aos cerca de 755 metros de altitude. As temperaturas médias giram em torno de 18 °C ao ano, com verão úmido e quente (fevereiro entre os meses mais quentes) e inverno mais seco e frio, quando julho registra as menores médias, próximas de 14 °C.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre boa parte do ano. No verão úmido vale priorizar o começo da manhã ou o fim da tarde e reforçar a hidratação; no inverno, manhãs frias pedem aquecimento mais cuidadoso antes de correr ou treinar ao relento.',

  mobilidade:
    'A mobilidade de Arujá é marcada pelo cruzamento das rodovias Presidente Dutra (BR-116) e Ayrton Senna (SP-070), que conectam a cidade a São Paulo, a Guarulhos e ao Aeroporto Internacional, ao Vale do Paraíba e ao Rio de Janeiro. Esse eixo rodoviário sustenta a vocação logística e industrial do município; internamente, o transporte é feito por ônibus, e o uso do carro é predominante, sobretudo nos deslocamentos entre condomínios e os polos de trabalho.',

  corridas: [
    {
      nome: 'Run Arujá',
      descricao:
        'Prova de corrida de rua realizada na cidade, com percursos que reúnem corredores locais e da região do Alto Tietê.',
    },
    {
      nome: 'Circuito de Corrida e Caminhada — Etapa Arujá',
      descricao:
        'Etapa arujaense de um circuito regional de corrida e caminhada, com largada em vias da cidade e provas de diferentes distâncias.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Arujá combina o uso das áreas verdes e das trilhas dos parques e condomínios para caminhada e corrida, a prática em clubes e o calendário de provas de rua da região. O apelido de "Cidade Natureza" reforça a vocação para atividades ao ar livre em meio ao verde preservado.',
  academias:
    'A oferta reúne academias de musculação e treino funcional distribuídas pelos bairros centrais e pelos loteamentos residenciais, além de estúdios e do atendimento de personal trainers dentro dos condomínios de alto padrão, onde o treino próximo de casa é bastante valorizado.',

  destaquesFitness: [
    'Conhecida como "Cidade Natureza", com parques ecológicos e áreas verdes para treino ao ar livre.',
    'Clima ameno de altitude (cerca de 755 m), favorável à corrida e à atividade externa boa parte do ano.',
    'Forte presença de condomínios de alto padrão, com trilhas, quadras e demanda por personal trainer próximo de casa.',
    'Polo de logística e indústria no cruzamento das rodovias Presidente Dutra e Ayrton Senna, perto do Aeroporto de Guarulhos.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 140,
    onlineMax: 400,
  },

  conclusao:
    'Com clima ameno, muito verde e um perfil de moradores que valoriza qualidade de vida, Arujá é uma cidade convidativa para quem quer treinar com constância. Um personal trainer ajuda a aproveitar os parques, as trilhas dos condomínios e o calendário de corridas da região, montando uma rotina que se encaixa na correria de quem vive entre a capital e os polos logísticos do Alto Tietê.',

  vizinhas: ['guarulhos-sp', 'itaquaquecetuba-sp', 'mogi-das-cruzes-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Arujá', url: 'https://cidades.ibge.gov.br/brasil/sp/aruja/panorama' },
    { nome: 'Prefeitura de Arujá', url: 'https://www.prefeituradearuja.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
