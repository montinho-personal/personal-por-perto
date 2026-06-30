import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paranaiba-ms',
  nome: 'Paranaíba',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'paranaibense',
  tipo: 'cidade',

  populacao: 40957,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  altitudeM: 374,

  resumoEconomico:
    'Município mais a leste de Mato Grosso do Sul, Paranaíba é um dos polos do Bolsão sul-mato-grossense, com economia ancorada na pecuária bovina — sua origem está na condição histórica de passagem obrigatória do gado — e, mais recentemente, na produção de grãos como soja e milho. O comércio e os serviços atendem toda a microrregião, e o município abriga um campus da UEMS (Universidade Estadual de Mato Grosso do Sul), além de unidade da UFMS, que reforçam o perfil educacional da cidade.',

  mercado:
    'Cidade média do interior, Paranaíba concentra a demanda fitness em academias de bairro e estúdios, com procura crescente por treino funcional e musculação. A presença de campi da UEMS e da UFMS traz público jovem e universitário, que ajuda a sustentar a cena de atividade física e o treino ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Santa Mônica', 'Jardim Alvorada', 'Vila Maria'],
  bairrosPopulares: ['Jardim Aeroporto', 'Conjunto Residencial', 'Vila Salomé', 'Jardim Primavera'],

  parques: [
    {
      nome: 'Balneário Municipal',
      descricao:
        'Espaço de lazer às margens d’água, tradicional ponto de encontro da população para banho, descanso e atividades ao ar livre nos fins de semana.',
    },
    {
      nome: 'Praças e orla da cidade',
      descricao:
        'O conjunto de praças centrais e os espaços públicos abertos concentram caminhadas e atividade física no início da manhã e no fim da tarde, quando o calor cede.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária de Paranaíba não é divulgada em fonte oficial; o uso da bicicleta é comum no deslocamento urbano de uma cidade plana e de porte médio.',

  clima:
    'O clima é tropical úmido, típico do leste de Mato Grosso do Sul e do Bolsão sul-mato-grossense, com verões quentes e chuvosos e invernos secos; a precipitação anual gira em torno de 1.300 mm.',
  climaTreino:
    'O calor do verão pede treino no começo da manhã ou no fim da tarde, com boa hidratação; o período seco e mais ameno do inverno é o mais confortável para correr e caminhar ao ar livre.',

  mobilidade:
    'Paranaíba é cortada pela BR-158 e pela BR-497, que a conectam ao restante do Bolsão e fazem dela ponto de ligação com Minas Gerais, São Paulo e Goiás — a cidade fica próxima ao rio Paranaíba, que marca a divisa com esses estados na região conhecida como Pontal do Triângulo.',

  corridas: [
    {
      nome: 'Corridas e caminhadas de rua municipais',
      descricao:
        'A cidade recebe provas e caminhadas pontuais organizadas pela administração municipal e por grupos locais, geralmente em datas comemorativas e campanhas de saúde.',
    },
    {
      nome: 'Treinos em grupo nas praças',
      descricao:
        'Assessorias e grupos de corrida usam as praças centrais e as vias do entorno como percurso para os treinos coletivos ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Paranaíba combina o futebol e as atividades de lazer no Balneário Municipal com uma procura crescente por corrida de rua e treino funcional, impulsionada pelo público jovem dos campi da UEMS e da UFMS.',
  academias:
    'A oferta reúne academias de bairro e estúdios de treino funcional e musculação, distribuídos pelo Centro e pelos bairros residenciais, atendendo também a demanda universitária.',

  destaquesFitness: [
    'Polo do Bolsão sul-mato-grossense, com economia de pecuária e grãos e público regional.',
    'Campi da UEMS e da UFMS que trazem público jovem e sustentam a demanda fitness.',
    'Balneário Municipal e praças centrais como espaços de atividade ao ar livre.',
    'Localização no Pontal do Triângulo, junto ao rio Paranaíba e à divisa MG/SP/GO.',
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
    'Cidade média e polo do Bolsão sul-mato-grossense, Paranaíba alia tradição da pecuária a um perfil educacional crescente. Um personal trainer ajuda a aproveitar o Balneário Municipal e as praças da cidade com método, ajustando horários e hidratação ao calor do clima tropical úmido do leste de MS.',

  vizinhas: ['tres-lagoas-ms', 'campo-grande-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Paranaíba', url: 'https://cidades.ibge.gov.br/brasil/ms/paranaiba/panorama' },
    { nome: 'Prefeitura de Paranaíba', url: 'https://www.paranaiba.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
