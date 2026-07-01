import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vespasiano-mg',
  nome: 'Vespasiano',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'vespasianense',
  tipo: 'cidade',

  populacao: 129246,
  populacaoAno: 2022,
  idhm: 0.688,
  idhmClasse: 'médio',
  altitudeM: 679,

  resumoEconomico:
    'Cidade da Região Metropolitana de Belo Horizonte, no vetor norte e próxima ao Aeroporto Internacional de Confins, Vespasiano tem economia ancorada na indústria e no comércio. A tradição industrial vem da fabricação de cimento — a Cimentos Liz opera no município desde 1969 (antiga Soeicom) — e se estende a distritos com atividades diversificadas, como o do Morro Alto. O comércio local é variado e serve tanto a população da cidade quanto o fluxo metropolitano ao longo da MG-010.',

  mercado:
    'Como município integrado à malha urbana da Grande BH, Vespasiano tem um mercado fitness formado por academias de bairro e estúdios de treino, com público que também acessa a estrutura das cidades vizinhas. A procura por personal trainers costuma vir de quem busca acompanhamento personalizado sem depender do deslocamento até a capital, aproveitando espaços do próprio município.',

  bairrosNobres: ['Centro', 'Morro Alto', 'Jardim da Glória', 'Serra Dourada'],
  bairrosPopulares: ['Caieiras', 'Vale Formoso', 'Vista Alegre', 'Angicos'],

  parques: [
    {
      nome: 'Orla e áreas verdes do entorno urbano',
      descricao:
        'Praças e espaços abertos distribuídos pelos bairros funcionam como pontos de caminhada e treino ao ar livre no dia a dia da cidade, complementando a estrutura das academias.',
    },
    {
      nome: 'Entorno da Serra da Piedade',
      descricao:
        'A região próxima à Serra da Piedade, marco geográfico e ambiental do vetor norte da RM de Belo Horizonte, oferece relevo e estradas de acesso que atraem quem gosta de treino em subida, pedal e caminhada em meio a paisagem serrana.',
    },
    {
      nome: 'Percursos ao longo da MG-010 / Linha Verde',
      descricao:
        'Trechos com áreas verdes preservadas ao longo do corredor que liga a cidade a Belo Horizonte e a Confins servem de referência para corridas e pedaladas de fim de semana na região.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em pontos da área urbana; boa parte do pedal acontece em vias do município e em rotas que aproveitam o entorno metropolitano e as estradas em direção à serra.',

  clima:
    'O clima é tropical de altitude, típico da Região Metropolitana de Belo Horizonte, com verão quente e chuvoso (de outubro a março) e inverno seco e mais ameno. A altitude em torno de 680 metros ajuda a suavizar as temperaturas, e a estação seca costuma trazer baixa umidade do ar.',
  climaTreino:
    'O calor e a chuva do verão pedem atenção ao horário e à hidratação, favorecendo treinos no início da manhã ou fim da tarde. No inverno seco, o tempo firme é convidativo para atividade ao ar livre, mas a baixa umidade recomenda reforçar a ingestão de água.',

  mobilidade:
    'Vespasiano se conecta a Belo Horizonte e ao Aeroporto Internacional de Confins pela MG-010 (Linha Verde), principal eixo rodoviário do vetor norte da RM de BH. O transporte é feito por ônibus metropolitanos que integram a cidade à capital e aos municípios vizinhos, e o município conta ainda com estação ferroviária que atende a região.',

  corridas: [
    {
      nome: 'Corridas e circuitos de rua do município',
      descricao:
        'A cidade recebe provas e circuitos de corrida de rua promovidos localmente, com foco em saúde e integração da comunidade, reunindo moradores de diferentes bairros.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso de praças e vias para caminhada e corrida, a prática em academias de bairro e o aproveitamento do relevo do vetor norte metropolitano, com a Serra da Piedade como pano de fundo para atividades ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias de musculação e estúdios de treino funcional espalhados pelos bairros, com porte compatível com uma cidade da malha metropolitana de Belo Horizonte.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Belo Horizonte, no vetor norte, próxima ao Aeroporto de Confins.',
    'Entorno da Serra da Piedade, com relevo que favorece treino em subida, pedal e caminhada.',
    'Clima tropical de altitude, com verão chuvoso e inverno seco que pede atenção à hidratação.',
    'Tradição industrial ligada ao cimento e economia integrada ao comércio e à logística da MG-010.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Integrada à Grande BH e cercada pelo relevo do vetor norte, Vespasiano oferece boas condições para treinar ao ar livre e em academias de bairro, com clima de altitude que ajuda na rotina. Um personal trainer ajuda a organizar horários, aproveitar o entorno da serra e manter a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['santa-luzia-mg', 'lagoa-santa-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Vespasiano', url: 'https://cidades.ibge.gov.br/brasil/mg/vespasiano/panorama' },
    { nome: 'Prefeitura de Vespasiano', url: 'https://www.vespasiano.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
