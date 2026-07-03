import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'chapadao-do-sul-ms',
  nome: 'Chapadão do Sul',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'chapadense',
  tipo: 'cidade',

  populacao: 30993,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  pibPerCapita: 107428,
  pibPerCapitaAno: 2023,
  altitudeM: 790,

  resumoEconomico:
    'Emancipada em 1987, desmembrada de Cassilândia e Paranaíba, Chapadão do Sul nasceu do movimento de colonização das chapadas do Cerrado a partir da década de 1970, puxado principalmente por migrantes vindos do Sul do país. O resultado é uma cidade jovem e planejada, erguida sobre uma agricultura altamente tecnificada: é reconhecida havia mais de duas décadas como a "capital da produtividade" do Centro-Oeste, referência nacional em soja, milho e algodão (sede da Ampasul, laboratório de referência em fibra de algodão), com produtividades por hectare entre as mais altas do país. Segundo o IBGE, foi o município que mais cresceu proporcionalmente em Mato Grosso do Sul entre os Censos de 2010 e 2022, e concentra também o Campus de Chapadão do Sul da UFMS, com cursos de Agronomia e Engenharia Florestal.',

  mercado:
    'A renda alta gerada pelo agronegócio e pelo agronegócio de tecnologia associado sustenta um mercado fitness proporcionalmente relevante para o tamanho da cidade, com academias de porte razoável e procura por treino personalizado entre produtores rurais, agrônomos e famílias ligadas ao setor. Por ser uma cidade jovem, em franca expansão populacional e imobiliária, a demanda por personal trainer tende a acompanhar o crescimento de novos bairros e condomínios residenciais.',

  bairrosNobres: ['Centro', 'Residencial Flamboyant', 'Residencial Planalto'],
  bairrosPopulares: ['Jardim Esperança', 'Vila Nova', 'Bairro Popular'],

  parques: [
    {
      nome: 'Parque Ecológico de Chapadão do Sul',
      descricao:
        'Espaço com ampla área verde, trilhas para caminhada, quadras esportivas e lago para pesca esportiva — ponto de referência para quem treina ao ar livre na cidade.',
    },
    {
      nome: 'Parque das Águas',
      descricao:
        'Área verde com trilhas ecológicas, lagos e cachoeira, usada para caminhada e pedal, reforçando as opções de treino em contato com o Cerrado local.',
    },
    {
      nome: 'Praça do Fórum e Avenida Mato Grosso do Sul',
      descricao:
        'Ponto central da cidade que costuma reunir largadas de corridas e caminhadas comunitárias, funcionando como espaço informal de treino ao ar livre.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é ainda limitada, típica de uma cidade de porte médio em expansão; caminhadas e pedaladas se concentram nos parques municipais e nas avenidas mais largas do traçado planejado da cidade.',

  clima:
    'O clima é tropical, característico do Cerrado, com verão chuvoso (outubro a março) e inverno seco (abril a setembro). As temperaturas variam aproximadamente entre 13°C e 28°C ao longo do ano, com baixa umidade no período de estiagem, e a altitude de cerca de 790 metros ameniza um pouco o calor típico do interior de Mato Grosso do Sul.',
  climaTreino:
    'A baixa umidade do inverno seco exige atenção redobrada à hidratação em treinos ao ar livre, enquanto o verão chuvoso concentra as atividades externas nos intervalos entre chuvas; academias climatizadas são uma alternativa consistente durante os picos de calor e seca.',

  mobilidade:
    'A cidade é cortada pela BR-060, eixo que liga a divisa com Goiás à região de Bonito e à fronteira com o Paraguai, e deve integrar futuramente a Rota de Integração Latino-Americana (Rila), corredor bioceânico que conectará o porto de Santos a portos chilenos. O transporte urbano é feito majoritariamente por veículos particulares, com o traçado planejado da cidade facilitando o deslocamento entre bairros residenciais, o centro e a zona rural produtiva do entorno.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da Sustentabilidade SEST SENAT',
      descricao:
        'Evento anual realizado na Praça do Fórum, com provas de 5 km e 10 km de corrida, caminhada de 3 km e corrida kids, reunindo centenas de participantes e unindo esporte a ações de conscientização ambiental.',
    },
  ],
  culturaEsportiva:
    'A cidade tem investido em eventos esportivos comunitários, como corridas e caminhadas organizadas com o SEST SENAT e treinões preparatórios para provas regionais, além de sediar etapas dos Jogos Escolares da Juventude de Mato Grosso do Sul em atletismo. O ritmo acelerado do agronegócio local também impulsiona a busca por qualidade de vida e atividade física entre produtores e trabalhadores do setor.',
  academias:
    'A oferta reúne academias de musculação e treino funcional distribuídas pelo centro e bairros residenciais, com padrão de estrutura acima da média para uma cidade do seu porte, refletindo o alto poder aquisitivo puxado pelo agronegócio.',

  destaquesFitness: [
    'Reconhecida havia mais de duas décadas como "capital da produtividade" agrícola, com renda per capita entre as mais altas do interior do país.',
    'Cidade jovem e planejada, fundada em 1987 e com o maior crescimento populacional proporcional de Mato Grosso do Sul.',
    'Parque Ecológico e Parque das Águas oferecem trilhas e áreas verdes para treino ao ar livre em meio ao Cerrado.',
    'Clima de Cerrado com inverno seco, o que exige planejamento de hidratação para o treino externo.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 900,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Cidade jovem, planejada e impulsionada por uma das agriculturas mais produtivas do Brasil, Chapadão do Sul reúne alto poder aquisitivo e uma rotina exigente ligada ao agronegócio. Um personal trainer ajuda a conciliar essa rotina com um treino consistente, aproveitando os parques da cidade e adaptando os horários ao clima seco do Cerrado.',

  vizinhas: ['paranaiba-ms', 'coxim-ms', 'campo-grande-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Chapadão do Sul', url: 'https://cidades.ibge.gov.br/brasil/ms/chapadao-do-sul/panorama' },
    { nome: 'Prefeitura de Chapadão do Sul', url: 'https://www.chapadaodosul.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
