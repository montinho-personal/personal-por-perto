import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-de-ribamar-ma',
  nome: 'São José de Ribamar',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'ribamarense',
  tipo: 'cidade',

  populacao: 244579,
  populacaoAno: 2022,
  idhm: 0.708,
  idhmClasse: 'alto',
  altitudeM: 20,

  resumoEconomico:
    'Segundo município mais populoso do Maranhão e parte da Região Metropolitana da Grande São Luís, São José de Ribamar ocupa a porção leste da Ilha de São Luís, em conurbação direta com a capital. A economia combina comércio e serviços nos bairros mais urbanizados, pesca artesanal na orla e um forte turismo religioso ligado ao Santuário de São José de Ribamar, padroeiro do estado, que atrai grandes romarias em setembro.',

  mercado:
    'O mercado fitness acompanha o crescimento urbano da Ilha de São Luís, com a Smart Fit no Maiobão, academias de bairro e estúdios de musculação e funcional nas áreas conurbadas com a capital. A proximidade com São Luís amplia as opções, e a orla com praias de mar calmo favorece o treino ao ar livre e os esportes de areia.',

  bairrosNobres: ['Maiobão', 'Jardim Tropical', 'Vinhais', 'Mata'],
  bairrosPopulares: ['Vila Luizão', 'Miritiua', 'Forquilha', 'Cohab'],

  parques: [
    {
      nome: 'Orla e Praia de Panaquatira',
      descricao:
        'Praia de mar calmo e águas mornas, com faixa de areia firme na maré baixa boa para caminhada e corrida, além de estrutura de quiosques — um dos cartões-postais do município.',
    },
    {
      nome: 'Praia de Araçagi',
      descricao:
        'Extensa praia na divisa da Ilha de São Luís, com longas faixas de areia que servem de cenário para caminhadas, corrida e esportes de areia ao amanhecer.',
    },
    {
      nome: 'Entorno do Santuário de São José de Ribamar',
      descricao:
        'O centro histórico à beira-mar, em torno da basílica do padroeiro, concentra calçadões e a orla do centro, usados para caminhadas leves e como ponto de encontro da cidade.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária ainda é incipiente e fragmentada; o pedal acontece sobretudo em vias da orla e em ruas dos bairros, e quem busca trechos contínuos costuma recorrer às ciclofaixas da vizinha São Luís.',

  clima:
    'O clima é equatorial úmido (litoral maranhense), quente o ano todo (médias em torno de 27 °C), com umidade alta e chuvas concentradas entre janeiro e junho.',
  climaTreino:
    'O treino ao ar livre rende mais no início da manhã ou no fim da tarde, com atenção redobrada à hidratação; a brisa da orla na Ilha de São Luís ajuda no conforto térmico.',

  mobilidade:
    'Situada na Ilha de São Luís, a cidade é totalmente conurbada com a capital e ligada a ela pela Avenida Jerônimo de Albuquerque e pela MA-201 (Estrada de Ribamar). O deslocamento depende muito de carro e de ônibus intermunicipais; a ciclomobilidade ainda está em desenvolvimento.',

  corridas: [
    {
      nome: 'Grande Romaria Caminho de São José',
      descricao:
        'Maior caminhada religiosa da Ilha de São Luís, parte da Cohab e segue pela Avenida Jerônimo de Albuquerque e pela MA-201 até a Igreja Matriz de São José de Ribamar, reunindo milhares de peregrinos em setembro.',
    },
    {
      nome: 'Circuitos de corrida da Grande São Luís',
      descricao:
        'Provas de rua de 5 km e 10 km do calendário metropolitano, com etapas que passam pelos bairros da Ilha, integrando atletas de São José de Ribamar e da capital.',
    },
  ],
  culturaEsportiva:
    'A vida ativa gira em torno da orla e das praias de mar calmo, palco de caminhadas, corrida e esportes de areia, e ganha um caráter próprio com as grandes romarias a pé do padroeiro. O futebol de várzea e de areia também é forte, e a proximidade com São Luís amplia o acesso a um calendário de corridas de rua em expansão.',
  academias:
    'A oferta reúne a Smart Fit no Maiobão, academias de bairro e estúdios de musculação e funcional, complementados pela estrutura da vizinha São Luís. A orla e as praias funcionam como grandes extensões ao ar livre para treino e atividades de areia.',

  destaquesFitness: [
    'Praias de mar calmo (Panaquatira, Araçagi) ideais para caminhada, corrida e esportes de areia.',
    'Conurbação total com São Luís, que amplia o acesso a academias e a corridas de rua.',
    'Smart Fit no Maiobão e estúdios de musculação e funcional nos bairros.',
    'Tradição de grandes caminhadas religiosas, com a Romaria Caminho de São José.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Entre o Santuário do padroeiro e uma orla de praias tranquilas, São José de Ribamar oferece bons cenários para treinar ao ar livre, com a estrutura da Grande São Luís à mão. Um personal trainer ajuda a montar uma rotina que respeite o calor e a umidade do litoral maranhense e a aproveitar ao máximo as praias e os bairros da Ilha.',

  vizinhas: ['sao-luis-ma', 'bacabal-ma'],

  fontes: [
    { nome: 'IBGE Cidades — São José de Ribamar', url: 'https://cidades.ibge.gov.br/brasil/ma/sao-jose-de-ribamar/panorama' },
    { nome: 'Prefeitura de São José de Ribamar', url: 'https://www.saojosederibamar.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/211120' },
  ],
  atualizadoEm: '2026-06-29',
};
