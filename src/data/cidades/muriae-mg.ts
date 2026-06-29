import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'muriae-mg',
  nome: 'Muriaé',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'muriaeense',
  tipo: 'cidade',

  populacao: 104108,
  populacaoAno: 2022,
  idhm: 0.734,
  idhmClasse: 'alto',
  altitudeM: 655,

  resumoEconomico:
    'No sul da Zona da Mata mineira, próxima à divisa com o Rio de Janeiro, Muriaé combina dois grandes vetores econômicos: a confecção e a saúde regional. A cidade é reconhecida como um dos principais polos de moda íntima do país, com centenas de empresas de lingerie, pijamas e moda fitness, e também sedia um complexo oncológico de referência que atrai pacientes de centenas de municípios. Esse perfil concentra renda, comércio e fluxo de pessoas, sustentando uma demanda crescente por serviços de bem-estar e fitness.',

  mercado:
    'O mercado de personal trainers em Muriaé acompanha o ritmo de uma cidade média mineira em expansão, com academias de bairro, estúdios de treinamento funcional e unidades de redes maiores no Centro e nas principais avenidas. O grande contingente de trabalhadores da confecção e da área de saúde forma um público interessado em qualidade de vida, e o atendimento personalizado vem ganhando espaço como alternativa ao treino genérico.',

  bairrosNobres: ['Centro', 'Safira', 'Barra', 'Belvedere'],
  bairrosPopulares: ['João XXIII', 'Dornelas', 'Cerâmica', 'Aeroporto'],

  parques: [
    {
      nome: 'Praça João Pinheiro',
      descricao:
        'Principal praça do Centro, é ponto de encontro e referência urbana da cidade, usada por moradores para caminhada e convívio no coração comercial de Muriaé.',
    },
    {
      nome: 'Parque de Exposições João Lopes',
      descricao:
        'Amplo espaço aberto que sedia eventos e feiras e oferece área para caminhada e atividades ao ar livre fora do calendário de exposições.',
    },
    {
      nome: 'Orla do Rio Muriaé',
      descricao:
        'As margens do rio que dá nome à cidade reúnem vias e espaços de circulação aproveitados por quem busca caminhar e correr em percurso plano na área urbana.',
    },
  ],
  ciclovias:
    'A cidade dispõe de trechos de ciclofaixa e vias de circulação na malha urbana; o relevo de vale do Rio Muriaé favorece pedaladas e caminhadas nos percursos mais planos.',

  clima:
    'O clima é tropical de altitude, característico da Zona da Mata mineira, com a sede do município a cerca de 655 m. Os verões são quentes e chuvosos e os invernos amenos e mais secos.',
  climaTreino:
    'O treino ao ar livre é viável na maior parte do ano; recomenda-se evitar o calor do meio-dia no verão, priorizar o início da manhã ou o fim da tarde e ter atenção às chuvas concentradas entre novembro e março.',

  mobilidade:
    'Muriaé é cortada pela BR-116 (Rio–Bahia), por volta do km 703, o que a posiciona como entroncamento regional e a aproxima da divisa com o Rio de Janeiro. O deslocamento urbano é feito principalmente por ônibus e veículos próprios, com distâncias curtas dentro da cidade.',

  corridas: [
    {
      nome: 'Corridas de rua de Muriaé',
      descricao:
        'A cidade tem calendário de corridas e caminhadas de rua promovidas por organizadores locais e regionais, com provas em distâncias variadas pelas ruas centrais.',
    },
    {
      nome: 'Circuitos e eventos esportivos regionais',
      descricao:
        'Etapas de circuitos esportivos e ações ligadas a causas sociais reúnem corredores de Muriaé e de municípios vizinhos ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Muriaé se apoia em academias de bairro, futebol e em uma cena crescente de corrida de rua, alimentada por um público ativo ligado à confecção e à saúde. As praças e a área urbana plana do vale favorecem caminhada e corrida.',
  academias:
    'A oferta combina academias de bairro, estúdios de treinamento funcional e unidades de redes nas avenidas centrais, dando boa cobertura para musculação e aulas, com espaço para treino ao ar livre nas praças e na orla do rio.',

  destaquesFitness: [
    'Polo nacional de moda íntima, com forte público ligado à confecção.',
    'Complexo oncológico de referência que reforça a vocação de saúde regional.',
    'Praças e orla do Rio Muriaé para caminhada e corrida em percurso plano.',
    'Posição estratégica na BR-116, próxima à divisa com o Rio de Janeiro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo de confecção e referência em saúde na Zona da Mata mineira, Muriaé reúne um público ativo e em busca de qualidade de vida. Com clima de altitude favorável, praças e a orla do rio para treinar, um personal trainer ajuda a transformar essa estrutura em resultado, com método e constância ao longo do ano.',

  vizinhas: ['juiz-de-fora-mg', 'itaperuna-rj', 'governador-valadares-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Muriaé', url: 'https://cidades.ibge.gov.br/brasil/mg/muriae/panorama' },
    { nome: 'Prefeitura de Muriaé', url: 'https://muriae.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
