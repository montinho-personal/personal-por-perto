import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'urucui-pi',
  nome: 'Uruçuí',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'uruçuiense',
  tipo: 'cidade',

  populacao: 25203,
  populacaoAno: 2022,
  idhm: 0.63,
  idhmClasse: 'médio',
  altitudeM: 167,

  resumoEconomico:
    'No Sudoeste do Piauí, em pleno Cerrado piauiense e dentro da área do MATOPIBA (região que reúne trechos do Maranhão, Tocantins, Piauí e Bahia), Uruçuí é conhecida como a "Capital da Soja" do estado. É o maior município piauiense em extensão territorial, e a economia é dominada pela agricultura tecnificada de grãos — soja e milho, sobretudo — em grandes fazendas mecanizadas, seguida pela pecuária e por serviços ligados ao agronegócio. O município figura entre os que mais crescem em produção de grãos na fronteira agrícola do MATOPIBA e concentra uma das maiores rendas per capita do Piauí, puxada pelo desempenho do setor agropecuário.',

  mercado:
    'Por ser uma cidade média do interior, movimentada pelo agronegócio, o mercado fitness de Uruçuí é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainer tende a vir de produtores rurais, empresários do agronegócio e profissionais que se mudaram para a cidade com a expansão da fronteira agrícola, muitas vezes em busca de treino que se encaixe em rotinas de trabalho no campo e de horários que fujam do calor mais intenso do dia.',

  bairrosNobres: ['Centro', 'Portal dos Cerrados', 'Bela Vista', 'Aeroporto'],
  bairrosPopulares: ['São Francisco', 'Alto Bonito', 'Baixada Fluminense', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Praça Dep. Sebastião Leal',
      descricao:
        'Principal praça do Centro, é o ponto de encontro e de caminhada mais tradicional da cidade, com movimento reforçado durante os Festejos de São Sebastião, uma das maiores festas populares do Piauí.',
    },
    {
      nome: 'Ponte e balneários do rio Uruçuí Preto',
      descricao:
        'A ponte sobre o rio Uruçuí Preto e os balneários às suas margens são procurados por moradores para banho, lazer e caminhada nos fins de semana, servindo de alívio ao calor do Cerrado.',
    },
    {
      nome: 'Complexo Esportivo João Caçula',
      descricao:
        'Também conhecido pelo nome oficial de João Moreira Gomes, no bairro Aeroporto, é o principal espaço esportivo da cidade, sediando campeonatos municipais de futsal e futebol.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em poucos trechos da área urbana; caminhada e corrida acontecem principalmente nas vias do Centro e no entorno da praça central e dos balneários do rio.',

  clima:
    'O clima é tropical, quente o ano inteiro, típico do Cerrado piauiense, com temperaturas que costumam variar entre 22 °C e 37 °C. O ano se divide em uma estação chuvosa, de outubro a abril, e uma longa estação seca, de maio a setembro, com baixa umidade e pouca chuva.',
  climaTreino:
    'O calor constante do Cerrado pede treino bem cedo ou no fim da tarde, com hidratação reforçada, principalmente na estação seca; ambientes climatizados são a opção mais segura nos horários de pico de sol, e os rios da região oferecem alternativa de lazer ativo para esfriar o corpo.',

  mobilidade:
    'O acesso rodoviário a Uruçuí é feito pela PI-247, que coincide em trecho com a BR-324 e liga Bertolínia a Ribeiro Gonçalves passando pela cidade, com ponte sobre o rio Parnaíba na divisa com o Maranhão. A região é servida pela BR-230 (Transamazônica), que corta o sul do Piauí mais a leste, na altura de Floriano, de onde parte o fluxo regional até o município. A melhoria das rotas de escoamento da soja pelo chamado Arco Norte, com acesso aos portos do Maranhão, tem reforçado a logística da região. O deslocamento urbano é feito sobretudo por carro e moto, e boa parte do território rural depende de estradas vicinais que ligam a sede aos assentamentos e povoados.',

  corridas: [],
  culturaEsportiva:
    'O calendário esportivo da cidade gira em torno do futebol e do futsal, disputados no Complexo Esportivo João Caçula, e das tradicionais corridas de prado (com cavalos, éguas e burros) realizadas em festejos de povoados e assentamentos rurais. A prática de corrida de rua ainda é incipiente, concentrada em caminhadas informais pelo Centro e pelo entorno da praça principal.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas no Centro, com porte compatível com uma cidade média do interior do Piauí em expansão puxada pelo agronegócio.',

  destaquesFitness: [
    '"Capital da Soja" do Piauí e maior município do estado em área, no coração do Cerrado e do MATOPIBA.',
    'Uma das maiores rendas per capita do estado, puxada pelo agronegócio tecnificado de grãos.',
    'Clima quente de Cerrado, com longa estação seca, que exige planejamento de horário e hidratação no treino.',
    'Rio Uruçuí Preto e seus balneários como opção de lazer ativo e alívio do calor.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Impulsionada pela força do agronegócio no Cerrado piauiense, Uruçuí é uma cidade em expansão que ainda constrói sua cultura fitness, marcada pelo calor constante e por uma oferta enxuta de academias. Um personal trainer ajuda a organizar o treino em torno das rotinas do agronegócio, respeitando o clima e aproveitando espaços como a praça central e o rio Uruçuí Preto para manter a constância.',

  vizinhas: ['floriano-pi', 'sao-raimundo-nonato-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Uruçuí', url: 'https://cidades.ibge.gov.br/brasil/pi/urucui/panorama' },
    { nome: 'Prefeitura de Uruçuí', url: 'https://urucui.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
