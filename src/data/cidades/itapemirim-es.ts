import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapemirim-es',
  nome: 'Itapemirim',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'itapemirinense',
  tipo: 'cidade',

  populacao: 39832,
  populacaoAno: 2022,
  idhm: 0.654,
  idhmClasse: 'médio',

  resumoEconomico:
    'No litoral sul do Espírito Santo, Itapemirim foi um dos municípios mais importantes do estado nos séculos XVIII e XIX, quando o Porto de Itapemirim, às margens do rio de mesmo nome, foi o mais movimentado do estado, escoando açúcar, aguardente e café. O assoreamento do rio, agravado pelo desmatamento do vale no início do século XX, encerrou esse ciclo portuário. Hoje a economia combina a cana-de-açúcar (com a Usina Paineiras), a pecuária leiteira, a pesca artesanal e industrial — o distrito de Itaipava abriga uma das maiores empresas de exportação de pescado do país, beneficiando milhares de famílias de pescadores — além de royalties e serviços ligados à exploração de petróleo e gás na porção capixaba da Bacia de Campos e ao turismo de praia em Itaipava, Itaoca e na Barra de Itapemirim.',

  mercado:
    'O mercado fitness de Itapemirim é modesto e concentrado na sede e no distrito de Itaipava — o mais populoso do município, com cerca de 20 mil habitantes e a maior parte da orla urbanizada. A procura por personal trainer cresce na alta temporada de veraneio (dezembro a fevereiro), quando a população da orla se multiplica, e entre quem busca treinar ao ar livre aproveitando as praias de Itaipava e Itaoca.',

  bairrosNobres: ['Centro', 'Itaipava', 'Itaoca', 'Monte Aghá'],
  bairrosPopulares: ['Gamboa', 'Joacima', 'Muritioca', 'Vila Nova'],

  parques: [
    {
      nome: 'Praia de Itaipava',
      descricao:
        'Praia mais procurada por turistas no distrito mais populoso do município, com estrutura de quiosques e orla que serve de espaço natural para caminhada e corrida.',
    },
    {
      nome: 'Praia de Itaoca',
      descricao:
        'Vizinha a Itaipava, separada dela apenas por uma grande pedra, é outra das praias mais concorridas do município e recebe provas de corrida de rua na orla.',
    },
    {
      nome: 'Barra de Itapemirim',
      descricao:
        'Região formada em torno do antigo porto, no encontro do rio Itapemirim com o mar; preserva a cultura pesqueira tradicional e oferece um trecho de orla mais tranquilo para caminhada.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária não é divulgada em fonte oficial; o calçadão da orla de Itaipava e Itaoca concentra o uso para caminhada e corrida.',

  clima:
    'O clima é tropical, quente e úmido, com temperatura média anual em torno de 24 °C. Os verões são quentes, chuvosos e abafados, enquanto os invernos são mais amenos e secos, com influência constante da brisa marinha do litoral sul capixaba.',
  climaTreino:
    'O calor e a umidade favorecem treinos no início da manhã ou no fim da tarde, com hidratação reforçada; a brisa do mar na orla de Itaipava e Itaoca ajuda a tornar o treino ao ar livre mais confortável fora do horário de pico de sol.',

  mobilidade:
    'A BR-101 corta o município e liga a sede a Cachoeiro de Itapemirim, Marataízes e ao restante do estado; o transporte urbano é feito por ônibus. Historicamente o rio Itapemirim foi a principal via de escoamento da produção local, papel hoje comprometido pelo assoreamento do seu leito.',

  corridas: [
    {
      nome: 'Corrida Itapemirim 6K',
      descricao:
        'Prova de 6 km disputada na orla, com largada em frente ao Posto de Atendimento ao Turista na entrada da Praia de Itaoca, reunindo corredores locais e de cidades vizinhas.',
    },
    {
      nome: 'Corrida de Rua do Studio Lion',
      descricao:
        'Prova de 5,5 km que estreou no calendário de corridas do Espírito Santo na orla da Praia de Itaoca, ampliando a agenda de eventos esportivos no litoral do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pela vida de praia no distrito de Itaipava, pela tradição da pesca artesanal e por um calendário crescente de corridas de rua disputadas na orla de Itaoca e Itaipava.',
  academias:
    'A oferta reúne academias e estúdios locais na sede e no distrito de Itaipava, com opções também listadas em plataformas de bem-estar corporativo; muitos personal trainers atendem tanto em estúdio quanto ao ar livre, aproveitando a orla das praias.',

  destaquesFitness: [
    'Distrito de Itaipava, o mais populoso do município, com a orla urbanizada de Itaipava e Itaoca como espaço de treino ao ar livre.',
    'Passado como sede do maior porto do Espírito Santo até o início do século XX, hoje com economia de cana-de-açúcar, pecuária e pesca industrial.',
    'Calendário crescente de corridas de rua na orla, caso da Corrida Itapemirim 6K e da Corrida de Rua do Studio Lion.',
    'Clima tropical quente e úmido do litoral sul capixaba, que pede treino em horários mais amenos e hidratação reforçada.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Marcada pelo passado portuário no rio Itapemirim e pelas praias de Itaipava e Itaoca, Itapemirim une pesca, cana-de-açúcar e turismo de veraneio. Um personal trainer ajuda a organizar o treino em torno do calor do litoral sul capixaba, aproveitando a orla e respeitando a sazonalidade da alta temporada.',

  vizinhas: ['cachoeiro-de-itapemirim-es', 'marataizes-es'],

  fontes: [
    { nome: 'IBGE Cidades — Itapemirim', url: 'https://cidades.ibge.gov.br/brasil/es/itapemirim/panorama' },
    { nome: 'Prefeitura de Itapemirim', url: 'https://www.itapemirim.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
