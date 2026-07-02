import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'delfinopolis-mg',
  nome: 'Delfinópolis',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'delfinopolitano',
  tipo: 'cidade',

  populacao: 8393,
  populacaoAno: 2022,
  idhm: 0.740,
  idhmClasse: 'alto',
  altitudeM: 745,

  resumoEconomico:
    'No sudoeste de Minas Gerais, às margens da Represa dos Peixotos (trecho do Lago de Furnas represado no Rio Grande), Delfinópolis tem economia apoiada na agropecuária — com destaque para café, leite, milho, cana-de-açúcar, gado de corte, suinocultura e a produção de banana, em que o município figura entre os maiores de Minas Gerais — e na fabricação artesanal do queijo Canastra, cujo modo de fazer foi reconhecido pela Unesco como Patrimônio Cultural Imaterial da Humanidade em dezembro de 2024. O turismo de natureza vem ganhando peso: o município é cercado por mais de 150 cachoeiras catalogadas e por trechos do Lago de Furnas com cânions e praias de água doce, explorados em passeios de barco e atividades náuticas.',

  mercado:
    'Município pequeno e de economia predominantemente rural, Delfinópolis tem um mercado de personal trainers ainda restrito, concentrado em poucos espaços de treino no centro da cidade. A demanda tende a vir de moradores fixos em busca de saúde e condicionamento no dia a dia e de visitantes que passam pela região a caminho das cachoeiras e do Lago de Furnas, interessados em preparo físico para trilhas e atividades náuticas.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Babilônia'],

  parques: [
    {
      nome: 'Cachoeiras de Delfinópolis',
      descricao:
        'O município soma mais de 150 quedas d\'água catalogadas em meio a cerrado preservado, num relevo de transição para a Serra da Canastra; muitas são acessadas por trilhas e estradas rurais, servindo de roteiro para caminhada e cachoeirismo.',
    },
    {
      nome: 'Represa dos Peixotos (Lago de Furnas)',
      descricao:
        'Trecho do Lago de Furnas formado pela represa no Rio Grande, na divisa com Cássia; reúne cânions, praias de água doce e pontos de pesca esportiva, sendo palco de passeios de lancha e outras atividades náuticas na região.',
    },
    {
      nome: 'Entorno rural e Rota do Queijo Canastra',
      descricao:
        'A zona rural do município reúne fazendas produtoras do queijo Canastra e paisagens de cerrado preservado, com estradas de terra que também servem de percurso para caminhada e pedal fora da área urbana.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária estruturada; a caminhada, a corrida e o pedal acontecem nas poucas vias do centro e em estradas rurais de acesso às cachoeiras e às fazendas do entorno.',

  clima:
    'O clima é tropical de altitude, com temperatura média anual em torno de 22 °C. Fevereiro costuma ser o mês mais quente, com médias próximas de 24 °C, enquanto julho traz os dias mais frescos, com mínimas médias ao redor de 19 °C; o relevo de transição para a Serra da Canastra e o cerrado preservado marcam a paisagem ao redor da cidade.',
  climaTreino:
    'As temperaturas amenas de altitude favorecem o treino ao ar livre em boa parte do ano, sendo mais confortável nas primeiras horas da manhã ou no fim da tarde; nos meses mais quentes do verão, hidratação e proteção solar são recomendadas para atividades externas.',

  mobilidade:
    'O acesso rodoviário mais direto é por Cássia, com travessia de balsa sobre o Rio Grande na Represa dos Peixotos, e por São João Batista do Glória, pela chamada Rodovia Ecológica; a ligação regional com o restante do estado passa pela rodovia MG-050, que conecta a região a Passos e à Grande Belo Horizonte. A locomoção interna é feita majoritariamente por veículo próprio, dada a extensa área rural do município.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local gira em torno da água e do meio rural: pesca esportiva (tucunaré, dourado e traíra) e passeios de lancha no Lago de Furnas, cachoeirismo e caminhada pelas mais de 150 quedas d\'água do município, além da rotina de trabalho ligada à agropecuária e à produção do queijo Canastra. Corrida e treino estruturado ficam restritos às vias do centro.',
  academias:
    'A oferta de academias é pequena, concentrada no centro da cidade, com poucos espaços de musculação e treino funcional voltados principalmente à população fixa; boa parte do fluxo turístico prioriza as atividades ao ar livre ligadas às cachoeiras e ao lago.',

  destaquesFitness: [
    'Mais de 150 cachoeiras catalogadas ao redor do município, base para caminhada e cachoeirismo em meio ao cerrado preservado.',
    'Represa dos Peixotos, trecho do Lago de Furnas com cânions e praias de água doce voltados à pesca esportiva e a passeios de lancha.',
    'Produção do queijo Canastra, reconhecida pela Unesco como Patrimônio Cultural Imaterial da Humanidade, e forte presença da agropecuária no dia a dia local.',
    'Acesso por balsa via Cássia sobre o Rio Grande, reflexo do relativo isolamento geográfico que também molda um mercado fitness ainda pequeno.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cercada por cachoeiras, cânions e pela produção do queijo Canastra, Delfinópolis tem uma rotina marcada pela vida rural e pelo Lago de Furnas. Um personal trainer ajuda a organizar o treino considerando a oferta local reduzida de academias, o clima de altitude favorável à atividade ao ar livre e a distância dos grandes centros.',

  vizinhas: ['passos-mg', 'capitolio-mg', 'sao-sebastiao-do-paraiso-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Delfinópolis', url: 'https://cidades.ibge.gov.br/brasil/mg/delfinopolis/panorama' },
    { nome: 'Prefeitura de Delfinópolis-MG', url: 'https://delfinopolis.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
