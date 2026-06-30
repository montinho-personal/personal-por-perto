import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'manacapuru-am', nome: 'Manacapuru', uf: 'AM', estado: 'Amazonas', estadoSlug: 'amazonas', regiao: 'Norte', gentilico: 'manacapuruense', tipo: 'cidade',
  populacao: 101883, populacaoAno: 2022, idhm: 0.614, idhmClasse: 'médio', altitudeM: 30,

  resumoEconomico:
    'Às margens do Rio Solimões e a cerca de 80 km de Manaus pela rodovia AM-070 (Manoel Urbano), Manacapuru é uma das maiores cidades do Amazonas e um polo do interior próximo à capital. Conhecida como "Princesa do Solimões", sua economia se apoia na agricultura familiar e na produção de juta e malva, na pesca, no comércio e nos serviços, além da administração pública e de uma crescente integração com a Região Metropolitana de Manaus.',

  mercado:
    'O mercado fitness de Manacapuru é local e em desenvolvimento, formado por academias de bairro e por personal trainers que atendem em estúdios, condomínios e domicílio. O calor e a umidade equatorial concentram os treinos no início da manhã e no fim da tarde, e o atendimento online complementa quem busca acompanhamento mais flexível no interior amazonense, com a vantagem da proximidade com a capital pela ponte sobre o Rio Negro.',

  bairrosNobres: ['Centro', 'Morada do Sol', 'Aparecida'],
  bairrosPopulares: ['Terra Preta', 'Liberdade', 'Biri-Biri', 'Correnteza'],

  parques: [
    {
      nome: 'Orla de Manacapuru',
      descricao:
        'Beira-rio às margens do Solimões, principal ponto de caminhada, corrida leve e encontros ao entardecer, com vista para o rio — o cartão-postal da cidade para quem treina ao ar livre e ponto de encontro da vida ribeirinha.',
    },
    {
      nome: 'Balneário do Miriti',
      descricao:
        'Área de lazer natural que combina a beleza dos igapós com estrutura de orla, restaurantes flutuantes, escadarias de acesso ao rio e áreas de banho — opção de descanso e atividade ao ar livre para moradores e visitantes.',
    },
    {
      nome: 'Parque do Ingá',
      descricao:
        'Espaço público que sedia o Festival de Cirandas, maior festa cultural da cidade, e funciona ao longo do ano como área aberta para eventos, caminhadas e encontros da comunidade.',
    },
  ],
  ciclovias:
    'A cidade é compacta e relativamente plana, o que favorece deslocamentos a pé e de bicicleta, mas a infraestrutura de ciclovias é limitada — o uso da bike acontece principalmente nas vias do Centro e na orla do Solimões.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com temperaturas médias em torno de 27 °C, umidade alta e chuvas abundantes, típicas da Amazônia.',
  climaTreino:
    'O calor e a umidade altos pedem treinos no amanhecer ou após o pôr do sol, com hidratação reforçada. As chuvas frequentes tornam útil ter uma alternativa coberta para manter a regularidade ao longo do ano.',

  mobilidade:
    'Manacapuru tem ligação rodoviária direta com Manaus pela AM-070 (Rodovia Manoel Urbano), totalmente duplicada e ligada à capital pela ponte sobre o Rio Negro (Ponte Jornalista Phelippe Daou) — o que a aproxima da Região Metropolitana. O transporte fluvial pelo Rio Solimões segue importante, e a cidade fica perto do fenômeno do encontro das águas dos rios Negro e Solimões. No perímetro urbano os deslocamentos são curtos, feitos a pé, de bicicleta, moto e mototáxi — o que reforça o valor de treinar perto de casa ou no formato online.',

  corridas: [
    {
      nome: 'Corrida Cidade de Manacapuru',
      descricao:
        'Prova de rua organizada por iniciativa local, com apoio do grupo Amazon Runners, que reúne corredores da cidade e da região em percursos pelo perímetro urbano e incentiva a prática esportiva.',
    },
    {
      nome: 'Corrida de Aniversário de Manacapuru',
      descricao:
        'Corrida comemorativa pela fundação do município, integrando o calendário esportivo e cívico da cidade com largada nas vias centrais.',
    },
    {
      nome: 'Circuito Sesc de Corridas — Etapa Manacapuru',
      descricao:
        'Etapa local do circuito do Sesc Amazonas, com percurso urbano e prova infantil, que leva a corrida de rua para municípios do interior do estado.',
    },
  ],
  culturaEsportiva:
    'A vida ativa em Manacapuru gira em torno da orla do Solimões, dos balneários e das corridas de rua que marcam o calendário da cidade, além do Festival de Cirandas, que mobiliza a comunidade no fim de agosto. Caminhada e corrida leve ao entardecer são hábitos comuns, sempre respeitando o calor equatorial.',
  academias:
    'A cobertura é dada por academias locais de bairro e por estúdios menores, complementados por personal trainers que atendem em casa e em condomínios. A orla, os balneários e os espaços públicos funcionam como extensão ao ar livre nos horários mais frescos.',

  destaquesFitness: [
    'Orla do Rio Solimões como principal ponto de caminhada e corrida leve, ao amanhecer e ao entardecer.',
    'Balneário do Miriti e áreas de igapó, que ampliam as opções ao ar livre e de lazer ativo na cidade.',
    'Calendário de corridas de rua com a Corrida Cidade de Manacapuru, a corrida de aniversário e o Circuito Sesc.',
    'Academias de bairro e atendimento domiciliar, com apoio do online e a proximidade de Manaus pela ponte sobre o Rio Negro.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Conhecida como "Princesa do Solimões", Manacapuru combina forte identidade ribeirinha e cultural — marcada pelo Festival de Cirandas — com a proximidade de Manaus pela AM-070 e pela ponte sobre o Rio Negro. Treinar bem por aqui é saber ajustar horários, intensidade e hidratação ao clima equatorial — e é aí que um personal trainer faz diferença. Com a orla do Solimões, os balneários, academias de bairro e o acompanhamento online, a cidade oferece caminhos para quem quer evoluir com método no interior do Amazonas.',

  vizinhas: ['manaus-am', 'itacoatiara-am'],

  fontes: [
    { nome: 'IBGE Cidades — Manacapuru', url: 'https://cidades.ibge.gov.br/brasil/am/manacapuru/panorama' },
    { nome: 'Prefeitura de Manacapuru', url: 'https://manacapuru.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
