import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cachoeirinha-rs', nome: 'Cachoeirinha', uf: 'RS', estado: 'Rio Grande do Sul', estadoSlug: 'rio-grande-do-sul', regiao: 'Sul', gentilico: 'cachoeirinhense', tipo: 'cidade',
  populacao: 136258, populacaoAno: 2022, idhm: 0.757, idhmClasse: 'alto', altitudeM: 23,
  resumoEconomico:
    'Cachoeirinha integra a Região Metropolitana de Porto Alegre, conurbada com Canoas e Gravataí e a poucos quilômetros da capital. É uma cidade média de perfil industrial e logístico, com 100% da população urbana e uma das maiores densidades demográficas do Rio Grande do Sul. Seu Distrito Industrial, com dezenas de empresas instaladas, e os centros de distribuição às margens da BR-290 (Freeway) e da RS-118 sustentam a economia local.',
  mercado:
    'Cidade compacta, densa e de classe trabalhadora industrial, Cachoeirinha tem demanda firme por academias de bairro e por atendimento domiciliar e em condomínios. A proximidade com Canoas, Gravataí e Porto Alegre amplia o mercado para o personal trainer, que combina o treino em academias com sessões ao ar livre no Parcão e o atendimento online.',
  bairrosNobres: ['Vila City', 'Parque Marechal Rondon', 'Parque da Matriz', 'Bom Sucesso'],
  bairrosPopulares: ['Vila Ponta Grossa', 'Parque dos Anjos', 'Vila Sehn', 'Eunice'],
  parques: [
    {
      nome: 'Parcão da Paz (Ignácio Aloysio Herbert)',
      descricao:
        'Inaugurado em 2005, é o principal espaço de lazer da cidade, com cerca de 24 mil m². Tem pista de caminhada, quadras de vôlei, futebol, basquete e handebol, pista de skate e patins, playground e palco, recebendo milhares de visitantes por semana.',
    },
    {
      nome: 'Parque Natural Municipal Dr. Tancredo de Almeida Neves',
      descricao:
        'Área verde natural com trilhas e mata preservada, usada para caminhadas e atividades de educação ambiental, ampliando as opções de treino ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias e ciclofaixas ao longo de avenidas como a Dorival Cândido Luz de Oliveira; a extensão total da malha não é divulgada em fonte oficial.',
  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios, em que as mínimas podem se aproximar de zero.',
  climaTreino:
    'O frio e a umidade do inverno favorecem academias indoor; nos verões quentes, vale treinar cedo ou ao entardecer, com boa hidratação.',
  mobilidade:
    'Cachoeirinha tem acesso direto à BR-290 (Freeway) e à RS-118, que a conectam à capital e ao interior, além da Avenida Dorival Cândido Luz de Oliveira, principal eixo comercial que liga a cidade a Porto Alegre e, no sentido oposto, a Gravataí por conurbação contínua.',
  corridas: [
    {
      nome: 'Corridas de rua no Parcão da Paz',
      descricao:
        'O Parcão concentra a prática de corrida e caminhada na cidade e recebe eventos esportivos comunitários organizados pela secretaria de esportes.',
    },
    {
      nome: 'Provas da Região Metropolitana de Porto Alegre',
      descricao:
        'A proximidade com Canoas, Gravataí e Porto Alegre dá aos corredores acesso a um calendário regional intenso de corridas de rua ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva gira em torno do Parcão da Paz e dos equipamentos de bairro, com forte presença da caminhada, da corrida e dos esportes coletivos comunitários.',
  academias:
    'A oferta reúne academias de bairro e redes acessíveis, complementadas pelo Parcão da Paz, com pista de caminhada e quadras, e pelas áreas verdes municipais para o treino ao ar livre.',
  destaquesFitness: [
    'Parcão da Paz: principal espaço público para caminhada, corrida e esportes coletivos.',
    'Parque Natural Municipal Tancredo Neves: trilhas e mata para treino ao ar livre.',
    'Conurbação com Canoas, Gravataí e Porto Alegre amplia o calendário de corridas.',
    'Avenida Dorival Cândido Luz de Oliveira como eixo de ciclofaixas e mobilidade ativa.',
  ],
  precos: { avulsaMin: 55, avulsaMax: 120, mensalMin: 260, mensalMax: 700, onlineMin: 120, onlineMax: 360 },
  conclusao:
    'Cidade média e industrial da Grande Porto Alegre, Cachoeirinha tem perfil trabalhador e boa demanda por academias de bairro e atendimento domiciliar. Um personal trainer ajuda a aproveitar o Parcão da Paz e as áreas verdes municipais com método, alternando o treino ao ar livre com a academia nos meses frios.',
  vizinhas: ['canoas-rs', 'gravatai-rs', 'porto-alegre-rs', 'alvorada-rs'],
  fontes: [
    { nome: 'IBGE Cidades — Cachoeirinha', url: 'https://cidades.ibge.gov.br/brasil/rs/cachoeirinha/panorama' },
    { nome: 'Prefeitura de Cachoeirinha', url: 'https://www.cachoeirinha.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
