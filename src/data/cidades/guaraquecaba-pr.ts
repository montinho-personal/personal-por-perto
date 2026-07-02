import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaraquecaba-pr',
  nome: 'Guaraqueçaba',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'guaraqueçabano',
  tipo: 'cidade',

  populacao: 7430,
  populacaoAno: 2022,
  idhm: 0.587,
  idhmClasse: 'baixo',
  pibPerCapita: 19660.96,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'No litoral norte do Paraná, às margens da Baía de Guaraqueçaba e da Baía das Laranjeiras, o município é formado pela sede e por três distritos (Guaraqueçaba, Serra Negra e Ararapira) espalhados entre a Serra do Mar e um mosaico de ilhas, mangues e rios. Mais de 90% do território permanece coberto por Mata Atlântica preservada, o que inclui o Parque Nacional do Superagui — parte de um dos maiores remanescentes contínuos desse bioma no país, com as ilhas do Superagui e das Peças. A economia gira em torno da pesca artesanal praticada por comunidades caiçaras, da agricultura familiar de banana, mandioca e palmito pupunha (Guaraqueçaba é hoje um dos principais produtores paranaenses de palmito, em transição do extrativismo da juçara nativa para o cultivo da pupunha) e de um ecoturismo ainda incipiente, mas crescente, voltado à natureza preservada.',

  mercado:
    'O mercado de personal trainer em Guaraqueçaba é praticamente inexistente enquanto atividade estruturada: é um município pequeno, de baixa renda e de difícil acesso, sem redes de academia e com a oferta de exercício orientado limitada a pouquíssimos profissionais locais ou a quem atende de forma itinerante. Boa parte da atividade física do dia a dia acontece de forma informal, ligada ao trabalho na roça, na pesca, na lida com barcos e ao deslocamento a pé nas comunidades das ilhas, mais do que a um mercado fitness propriamente dito.',

  bairrosNobres: ['Centro (Sede)', 'Guitumbé'],
  bairrosPopulares: ['Serra Negra', 'Ararapira', 'Ilha das Peças', 'Ilha do Superagui'],

  parques: [
    {
      nome: 'Parque Nacional do Superagui',
      descricao:
        'Unidade de conservação federal de cerca de 34 mil hectares que abrange a Ilha do Superagui, a Ilha das Peças, as Ilhas do Pinheiro e Pinheirinho e o Vale do Rio dos Patos, com trilhas em meio à Mata Atlântica e faixas de praia preservada; é referência para trekking, caminhada e observação de aves, incluindo espécies ameaçadas como o papagaio-de-cara-roxa.',
    },
    {
      nome: 'Ilha das Peças',
      descricao:
        'Reúne as comunidades de Vila das Peças, Guapicu, Tibicanga e Bertioga; suas praias, trilhas e igarapés servem de cenário para caminhada, remo e canoagem, com deslocamento entre comunidades feito a pé ou de barco.',
    },
    {
      nome: 'Morro do Guitumbé',
      descricao:
        'Pequena elevação junto ao centro histórico da sede, com trilha de cerca de 700 m até um mirante com vista da baía e da cidade — o percurso mais acessível para quem quer caminhar ou correr subindo perto do centro.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; a sede tem poucas ruas pavimentadas e o deslocamento nas ilhas e comunidades do interior se dá a pé, de bicicleta em terreno informal ou de barco.',

  clima:
    'O clima é tropical úmido, com temperatura média em torno de 28 °C e chuvas o ano inteiro, mais intensas entre fevereiro e abril, reflexo da posição junto à Serra do Mar e ao mar. A umidade é constante, característica do litoral paranaense.',
  climaTreino:
    'Calor e umidade elevados o ano todo pedem treinar cedo pela manhã ou no fim da tarde, com hidratação reforçada; os meses mais chuvosos podem limitar atividades ao ar livre e exigem atenção redobrada em trilhas e travessias de barco.',

  mobilidade:
    'O acesso rodoviário é feito pela PR-405, estrada de terra de cerca de 80 km que liga a sede a Antonina, com viagens de carro que podem levar até quatro horas — mais em dias de chuva, quando o trajeto piora — e o dobro disso de ônibus ou caminhão; a pavimentação da via é discutida há anos e segue em fase de estudos. A alternativa mais estável é o acesso por barco a partir de Paranaguá, com travessias de cerca de 1h30 a poucas horas dependendo da embarcação. Dentro do município, o deslocamento entre a sede, as ilhas e as comunidades ribeirinhas depende de barcos e lanchas.',

  corridas: [
    {
      nome: 'Ultra Guaraqueçaba',
      descricao:
        'Prova de trail running que liga Morretes a Guaraqueçaba cruzando a Serra do Mar, com distâncias que chegam a 126 km, além de opções de 80 km, 52 km e 42 km, atraindo ultramaratonistas para a região.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento local é marcada pela vida caiçara: remo e canoagem fazem parte do cotidiano das ilhas, a pesca artesanal e o trabalho na roça mantêm boa parte da população ativa, e trilhas como a do Superagui e do Guitumbé atraem caminhantes e observadores de aves. A Ultra Guaraqueçaba, prova de trail que cruza a Serra do Mar a partir de Morretes, é o principal evento esportivo estruturado ligado ao município.',
  academias:
    'A oferta de academias convencionais é mínima ou inexistente na maior parte do município, restrita a estruturas bem pequenas na sede; a atividade física orientada é pouco presente, e o treino ao ar livre — caminhada, trilha, remo — tende a suprir boa parte da demanda.',

  destaquesFitness: [
    'Parque Nacional do Superagui, com trilhas em um dos maiores remanescentes contínuos de Mata Atlântica do Brasil.',
    'Mais de 90% do território coberto por floresta preservada, entre a Serra do Mar e as ilhas do litoral.',
    'Acesso por estrada de terra (PR-405) até Antonina ou por barco a partir de Paranaguá, o que molda a rotina de quem mora ou visita o município.',
    'Ultra Guaraqueçaba, prova de trail de até 126 km que liga Morretes a Guaraqueçaba pela Serra do Mar.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cercada por mar, mangue e Mata Atlântica preservada, Guaraqueçaba é um município pequeno e isolado, onde a estrutura de academias e personal trainers praticamente não existe e boa parte da atividade física acontece de forma natural, no trabalho e no deslocamento entre a sede, as ilhas e as comunidades ribeirinhas. Quem busca treino orientado ali tende a recorrer a atendimento online ou a profissionais de cidades vizinhas, adaptando a rotina ao calor, à umidade e às limitações de acesso da região.',

  vizinhas: ['paranagua-pr', 'campina-grande-do-sul-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Guaraqueçaba', url: 'https://cidades.ibge.gov.br/brasil/pr/guaraquecaba/panorama' },
    { nome: 'Prefeitura de Guaraqueçaba', url: 'https://www.guaraquecaba.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
