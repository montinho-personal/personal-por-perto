import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'prudentopolis-pr',
  nome: 'Prudentópolis',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'prudentopolitano',
  tipo: 'cidade',

  populacao: 49393,
  populacaoAno: 2022,
  idhm: 0.676,
  idhmClasse: 'médio',
  altitudeM: 730,

  resumoEconomico:
    'Conhecida como a Terra das Cachoeiras Gigantes e a maior colônia ucraniana do Brasil, Prudentópolis fica no centro-sul do Paraná, entre os planaltos de Ponta Grossa e de Guarapuava. A economia é puxada pela agricultura — o município é um dos maiores produtores de feijão-preto do país — somada à pecuária, ao comércio e a um turismo em expansão, ligado às mais de 100 cachoeiras catalogadas e à forte herança cultural da imigração ucraniana iniciada em 1896. A posição às margens da BR-277 reforça a vocação logística e de serviços da cidade.',

  mercado:
    'O mercado fitness de Prudentópolis é o de uma cidade média do interior do Sul, concentrado em academias locais de musculação e treino funcional e com uma rede ainda enxuta de profissionais autônomos. A procura por personal trainers tende a crescer entre quem busca treino orientado para o clima frio de altitude e para aproveitar trilhas, morros e o entorno natural da região como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim das Américas', 'Vila Nova', 'Alto da Glória'],
  bairrosPopulares: ['Padre Adam', 'Vila São José', 'Vila Esperança', 'Barra Bonita'],

  parques: [
    {
      nome: 'Salto São Francisco',
      descricao:
        'Com cerca de 196 metros de queda, é apontada como a maior cachoeira do Sul do Brasil; o acesso por trilha leve, de aproximadamente 30 minutos, leva a mirante e à base, num percurso muito usado por quem combina caminhada na natureza com o passeio.',
    },
    {
      nome: 'Salto Barão do Rio Branco',
      descricao:
        'Queda de cerca de 64 metros no cânion do Rio dos Patos, com mirante superior e escadaria até a base; as trilhas e escadarias do entorno servem de percurso desafiador para quem treina ao ar livre.',
    },
    {
      nome: 'Salto Manduri',
      descricao:
        'Cachoeira larga de acesso mais tranquilo, exemplo do conjunto de mais de 100 quedas catalogadas no município que transformam a região num grande circuito de trilhas e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta e concentrada em alguns trechos da área central; boa parte do pedal e da corrida acontece nas vias da cidade, em estradas rurais de acesso aos saltos e nos percursos de relevo acidentado da região.',

  clima:
    'O clima é subtropical de altitude, com invernos frios e geadas frequentes — a cidade está a cerca de 730 metros, com morros que ultrapassam 1.200 metros no município. Os verões são amenos e chuvosos, e as quedas bruscas de temperatura no inverno são marca registrada do centro-sul paranaense.',
  climaTreino:
    'O frio de altitude pede aquecimento mais longo e roupa adequada em camadas, sobretudo nos treinos cedo e à noite no inverno, quando há risco de geada; o verão ameno favorece a atividade ao ar livre, e dias muito chuvosos tornam o ambiente coberto a opção mais segura.',

  mobilidade:
    'Prudentópolis é cortada pela BR-277, a grande transversal que liga o Porto de Paranaguá a Foz do Iguaçu, e também pela BR-373, o que dá à cidade papel de entroncamento e ponto de apoio na rota turística das cachoeiras. O deslocamento urbano é feito sobretudo por veículos particulares e ônibus, e o acesso aos saltos depende de estradas rurais.',

  corridas: [
    {
      nome: 'Corrida Rústica Terra das Cachoeiras Gigantes',
      descricao:
        'Prova de rua organizada na cidade, com largada associada ao Centro de Eventos Terra das Cachoeiras, que reforça a vocação local para corridas em meio ao relevo e à natureza da região.',
    },
    {
      nome: 'Eventos de trail e aventura na região das cachoeiras',
      descricao:
        'O entorno de cânions, trilhas e quedas d’água serve de cenário para provas de trail run e atividades de aventura, aproveitando o relevo acidentado típico dos planaltos paranaenses.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Prudentópolis é fortemente ligada à natureza: trilhas até as cachoeiras, corrida e pedal em relevo acidentado e atividades de aventura convivem com a vida pacata e a herança ucraniana da cidade, conhecida como Capital da Oração pelas suas mais de 100 igrejas.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade média do interior do Sul.',

  destaquesFitness: [
    'Terra das Cachoeiras Gigantes: mais de 100 quedas catalogadas, com o Salto São Francisco (cerca de 196 m) entre as maiores do Sul.',
    'Clima frio de altitude, com invernos rigorosos e geadas que pedem planejamento no treino.',
    'Relevo acidentado e trilhas que favorecem trail run, caminhada e atividades de aventura.',
    'Maior colônia ucraniana do Brasil, com economia puxada pela agricultura e pelo turismo de natureza.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade fria de altitude, cercada por cachoeiras, cânions e trilhas, Prudentópolis pede um treino que respeite o clima e aproveite o relevo e a natureza da região. Um personal trainer ajuda a organizar a rotina considerando o inverno rigoroso, definindo os melhores horários e mantendo a constância ao longo do ano, dentro ou fora de casa.',

  vizinhas: ['guarapuava-pr', 'ponta-grossa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Prudentópolis', url: 'https://cidades.ibge.gov.br/brasil/pr/prudentopolis/panorama' },
    { nome: 'Prefeitura de Prudentópolis', url: 'https://prudentopolis.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
