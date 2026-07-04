import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pires-do-rio-go',
  nome: 'Pires do Rio',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'piresino',
  tipo: 'cidade',

  populacao: 32373,
  populacaoAno: 2022,
  idhm: 0.740,
  idhmClasse: 'alto',
  altitudeM: 750,

  resumoEconomico:
    'No sudeste goiano, Pires do Rio nasceu em 1922 em torno de uma estação da Estrada de Ferro Goyaz, sendo considerada a primeira cidade planejada de Goiás, anterior a Goiânia e Brasília. A economia é hoje puxada pela avicultura industrial: o município concentra incubatórios, granjas integradas e frigoríficos de grande porte, o que levou o legislativo estadual a reconhecê-lo como Capital Estadual da Avicultura, com empresas do setor faturando bilhões de reais por ano. Completam a base econômica a agropecuária (soja, milho, feijão e pecuária de corte), o comércio regional e os serviços ligados à ferrovia, hoje operada como Ferrovia Centro-Atlântica para transporte de grãos.',

  mercado:
    'O mercado fitness de Pires do Rio é o de uma cidade média do interior goiano, com academias concentradas no Centro e em bairros próximos, atendendo trabalhadores da avicultura, do comércio e da agropecuária local. A procura por personal trainer tende a crescer entre quem busca treino individualizado diante da oferta ainda limitada de estúdios especializados, e entre quem quer aproveitar as praças e o entorno do rio Corumbá para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Setor dos Bancários', 'JK', 'Jardim Guanabara'],
  bairrosPopulares: ['Vila Militar', 'Colegial', 'Santa Terezinha', 'São José'],

  parques: [
    {
      nome: 'Ponte Epitácio Pessoa e margens do rio Corumbá',
      descricao:
        'Ponte histórica de 120 metros sobre o rio Corumbá, tombada como patrimônio cultural de Goiás, marco da fundação da cidade em 1922; o entorno do rio é usado por moradores para caminhada.',
    },
    {
      nome: 'Praça José Cury Nasser',
      descricao:
        'Praça central próxima ao Mercado Municipal, onde fica o obelisco que marca a pedra fundamental de Pires do Rio; ponto de encontro e caminhada no Centro.',
    },
    {
      nome: 'Entorno do Museu Ferroviário',
      descricao:
        'O complexo da antiga estação, único museu ferroviário de Goiás, preserva locomotivas e prédios históricos; a área ao redor integra o circuito de caminhada pelo Centro da cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal não é divulgada em fonte oficial; o deslocamento a pé e de bicicleta concentra-se nas vias do Centro e dos setores residenciais próximos.',

  clima:
    'O clima é tropical de Cerrado, com verão quente e chuvoso (de outubro a abril, com máximas entre 23°C e 31°C) e inverno seco (de maio a setembro), quando a umidade do ar cai bastante.',
  climaTreino:
    'A baixa umidade do período seco pede hidratação reforçada e atenção às vias respiratórias; treinar ao ar livre no início da manhã ou no fim da tarde é mais confortável, especialmente durante o inverno.',

  mobilidade:
    'Pires do Rio é servida pelas rodovias estaduais GO-020, GO-139 e GO-330, que conectam o município a Vianópolis, Ipameri, Catalão e Caldas Novas, entre outras cidades da região. Em 2025, foi entregue o Contorno Oeste da GO-330, com 12,44 km, obra que tira o tráfego de passagem do Centro da cidade e facilita o escoamento da produção agrícola e avícola regional. A cidade fica a cerca de 146 km de Goiânia e manteve a vocação ferroviária que a originou, hoje voltada ao transporte de cargas pela Ferrovia Centro-Atlântica. O deslocamento urbano interno é predominantemente feito a pé ou de carro, dado o porte compacto da cidade.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do Centro histórico, da Praça José Cury Nasser e das margens do rio Corumbá, usados para caminhada no dia a dia, sem um calendário de corridas de rua consolidado e amplamente divulgado.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas no Centro, com porte compatível com uma cidade média do interior goiano.',

  destaquesFitness: [
    'Primeira cidade planejada de Goiás, fundada em 1922 em torno da estação ferroviária.',
    'Capital Estadual da Avicultura, com forte economia ligada a granjas e frigoríficos.',
    'Ponte Epitácio Pessoa e as margens do rio Corumbá como espaço de caminhada ao ar livre.',
    'Clima de Cerrado com inverno seco, que exige atenção à hidratação no treino.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 300,
  },

  conclusao:
    'Cidade pequena e planejada do sudeste goiano, Pires do Rio combina economia sólida na avicultura com um cotidiano tranquilo, cercado por seu patrimônio ferroviário e pelo rio Corumbá. Um personal trainer ajuda a estruturar uma rotina de treino consistente onde a oferta de estúdios ainda é limitada, respeitando o clima seco do Cerrado e aproveitando os espaços públicos do Centro da cidade.',

  vizinhas: ['goiania-go', 'catalao-go'],

  fontes: [
    { nome: 'IBGE Cidades — Pires do Rio', url: 'https://cidades.ibge.gov.br/brasil/go/pires-do-rio/panorama' },
    { nome: 'Prefeitura de Pires do Rio', url: 'https://piresdorio.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
