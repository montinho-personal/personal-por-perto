import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'planaltina-go',
  nome: 'Planaltina',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'planaltinense',
  tipo: 'cidade',

  populacao: 105031,
  populacaoAno: 2022,
  idhm: 0.669,
  idhmClasse: 'médio',
  altitudeM: 1000,

  resumoEconomico:
    'Uma das cidades mais antigas do Centro-Oeste, Planaltina de Goiás nasceu do arraial de Mestre d’Armas, no século XVIII, na rota que ligava as minas de Goiás ao litoral. Hoje integra o Entorno do Distrito Federal e a RIDE-DF, com economia apoiada no agronegócio (grãos, milho e pecuária), no comércio e nos serviços, e uma rotina marcada pelo intenso fluxo pendular de moradores que trabalham e estudam em Brasília, a cerca de 55 km pela BR-020.',

  mercado:
    'Cidade do Entorno do DF com forte ligação com Brasília, Planaltina de Goiás tem mercado fitness em formação, puxado pela classe trabalhadora que circula diariamente para a capital e por quem busca treinar perto de casa. A oferta concentra-se nos setores centrais e residenciais, e o clima de Cerrado de altitude, com longa estação seca, é um fator que o personal precisa considerar no planejamento.',

  bairrosNobres: ['Setor Tradicional', 'Setor Sul', 'Setor Norte', 'Setor Aeroporto'],
  bairrosPopulares: ['Vila Buritis', 'Jardim Roriz', 'Vila Vicentina', 'Setor dos Imigrantes'],

  parques: [
    {
      nome: 'Eixo Histórico do Setor Tradicional',
      descricao:
        'O entorno das praças centrais e das avenidas Goiás e Independência, com calçadas largas e arborizadas, funciona como circuito espontâneo de caminhada e corrida no coração antigo da cidade.',
    },
    {
      nome: 'Vale do Amanhecer (proximidades)',
      descricao:
        'O famoso templo do Vale do Amanhecer fica na vizinha Planaltina-DF, a poucos quilômetros, e a região de morros e estradas vicinais do Cerrado é usada por moradores para caminhadas e pedais.',
    },
    {
      nome: 'Pirenópolis (a cerca de 130 km)',
      descricao:
        'Destino de natureza próximo, Pirenópolis oferece cachoeiras, trilhas e relevo da Serra dos Pireneus para quem quer combinar treino e turismo de aventura no fim de semana.',
    },
  ],
  ciclovias:
    'A malha cicloviária estruturada ainda é limitada; o ciclismo acontece sobretudo no perímetro urbano e em estradas vicinais do Cerrado, no entorno da cidade.',

  clima:
    'O clima é tropical de Cerrado, com duas estações bem definidas: chuvosa de outubro a março e seca de abril a setembro, em altitude de cerca de 1.000 m no Planalto Central.',
  climaTreino:
    'Na estação seca, o ar fica muito ressecado e a umidade despenca, o que pede hidratação reforçada e atenção a horários de menor calor; a altitude torna o estímulo cardiovascular favorável, e o inverno seco e ameno é a melhor janela para treinos longos ao ar livre.',

  mobilidade:
    'A cidade é cortada pela BR-020, principal eixo de ligação com Brasília (a cerca de 55 km), e seu cotidiano é marcado pelo deslocamento pendular para a capital, o que torna a constância do treino um desafio para quem encara o trânsito diário.',

  corridas: [
    {
      nome: 'Corrida de rua no Entorno do DF',
      descricao:
        'A proximidade com Brasília, polo forte de corrida de rua, atrai moradores de Planaltina de Goiás para o calendário de provas da capital e do Entorno, alimentando a prática local.',
    },
    {
      nome: 'Treinos em vias urbanas e estradas do Cerrado',
      descricao:
        'Sem grandes parques lineares, corredores locais usam as avenidas do Setor Tradicional e as estradas vicinais de Cerrado, aproveitando o relevo ondulado e o ar seco da estação de inverno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é influenciada pela vizinhança com Brasília: muitos moradores participam de provas e grupos de corrida da capital, enquanto o futebol amador e as quadras de bairro sustentam a base do esporte comunitário.',
  academias:
    'A oferta reúne academias de bairro e estúdios nos setores centrais e residenciais, com expansão acompanhando o crescimento populacional e a renda ligada ao agronegócio e ao trabalho na capital.',

  destaquesFitness: [
    'Cidade do Entorno do DF (RIDE-DF), com forte ligação com Brasília pela BR-020.',
    'Clima de Cerrado de altitude (~1.000 m), com longa estação seca de abril a setembro.',
    'Centro histórico (antigo arraial de Mestre d’Armas) com eixo de caminhada arborizado.',
    'Acesso a natureza no Entorno: Vale do Amanhecer próximo e Pirenópolis a cerca de 130 km.',
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
    'Cidade histórica do Entorno do DF, Planaltina de Goiás combina a rotina pendular com Brasília e um clima de Cerrado que exige planejamento na estação seca. Um personal trainer ajuda a manter a constância apesar do trânsito diário, ajustando a hidratação e os horários de treino ao ar quente e seco do inverno do Planalto Central.',

  vizinhas: ['brasilia-df', 'formosa-go'],

  fontes: [
    { nome: 'IBGE Cidades — Planaltina (GO)', url: 'https://cidades.ibge.gov.br/brasil/go/planaltina/panorama' },
    { nome: 'Prefeitura de Planaltina de Goiás', url: 'https://planaltina.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
