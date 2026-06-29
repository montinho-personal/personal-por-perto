import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'goianesia-go',
  nome: 'Goianésia',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'goianesiense',
  tipo: 'cidade',

  populacao: 73708,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 749,

  resumoEconomico:
    'Município mais populoso do Vale de São Patrício, no centro-norte de Goiás, Goianésia é conhecida como "Princesa do Vale" e firmou-se como um dos principais polos sucroalcooleiros do estado. A cana-de-açúcar sustenta usinas de açúcar, etanol e bioenergia (entre elas a Jalles Machado e a unidade Otávio Lage/Codora), enquanto a agropecuária e a produção de grãos como soja, milho e feijão completam a base econômica.',

  mercado:
    'Economia de matriz agroindustrial, com renda gerada pelas usinas e pelo agronegócio, Goianésia tem mercado fitness em consolidação, apoiado em academias locais e em espaços públicos de lazer. O clima de Cerrado, com estação seca prolongada, pede atenção redobrada à hidratação nos treinos.',

  bairrosNobres: ['Setor Central', 'Setor Vila Rica', 'Setor Cordovil', 'Setor Bandeirante'],
  bairrosPopulares: ['Setor Industrial', 'Vila São José', 'Jardim Primavera', 'Setor Aeroporto'],

  parques: [
    {
      nome: 'Praças e áreas de lazer do Setor Central',
      descricao:
        'O centro concentra praças arborizadas usadas para caminhada e encontros, servindo de ponto de partida para quem treina ao ar livre na cidade.',
    },
    {
      nome: 'Academias ao ar livre dos bairros',
      descricao:
        'Equipamentos de ginástica distribuídos em praças e espaços públicos ampliam o acesso gratuito ao treino em diferentes setores.',
    },
    {
      nome: 'Espaços esportivos municipais',
      descricao:
        'Ginásios e quadras públicas apoiam a prática de esportes coletivos e atividades comunitárias ao longo do ano.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa em avenidas centrais, em expansão conforme o crescimento urbano; o relevo ameno do planalto favorece o deslocamento de bicicleta.',

  clima:
    'O clima é tropical com estação seca bem definida, típico do Cerrado goiano: verões chuvosos e quentes e um inverno seco, com temperaturas médias anuais em torno de 22 a 25 °C.',
  climaTreino:
    'No inverno seco, a baixa umidade do Cerrado exige hidratação reforçada e atenção às vias respiratórias; nos horários mais quentes, treinos cedo ou no fim da tarde são mais confortáveis.',

  mobilidade:
    'Goianésia é cortada pela GO-080, principal eixo que liga a cidade à região metropolitana de Goiânia e ao restante do Vale de São Patrício, com a BR-153 passando nas proximidades e reforçando o escoamento da produção sucroalcooleira e agropecuária.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de corrida de rua promovidas por grupos locais e pelo poder público, em geral com percursos pelas avenidas centrais.',
    },
    {
      nome: 'Treinos em grupo pela cidade',
      descricao:
        'Assessorias e grupos de corrida reúnem praticantes em treinos coletivos pelas vias e praças, fortalecendo a cena esportiva amadora.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol e os esportes coletivos dos ginásios municipais com a corrida de rua e a caminhada nas praças, atividades acessíveis que crescem entre os goianesienses.',
  academias:
    'A oferta é formada principalmente por academias locais, sustentadas pela renda do agronegócio e das usinas, e complementada pelas academias ao ar livre instaladas em praças e setores da cidade.',

  destaquesFitness: [
    'Polo sucroalcooleiro e agropecuário, com renda agroindustrial que sustenta o mercado fitness.',
    'Praças e academias ao ar livre distribuídas pelos setores, com acesso gratuito ao treino.',
    'Corridas de rua e treinos em grupo movimentam a cena esportiva amadora.',
    'Clima de Cerrado com inverno seco, que exige planejamento de hidratação nos treinos.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 110,
    mensalMin: 280,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 320,
  },

  conclusao:
    'Princesa do Vale de São Patrício, Goianésia une a força do agronegócio sucroalcooleiro a uma vida esportiva em crescimento, com praças, academias ao ar livre e corridas de rua. Um personal trainer ajuda a treinar com método e a ajustar a rotina ao clima seco do Cerrado, aproveitando bem os espaços públicos da cidade.',

  vizinhas: ['anapolis-go', 'goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Goianésia', url: 'https://cidades.ibge.gov.br/brasil/go/goianesia/panorama' },
    { nome: 'Prefeitura de Goianésia', url: 'https://goianesia.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
