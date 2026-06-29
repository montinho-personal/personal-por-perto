import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'colombo-pr', nome: 'Colombo', uf: 'PR', estado: 'Paraná', estadoSlug: 'parana', regiao: 'Sul', gentilico: 'colombense', tipo: 'cidade',
  populacao: 232212, populacaoAno: 2022, idhm: 0.733, idhmClasse: 'alto', altitudeM: 1027,
  resumoEconomico:
    'Colombo é o segundo município mais populoso da Região Metropolitana de Curitiba e está praticamente conurbado com a capital, da qual é separado por uma divisa difusa de bairros e avenidas. Sua história é marcada pela colonização italiana iniciada no fim do século XIX — Colombo é reconhecida como uma das maiores colônias italianas do Paraná —, e a uva permanece como símbolo local: a produção de Niágara e Bordô abastece cantinas familiares e dá origem à Festa da Uva. Além da vitivinicultura, o município mantém forte olericultura, fornecendo hortaliças ao cinturão verde de Curitiba, e concentra comércio e serviços que atendem a uma população grande e majoritariamente urbana.',
  mercado:
    'Por ser uma cidade grande e conurbada a Curitiba, o mercado de personal trainer em Colombo se organiza em torno das academias de bairro espalhadas pelas regiões mais adensadas — Maracanã, Guaraituba, Atuba e o entorno da Rodovia da Uva (PR-417) — e do atendimento domiciliar, comum em condomínios e residências afastadas do centro. Muitos moradores também treinam ou buscam profissionais em Curitiba, dada a proximidade. O perfil predominante é de público de classe média e popular, o que sustenta preços mais acessíveis e uma demanda crescente por acompanhamento online, que dispensa deslocamento.',
  bairrosNobres: ['Maracanã', 'São Gabriel', 'Jardim Osasco'],
  bairrosPopulares: ['Guaraituba', 'Atuba', 'Roça Grande', 'Rio Verde'],
  parques: [
    {
      nome: 'Parque Municipal das Cavernas do Bacaetava (Gruta de Bacaetava)',
      descricao:
        'Unidade de conservação a cerca de 20 km do centro, abriga a Gruta de Bacaetava, formação calcária às margens do Rio Bacaetava. O parque tem trilhas em meio à mata e é a principal área natural do município — boa opção para caminhadas e treinos ao ar livre em terreno irregular.',
    },
    {
      nome: 'Parque Municipal da Uva',
      descricao:
        'Espaço de eventos e lazer no centro de Colombo, palco da tradicional Festa da Uva. Conta com áreas abertas usadas para caminhada e atividades comunitárias, sendo um ponto de referência para a prática de exercícios na região central.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária de Colombo é limitada e concentrada em trechos urbanos próximos às vias principais, como o eixo da PR-417 (Rodovia da Uva). Muitos ciclistas e corredores complementam o treino aproveitando a malha de ciclovias da vizinha Curitiba.',
  clima:
    'O clima é subtropical úmido (Cfb na classificação de Köppen), fortemente influenciado pela altitude de cerca de 1.027 m — uma das mais elevadas da Região Metropolitana de Curitiba. As temperaturas são amenas o ano todo, com verões suaves e invernos frios, em que geadas são frequentes entre junho e agosto.',
  climaTreino:
    'A altitude elevada e o frio do inverno tornam o aquecimento mais importante para o treino ao ar livre: nas manhãs de inverno, é comum encontrar temperaturas próximas de zero, o que exige aquecimento mais longo e vestuário adequado. Um bom personal ajusta horário e intensidade ao clima frio local, reduzindo o risco de lesões.',
  mobilidade:
    'A ligação com Curitiba se dá principalmente pela PR-417 (Rodovia da Uva) e pelas avenidas que cortam a divisa entre os dois municípios, além de linhas metropolitanas integradas ao sistema da Região Metropolitana de Curitiba. O trânsito intenso nos horários de pico, típico de área conurbada, influencia a logística de quem atende em domicílio e a escolha entre treinar perto de casa ou na capital.',
  corridas: [
    {
      nome: 'Provas de rua locais e metropolitanas',
      descricao:
        'Colombo recebe corridas de rua pontuais promovidas pelo município e por organizadores regionais, e os corredores locais costumam participar do calendário robusto da vizinha Curitiba, a poucos quilômetros de distância.',
    },
    {
      nome: 'Festa da Uva',
      descricao:
        'Embora não seja uma prova esportiva, a Festa da Uva é o maior evento da cidade e reforça a vida ao ar livre e o convívio comunitário, atraindo grande público ao Parque Municipal da Uva e celebrando a tradição italiana e vitivinícola.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Colombo é fortemente ligada à do polo metropolitano de Curitiba: muitos moradores usam os parques e a rede de corrida da capital, enquanto, dentro do município, a prática se concentra em academias de bairro, quadras públicas e áreas como o Parque das Cavernas do Bacaetava. A tradição italiana das cantinas e da Festa da Uva também marca o estilo de vida local, com forte vida comunitária ao ar livre.',
  academias:
    'O município tem boa oferta de academias de bairro distribuídas pelas regiões mais adensadas, com presença de musculação, treino funcional e crossfit nos eixos comerciais. A proximidade com Curitiba amplia as opções para quem busca estúdios e serviços especializados.',
  destaquesFitness: [
    'Cidade grande conurbada a Curitiba: mercado dividido entre academias de bairro e atendimento domiciliar.',
    'Parque Municipal das Cavernas do Bacaetava (Gruta de Bacaetava): principal área natural para treino ao ar livre.',
    'Altitude de cerca de 1.027 m e invernos frios — onde o ajuste de aquecimento feito por um bom personal faz diferença.',
    'Tradição italiana viva: cantinas, Rota do Vinho/Circuito Italiano e a Festa da Uva no Parque Municipal da Uva.',
  ],
  precos: { avulsaMin: 55, avulsaMax: 125, mensalMin: 270, mensalMax: 720, onlineMin: 120, onlineMax: 360 },
  conclusao:
    'Colombo combina o porte de uma grande cidade conurbada a Curitiba com a identidade interiorana das colônias italianas e da uva. Para o personal trainer, isso significa um mercado de demanda ampla e acessível, organizado em torno das academias de bairro e do atendimento domiciliar, com a vizinha capital sempre à mão como referência. Quem entende o clima frio de altitude e a rotina metropolitana da cidade tem espaço para construir uma clientela fiel.',
  vizinhas: ['curitiba-pr', 'pinhais-pr', 'sao-jose-dos-pinhais-pr'],
  fontes: [
    { nome: 'IBGE Cidades — Colombo', url: 'https://cidades.ibge.gov.br/brasil/pr/colombo/panorama' },
    { nome: 'Prefeitura Municipal de Colombo — Dados Gerais', url: 'https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/' },
    { nome: 'Turismo Colombo — Rota do Vinho e da História', url: 'https://turismo.colombo.pr.gov.br/colombo-rota-do-vinho-e-da-historia/' },
  ],
  atualizadoEm: '2026-06-29',
};
