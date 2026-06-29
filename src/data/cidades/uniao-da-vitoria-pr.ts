import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uniao-da-vitoria-pr',
  nome: 'União da Vitória',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'unionvitoriense',
  tipo: 'cidade',

  populacao: 55033,
  populacaoAno: 2022,
  idhm: 0.74,
  idhmClasse: 'alto',
  altitudeM: 752,

  resumoEconomico:
    'Principal cidade do sul do Paraná na divisa com Santa Catarina, União da Vitória é polo regional de comércio, serviços e saúde para dezenas de municípios do entorno. Forma com Porto União-SC um aglomerado de cidades-gêmeas separadas pela antiga ferrovia. A economia tem raízes na madeira e na indústria madeireira, somadas ao agronegócio e a um setor de comércio e serviços fortalecido pela posição de entroncamento entre o Paraná e o Oeste catarinense.',

  mercado:
    'O mercado de musculação reúne academias locais e redes regionais, em volume típico de polo do interior. A presença de instituições de ensino superior, como a UNIUV, ajuda a manter uma clientela jovem e ativa na cidade.',

  bairrosNobres: ['Centro', 'São Basílio Magno', 'Cidade Jardim', 'São Joaquim'],
  bairrosPopulares: ['São Bernardo', 'Navegantes', 'Cristo Rei', 'Sagrada Família'],

  parques: [
    {
      nome: 'Orla do Rio Iguaçu',
      descricao:
        'A frente do rio Iguaçu, que corta a cidade e marca a divisa com Porto União-SC, concentra avenidas e espaços de caminhada à beira-rio, usados para atividade física ao ar livre.',
    },
    {
      nome: 'Parque Histórico Iguassu',
      descricao:
        'Museu a céu aberto com casas centenárias de madeira que recriam a colonização do vale do Iguaçu por imigrantes alemães, poloneses e ucranianos, com áreas verdes para passeio.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'O conjunto de praças e calçadões da área central, próximo à antiga Estação Ferroviária tombada, serve de espaço para caminhada urbana no dia a dia.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é subtropical do sul do Paraná, com inverno frio, geadas frequentes e temperaturas baixas; o rio Iguaçu, que atravessa a cidade, eleva a umidade e a sensação de frio nos meses mais rigorosos.',
  climaTreino:
    'O inverno frio e úmido pede aquecimento prolongado e roupas térmicas para o treino ao ar livre; o verão ameno favorece corrida e atividades outdoor na orla e nos parques.',

  mobilidade:
    'União da Vitória é cortada pela BR-153, eixo rodoviário que liga o sul do Paraná ao Oeste catarinense e ao Rio Grande do Sul, e é marcada pela ferrovia histórica da Estrada de Ferro São Paulo-Rio Grande, ligada à Guerra do Contestado, que divide a cidade de Porto União-SC e hoje permanece sem tráfego regular.',

  corridas: [
    {
      nome: 'Corridas de rua das Gêmeas do Iguaçu',
      descricao:
        'Provas de rua organizadas no conjunto urbano de União da Vitória e Porto União, com percursos que aproveitam a orla do rio Iguaçu e a área central.',
    },
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Eventos de caminhada e corrida promovidos por clubes locais, escolas e ações de saúde, parte da agenda esportiva da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso da orla do rio Iguaçu para caminhada e corrida com a tradição de futebol e esportes coletivos. A identidade de cidades-gêmeas integra a agenda de eventos com Porto União-SC.',
  academias:
    'A oferta reúne academias locais e redes regionais de musculação, complementadas pela orla do Iguaçu e pelas praças centrais como espaços públicos de treino ao ar livre.',

  destaquesFitness: [
    'Orla do rio Iguaçu como principal espaço público de caminhada e corrida à beira-rio.',
    'Parque Histórico Iguassu, com áreas verdes para passeio e atividade leve.',
    'Inverno frio e úmido do sul do PR, que exige protocolos de aquecimento e vestuário térmico.',
    'Integração de cidade-gêmea com Porto União-SC, ampliando a agenda de corridas de rua.',
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
    'Polo do sul do Paraná às margens do rio Iguaçu, União da Vitória une a renda da madeira e do comércio regional a uma orla propícia ao treino ao ar livre. Um personal trainer ajuda a aproveitar a orla e as praças com método, incluindo protocolos de aquecimento para o inverno frio e úmido da região.',

  vizinhas: ['guarapuava-pr', 'ponta-grossa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — União da Vitória', url: 'https://cidades.ibge.gov.br/brasil/pr/uniao-da-vitoria/panorama' },
    { nome: 'Prefeitura de União da Vitória', url: 'https://uniaodavitoria.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
