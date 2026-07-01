import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vargem-grande-do-sul-sp',
  nome: 'Vargem Grande do Sul',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'vargengrandense',
  tipo: 'cidade',

  populacao: 40133,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 721,

  resumoEconomico:
    'No nordeste paulista, na região de São João da Boa Vista, Vargem Grande do Sul tem a economia sustentada pelos serviços e pelo comércio, seguidos pela indústria e pela agropecuária. A cidade é um polo tradicional de cerâmica vermelha (telhas, tijolos e artefatos de barro cozido para construção), atividade que emprega centenas de trabalhadores, e um dos principais centros bataticultores do país, com forte produção de batata na safra de inverno organizada em torno da cooperativa local. Cana-de-açúcar, milho, feijão e soja completam o perfil agrícola do município.',

  mercado:
    'Como cidade de porte médio-pequeno do interior paulista, o mercado fitness de Vargem Grande do Sul é formado por academias de bairro, estúdios de treinamento funcional e profissionais autônomos. A procura por personal trainers costuma vir de quem quer acompanhamento individualizado para musculação, condicionamento e saúde, aproveitando o clima ameno e o ritmo tranquilo da cidade para treinar com constância.',

  bairrosNobres: ['Centro', 'Jardim Paulista', 'Jardim Primavera', 'Jardim Dolores'],
  bairrosPopulares: ['Vila Polar', 'Santa Terezinha', 'Jardim Paulista', 'Vila Esperança'],

  parques: [
    {
      nome: 'Praça da Matriz',
      descricao:
        'Praça central em frente à igreja matriz, ponto de encontro da cidade e largada de eventos esportivos como a corrida pedestre do município — referência para caminhada e convivência no Centro.',
    },
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde arborizada da cidade, usada por moradores para caminhada, descanso e lazer ao ar livre em meio à vegetação.',
    },
    {
      nome: 'Entorno rural e estradas vicinais',
      descricao:
        'Cercada por lavouras de batata e áreas de cerrado e mata, a zona rural oferece estradas e caminhos com relevo ondulado, procurados por quem pedala e corre em percursos mais longos fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e restrita a alguns trechos urbanos; boa parte do pedal acontece em vias da cidade e nas estradas vicinais que ligam Vargem Grande do Sul às áreas rurais e cidades vizinhas.',

  clima:
    'O clima é tropical de altitude, característico do nordeste paulista em torno dos 700 metros: verões quentes e chuvosos, de novembro a março, e invernos secos e mais frios, com noites e madrugadas frias entre maio e agosto. As temperaturas variam bastante ao longo do dia nos meses de estiagem.',
  climaTreino:
    'A altitude ameniza o calor e favorece o treino ao ar livre na maior parte do ano; no verão, o fim da tarde escapa dos horários de mais calor e das chuvas do começo da noite. No inverno seco, vale reforçar o aquecimento nas manhãs frias e cuidar da hidratação, já que o ar fica bem seco.',

  mobilidade:
    'A cidade é cortada pela SP-215 (Rodovia Hélio Moreira Salles), que a liga a Casa Branca e ao entroncamento com a via Anhanguera, e fica próxima da SP-342, eixo da região do Circuito das Águas administrado pela concessionária Renovias, que conecta Campinas ao sul de Minas. O deslocamento interno é feito principalmente por carro, moto e a pé, dado o porte compacto do município.',

  corridas: [
    {
      nome: 'Corrida Pedestre da Independência',
      descricao:
        'Prova de rua tradicional promovida pela prefeitura no feriado de 7 de setembro, com largada na Praça da Matriz e percurso de 5 km pelas ruas da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o futebol amador, a caminhada em praças e no Centro e as corridas de rua promovidas pela prefeitura. O clima ameno de altitude ajuda a manter a atividade física ao ar livre como hábito comum entre os moradores.',
  academias:
    'A oferta reúne academias de musculação de bairro, estúdios de treinamento funcional e espaços de ginástica distribuídos pela área urbana, em escala compatível com uma cidade média-pequena do interior paulista.',

  destaquesFitness: [
    'Clima tropical de altitude (cerca de 720 m), com invernos secos e amenos que favorecem o treino ao ar livre.',
    'Praça da Matriz e Bosque Municipal como pontos de caminhada e convivência.',
    'Corrida Pedestre da Independência, prova de rua tradicional no feriado de 7 de setembro.',
    'Cidade compacta do nordeste paulista, com economia de cerâmica vermelha, batata e agropecuária.',
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
    'De porte compacto e clima ameno de altitude, Vargem Grande do Sul reúne boas condições para treinar ao ar livre e manter a constância ao longo do ano. Um personal trainer ajuda a montar uma rotina adequada aos horários de calor do verão e às manhãs frias do inverno, aproveitando praças, o bosque e as estradas do entorno rural.',

  vizinhas: ['sao-joao-da-boa-vista-sp', 'sao-jose-do-rio-pardo-sp'],

  fontes: [
    {
      nome: 'IBGE Cidades — Vargem Grande do Sul',
      url: 'https://cidades.ibge.gov.br/brasil/sp/vargem-grande-do-sul/panorama',
    },
    { nome: 'Prefeitura de Vargem Grande do Sul', url: 'https://www.vgsul.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
