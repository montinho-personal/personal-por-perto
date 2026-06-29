import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araraquara-sp',
  nome: 'Araraquara',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'araraquarense',
  tipo: 'cidade',

  populacao: 242228,
  populacaoAno: 2022,
  idhm: 0.815,
  idhmClasse: 'muito alto',
  altitudeM: 664,

  resumoEconomico:
    'Apelidada de "Morada do Sol", Araraquara tem forte tradição agroindustrial, com destaque para o setor sucroenergético e os concentrados de laranja, além de indústria de alimentos e metalmecânica. É polo de saúde e educação no centro paulista (com a Unesp), atraindo moradores das cidades vizinhas, e foi reconhecida entre as melhores do país em qualidade de vida.',

  mercado:
    'O perfil de IDHM muito alto e a presença universitária sustentam um mercado fitness consolidado, com grandes redes, estúdios e personal trainers. O reconhecimento em qualidade de vida acompanha uma população atenta à saúde e ao bem-estar.',

  bairrosNobres: ['Jardim Botânico', 'Campos Ville', 'Jardim das Estações', 'Jardim Universal'],
  bairrosPopulares: ['Jardim Roberto Selmi Dei', 'CECAP', 'Jardim das Hortênsias', 'Jardim Brasil'],

  parques: [
    {
      nome: 'Parque Pinheirinho',
      descricao:
        'Parque gratuito com trilha ecológica, pista de cooper no bosque, pista multiuso, academia ao ar livre, skate park, ciclovia, lago e quadras.',
    },
    {
      nome: 'Parque São José',
      descricao:
        'Ampla área de cerca de 649 mil m², com pista de caminhada, ginásio, campo de futebol e horto municipal.',
    },
    {
      nome: 'Parque do Basalto',
      descricao:
        'Pista de caminhada e corrida plana, sem desnível, muito procurada por corredores da cidade.',
    },
  ],
  ciclovias:
    'Há ciclofaixa de lazer de cerca de 7 km aos domingos (Via Norte e Henry Nestlé); a extensão total da malha permanente ainda não é divulgada em fonte oficial.',

  clima:
    'A "Morada do Sol" tem alta incidência solar, com clima tropical de verões quentes e chuvosos e invernos secos e amenos, média anual em torno de 22 °C — mais quente que São Carlos.',
  climaTreino:
    'São muitos dias ensolarados, mas o calor do verão pede hidratação e horários estratégicos (cedo de manhã ou fim de tarde); o período de abril a agosto é o mais ameno e ideal para treino ao ar livre.',

  mobilidade:
    'Araraquara é servida diretamente pela Rodovia Washington Luís (SP-310), uma de suas principais paradas; a capital fica a cerca de 270 km.',

  corridas: [
    {
      nome: "Run Damha's",
      descricao:
        'Corrida de rua local com largada no bairro Damha, já consolidada no calendário esportivo da cidade.',
    },
    {
      nome: 'Circuito de corridas de rua',
      descricao:
        'Provas pedestres recorrentes que integram o calendário esportivo araraquarense ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'Araraquara tem forte tradição futebolística com a Associação Ferroviária de Esportes (a "Ferroviária"), fundada em 1950 por ex-funcionários da Estrada de Ferro Araraquara — um dos clubes mais tradicionais do interior paulista.',
  academias:
    'A oferta reúne grandes redes e estúdios, com público de IDHM muito alto, complementada por parques completos como o Pinheirinho e o São José.',

  destaquesFitness: [
    'Alto número de dias ensolarados, favorável ao treino ao ar livre (com cuidado no calor do verão).',
    'Parque Pinheirinho como hub público completo (academia ao ar livre, pistas e ciclovia).',
    'IDHM muito alto e reconhecimento em qualidade de vida.',
    'Forte cultura esportiva (futebol/Ferroviária) e rede consolidada de academias.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Morada do Sol e polo do centro paulista, Araraquara une qualidade de vida, parques completos e tradição esportiva. Um personal trainer ajuda a aproveitar o Parque Pinheirinho com método, ajustando os horários ao calor ensolarado da cidade.',

  vizinhas: ['sao-carlos-sp', 'ribeirao-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Araraquara', url: 'https://cidades.ibge.gov.br/brasil/sp/araraquara/panorama' },
    { nome: 'Prefeitura de Araraquara', url: 'https://www.araraquara.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
