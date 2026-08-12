import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uiramuta-rr',
  nome: 'Uiramutã',
  uf: 'RR',
  estado: 'Roraima',
  estadoSlug: 'roraima',
  regiao: 'Norte',
  gentilico: 'uiramutãense',
  tipo: 'cidade',

  populacao: 13751,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 13.751 habitantes (Censo 2022), Uiramutã é o município com a maior proporção de indígenas do Brasil — 96,6% da população — e o único que faz fronteira com dois países, Venezuela e Guiana. Dentro da Terra Indígena Raposa Serra do Sol, no nordeste de Roraima, a economia gira em torno das comunidades, do serviço público e de um ecoturismo nascente nas serras e cachoeiras da região.',

  mercado:
    'O mercado de personal trainer formal é praticamente inexistente — e é isso que torna o território interessante: a vida nas comunidades já é fisicamente ativa, com caminhadas longas, roça e futebol. A demanda estruturada vem de servidores, militares de fronteira e visitantes em aclimatação para o Monte Roraima, atendidos sobretudo a distância.',

  bairrosNobres: ['Centro', 'Vila do Uiramutã', 'Água Fria', 'Socó'],
  bairrosPopulares: ['Comunidades da Raposa Serra do Sol', 'Caraparu', 'Mutum', 'Flexal'],

  parques: [
    {
      nome: 'Parque Nacional do Monte Roraima',
      descricao:
        'O parque protege o lado brasileiro do tepui mais famoso do mundo, na tríplice fronteira Brasil–Venezuela–Guiana. A subida clássica se faz pelo lado venezuelano, mas o território do parque é uiramutãense.',
    },
    {
      nome: 'Monte Caburaí',
      descricao:
        'Com 1.456 metros, guarda o ponto mais setentrional do Brasil — o verdadeiro extremo norte do país, alcançado por expedições de vários dias pela savana e pela mata.',
    },
    {
      nome: 'Serras e cachoeiras da Raposa Serra do Sol',
      descricao:
        'O relevo de serras, veredas e quedas d’água da terra indígena forma um dos cenários de caminhada mais bonitos e menos conhecidos do país, visitável com autorização e condução das comunidades.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária. Os deslocamentos entre comunidades se fazem por estradas de terra, trilhas e, na estação chuvosa, com apoio de veículos 4x4.',

  clima:
    'Tropical de savana com influência de altitude nas serras: estação seca bem marcada no fim e começo do ano, chuvas de abril a setembro e noites frescas nas partes altas.',
  climaTreino:
    'As manhãs são a janela de ouro — ar fresco de serra e sol ainda baixo. Quem se prepara para expedições ao Caburaí ou ao Roraima treina caminhada com mochila e desnível real, o recurso mais abundante do município.',

  mobilidade:
    'O acesso se faz por estrada a partir de Boa Vista, via Normandia ou Pacaraima, com trechos de terra dentro da terra indígena. As comunidades se conectam por vicinais e trilhas.',

  corridas: [
    {
      nome: 'Provas e festivais esportivos das comunidades',
      descricao:
        'O calendário local é comunitário: torneios de futebol, corridas em datas festivas e as caminhadas coletivas que fazem parte da vida na Raposa Serra do Sol.',
    },
  ],
  culturaEsportiva:
    'O futebol é o esporte universal das comunidades, e a caminhada longa é rotina — entre roças, igarapés e serras. As expedições ao Caburaí e o montanhismo do Roraima adicionam uma camada de trekking de expedição à cultura local.',
  academias:
    'Não há oferta estruturada de academias; o treino de força acontece de forma improvisada. Para quem precisa de método — servidores, militares, visitantes de temporada —, o acompanhamento online com material portátil é o formato que funciona.',

  destaquesFitness: [
    'Município mais indígena do Brasil: 96,6% da população (Censo 2022).',
    'Parque Nacional do Monte Roraima dentro do território.',
    'Monte Caburaí, o ponto mais setentrional do país, a 1.456 m.',
    'Único município brasileiro com fronteira dupla: Venezuela e Guiana.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 95,
    mensalMin: 220,
    mensalMax: 550,
    onlineMin: 120,
    onlineMax: 310,
  },

  conclusao:
    'Uiramutã é o extremo norte do Brasil em todos os sentidos: geográfico, cultural e de paisagem. Aqui o treino tem propósito de expedição — pernas e fôlego para as serras da Raposa Serra do Sol, mochila para o Caburaí e a sombra do Monte Roraima no horizonte.',

  vizinhas: ['boa-vista-rr', 'caracarai-rr'],

  fontes: [
    { nome: 'IBGE Cidades — Uiramutã', url: 'https://www.ibge.gov.br/cidades-e-estados/rr/uiramuta.html' },
    { nome: 'ICMBio — Parque Nacional do Monte Roraima', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/amazonia/lista-de-ucs/parna-do-monte-roraima' },
    { nome: 'Portal Amazônia — Uiramutã', url: 'https://portalamazonia.com/turismo/conheca-uiramuta-o-municipio-com-maior-proporcao-de-indigenas-do-pais/' },
  ],
  atualizadoEm: '2026-08-12',
};
