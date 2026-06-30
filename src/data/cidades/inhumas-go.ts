import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'inhumas-go',
  nome: 'Inhumas',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'inhumense',
  tipo: 'cidade',

  populacao: 52204,
  populacaoAno: 2022,
  idhm: 0.72,
  idhmClasse: 'alto',
  altitudeM: 770,

  resumoEconomico:
    'Município do interior goiano integrado à Região Metropolitana de Goiânia, a cerca de 50 km da capital pela BR-153, Inhumas tem economia fortemente ligada ao agronegócio e ao setor sucroalcooleiro. A cana-de-açúcar abastece a produção de álcool no distrito agroindustrial (que abriga a destilaria Centroálcool) e sustenta a tradição da cachaça e da agroindústria locais, ao lado da produção de alho, hortaliças, leite e aves.',

  mercado:
    'Cidade de porte médio com economia agroindustrial e classe média ligada ao comércio e aos serviços, Inhumas tem mercado fitness em consolidação, apoiado por academias de bairro, praças com equipamentos públicos e a proximidade com a estrutura da capital. O clima de Cerrado, com inverno seco, pede atenção redobrada à hidratação nos treinos.',

  bairrosNobres: ['Centro', 'Setor Sul', 'Setor Aeroporto', 'Vila Operária'],
  bairrosPopulares: ['Setor Pedrinhas', 'Setor Paraíso', 'Setor Nipo Brasileiro', 'Setor Panorama Parque'],

  parques: [
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'A região central concentra praças tradicionais, como a Praça Santana, usadas para caminhada e encontro, formando o coração da vida ao ar livre da cidade.',
    },
    {
      nome: 'Academias ao ar livre dos bairros',
      descricao:
        'A prefeitura distribui equipamentos de ginástica em praças e setores residenciais, ampliando o acesso público ao treino de força e mobilidade.',
    },
    {
      nome: 'Campus do IFG Inhumas',
      descricao:
        'O Câmpus Inhumas do Instituto Federal de Goiás conta com infraestrutura esportiva que reforça a cultura de atividade física entre estudantes e comunidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária é incipiente e concentrada em trechos de avenidas urbanas; o deslocamento de bicicleta acontece sobretudo no perímetro plano do Centro e dos setores próximos.',

  clima:
    'O clima é tropical de Cerrado, com verão chuvoso e inverno seco bem marcado; a cidade fica a cerca de 770 m de altitude.',
  climaTreino:
    'No inverno seco do Cerrado goiano, a baixa umidade exige hidratação reforçada e cuidado com as vias respiratórias; nos dias quentes, treinos no início da manhã ou no fim da tarde são mais confortáveis.',

  mobilidade:
    'Inhumas é cortada pela BR-153 e fica a cerca de 50 km de Goiânia, da qual faz parte na Região Metropolitana (Lei 149/2019). A proximidade com a capital amplia o acesso a estrutura esportiva, eventos e profissionais.',

  corridas: [
    {
      nome: 'Corridas e caminhadas promovidas pela prefeitura',
      descricao:
        'Eventos esportivos municipais e datas comemorativas movimentam caminhadas e corridas de rua pelas vias centrais, reunindo a comunidade local.',
    },
    {
      nome: 'Calendário de corridas da RM de Goiânia',
      descricao:
        'A proximidade com Goiânia abre acesso a um calendário robusto de provas de rua na capital, alternativa frequente para os corredores inhumenses.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia em academias de bairro, equipamentos públicos em praças e na estrutura do IFG, complementada pela facilidade de participar das provas e treinos da capital, a cerca de 50 km pela BR-153.',
  academias:
    'A oferta reúne academias locais espalhadas pelos setores, voltadas a musculação e treino funcional, complementadas pelos equipamentos ao ar livre das praças e pela proximidade com a rede da Grande Goiânia.',

  destaquesFitness: [
    'Integração à Região Metropolitana de Goiânia, a cerca de 50 km da capital pela BR-153.',
    'Praças centrais e academias ao ar livre distribuídas pelos bairros.',
    'Estrutura esportiva do Câmpus Inhumas do IFG.',
    'Acesso fácil ao calendário de corridas e à rede de academias da Grande Goiânia.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'Cidade agroindustrial e sucroalcooleira da Região Metropolitana de Goiânia, Inhumas combina a tranquilidade do interior com a proximidade da capital. Para treinar com método, um personal trainer ajuda a aproveitar as praças, as academias locais e a estrutura da Grande Goiânia, ajustando a rotina ao clima seco do Cerrado.',

  vizinhas: ['goiania-go', 'anapolis-go'],

  fontes: [
    { nome: 'IBGE Cidades — Inhumas', url: 'https://cidades.ibge.gov.br/brasil/go/inhumas/panorama' },
    { nome: 'Prefeitura de Inhumas', url: 'https://inhumas.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
