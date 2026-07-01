import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-izabel-do-para-pa',
  nome: 'Santa Izabel do Pará',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'santa-izabelense',
  tipo: 'cidade',

  populacao: 73019,
  populacaoAno: 2022,
  idhm: 0.66,
  idhmClasse: 'médio',
  altitudeM: 46,

  resumoEconomico:
    'A cerca de 38 km de Belém e cortada pela BR-316, Santa Izabel do Pará integra a Região Metropolitana de Belém e nasceu como colônia agrícola no século XIX, formada por imigrantes. A economia combina agropecuária, agroindústria e comércio: o município é um dos maiores produtores de ovos e de frango de corte do estado, tem forte produção de açaí e outras frutas, e concentra galpões e indústrias de alimentos ligados ao abastecimento da capital. O serviço e a administração pública respondem por boa parte do PIB, com o comércio atacadista de alimentos como atividade relevante.',

  mercado:
    'Como cidade da Região Metropolitana de Belém, mas de porte médio e perfil ainda interiorano, Santa Izabel do Pará tem um mercado fitness em formação, apoiado na proximidade com a capital. A oferta se concentra em academias de musculação e treino funcional nos bairros centrais, e a procura por personal trainers tende a vir de quem busca acompanhamento próximo, adaptado ao calor equatorial e à rotina de deslocamento pela BR-316.',

  bairrosNobres: ['Centro', 'Triângulo', 'Aratanha'],
  bairrosPopulares: ['Nova Brasília', 'Marizal', 'Caraparu'],

  parques: [
    {
      nome: 'Vila de Caraparu',
      descricao:
        'Distrito rural conhecido pelos igarapés de águas escuras e pela vegetação de várzea amazônica; balneários e as estradas do entorno são usados para caminhada, pedal e treino ao ar livre, com forte movimento em julho e no fim do ano.',
    },
    {
      nome: 'Entorno do Centro e Praça da Matriz',
      descricao:
        'A área central, junto à Avenida Barão do Rio Branco e à igreja matriz, concentra praças e calçadas planas que servem de percurso curto para caminhada e corrida leve no começo e no fim do dia.',
    },
    {
      nome: 'Zona rural e ramais agrícolas',
      descricao:
        'A herança de colônia agrícola deixou uma malha de ramais e estradas vicinais em meio a plantios de açaí e fruticultura, aproveitados por corredores e ciclistas que buscam percursos mais longos fora da área urbana.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; grande parte do pedal e da corrida acontece nas vias centrais, nas margens da BR-316 e nos ramais que ligam a sede aos distritos rurais.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com temperatura média em torno de 26 °C e pouca variação térmica. O ano se divide entre o período mais chuvoso (o "inverno amazônico", concentrado no primeiro semestre) e o menos chuvoso (segundo semestre), quando os meses de outubro a dezembro costumam ser os mais quentes.',
  climaTreino:
    'O calor constante e a umidade alta pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada; no período chuvoso, as pancadas fortes de chuva favorecem ambientes cobertos, enquanto o segundo semestre, mais seco, é o mais estável para o treino ao ar livre.',

  mobilidade:
    'A BR-316 (rodovia Belém-Maceió) corta a sede e é o principal eixo de acesso, ligando o município a Belém, Ananindeua e Castanhal; por ela circula boa parte do fluxo de trabalhadores e de cargas da Região Metropolitana. O transporte urbano é feito por ônibus e vans intermunicipais, e a proximidade com a capital marca a rotina de deslocamento pendular.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de rua promovida pela prefeitura, com percurso de cerca de 6 km pelas principais ruas da cidade e cunho solidário, reunindo corredores da região metropolitana em torno da arrecadação de alimentos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol de várzea e comunitário, o uso dos balneários e igarapés de Caraparu no lazer, e provas de rua organizadas pelo poder público — tudo moldado pelo calor equatorial e pela vida ligada à zona rural e à proximidade com Belém.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e ao longo dos principais eixos da cidade, com porte compatível com um município metropolitano de perfil interiorano.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Belém, a cerca de 38 km da capital, cortada pela BR-316.',
    'Origem de colônia agrícola, com forte produção de ovos, frango, açaí e frutas.',
    'Igarapés e balneários de Caraparu como espaço de lazer e atividade ao ar livre.',
    'Clima equatorial quente e úmido, que exige planejar horário e hidratação no treino.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade quente e úmida da Região Metropolitana de Belém, com raízes de colônia agrícola e vida dividida entre a sede e os distritos rurais, Santa Izabel do Pará pede um treino adaptado ao clima equatorial e à rotina de deslocamento pela BR-316. Um personal trainer ajuda a organizar os horários, aproveitar os espaços ao ar livre com segurança e manter a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['ananindeua-pa', 'castanhal-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Izabel do Pará', url: 'https://cidades.ibge.gov.br/brasil/pa/santa-izabel-do-para/panorama' },
    { nome: 'Prefeitura de Santa Izabel do Pará', url: 'https://santaizabel.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
