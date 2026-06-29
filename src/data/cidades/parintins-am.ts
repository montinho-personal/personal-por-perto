import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'parintins-am', nome: 'Parintins', uf: 'AM', estado: 'Amazonas', estadoSlug: 'amazonas', regiao: 'Norte', gentilico: 'parintinense', tipo: 'cidade',
  populacao: 96372, populacaoAno: 2022, idhm: 0.658, idhmClasse: 'médio', altitudeM: 20,

  resumoEconomico:
    'Localizada na Ilha Tupinambarana, no Rio Amazonas, Parintins é uma das maiores cidades do interior do Amazonas e tem na cultura e no turismo o seu grande motor — sobretudo durante o Festival Folclórico de Parintins, que movimenta a economia local. Comércio, serviços e a administração pública sustentam o dia a dia, enquanto a condição de cidade-ilha, com acesso fluvial e aéreo, molda a logística e o cotidiano dos moradores.',

  mercado:
    'Por ser uma cidade-ilha de forte identidade cultural, o mercado fitness de Parintins é local e de porte médio, formado por academias de bairro e por personal trainers que atendem em estúdios, condomínios e domicílio. O calor e a umidade equatorial concentram os treinos no início da manhã e no fim da tarde, e o atendimento online complementa quem busca acompanhamento mais flexível na ilha.',

  bairrosNobres: ['Centro', 'Palmares', 'Djard Vieira'],
  bairrosPopulares: ['São Benedito', 'União', 'Itaúna', 'Paulo Corrêa'],

  parques: [
    {
      nome: 'Orla do Rio Amazonas',
      descricao:
        'Beira-rio que funciona como principal ponto de caminhada, corrida leve e encontros ao entardecer, com vista para o Amazonas — o cartão-postal da ilha para quem treina ao ar livre.',
    },
    {
      nome: 'Bumbódromo (Centro Cultural Amazonino Mendes)',
      descricao:
        'Arena onde acontece o Festival Folclórico de Parintins, com Boi Garantido e Caprichoso; fora do festival, o entorno é usado para eventos e atividades comunitárias.',
    },
  ],
  ciclovias:
    'A cidade é compacta e plana, o que favorece deslocamentos a pé e de bicicleta, mas a infraestrutura de ciclovias é limitada — o uso da bike acontece principalmente nas vias do Centro e na orla.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com temperaturas médias em torno de 27 °C, umidade alta e chuvas abundantes, típicas da Amazônia.',
  climaTreino:
    'O calor e a umidade altos pedem treinos no amanhecer ou após o pôr do sol, com hidratação reforçada. As chuvas frequentes tornam útil ter uma alternativa coberta para manter a regularidade ao longo do ano.',

  mobilidade:
    'Como cidade-ilha, Parintins é acessada por barco e por avião, pelo Aeroporto Júlio Belém, sem ligação rodoviária com Manaus. No perímetro urbano os deslocamentos são curtos, feitos a pé, de bicicleta, moto e mototáxi — o que reforça o valor de treinar perto de casa ou no formato online.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'Provas comunitárias e escolares promovidas ao longo do ano, muitas associadas a datas cívicas e ao calendário cultural da ilha, com percursos curtos pelo Centro e pela orla.',
    },
  ],
  culturaEsportiva:
    'A vida ativa em Parintins gira em torno da orla do Amazonas e da intensa cultura do Festival, que mobiliza ensaios, dança e preparo físico de brincantes ao longo do ano. Caminhada e corrida leve ao entardecer são hábitos comuns, sempre respeitando o calor equatorial.',
  academias:
    'A cobertura é dada por academias locais de bairro e por estúdios menores, complementados por personal trainers que atendem em casa e em condomínios. A orla e os espaços públicos funcionam como extensão ao ar livre nos horários mais frescos.',

  destaquesFitness: [
    'Orla do Rio Amazonas como principal ponto de caminhada e corrida leve, ao amanhecer e ao entardecer.',
    'Identidade cultural forte do Festival Folclórico de Parintins, com Boi Garantido e Caprichoso, que envolve dança e preparo físico.',
    'Academias de bairro e atendimento domiciliar, com apoio do online numa cidade-ilha.',
    'Treinos preferencialmente em horários frescos por causa do calor e da umidade equatorial.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Numa cidade-ilha de cultura pulsante e clima equatorial, treinar bem é saber ajustar horários, intensidade e hidratação ao calor — e é aí que um personal trainer faz diferença. Com a orla do Amazonas, academias de bairro e o acompanhamento online, Parintins oferece caminhos para quem quer evoluir com método mesmo longe dos grandes centros.',

  vizinhas: ['manaus-am'],

  fontes: [
    { nome: 'IBGE Cidades — Parintins', url: 'https://cidades.ibge.gov.br/brasil/am/parintins/panorama' },
    { nome: 'Prefeitura de Parintins', url: 'https://www.parintins.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
