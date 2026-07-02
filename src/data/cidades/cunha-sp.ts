import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cunha-sp',
  nome: 'Cunha',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cunhense',
  tipo: 'cidade',

  populacao: 22110,
  populacaoAno: 2022,
  idhm: 0.684,
  idhmClasse: 'médio',
  altitudeM: 950,

  resumoEconomico:
    'No alto do Vale do Paraíba, na divisa com o Rio de Janeiro e próxima de Paraty, Cunha é reconhecida oficialmente como Estância Climática de São Paulo. Depois do declínio do ciclo do ouro, o município se reinventou em torno da cerâmica: as paneleiras de barro, tradição indígena e caipira de utensílios de cozinha, deram origem a partir dos anos 1970 a um polo de cerâmica artística de alta temperatura, com fornos noborigama de origem japonesa, que rendeu à cidade o título de referência nacional no setor. A economia combina esse artesanato com turismo rural e ecoturismo (trilhas, cachoeiras e mirantes da Serra da Bocaina), produção de cachaça artesanal em pequenos alambiques, agricultura e pecuária de pequena escala.',

  mercado:
    'O mercado fitness de Cunha é pequeno e típico de um município rural de porte médio, sem redes de academia relevantes, concentrado em espaços locais de musculação e treino funcional. Parte da demanda por personal trainer vem do fluxo de turistas e visitantes de fim de semana atraídos pelos ateliês de cerâmica, pousadas rurais e trilhas da Serra da Bocaina, que buscam orientação para caminhada, trekking e passeios de bicicleta em terreno de montanha.',

  bairrosNobres: ['Centro', 'Vila Rica'],
  bairrosPopulares: ['Campos de Cunha', 'Campos Novos', 'Boa Vista'],

  parques: [
    {
      nome: 'Parque Nacional da Serra da Bocaina',
      descricao:
        'Unidade de conservação que se estende pela divisa entre São Paulo e Rio de Janeiro, com trilhas na Mata Atlântica preservada; o acesso pelo lado paulista, na SP-171, leva à subida à Pedra da Macela, com vista para Paraty, a Ilha Grande e Angra dos Reis.',
    },
    {
      nome: 'Parque Estadual da Serra do Mar — Núcleo Cunha',
      descricao:
        'Núcleo do parque estadual dedicado a trilhas de caminhada e observação da Mata Atlântica no entorno da sede do município, opção de treino ao ar livre em meio à floresta.',
    },
    {
      nome: 'Cachoeiras da região de Ponte Branca',
      descricao:
        'Conjunto de quedas d\'água e poços naturais na zona rural, na estrada entre Cunha e Paraty, mantidos por famílias locais e usados como ponto de parada para banho e caminhada.',
    },
  ],
  ciclovias:
    'A cidade não tem infraestrutura cicloviária; o pedal acontece nas estradas rurais de terra da zona serrana, inclusive no trajeto histórico entre Cunha e Paraty, usado tanto por ciclistas de montanha quanto por veículos 4x4.',

  clima:
    'Por ficar a mais de 900 m de altitude na Serra da Bocaina, Cunha tem clima mais ameno e seco do que o litoral e o restante do Vale do Paraíba, o que justifica seu status de Estância Climática. O verão é curto, quente e úmido, com chuvas frequentes; o inverno é seco e frio, com noites geladas, geadas em áreas mais planas e temperaturas que podem ficar próximas de zero nas partes mais altas do município.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre em boa parte do ano, mas as manhãs e noites de inverno pedem agasalho por causa do frio e da possibilidade de geada; em dias de chuva de verão, as estradas de terra da zona rural ficam escorregadias e exigem atenção redobrada em caminhadas e pedaladas.',

  mobilidade:
    'O acesso principal se dá pela Via Dutra até Guaratinguetá e, de lá, pela SP-171, estrada de serra que corta o Parque Nacional da Serra da Bocaina rumo a Paraty — no trecho dentro do parque há cerca de 9,4 km em paralelepípedo, com velocidade limitada a 20 km/h e circulação controlada por horário. Dentro do município, boa parte dos bairros rurais é servida por estradas de terra, e os deslocamentos dependem majoritariamente de carro.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Cunha gira em torno do contato com a serra: trekking até cachoeiras, mirantes e o topo da Pedra da Macela, cavalgadas pela zona rural e mountain bike ou passeios 4x4 pela antiga estrada de terra que liga a cidade a Paraty. O clima de altitude e a extensa área rural fazem da caminhada e do pedal em estrada de terra as atividades mais associadas ao município.',
  academias:
    'A oferta é restrita a poucos espaços locais de musculação e treino funcional na área central, sem redes de academia, compatível com o porte pequeno e o perfil rural e turístico do município.',

  destaquesFitness: [
    'Estância Climática a mais de 900 m de altitude, na Serra da Bocaina, com clima ameno favorável a atividades ao ar livre.',
    'Parque Nacional da Serra da Bocaina e Parque Estadual da Serra do Mar (Núcleo Cunha), com trilhas, cachoeiras e a subida à Pedra da Macela.',
    'Polo nacional da cerâmica de alta temperatura, com a tradição das paneleiras e os fornos noborigama, ao lado de turismo rural e cachaça artesanal.',
    'Antiga estrada de terra entre Cunha e Paraty, rota tradicional de mountain bike e passeios 4x4 pela serra.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade pequena e serrana, Cunha combina o clima ameno de Estância Climática com um cenário natural propício a trekking, cavalgada e pedal em estrada de terra na Serra da Bocaina. Como o mercado local de academias é limitado, um personal trainer que trabalhe com treino ao ar livre e adaptável ao terreno rural tende a ser a opção mais prática para moradores e para o público de turismo que passa pela cidade.',

  vizinhas: ['paraty-rj', 'taubate-sp', 'guaratingueta-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cunha', url: 'https://cidades.ibge.gov.br/brasil/sp/cunha/panorama' },
    { nome: 'Prefeitura de Cunha', url: 'https://cunha.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
