import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mogi-mirim-sp',
  nome: 'Mogi Mirim',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mogimiriano',
  tipo: 'cidade',

  populacao: 92558,
  populacaoAno: 2022,
  idhm: 0.784,
  idhmClasse: 'alto',
  altitudeM: 611,

  resumoEconomico:
    'Mogi Mirim fica no interior paulista, na divisa com Mogi Guaçu e relativamente perto de Campinas e Limeira. A economia combina indústria (metalurgia, autopeças, alimentos e bens de consumo), comércio e serviços, com uma base agrícola ligada à cana e à fruticultura da região. A posição às margens da Rodovia SP-340 favorece a logística e a integração com o eixo da Anhanguera.',

  mercado:
    'O mercado fitness reúne academias de bairro, redes regionais, estúdios e boxes de treinamento funcional, com demanda crescente por acompanhamento individualizado. Por ser uma cidade média do interior, há espaço tanto para personal trainers em academia quanto para atendimento em estúdios, condomínios e ao ar livre nos espaços públicos da cidade.',

  bairrosNobres: ['Parque da Imprensa', 'Jardim Scomparim', 'Jardim do Lago', 'Vila Dias'],
  bairrosPopulares: ['Lavapés', 'Santa Cruz', 'Mirante', 'Saúde'],

  parques: [
    {
      nome: 'Complexo Lavapés (Zerão)',
      descricao:
        'Principal área de lazer da cidade, com pista interna pavimentada para caminhada e corrida, lago, arena, quadras poliesportivas e ampla área verde — ponto de concentração de eventos esportivos.',
    },
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde tradicional do município, com trilhas sombreadas, ideal para caminhada leve e atividades ao ar livre no centro da cidade.',
    },
  ],
  ciclovias:
    'Há trechos de ciclovia e ciclofaixa em avenidas e no entorno do Complexo Lavapés; a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical com inverno seco, marcado por verão quente e chuvoso e inverno ameno e seco; as temperaturas médias costumam variar aproximadamente entre 18 °C e 28 °C ao longo do ano.',
  climaTreino:
    'No verão, o ideal é treinar ao ar livre no início da manhã ou no fim de tarde, evitando o calor do meio do dia; o inverno seco e ameno é o período mais confortável para corrida e atividades externas.',

  mobilidade:
    'Mogi Mirim é cortada pela Rodovia SP-340 (Governador Adhemar Pereira de Barros), com acesso próximo ao eixo da Anhanguera (SP-330) via região de Mogi Guaçu, e tem ligação histórica com a antiga Ferrovia Mogiana, que deu origem ao apelido regional "Sapão da Mogiana".',

  corridas: [
    {
      nome: 'UP Motion Circuit — Etapa Mogi Mirim',
      descricao:
        'Etapa de circuito de corrida de rua com percursos de 5 km e 10 km, além de caminhada de 5 km, com largada na região central e trajeto em direção ao Complexo Lavapés.',
    },
    {
      nome: 'Corrida e Caminhada Sênior',
      descricao:
        'Prova com foco na participação da terceira idade e da comunidade, com largada e estrutura no entorno do Complexo Lavapés.',
    },
  ],
  culturaEsportiva:
    'Mogi Mirim tem forte tradição no futebol, representada pelo Mogi Mirim Esporte Clube, o "Sapão", fundado em 1932 e mandante de seus jogos no Estádio Vail Chaves. Essa cultura esportiva convive com um calendário de corridas e caminhadas de rua e com a adesão às atividades ao ar livre no Complexo Lavapés.',
  academias:
    'A oferta reúne academias de bairro, redes regionais, estúdios e boxes de treinamento funcional, complementada pela estrutura pública do Complexo Lavapés para treino ao ar livre.',

  destaquesFitness: [
    'Complexo Lavapés (Zerão) com pista interna, lago e área verde para corrida e caminhada.',
    'Tradição esportiva no futebol, com o Mogi Mirim Esporte Clube, o "Sapão".',
    'Calendário de corridas e caminhadas de rua, com etapas de circuitos regionais.',
    'Inverno seco e ameno favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade média do interior paulista, com tradição no futebol e boa estrutura no Complexo Lavapés, Mogi Mirim oferece um ambiente prático para quem quer treinar com orientação. Um personal trainer ajuda a aproveitar a pista do Zerão e as academias locais com método, ajustando os horários ao calor do verão paulista.',

  vizinhas: ['mogi-guacu-sp', 'campinas-sp', 'limeira-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mogi Mirim', url: 'https://cidades.ibge.gov.br/brasil/sp/mogi-mirim/panorama' },
    { nome: 'Prefeitura de Mogi Mirim', url: 'https://www.mogimirim.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
