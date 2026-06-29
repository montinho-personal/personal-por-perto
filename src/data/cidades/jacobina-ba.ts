import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jacobina-ba',
  nome: 'Jacobina',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'jacobinense',
  tipo: 'cidade',

  populacao: 82590,
  populacaoAno: 2022,
  idhm: 0.65,
  idhmClasse: 'médio',
  altitudeM: 463,

  resumoEconomico:
    'Conhecida como a "Cidade do Ouro" por sua história de mineração que remonta ao século XVII, Jacobina é um polo regional do norte da Bahia, situada no extremo norte da Chapada Diamantina. A economia combina mineração (a cidade ainda abriga atividade aurífera relevante), comércio, serviços e um turismo de natureza em ascensão, sustentado pelas serras, cânions e cachoeiras do entorno. Encravada entre serras, a cidade tem um clima de serra mais ameno que o do sertão baiano ao redor.',

  mercado:
    'Polo de comércio e serviços para os municípios vizinhos, Jacobina reúne público de classe média e forte vocação para atividades ao ar livre, com trilhas, mountain bike e esportes de montanha no entorno. Esse perfil abre espaço para personal trainers que atuam tanto em academias da cidade quanto em treinos funcionais e de corrida aproveitando as serras.',

  bairrosNobres: ['Centro', 'Estação', 'Serrinha', 'Catuaba'],
  bairrosPopulares: ['Nova Jacobina', 'Olhos D\'Água', 'Caixa D\'Água', 'Inácia Cardoso'],

  parques: [
    {
      nome: 'Serra do Tombador',
      descricao:
        'Formação que marca a entrada norte da Chapada Diamantina, com mirantes, trilhas e cânions de rochas sedimentares — destino clássico para trekking e esportes de montanha próximo à cidade.',
    },
    {
      nome: 'Cachoeira do Tombador',
      descricao:
        'Queda d\'água a cerca de 20 km do centro, um dos cartões-postais naturais de Jacobina, muito procurada por quem combina trilha e banho de cachoeira.',
    },
    {
      nome: 'Estação Ecológica Bandeirantes (Trilha dos Bandeirantes)',
      descricao:
        'Área de mata preservada a cerca de 8 km da cidade, entre a Serra de Jacobina e a Serra do Pinhão, com cachoeiras e cânions abertos à visitação e à prática de trilha.',
    },
  ],
  ciclovias:
    'Jacobina não dispõe de malha cicloviária urbana estruturada divulgada em fonte oficial; o ciclismo na cidade é mais voltado ao mountain bike e ao cicloturismo nas serras do entorno.',

  clima:
    'O clima é semiárido, mas amenizado pela altitude e pelo relevo de serra: os verões são quentes e os invernos curtos, secos e mais confortáveis, com temperaturas que costumam variar de cerca de 16 °C a 34 °C ao longo do ano.',
  climaTreino:
    'A condição de cidade encravada entre serras deixa o clima mais ameno do que o do sertão baiano ao redor, favorecendo o treino ao ar livre, especialmente nas primeiras horas da manhã e no fim da tarde.',

  mobilidade:
    'Jacobina é cortada pela BR-324, principal eixo rodoviário que a liga a Feira de Santana, Salvador e ao norte do estado, consolidando seu papel de entroncamento e polo regional no norte da Bahia.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de corrida de rua promovidas por grupos esportivos e pela prefeitura, geralmente com percursos curtos pelas vias centrais e datas comemorativas.',
    },
    {
      nome: 'Trail running e trilhas nas serras',
      descricao:
        'O relevo de serras e cânions do entorno, incluindo a Serra do Tombador e a Trilha dos Bandeirantes, atrai corredores de montanha e praticantes de trekking.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Jacobina é fortemente ligada à natureza: trilhas, mountain bike, rapel, escalada e trekking nas serras fazem parte do cotidiano de quem busca atividade física, ao lado das corridas de rua e do futebol amador.',
  academias:
    'A oferta de academias atende ao público urbano de classe média, e é complementada por treinos funcionais ao ar livre e pela forte presença de atividades de montanha no entorno da cidade.',

  destaquesFitness: [
    'Clima de serra mais ameno que o do sertão baiano, bom para treino ao ar livre.',
    'Serras, cânions e cachoeiras (Serra do Tombador, Trilha dos Bandeirantes) para trekking e trail running.',
    'Forte cultura de esportes de montanha: mountain bike, rapel e escalada.',
    'Polo regional do norte da Bahia, com público de classe média e turismo de natureza em alta.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Encravada entre serras no norte da Chapada Diamantina, Jacobina une um clima mais ameno a um cenário natural raro para quem gosta de treinar ao ar livre. Um personal trainer ajuda a aproveitar as trilhas, cachoeiras e o relevo da "Cidade do Ouro" com um plano de treino seguro e sob medida.',

  vizinhas: ['feira-de-santana-ba', 'juazeiro-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Jacobina', url: 'https://cidades.ibge.gov.br/brasil/ba/jacobina/panorama' },
    { nome: 'Prefeitura de Jacobina', url: 'https://www.jacobina.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
