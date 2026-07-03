import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'formosa-do-rio-preto-ba',
  nome: 'Formosa do Rio Preto',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'formosense',
  tipo: 'cidade',

  populacao: 25899,
  populacaoAno: 2022,
  idhm: 0.618,
  idhmClasse: 'médio',
  pibPerCapita: 205989.92,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'No extremo oeste da Bahia, na fronteira com o Tocantins e a poucos quilômetros do Piauí, Formosa do Rio Preto é o maior município baiano em área — com mais de 16 mil km², maior até do que vários estados brasileiros — e integra o MATOPIBA, a fronteira agrícola formada por Maranhão, Tocantins, Piauí e Bahia. A lavoura irrigada de grãos sustenta uma das maiores economias agropecuárias do país: o município é o 2º maior produtor de soja do Brasil e o 1º da Bahia, além de figurar entre os principais produtores nacionais de algodão e milho, o que já rendeu a Formosa do Rio Preto a 7ª colocação no ranking nacional de valor da produção agrícola do MAPA. Essa produção em larga escala, concentrada em poucas propriedades de alta produtividade, explica um contraste típico da região: apesar de ter pouco mais de 25 mil habitantes, o município aparece entre os maiores PIBs per capita da Bahia.',

  mercado:
    'O mercado de personal trainers em Formosa do Rio Preto é pequeno e concentrado na área central da cidade, refletindo o porte de um município de pouco mais de 25 mil habitantes. A renda elevada gerada pelo agronegócio de grãos convive com uma oferta fitness ainda enxuta, baseada em academias locais de musculação e treino funcional, o que abre espaço para o atendimento personalizado tanto de moradores da cidade quanto de trabalhadores ligados às fazendas do entorno.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Santa Helena'],

  parques: [
    {
      nome: 'Rio Preto',
      descricao:
        'O rio que dá nome à cidade corre junto à área urbana e é um dos principais atrativos naturais do município, usado para banho, pesca e lazer nas margens, incluindo o trecho conhecido como orla, em frente ao centro.',
    },
    {
      nome: 'Praça Santa Helena',
      descricao:
        'Praça do bairro Santa Helena que recebeu reforma de sua academia ao ar livre, servindo de espaço público para exercício e convivência no bairro.',
    },
    {
      nome: 'Praça da Igreja Matriz',
      descricao:
        'Um dos principais pontos de encontro do centro da cidade, referência de convivência e caminhada para moradores.',
    },
  ],
  ciclovias:
    'Não há rede cicloviária estruturada divulgada oficialmente; os deslocamentos a pé e de bicicleta acontecem nas ruas do centro e dos bairros residenciais, sem infraestrutura dedicada.',

  clima:
    'O clima é tropical com estação seca (Aw, de savana), típico do Cerrado, com um período chuvoso concentrado no verão (novembro a março) e uma longa estiagem no inverno, quando a umidade do ar cai bastante e as temperaturas diurnas seguem elevadas.',
  climaTreino:
    'O calor característico do Cerrado e a baixa umidade da estação seca pedem treino ao ar livre nos horários mais amenos, de manhã cedo ou no fim da tarde, com atenção redobrada à hidratação e à proteção solar, especialmente entre junho e setembro.',

  mobilidade:
    'O acesso rodoviário é feito pela BR-135, que corta o município, e por rodovias estaduais como a BA-458 e a BA-454, que conectam a sede à malha viária do oeste baiano; a viagem até Barreiras, principal polo regional, soma cerca de 150 km. A extensão territorial do município — a maior da Bahia — faz com que fazendas e povoados do interior fiquem a grandes distâncias da sede, dependendo fortemente do transporte rodoviário.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do calendário esportivo municipal, com campeonatos de futebol amador entre bairros e distritos, e do uso do Rio Preto e das praças públicas para caminhada, banho e lazer ao ar livre — um contraponto à rotina de trabalho pesado ligada à lavoura e à pecuária no interior do município.',
  academias:
    'A oferta de academias é pequena e concentrada no centro da cidade, com estabelecimentos como a Academia Corpo Fitness, próxima à Praça do Mercado, oferecendo musculação e treino funcional; parte do condicionamento físico de moradores do meio rural ainda acontece de forma informal.',

  destaquesFitness: [
    'Maior município da Bahia em área territorial, com mais de 16 mil km² no extremo oeste do estado.',
    'Um dos maiores PIBs per capita da Bahia, puxado pelo agronegócio de soja, algodão e milho do MATOPIBA.',
    'Rio Preto e praças como a Santa Helena como principais espaços públicos de lazer e atividade ao ar livre.',
    'Clima de Cerrado com estação seca prolongada, que exige treino em horários amenos e hidratação reforçada.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Maior município da Bahia em área e um dos motores do agronegócio de grãos no oeste do estado, Formosa do Rio Preto ainda tem um mercado fitness pequeno diante da renda gerada pela lavoura. Um personal trainer ajuda a estruturar o treino considerando o calor do Cerrado e a oferta limitada de estrutura esportiva, aproveitando o Rio Preto e as praças da cidade como aliados do treino ao ar livre.',

  vizinhas: ['barreiras-ba', 'bom-jesus-da-lapa-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Formosa do Rio Preto', url: 'https://cidades.ibge.gov.br/brasil/ba/formosa-do-rio-preto/panorama' },
    { nome: 'Prefeitura Municipal de Formosa do Rio Preto', url: 'https://formosadoriopreto.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
