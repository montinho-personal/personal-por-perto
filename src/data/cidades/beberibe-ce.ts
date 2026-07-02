import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'beberibe-ce',
  nome: 'Beberibe',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'beberibense',
  tipo: 'cidade',

  populacao: 53114,
  populacaoAno: 2022,
  idhm: 0.638,
  idhmClasse: 'médio',
  altitudeM: 11,

  resumoEconomico:
    'No litoral leste cearense, Beberibe é um dos destinos turísticos mais conhecidos do Ceará, famoso pelo labirinto de falésias multicoloridas de Morro Branco — protegido pelo Monumento Natural das Falésias de Beberibe — e pela Praia das Fontes, onde nascentes de água mineral brotam direto na areia. O turismo movimenta pousadas, restaurantes, passeios de buggy e de jangada e o artesanato feito com areia colorida das falésias, enquanto a pesca artesanal segue central para comunidades como Sucatinga e Parajuru. A agropecuária de subsistência completa a economia dos distritos do interior do município.',

  mercado:
    'O mercado fitness de Beberibe é pequeno e fortemente influenciado pela sazonalidade turística, com academias e profissionais concentrados na sede e nas praias de Morro Branco e Praia das Fontes. A procura por personal trainer aparece tanto entre moradores locais quanto entre proprietários de casas de veraneio e turistas que buscam treino funcional, caminhada orientada ou atividades na praia durante a estada, além de acompanhamento à distância para quem vive fora mas mantém vínculo com a cidade.',

  bairrosNobres: ['Centro', 'Morro Branco', 'Praia das Fontes', 'Uruaú'],
  bairrosPopulares: ['Sucatinga', 'Parajuru', 'Itapeim', 'Forquilha'],

  parques: [
    {
      nome: 'Monumento Natural das Falésias de Beberibe (Morro Branco)',
      descricao:
        'O cartão-postal do município, com falésias de areia colorida esculpidas pela erosão, formando um labirinto natural à beira-mar; palco de caminhadas guiadas e treinos ao ar livre com vista para o oceano.',
    },
    {
      nome: 'Praia das Fontes',
      descricao:
        'Continuação das falésias de Morro Branco, onde nascentes de água mineral desembocam diretamente na areia; a faixa de praia ampla e a vila de pescadores com jangadas favorecem caminhada e corrida leve.',
    },
    {
      nome: 'Praia de Uruaú',
      descricao:
        'Uma das praias mais tranquilas do município, com lagoa de água doce cercada de coqueiros junto ao mar; cenário mais reservado, usado por quem busca caminhada e atividades ao ar livre longe do fluxo turístico maior.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta, concentrada em trechos da sede e dos acessos às praias; boa parte do deslocamento ativo e do treino ao ar livre acontece nas vias locais e na orla de Morro Branco e Praia das Fontes.',

  clima:
    'O clima é tropical quente, com influência semiárida no interior do município, temperatura média anual em torno de 26,7 °C e chuvas concentradas entre fevereiro e maio. Nos demais meses predominam o sol forte e os ventos constantes característicos do litoral leste cearense.',
  climaTreino:
    'O calor e a forte insolação praticamente o ano inteiro pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e proteção solar; a brisa do mar ajuda no conforto térmico na orla, mas ambientes climatizados são a opção mais segura nos horários de pico de calor.',

  mobilidade:
    'O acesso a Beberibe se dá principalmente pela rodovia estadual CE-040, que liga o município a Fortaleza, a cerca de 80 km, seguindo pelo litoral leste em direção a Aracati e Canoa Quebrada. O transporte urbano e intermunicipal depende de ônibus e vans, e o carro é o meio mais usado para os deslocamentos entre a sede e as praias de Morro Branco, Praia das Fontes e Uruaú, além dos distritos do interior.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Beberibe gira em torno do mar e das falésias: caminhada e corrida na orla e nas trilhas do labirinto de Morro Branco, passeios de buggy pelas dunas, remo e vela nas jangadas de pescadores e esportes de praia como futevôlei e beach tennis nos núcleos turísticos.',
  academias:
    'A oferta de academias é pequena e concentrada na sede e nas praias de Morro Branco e Praia das Fontes, com predomínio de estúdios e espaços de treino funcional voltados tanto a moradores quanto ao público turístico.',

  destaquesFitness: [
    'Labirinto de falésias coloridas de Morro Branco, cenário único para caminhada e treino ao ar livre.',
    'Praia das Fontes, com nascentes de água mineral que desembocam na areia, ideal para caminhadas à beira-mar.',
    'Sol forte e calor o ano quase todo, que exigem hidratação, proteção solar e horários bem escolhidos para treinar.',
    'Litoral leste cearense a cerca de 80 km de Fortaleza pela CE-040, com economia de turismo, pesca e agropecuária.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 620,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Com falésias, praias e nascentes de fama nacional, Beberibe oferece cenários naturais raros para quem quer treinar ao ar livre, mas o calor forte e a rotina marcada pelo turismo pedem planejamento. Um personal trainer ajuda a aproveitar Morro Branco, a Praia das Fontes e Uruaú com segurança, ajustando horários e intensidade ao clima e à realidade de quem vive ou passa temporadas na cidade.',

  vizinhas: ['cascavel-ce', 'aracati-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Beberibe', url: 'https://cidades.ibge.gov.br/brasil/ce/beberibe/panorama' },
    { nome: 'Prefeitura de Beberibe', url: 'https://www.beberibe.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
