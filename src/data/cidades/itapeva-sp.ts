import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapeva-sp',
  nome: 'Itapeva',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itapevense',
  tipo: 'cidade',

  populacao: 89728,
  populacaoAno: 2022,
  idhm: 0.732,
  idhmClasse: 'alto',
  altitudeM: 684,

  resumoEconomico:
    'Polo do agronegócio no sudoeste paulista, Itapeva tem um dos maiores valores de produção agrícola do estado de São Paulo, com destaque para grãos (trigo, milho e feijão), batata e tomate, além de forte presença do reflorestamento e da cadeia de papel e celulose. À produção rural somam-se a agroindústria alimentícia, a extração mineral e um comércio regional que atende toda a microrregião.',

  mercado:
    'Cidade média e centro regional de uma vasta área rural, Itapeva concentra a demanda fitness em academias de bairro, estúdios e no atendimento domiciliar. O personal training se apoia no público ligado ao agronegócio, ao comércio e aos serviços, além de uma cena local de caminhada e corrida. É um mercado de interior, com preços acessíveis e relação próxima entre aluno e profissional.',

  bairrosNobres: ['Centro', 'Jardim Maringá', 'Jardim Ferrari', 'Vila São Camilo'],
  bairrosPopulares: ['Vila Aparecida', 'Jardim Pirassununga', 'Vila Nova', 'Jardim Grajaú'],

  parques: [
    {
      nome: 'Parque do Theodoro',
      descricao:
        'Área verde urbana usada para caminhada e lazer ao ar livre, com espaço arborizado que serve a treinos leves e atividades em família.',
    },
    {
      nome: 'Praça Anchieta e calçadões do Centro',
      descricao:
        'Espaços públicos centrais que reúnem caminhantes e corredores no dia a dia, com percursos planos no miolo urbano.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa em avenidas e na área urbana ao longo da rodovia que a corta, atendendo deslocamentos e treinos de pedal e corrida no relevo predominantemente plano do núcleo central.',

  clima:
    'No sudoeste paulista e em altitude próxima de 680 metros, Itapeva tem clima subtropical de altitude, com média anual em torno de 18 a 20 °C. Os invernos são mais frios e secos, com geadas frequentes e madrugadas que podem ficar próximas de zero; os verões são amenos a quentes e mais chuvosos.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, com clima mais ameno que no restante do estado. No inverno, vale atenção ao frio intenso e às geadas no início da manhã, preferindo o fim da manhã ou a tarde; no verão, manhã e fim de tarde escapam do calor e das pancadas de chuva.',

  mobilidade:
    'Itapeva é cortada pela Rodovia Francisco Alves Negrão (SP-258), eixo que liga a cidade a Capão Bonito e Itararé e estrutura o acesso regional, em obras de duplicação no trecho urbano. A posição no sudoeste paulista faz da cidade um entroncamento de sua microrregião, com deslocamentos urbanos curtos típicos de cidade média.',

  corridas: [
    {
      nome: 'Corridas de rua de Itapeva',
      descricao:
        'A cidade tem uma comunidade ativa de corredores, com grupos locais e provas de rua que usam o Centro e as principais avenidas como percurso, num calendário esportivo de cidade média.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a tradição do futebol com uma cena crescente de corrida e caminhada. O clima mais ameno e os espaços públicos planos favorecem o treino ao ar livre, e grupos de corrida ajudam a sustentar o hábito de atividade física regular na cidade.',
  academias:
    'A rede é formada principalmente por academias de bairro e estúdios de musculação e funcional, complementados pelo atendimento domiciliar do personal trainer — formato bem adaptado a uma cidade de porte médio com bairros espalhados e forte ligação com a área rural.',

  destaquesFitness: [
    'Um dos maiores valores de produção agrícola de São Paulo, com economia regional aquecida pelo agronegócio (grãos, batata, tomate e reflorestamento).',
    'Clima subtropical de altitude, mais frio e ameno, favorável ao treino ao ar livre quase o ano inteiro.',
    'Comunidade local de corrida de rua ativa, com grupos e provas pelas avenidas e pelo Centro.',
    'Mercado de cidade média: academias de bairro e personal domiciliar com preços acessíveis.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Centro do agronegócio no sudoeste paulista, com clima mais frio e espaços urbanos planos, Itapeva oferece um mercado de personal training próximo e acessível. Um profissional ajuda a transformar a caminhada no Centro, o pedal pelas ciclovias e o treino em casa num plano consistente — da corrida de rua à musculação com método.',

  vizinhas: ['itapetininga-sp', 'avare-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Itapeva', url: 'https://cidades.ibge.gov.br/brasil/sp/itapeva/panorama' },
    { nome: 'Prefeitura de Itapeva', url: 'https://www.itapeva.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3522406' },
  ],
  atualizadoEm: '2026-06-29',
};
