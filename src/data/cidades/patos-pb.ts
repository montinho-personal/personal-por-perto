import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'patos-pb',
  nome: 'Patos',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'patoense',
  tipo: 'cidade',

  populacao: 103165,
  populacaoAno: 2022,
  idhm: 0.701,
  idhmClasse: 'alto',
  altitudeM: 245,

  resumoEconomico:
    'Conhecida como a "Capital do Sertão da Paraíba", Patos é um dos principais polos comerciais e de serviços do interior nordestino, atendendo dezenas de municípios da Paraíba, do Rio Grande do Norte, de Pernambuco e do Ceará. A economia se apoia em comércio, serviços, saúde e educação, com a presença de campus da UFCG e de instituições privadas de ensino superior que reforçam o papel da cidade como referência regional.',

  mercado:
    'O mercado fitness acompanha o porte de polo regional: há redes, academias de bairro e estúdios concentrados nas áreas comerciais e nos bairros de classe média. A demanda é puxada pelo público universitário e por trabalhadores do comércio e dos serviços, e o calor intenso do Sertão torna o horário e a hidratação fatores decisivos no acompanhamento profissional.',

  bairrosNobres: ['Belo Horizonte', 'Jardim Magnólia', 'Bela Vista', 'Novo Horizonte'],
  bairrosPopulares: ['Liberdade', 'Jatobá', 'Monte Castelo', 'Morro'],

  parques: [
    {
      nome: 'Açude do Jatobá',
      descricao:
        'Cartão-postal de Patos, ao sul da cidade, construído pelo DNOCS sobre o Riacho dos Mares na sub-bacia do Rio Espinharas. Abastece a cidade e tem entorno usado para caminhada e lazer ao ar livre.',
    },
    {
      nome: 'Vale do Rio Espinharas',
      descricao:
        'A cidade se estende pelo vale do Rio Espinharas, com áreas de calçada e avenidas que servem de rota para caminhada e corrida no fim de tarde, quando o calor diminui.',
    },
    {
      nome: 'Serra de Teixeira e entorno da Borborema',
      descricao:
        'A leste e ao sul, os relevos do Planalto da Borborema e a Serra de Teixeira oferecem percursos com aclives para quem busca treino mais intenso fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclofaixa em avenidas principais; a extensão total da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente (tipo BSh na classificação de Köppen-Geiger), com chuvas concentradas entre janeiro e abril. Patos é a cidade mais quente da Paraíba e uma das mais quentes do Brasil, com temperaturas elevadas, baixa umidade relativa do ar e ventos sertanejos.',
  climaTreino:
    'O calor intenso e a baixa umidade exigem planejamento: treinos ao ar livre rendem mais no início da manhã e no fim da tarde, com atenção redobrada à hidratação e à proteção solar. Nos meses mais secos, a carga e o ritmo precisam ser ajustados para evitar estresse térmico.',

  mobilidade:
    'O acesso principal é pela BR-230 (Transamazônica), eixo que liga Patos a João Pessoa (cerca de 132 km a leste, passando por Campina Grande) e ao Alto Sertão (Pombal, Sousa e Cajazeiras a oeste). Na cidade há ainda entroncamentos com as BR-110 e BR-361, o que consolida Patos como ponto de convergência rodoviária do Sertão.',

  corridas: [
    {
      nome: 'Circuito das Águas – Etapa Patos',
      descricao:
        'Prova de rua promovida pela Cagepa em alusão ao Dia Mundial da Água, com percursos de 3 km, 5 km e 10 km que atraem corredores da cidade e da região.',
    },
    {
      nome: 'Corridas de rua do calendário sertanejo',
      descricao:
        'Patos recebe provas de rua ao longo do ano, muitas em datas comemorativas e aniversários da cidade, com distâncias variadas para iniciantes e corredores experientes.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua tem público fiel em Patos, apesar do calor, e a cidade funciona como referência esportiva para os municípios do Sertão. Caminhada e corrida nos horários mais frescos fazem parte da rotina de quem treina ao ar livre.',
  academias:
    'A oferta reúne redes, academias de bairro e estúdios, concentrados nas áreas comerciais e nos bairros de classe média, sustentados pelo público universitário e pelos trabalhadores do comércio e dos serviços.',

  destaquesFitness: [
    'Polo regional do Sertão da Paraíba, com mercado fitness que atende toda a microrregião.',
    'Açude do Jatobá e o vale do Rio Espinharas como áreas para caminhada e corrida ao ar livre.',
    'Público universitário (UFCG e faculdades privadas) que sustenta a demanda por treino.',
    'Clima quente que torna o planejamento de horário e hidratação um diferencial do acompanhamento profissional.',
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
    'Capital do Sertão da Paraíba e polo comercial de toda a região, Patos combina vida universitária ativa com um dos climas mais quentes do país. Um personal trainer ajuda a treinar com segurança nesse cenário — ajustando horários, carga e hidratação — do iniciante ao corredor de rua, dentro ou fora da academia.',

  vizinhas: ['campina-grande-pb', 'joao-pessoa-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Patos', url: 'https://cidades.ibge.gov.br/brasil/pb/patos/panorama' },
    { nome: 'Prefeitura de Patos', url: 'https://patos.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
