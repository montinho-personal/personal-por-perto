import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-maria-da-boa-vista-pe',
  nome: 'Santa Maria da Boa Vista',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'boa-vistense',
  tipo: 'cidade',

  populacao: 40578,
  populacaoAno: 2022,
  idhm: 0.590,
  idhmClasse: 'baixo',
  altitudeM: 361,

  resumoEconomico:
    'Às margens do rio São Francisco, no Sertão do São Francisco pernambucano, Santa Maria da Boa Vista é um dos polos da fruticultura irrigada do Vale do São Francisco, com produção de manga, uva, banana e outras culturas viabilizadas pela irrigação em pleno semiárido. O município se destacou como o maior produtor de banana do Brasil em levantamento do IBGE, com cerca de 210 mil toneladas e R$ 378 milhões movimentados. A cidade também tem tradição de vitivinicultura, com vinícola às margens do rio, além de pecuária (caprinos, ovinos, bovinos) e pesca artesanal no São Francisco.',

  mercado:
    'O mercado fitness de Santa Maria da Boa Vista é típico de uma cidade média do interior do sertão: academias de bairro focadas em musculação e treino funcional, sem grande oferta de estúdios especializados. A procura por personal trainer tende a vir de quem busca treino individualizado com horários adaptados ao calor forte do semiárido e de produtores rurais e comerciantes com rotina mais flexível.',

  bairrosNobres: ['Centro', 'Planalto'],
  bairrosPopulares: ['Mandacaru', 'Santa Luzia', 'Senador Paulo Guerra', 'Agrovila'],

  parques: [
    {
      nome: 'Margem do Rio São Francisco',
      descricao:
        'A orla e os acessos ao rio São Francisco são o principal espaço público de contato com a natureza, usados para caminhada e como referência da vida ao ar livre da cidade, incluindo o entorno da vinícola local à beira-rio.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças da área central concentram caminhadas e encontros ao ar livre, sobretudo no fim da tarde, quando o calor do sertão dá trégua.',
    },
  ],
  ciclovias:
    'A cidade não conta com malha cicloviária estruturada; deslocamentos de bicicleta e corrida acontecem nas vias urbanas e nas estradas vicinais que ligam a sede aos distritos e projetos de irrigação.',

  clima:
    'O clima é semiárido, muito quente e seco, característico do Sertão do São Francisco, com temperaturas elevadas ao longo de praticamente todo o ano, baixa umidade e chuvas escassas e irregulares, concentradas em poucos meses.',
  climaTreino:
    'O calor extremo do semiárido torna o início da manhã e o fim da tarde os horários mais seguros para treinar ao ar livre, com hidratação reforçada e proteção solar; no restante do dia, ambientes cobertos ou climatizados são a opção mais indicada.',

  mobilidade:
    'A BR-428 é o principal eixo rodoviário que corta o município, ligando Santa Maria da Boa Vista a Petrolina e a Lagoa Grande, além de dar acesso aos projetos de irrigação e distritos rurais. O deslocamento interno é feito majoritariamente por carro, moto e transporte rodoviário, com terminal rodoviário na cidade.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva e ao ar livre gira em torno do trabalho rural ligado à fruticultura irrigada e à pecuária, do futebol amador e de tradições do sertão como a vaquejada. Não há um calendário consolidado de corridas de rua no município; caminhadas em praças e na margem do rio São Francisco são a atividade ao ar livre mais comum entre a população.',
  academias:
    'A oferta é formada por academias de bairro de porte pequeno a médio, voltadas a musculação e treino funcional, concentradas principalmente na área central da cidade.',

  destaquesFitness: [
    'Maior produtor de banana do Brasil, além de polo de manga e uva no Vale do São Francisco irrigado.',
    'Margem do rio São Francisco como principal espaço de caminhada e contato com o ar livre.',
    'Clima semiárido muito quente, que exige treino nos horários mais frescos e hidratação constante.',
    'Cidade cortada pela BR-428, ligando o sertão irrigado a Petrolina e à região de Lagoa Grande.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade do sertão irrigado às margens do São Francisco, Santa Maria da Boa Vista tem rotina marcada pelo calor forte e pela vida ligada à fruticultura. Um personal trainer ajuda a montar um treino seguro para esse clima, priorizando os horários mais frescos do dia e a constância mesmo com a rotina do trabalho rural e do comércio local.',

  vizinhas: ['petrolina-pe', 'serra-talhada-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Maria da Boa Vista', url: 'https://cidades.ibge.gov.br/brasil/pe/santa-maria-da-boa-vista/panorama' },
    { nome: 'Prefeitura de Santa Maria da Boa Vista', url: 'https://santamariadaboavista.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3203700' },
  ],
  atualizadoEm: '2026-07-03',
};
