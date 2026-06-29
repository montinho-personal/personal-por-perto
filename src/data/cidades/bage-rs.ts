import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bage-rs',
  nome: 'Bagé',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'bageense',
  tipo: 'cidade',

  populacao: 117938,
  populacaoAno: 2022,
  idhm: 0.74,
  idhmClasse: 'alto',
  altitudeM: 212,

  resumoEconomico:
    'Polo da Campanha gaúcha, na metade sul do Rio Grande do Sul e a poucos quilômetros da fronteira com o Uruguai, Bagé tem economia historicamente ligada à pecuária — bovinos e ovinos — e à agricultura de arroz e soja, com forte tradição em genética animal. Conhecida como "Rainha da Fronteira", combina o agronegócio com comércio, serviços e um expressivo peso universitário.',

  mercado:
    'A presença da Universidade Federal do Pampa (Unipampa), com campus em Bagé, e de outras instituições de ensino superior alimenta a cena de saúde e atividade física da cidade. O mercado de personal training é o de uma cidade média do interior gaúcho: musculação consolidada, academias de bairro e profissionais que atuam tanto em estúdio quanto ao ar livre, com demanda puxada pelo público universitário e por quem busca acompanhamento individual.',

  bairrosNobres: ['Centro', 'Getúlio Vargas', 'Stéfano', 'Castro'],
  bairrosPopulares: ['Malafaia', 'São Pedro', 'Las Acácias', 'Industrial'],

  parques: [
    {
      nome: 'Parque da Chácara das Pedras',
      descricao:
        'Parque urbano arborizado com trilhas, áreas verdes e espaço para caminhada — um dos principais pontos de contato com a natureza dentro da cidade.',
    },
    {
      nome: 'Praça General Osório',
      descricao:
        'Praça central histórica, com alamedas arborizadas e calçadas usadas para caminhada leve no coração de Bagé.',
    },
    {
      nome: 'Cerro da Bridada e arredores',
      descricao:
        'Relevo ondulado típico do Pampa nos arredores da cidade, com estradas e subidas procuradas por ciclistas e corredores em busca de treino mais intenso.',
    },
  ],
  ciclovias:
    'Bagé tem ciclofaixas pontuais em avenidas do entorno do centro e um relevo levemente ondulado da Campanha, que favorece pedais mais longos pelas estradas vicinais e rurais nas saídas da cidade.',

  clima:
    'O clima é subtropical, com a marca da Campanha gaúcha e do bioma Pampa: verões quentes e secos e invernos frios, com geadas frequentes e temperaturas que podem cair abaixo de zero nas manhãs mais rigorosas de junho e julho.',
  climaTreino:
    'De outubro a abril, as condições para treino ao ar livre são boas, exigindo atenção ao calor e à hidratação nos dias secos de verão. No inverno, o frio intenso e o vento minuano pedem agasalho, aquecimento cuidadoso e, muitas vezes, a migração do treino para ambientes fechados.',

  mobilidade:
    'Entroncamento da metade sul do estado, Bagé é cortada pela BR-153, que segue até Aceguá, na fronteira com o Uruguai, e pela BR-293, ligando a Dom Pedrito e à região da Campanha. A proximidade da fronteira faz da cidade um polo regional, com rodoviária que recebe linhas municipais, interestaduais e internacionais.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas (etapa Bagé)',
      descricao:
        'Etapa local de um dos maiores circuitos de corrida de rua do estado, com provas de 5 km, caminhada e percursos infantis pelas ruas da cidade.',
    },
    {
      nome: 'Corridas de rua de Bagé',
      descricao:
        'Calendário de provas de rua organizadas por entidades e patrocinadores locais, com largadas no centro e nas avenidas principais reunindo a comunidade de corredores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Bagé mistura a tradição gaúcha — com forte ligação à lida campeira e ao hipismo — a uma cena crescente de corrida de rua e musculação, impulsionada pelo público universitário da Unipampa e pelos grupos de treino que circulam pelas praças e avenidas.',
  academias:
    'A oferta reúne academias de bairro, estúdios de musculação e centros de treino funcional, bem distribuídos entre o centro e os bairros residenciais, complementados pelo trabalho de personais que atendem em casa, ao ar livre e em espaços parceiros.',

  destaquesFitness: [
    'Parque da Chácara das Pedras: trilhas e área verde para caminhada dentro da cidade.',
    'Relevo ondulado do Pampa nos arredores — bom para ciclismo e treinos de subida.',
    'Cidade universitária (Unipampa) que aquece a demanda por saúde e atividade física.',
    'Invernos rigorosos da Campanha que valorizam o acompanhamento de personal e o treino indoor.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Capital da Campanha gaúcha e cidade universitária às portas da fronteira, Bagé tem clima de extremos — verões secos e invernos rigorosos — que tornam o acompanhamento profissional ainda mais útil. Um personal trainer ajuda a manter a constância: aproveitando as praças e os arredores do Pampa nos dias bons e organizando o treino indoor quando o minuano aperta.',

  vizinhas: ['pelotas-rs', 'santa-maria-rs', 'rio-grande-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Bagé', url: 'https://cidades.ibge.gov.br/brasil/rs/bage/panorama' },
    { nome: 'Prefeitura de Bagé', url: 'https://www.bage.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
