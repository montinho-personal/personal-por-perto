import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mata-de-sao-joao-ba',
  nome: 'Mata de São João',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'matense',
  tipo: 'cidade',

  populacao: 42566,
  populacaoAno: 2022,
  idhm: 0.670,
  idhmClasse: 'médio',

  resumoEconomico:
    'Mata de São João integra a Costa dos Coqueiros, no litoral norte da Bahia, e tem no turismo seu principal motor econômico — puxado por Praia do Forte, Imbassaí, Diogo e pelo complexo de resorts all-inclusive da Costa do Sauípe, um dos maiores polos hoteleiros de alto padrão do país. Nascido em Praia do Forte em 1982, o Projeto Tamar, dedicado à conservação das tartarugas marinhas, é também um propulsor da economia e da cultura local, gerando renda em comércio, artesanato e serviços ligados ao ecoturismo. Comércio, pesca e agricultura completam a base econômica do município.',

  mercado:
    'O mercado fitness da cidade é moldado pelo contraste entre a sede municipal, mais simples, e o litoral turístico de Praia do Forte, Imbassaí e Costa do Sauípe, onde circulam hóspedes de resorts, proprietários de segunda residência e uma comunidade de expatriados. Esse público de maior poder aquisitivo sustenta procura por personal trainers para treino em pousadas, casas de temporada e condomínios, muitas vezes combinando atividade física com o estilo de vida de praia.',

  bairrosNobres: ['Praia do Forte', 'Costa do Sauípe', 'Imbassaí', 'Diogo'],
  bairrosPopulares: ['Centro (sede)', 'Açu da Torre', 'Sauípe (vila)', 'Monte Gordo'],

  parques: [
    {
      nome: 'Parque Klaus Peters',
      descricao:
        'Refúgio ecológico em Praia do Forte com 3,6 km de trilha pavimentada e intertravada, mirante com vista para o mar e mais de 180 espécies de aves — opção sinalizada e plana para caminhada e corrida leve em contato com a natureza.',
    },
    {
      nome: 'Reserva de Sapiranga',
      descricao:
        'Área de 600 hectares de Mata Atlântica preservada com oito trilhas que podem ser percorridas a pé, de bicicleta ou quadriciclo, entre orquídeas, árvores centenárias e aves raras — um dos principais espaços de atividade ao ar livre da região.',
    },
    {
      nome: 'Orla de Praia do Forte e Imbassaí',
      descricao:
        'Faixas de areia da vila de Praia do Forte e das praias de Imbassaí, com cerca de 6 km de extensão, dunas e coqueirais, usadas informalmente para caminhada e corrida na areia ao longo da Costa dos Coqueiros.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal é limitada; o deslocamento ativo se concentra nas vias internas dos vilarejos litorâneos (Praia do Forte, Imbassaí) e ao longo de trechos da BA-099 (Linha Verde), que corta o município.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral norte da Bahia, com temperaturas elevadas ao longo do ano e chuvas mais concentradas no outono e inverno.',
  climaTreino:
    'A brisa marítima ajuda a suavizar o calor na orla, mas a umidade e o sol forte do litoral pedem treinos nos horários mais frescos — início da manhã ou fim de tarde — além de hidratação constante e proteção solar.',

  mobilidade:
    'O acesso principal é pela BA-099 (Estrada do Coco/Linha Verde), rodovia que liga o litoral norte a Salvador, distante cerca de 65 km da sede municipal. A locomoção interna entre a sede e os vilarejos litorâneos (Praia do Forte, Imbassaí, Sauípe) depende de transporte rodoviário, sem rede cicloviária estruturada entre eles.',

  corridas: [
    {
      nome: 'Corrida Rústica de Praia do Forte',
      descricao:
        'Prova tradicional de 6 km realizada em Praia do Forte, com percurso passando pelo charmoso vilarejo e pelo Parque Klaus Peters — já com dezenas de edições realizadas.',
    },
    {
      nome: 'Track&Field Run Series — etapa Praia do Forte',
      descricao:
        'Etapa do circuito nacional Track&Field Run Series sediada em Mata de São João, com largada em Praia do Forte e percurso de 6 km pela orla.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva do município gira em torno da vida de praia — caminhada e corrida na areia, esportes aquáticos e ecoturismo pelas trilhas de Sapiranga e do Parque Klaus Peters. O calendário de corridas de rua, com provas tradicionais em Praia do Forte, reforça essa vocação para o esporte ao ar livre em meio à natureza da Costa dos Coqueiros.',
  academias:
    'A oferta de academias e studios se concentra em Praia do Forte e nos vilarejos turísticos, atendendo tanto moradores quanto o público de resorts e pousadas; muitos hóspedes e proprietários de casas de temporada buscam personal trainers para treinos privados durante a estadia.',

  destaquesFitness: [
    'Costa dos Coqueiros: litoral de Praia do Forte, Imbassaí e Costa do Sauípe com forte apelo de turismo e bem-estar.',
    'Projeto Tamar, nascido em Praia do Forte, como símbolo de ecoturismo e conservação marinha.',
    'Parque Klaus Peters e Reserva de Sapiranga como espaços sinalizados para trilha, caminhada e corrida.',
    'Corrida Rústica de Praia do Forte e etapa do Track&Field Run Series movimentando o calendário local.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 1000,
    onlineMin: 170,
    onlineMax: 450,
  },

  conclusao:
    'Entre a vida simples da sede e o litoral sofisticado de Praia do Forte e Costa do Sauípe, Mata de São João combina ecoturismo, tartarugas marinhas e uma orla convidativa para o treino ao ar livre. Um personal trainer ajuda a aproveitar as trilhas de Sapiranga, o Parque Klaus Peters e a praia com método, respeitando o calor e a umidade do litoral norte da Bahia.',

  vizinhas: ['camacari-ba', 'lauro-de-freitas-ba', 'salvador-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Mata de São João', url: 'https://cidades.ibge.gov.br/brasil/ba/mata-de-sao-joao/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Mata de São João', url: 'https://www.matadesaojoao.ba.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
