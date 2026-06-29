import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'colatina-es', nome: 'Colatina', uf: 'ES', estado: 'Espírito Santo', estadoSlug: 'espirito-santo', regiao: 'Sudeste', gentilico: 'colatinense', tipo: 'cidade',
  populacao: 120033, populacaoAno: 2022, idhm: 0.746, idhmClasse: 'alto', altitudeM: 39,

  resumoEconomico:
    'Colatina é o principal polo regional do noroeste capixaba, cortada pelo Rio Doce e ligada à BR-259, eixo que a conecta a Vitória e ao interior. A cidade é reconhecida oficialmente como a capital estadual do polo de confecções e ganhou fama como a "capital do jeans", com centenas de empresas do vestuário que geram milhares de empregos e atraem compradores de todo o país. Comércio, serviços e a indústria de moda formam a base de uma economia que faz de Colatina referência para os municípios vizinhos.',

  mercado:
    'Como polo regional do noroeste do ES, Colatina concentra a oferta de academias e serviços de saúde de uma área que extrapola seus limites, o que sustenta uma demanda consistente por personal trainers. O mercado se divide entre o atendimento em academias e o treino domiciliar, formato bem-vindo numa cidade de calor intenso, em que muitos preferem treinar em casa nos horários mais quentes do dia.',

  bairrosNobres: ['Maria das Graças', 'Centro', 'São Silvano', 'Esplanada'],
  bairrosPopulares: ['São Braz', 'Vila Lenira', 'Marista', 'Honório Fraga'],

  parques: [
    {
      nome: 'Orla do Rio Doce',
      descricao:
        'A beira do Rio Doce é o cartão-postal e o principal espaço de lazer ao ar livre da cidade, com calçadão usado para caminhada, corrida e pedaladas, especialmente no fim da tarde, quando o calor cede.',
    },
    {
      nome: 'Praça-parques e espaços públicos do Centro',
      descricao:
        'As praças e os trechos arborizados do Centro e dos bairros próximos ao rio servem de ponto de encontro para caminhada e treino funcional ao ar livre nos horários mais amenos.',
    },
  ],
  ciclovias:
    'O trecho ao longo da orla do Rio Doce é o principal corredor para pedalar e correr na cidade, aproveitando o terreno plano do vale.',

  clima:
    'O clima é tropical quente, marcado por calor intenso: Colatina é uma das cidades mais quentes do Espírito Santo, com recorde de 42,3°C registrado em janeiro de 2016.',
  climaTreino:
    'O calor forte pede cautela nas horas centrais do dia. O início da manhã e o fim da tarde, junto à orla do Rio Doce, são as melhores janelas para treinar ao ar livre, sempre com hidratação reforçada — e o treino domiciliar ou em academia climatizada é uma saída prática nos dias mais abafados.',

  mobilidade:
    'Colatina é cortada pela BR-259, principal eixo rodoviário que a liga a Vitória e ao interior do estado, e exerce papel de entroncamento regional. Dentro da cidade, o deslocamento é predominantemente por carro e ônibus, com o Rio Doce dividindo as duas margens urbanas.',

  corridas: [
    {
      nome: 'Corridas de rua de Colatina',
      descricao:
        'A cidade recebe provas de rua organizadas por escolas, boxes de crossfit e grupos locais, com percursos de 5 km, 10 km e 21 km que movimentam a comunidade esportiva da região.',
    },
    {
      nome: 'Calendário esportivo do noroeste capixaba',
      descricao:
        'Como polo regional, Colatina concentra eventos e provas que atraem corredores das cidades vizinhas ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Colatina gira em torno da orla do Rio Doce e da rotina de academias e boxes, com caminhada e corrida ganhando espaço sobretudo nos horários mais frescos do dia. O calor molda os hábitos de treino da cidade.',
  academias:
    'Por ser polo regional, Colatina reúne uma oferta de academias e estúdios que atende também moradores das cidades do entorno, complementada pelo treino domiciliar com personal trainer.',

  destaquesFitness: [
    'Orla do Rio Doce como principal espaço para caminhada e corrida.',
    'Polo regional do noroeste capixaba, com oferta concentrada de academias.',
    'Calor intenso favorece treino domiciliar e horários amenos.',
    'Corridas de rua organizadas por escolas e boxes locais.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Entre a orla do Rio Doce e o calor característico do noroeste capixaba, Colatina pede um treino bem planejado — no horário certo, no ambiente certo. Como polo regional, oferece academias, boxes e personal trainers que ajudam a manter a constância, seja ao ar livre ao fim da tarde, seja em casa nos dias mais quentes.',

  vizinhas: ['linhares-es', 'serra-es', 'vitoria-es'],

  fontes: [
    { nome: 'IBGE Cidades — Colatina', url: 'https://cidades.ibge.gov.br/brasil/es/colatina/panorama' },
    { nome: 'Prefeitura Municipal de Colatina', url: 'https://www.colatina.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
