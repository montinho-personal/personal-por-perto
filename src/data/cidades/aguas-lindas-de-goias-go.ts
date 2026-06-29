import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aguas-lindas-de-goias-go',
  nome: 'Águas Lindas de Goiás',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'águaslindense',
  tipo: 'cidade',

  populacao: 225671,
  populacaoAno: 2022,
  idhm: 0.686,
  idhmClasse: 'médio',
  altitudeM: 1063,

  resumoEconomico:
    'Emancipada em 1995 e instalada como município em 1997, Águas Lindas de Goiás é uma das cidades que mais cresceram no Brasil nas últimas décadas. Integrada ao Entorno do Distrito Federal (RIDE), nasceu e se consolidou como cidade-dormitório de Brasília: boa parte da população atravessa diariamente a divisa para trabalhar na capital, sobretudo em Ceilândia e no Plano Piloto. A economia é puxada por comércio e serviços de perfil popular, com forte dependência da capital federal.',

  mercado:
    'Cidade grande e popular do Entorno do DF, tem mercado fitness voltado ao público de classe popular e média: academias de bairro espalhadas pelos setores residenciais, redes de baixo custo e forte demanda por atendimento domiciliar, que vence as distâncias e a rotina puxada de quem trabalha em Brasília. O personal a domicílio é uma alternativa relevante nesse cenário.',

  bairrosNobres: ['Mansões Camargo', 'Jardim Brasília', 'Setor Central'],
  bairrosPopulares: ['Jardim Querência', 'Vila Soares', 'Jardim Brasília II', 'Parque da Barragem'],

  parques: [
    {
      nome: 'Parque da Barragem do Descoberto',
      descricao:
        'Área de lazer junto à represa, com trilhas, espaço para caminhada e contato com a natureza — um dos pontos mais usados ao ar livre na cidade.',
    },
    {
      nome: 'Praças e academias ao ar livre dos setores',
      descricao:
        'A cidade conta com praças e academias da terceira idade distribuídas pelos bairros, usadas para caminhada e treino funcional gratuito.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é limitada e fragmentada, refletindo o crescimento urbano acelerado; o uso da bicicleta acontece sobretudo em vias locais dos setores residenciais.',

  clima:
    'O clima é tropical de cerrado, com média anual em torno de 22 °C, verão chuvoso (de outubro a março) e inverno seco bem marcado.',
  climaTreino:
    'É possível treinar ao ar livre o ano todo; no período seco (maio a setembro), a baixa umidade do cerrado exige atenção redobrada à hidratação, e o calor do meio-dia pede horários mais frescos.',

  mobilidade:
    'A cidade é cortada pela BR-070, principal eixo que liga Águas Lindas a Ceilândia e a Brasília. A forte dependência da capital gera grande fluxo pendular diário, com transporte rodoviário intermunicipal movimentado e trânsito intenso nos horários de pico.',

  corridas: [
    {
      nome: 'Campeonatos e eventos esportivos municipais',
      descricao:
        'A cidade promove campeonatos amadores de futebol e atividades esportivas em quadras e praças dos bairros, base da cena esportiva local.',
    },
    {
      nome: 'Calendário de corridas do Entorno e do DF',
      descricao:
        'Pela proximidade com Brasília, muitos moradores participam de corridas de rua do calendário do Distrito Federal e do Entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é popular e comunitária, centrada no futebol amador e no uso de praças e academias ao ar livre dos setores. A proximidade com Brasília aproxima parte dos moradores do circuito de corridas de rua do DF.',
  academias:
    'A oferta é dominada por academias de bairro e redes de baixo custo, distribuídas pelos setores residenciais. O atendimento domiciliar ganha espaço como solução para a rotina pendular de quem trabalha na capital.',

  destaquesFitness: [
    'Cidade grande e em crescimento acelerado, com demanda crescente por treino.',
    'Perfil popular: academias de bairro e forte espaço para o personal a domicílio.',
    'Parque da Barragem do Descoberto e praças com academias ao ar livre.',
    'Proximidade com Brasília, que amplia o acesso a corridas e eventos do DF.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade jovem, populosa e em expansão no Entorno do DF, Águas Lindas de Goiás combina perfil dormitório com rotina puxada de deslocamento para Brasília. Nesse contexto, o personal trainer — especialmente a domicílio — ajuda a encaixar o treino na agenda e a manter a regularidade, com um plano sob medida para cada morador.',

  vizinhas: ['brasilia-df', 'valparaiso-de-goias-go', 'goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Águas Lindas de Goiás', url: 'https://cidades.ibge.gov.br/brasil/go/aguas-lindas-de-goias/panorama' },
    { nome: 'Prefeitura de Águas Lindas de Goiás', url: 'https://aguaslindasdegoias.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/5200258' },
  ],
  atualizadoEm: '2026-06-29',
};
