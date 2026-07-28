import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nao-me-toque-rs',
  nome: 'Não-Me-Toque',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'não-me-toquense',
  tipo: 'cidade',

  populacao: 17898,
  populacaoAno: 2022,
  idhm: 0.765,
  idhmClasse: 'alto',
  pibPerCapita: 164932.37,
  pibPerCapitaAno: 2023,
  altitudeM: 514,

  resumoEconomico:
    'Não-Me-Toque fica no Planalto Médio gaúcho, na microrregião do Alto Jacuí, e é sede da Stara, fabricante de máquinas e implementos agrícolas de grande porte fundada em 1960 que exporta para mais de 35 países. A cidade também abriga o Parque de Exposições da Expodireto Cotrijal, uma das maiores feiras de agronegócio a céu aberto da América Latina, promovida pela cooperativa Cotrijal e capaz de movimentar bilhões de reais em negócios a cada edição. Somada à indústria, a lavoura de soja, trigo e milho do Planalto Médio sustenta um PIB per capita entre os mais altos do Rio Grande do Sul, refletindo o peso do agronegócio e da agroindústria na economia local.',

  mercado:
    'O mercado de personal trainers em Não-Me-Toque é pequeno e concentrado, típico de um município de porte médio-baixo, mas convive com um poder aquisitivo elevado para os padrões do interior gaúcho, puxado pela renda gerada pelo agronegócio, pela indústria metalmecânica e pelo comércio ligado à Expodireto Cotrijal. A procura tende a vir de profissionais e produtores rurais que buscam treino individualizado e constância, especialmente nos meses de inverno mais rigoroso.',

  bairrosNobres: ['Centro', 'Jardim', 'Boa Vista', 'Martini'],
  bairrosPopulares: ['Cohab', 'Industrial', 'Vila Nova', 'Santo Antônio'],

  parques: [
    {
      nome: 'Parque de Exposições da Expodireto Cotrijal',
      descricao:
        'Com cerca de 131 hectares de infraestrutura, é a maior área verde e de eventos do município, sediando desde 2000 a Expodireto Cotrijal. Fora dos dias de feira, o entorno amplo e as vias internas funcionam como espaço aberto para caminhada.',
    },
    {
      nome: 'Praças e avenidas do centro',
      descricao:
        'O núcleo urbano concentra praças arborizadas e avenidas que servem de ponto de encontro para caminhada leve e treino ao ar livre no cotidiano da cidade.',
    },
    {
      nome: 'Estradas vicinais do Planalto Médio',
      descricao:
        'O relevo suave da região e as estradas rurais que cortam as lavouras de soja, trigo e milho no entorno da cidade são usadas por ciclistas e corredores para treinos mais longos.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada, concentrada em trechos pontuais do perímetro urbano; parte do pedal e da corrida acontece nas avenidas do centro e nas estradas vicinais que ligam a cidade à zona rural.',

  clima:
    'O clima é subtropical, característico do Planalto Médio gaúcho, com verões quentes e invernos frios marcados por geadas frequentes — as mínimas de junho e julho podem se aproximar de 5 °C, enquanto as máximas de verão chegam perto de 30 °C. A altitude de 514 metros reforça a sensação de frio nas manhãs de inverno.',
  climaTreino:
    'De outubro a abril, as condições costumam favorecer o treino ao ar livre, com atenção à hidratação nos dias mais quentes. No inverno, o frio intenso e as geadas recomendam agasalho, aquecimento cuidadoso e, em boa parte dos dias, a migração do treino para ambientes fechados.',

  mobilidade:
    'O acesso rodoviário principal é a ERS-142, que liga Não-Me-Toque a Carazinho, a cerca de 20 km, onde a malha se conecta ao cruzamento das rodovias federais BR-285 e BR-386 — caminho usado tanto para chegar a Porto Alegre, a 280 km, quanto a Passo Fundo, a 70 km. O transporte urbano é feito por ônibus, e a mesma malha rodoviária escoa a produção agrícola da região e a carga industrial gerada pela Stara e por outras empresas locais.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local combina tradições gaúchas do interior — como o futebol amador e as práticas campeiras — com uma cena crescente de caminhada e corrida pelas ruas e avenidas do centro. O calendário da Expodireto Cotrijal também movimenta a cidade e atrai visitantes de toda a região durante a semana de feira.',
  academias:
    'A oferta de estruturas de treino é modesta e concentrada em academias de bairro e estúdios de musculação, compatível com o porte de um município pequeno do interior gaúcho, complementada pelo trabalho de personal trainers que atendem em domicílio, ao ar livre e em espaços parceiros.',

  academiasProximas: [
    { nome: 'Academias locais', detalhe: 'musculação e funcional no Centro' },
    { nome: 'Praças e avenidas centrais', detalhe: 'percursos tradicionais de caminhada' },
  ],

  destaquesFitness: [
    'Sede mundial da Stara, fabricante de máquinas agrícolas de grande porte exportadas a mais de 35 países.',
    'Palco da Expodireto Cotrijal, uma das maiores feiras de agronegócio a céu aberto da América Latina.',
    'Um dos maiores PIB per capita do Rio Grande do Sul, impulsionado pela indústria e pelo agronegócio.',
    'Invernos frios com geadas no Planalto Médio, que valorizam o acompanhamento de personal e o treino indoor.',
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
    'Cidade pequena com peso econômico grande, Não-Me-Toque combina a indústria da Stara e o agronegócio da Expodireto Cotrijal com invernos frios típicos do Planalto Médio gaúcho. Um personal trainer ajuda a manter a rotina de treino constante, aproveitando as praças e avenidas do centro nos dias bons e adaptando o treino aos meses de frio e geada.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Não-Me-Toque?',
      resposta:
        'Nas academias do Centro, nas praças e avenidas centrais — onde a caminhada é tradição de fim de tarde — e em casa, formato prático numa cidade em que tudo fica perto. O perfil do agronegócio molda a agenda: na safra e na Expodireto, os horários apertam e o treino curto e bem planejado, de 45 a 60 minutos, vale mais que a sessão longa que nunca acontece.',
    },
    {
      pergunta: 'Como manter o treino na rotina do agro em Não-Me-Toque?',
      resposta:
        'Com planejamento por fases: fora da safra, a rotina permite treinos mais longos e progressão de carga; no plantio, na colheita e na semana da Expodireto, o plano muda para sessões curtas e eficientes, mantendo o mínimo que preserva o condicionamento. O inverno gaúcho entra na conta — manhãs de geada pedem aquecimento longo ou treino indoor. É exatamente o tipo de ajuste fino que o acompanhamento profissional resolve e a planilha genérica não.',
    },
    {
      pergunta: 'Há acompanhamento em Não-Me-Toque para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Não-Me-Toque, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as praças centrais), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['carazinho-rs', 'passo-fundo-rs', 'cruz-alta-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Não-Me-Toque', url: 'https://cidades.ibge.gov.br/brasil/rs/nao-me-toque/panorama' },
    { nome: 'Prefeitura de Não-Me-Toque', url: 'https://naometoque.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
