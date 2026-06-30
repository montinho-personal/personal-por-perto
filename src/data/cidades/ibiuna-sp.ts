import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ibiuna-sp',
  nome: 'Ibiúna',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'ibiunense',
  tipo: 'cidade',

  populacao: 75605,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  altitudeM: 996,

  resumoEconomico:
    'Ibiúna é uma estância turística no sudoeste da Grande São Paulo, encravada na serra a cerca de 996 m de altitude — uma das cidades mais altas do estado. A pouco mais de 70 km da capital, cresceu de cerca de 71,8 mil para 75.605 habitantes entre os Censos de 2010 e 2022, espalhados por um vasto território rural de quase 1.060 km². A economia gira em torno do campo: a cidade é reconhecida como a maior produtora de hortaliças do estado de São Paulo e um dos pilares do "cinturão verde" paulistano, com sua produção de folhosas e legumes escoada diariamente pela Rodovia Bunjiro Nakao rumo à CEAGESP. Ao lado da horticultura, o turismo de natureza é o segundo grande motor: pousadas, chácaras de aluguel, turismo rural e ecoturismo aproveitam o clima ameno de serra, a represa de Itupararanga e a Mata Atlântica preservada para atrair visitantes da capital nos fins de semana.',

  mercado:
    'O mercado de personal trainers em Ibiúna é o de uma cidade de serra com população dispersa entre um núcleo urbano compacto e um imenso território rural de bairros, sítios e condomínios de chácaras. No Centro e nos bairros residenciais próximos concentra-se a demanda por academias e estúdios, enquanto nas áreas rurais e nos condomínios de lazer — muitos usados como segunda residência por moradores da capital — predomina o atendimento domiciliar e ao ar livre. O perfil turístico abre ainda uma frente sazonal: pousadas, hotéis-fazenda e clubes que oferecem atividades físicas a hóspedes, além de praticantes de trilha, mountain bike e esportes na represa que buscam preparo específico. O personal que combina atendimento em domicílio, parceria com academias do Centro e treino aproveitando o relevo e as áreas verdes tende a atender bem essa demanda espalhada.',

  bairrosNobres: ['Una', 'Vargedo', 'Verava', 'Centro'],
  bairrosPopulares: ['Centro', 'Pirapora', 'Pocinho', 'Paruru'],

  parques: [
    {
      nome: 'Parque Estadual do Jurupará',
      descricao:
        'Maior unidade de conservação da região, com mais de 26 mil hectares de Mata Atlântica situados em sua quase totalidade dentro de Ibiúna. Funciona como corredor ecológico entre a Serra de Paranapiacaba e a Serra do Mar e oferece trilhas como a da Cachoeira do Rio Bonito (fácil, autoguiada) e a longa Trilha dos Juquiás, além de cachoeiras e rica fauna — atrativos para trekking, ciclismo e turismo de natureza, com visita mediante agendamento prévio.',
    },
    {
      nome: 'Represa de Itupararanga',
      descricao:
        'Grande reservatório formado pelos rios Sorocamirim, Sorocabuçu e Una, com cerca de 40 km de extensão, que faz divisa de Ibiúna com municípios vizinhos. É um dos principais cartões-postais da cidade e palco de esportes aquáticos como caiaque, stand up paddle e remo, além de caminhada e pedal pelas estradas marginais.',
    },
    {
      nome: 'Bairro do Vargedo (Portal da Mata Atlântica)',
      descricao:
        'Conhecido como "Portal da Mata Atlântica", o Vargedo concentra atrativos de ecoturismo, cachoeiras e trilhas em meio à floresta preservada, sendo uma das portas de entrada do turismo de natureza ibiunense.',
    },
  ],
  ciclovias:
    'Ibiúna não tem uma malha cicloviária urbana estruturada como a de grandes centros, mas é um polo de ciclismo de aventura. As estradas rurais que ligam os bairros, o entorno da represa de Itupararanga e as trilhas do Parque Estadual do Jurupará atraem ciclistas de mountain bike e cicloturistas da capital e da região, sobretudo nos fins de semana. No núcleo urbano, o pedal acontece em vias mais tranquilas e nas áreas internas dos condomínios de chácaras.',

  clima:
    'O clima é subtropical de altitude, com a sede a cerca de 996 m acima do nível do mar e picos no entorno que superam os 1.000 m, como a Serra do Verava. Isso garante temperaturas amenas o ano todo, noites frescas mesmo no verão e chuvas concentradas entre o fim da primavera e o verão. A umidade da Mata Atlântica e do cinturão verde reforça a sensação de serra.',
  climaTreino:
    'As manhãs frescas de serra são uma das melhores janelas para treino ao ar livre, especialmente para corrida, trilha e pedal nas estradas rurais e à beira da represa. No verão chuvoso, vale priorizar o começo do dia e manter um plano B em academia ou em ambiente coberto; no inverno, as temperaturas baixas pedem aquecimento mais cuidadoso antes dos treinos externos.',

  mobilidade:
    'A mobilidade depende fortemente do automóvel e da Rodovia Bunjiro Nakao (SP-250), eixo de cerca de 89 km que liga Ibiúna a Vargem Grande Paulista, Cotia e à capital — a pouco mais de 70 km — e funciona como espinha dorsal do escoamento agrícola da região. A cidade não tem malha ferroviária, e o transporte interno combina ônibus municipais e intermunicipais com deslocamentos por estradas rurais que conectam os muitos bairros distantes do Centro. Essa dispersão territorial valoriza o personal que vai até o cliente, poupando longos trajetos pela serra.',

  corridas: [
    {
      nome: 'Provas de corrida de rua de calendário regional',
      descricao:
        'Ibiúna e o entorno recebem provas de rua de calendário regional, com largadas em áreas centrais e percursos de 5 km e 10 km que aproveitam o relevo ondulado e o clima ameno de serra.',
    },
    {
      nome: 'Trail running e travessias na natureza',
      descricao:
        'O relevo de serra, as trilhas do Parque Estadual do Jurupará e os caminhos rurais fazem de Ibiúna um destino para corrida em trilha (trail running) e travessias, modalidades que crescem na região e atraem corredores da capital em busca de percursos em meio à Mata Atlântica.',
    },
    {
      nome: 'Pedais e provas de mountain bike',
      descricao:
        'As estradas de terra e as trilhas da região sediam pedais e eventos de mountain bike que reúnem ciclistas de Ibiúna e de cidades vizinhas, aproveitando a paisagem rural e o entorno da represa de Itupararanga.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Ibiúna é fortemente marcada pela vocação de natureza: trilha, mountain bike, corrida em trilha e esportes na represa de Itupararanga dividem espaço com o esporte de turismo de aventura, que inclui o voo livre praticado nas serras do sudoeste paulista. No núcleo urbano, academias e quadras públicas atendem ao dia a dia dos moradores, enquanto o relevo e as áreas verdes convidam ao treino ao ar livre. Com IDHM médio (0,710), a cidade ainda tem espaço para ampliar a oferta esportiva, mas compensa com um ambiente natural privilegiado para atividade física.',
  academias:
    'A oferta de academias é típica de cidade de serra de médio porte: predominam academias de bairro com bom custo-benefício no Centro e nas áreas mais urbanizadas, além de estúdios de treino funcional e personal. Nas áreas rurais e nos condomínios de chácaras, muitos moradores complementam a rotina com a estrutura de lazer dos próprios condomínios e com o treino ao ar livre, o que abre espaço para o personal que leva o atendimento até a casa do cliente.',

  destaquesFitness: [
    'Maior produtora de hortaliças do estado de São Paulo e parte do cinturão verde paulistano.',
    'Clima ameno de serra (cerca de 996 m, uma das cidades mais altas de SP), ótimo para treino ao ar livre nas manhãs.',
    'Forte vocação para turismo de natureza: trilhas do Parque Estadual do Jurupará, represa de Itupararanga e ecoturismo.',
    'Território rural extenso com sítios e condomínios de chácaras, favorecendo o atendimento domiciliar do personal.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Treinar com um personal trainer em Ibiúna é aproveitar um dos cenários mais verdes da Grande São Paulo: serra fresca a quase mil metros de altitude, trilhas de Mata Atlântica no Parque Estadual do Jurupará e a represa de Itupararanga logo ali. Seja em uma academia no Centro, em um condomínio de chácaras ou ao ar livre nas estradas rurais, o que faz a diferença é escolher um profissional alinhado ao seu objetivo e à sua rotina — e poucos lugares no entorno da capital oferecem um ambiente tão convidativo para colocar o corpo em movimento.',

  vizinhas: ['cotia-sp', 'vargem-grande-paulista-sp', 'sorocaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Ibiúna', url: 'https://cidades.ibge.gov.br/brasil/sp/ibiuna/panorama' },
    { nome: 'Prefeitura da Estância Turística de Ibiúna', url: 'https://ibiuna.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
