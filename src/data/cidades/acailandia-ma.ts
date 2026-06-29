import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'acailandia-ma',
  nome: 'Açailândia',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'açailandense',
  tipo: 'cidade',

  populacao: 106550,
  populacaoAno: 2022,
  idhm: 0.672,
  idhmClasse: 'médio',
  altitudeM: 240,

  resumoEconomico:
    'Localizada no sudoeste maranhense, na divisa com o sul do Pará e próxima a Imperatriz, Açailândia é um dos principais polos siderúrgicos do estado, com forte produção de ferro-gusa instalada ao longo da Estrada de Ferro Carajás. A pecuária de corte e o comércio e serviços ligados ao agronegócio completam a base econômica, que se apoia no entroncamento rodoviário e ferroviário do município.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média do interior maranhense, com academias de bairro concentradas no Centro e nas regiões mais adensadas. A procura por personal trainers cresce de forma gradual, puxada por quem busca atendimento individualizado e pela presença de provas de corrida de rua no calendário local.',

  bairrosNobres: ['Centro', 'Parque das Nações', 'Jardim de Deus', 'Vila Maranhão'],
  bairrosPopulares: ['Vila Ildemar', 'Pequiá', 'Vila Bom Jesus', 'Califórnia'],

  parques: [
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'Espaços públicos no núcleo urbano usados para caminhada, alongamento e treino funcional ao ar livre no início da manhã e no fim de tarde.',
    },
    {
      nome: 'Áreas verdes e campos de bairro',
      descricao:
        'Quadras, campos e praças distribuídos pelos bairros servem de apoio para corrida, treinos coletivos e atividades físicas comunitárias.',
    },
    {
      nome: 'Entorno rural e estradas vicinais',
      descricao:
        'Vias de menor movimento nas saídas da cidade são aproveitadas por ciclistas e corredores em busca de percursos mais longos.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de malha cicloviária estruturada divulgada em fonte oficial; o deslocamento por bicicleta se dá principalmente pelas vias urbanas e avenidas do Centro.',

  clima:
    'O clima é equatorial/tropical quente e úmido, com calor intenso ao longo do ano e uma estação chuvosa bem marcada, geralmente entre o fim do ano e o início do ano seguinte.',
  climaTreino:
    'Pelo calor e pela alta umidade, recomenda-se treinar ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada e atenção redobrada nos dias de maior umidade.',

  mobilidade:
    'Açailândia é um importante entroncamento logístico: é cortada pela BR-222 e fica próxima ao eixo da BR-010 (Belém–Brasília), além de ser atravessada pela Estrada de Ferro Carajás, que liga a região aos portos do Maranhão. Esse conjunto rodoviário e ferroviário sustenta o polo siderúrgico e a pecuária locais.',

  corridas: [
    {
      nome: 'Corrida do Bem Eco',
      descricao:
        'Prova de rua realizada em Açailândia com percursos de 5 km e 10 km, voltada à conscientização sobre sustentabilidade.',
    },
    {
      nome: 'Provas e circuitos locais',
      descricao:
        'Corridas comunitárias e eventos esportivos pontuais movimentam o calendário e ajudam a aproximar moradores da prática de atividade física.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva da cidade gira em torno do futebol de várzea, das quadras de bairro e de provas de corrida de rua que reúnem moradores e participantes de municípios vizinhos, reforçando o interesse por treino regular.',
  academias:
    'A oferta reúne academias de bairro concentradas no Centro e nas áreas mais populosas, com demanda complementada por praças, campos e calçadões usados para treino ao ar livre.',

  destaquesFitness: [
    'Polo siderúrgico e de pecuária do sudoeste maranhense, próximo a Imperatriz.',
    'Calendário de corrida de rua com provas como a Corrida do Bem Eco.',
    'Praças e calçadões do Centro como pontos de treino ao ar livre.',
    'Entroncamento da BR-222, BR-010 e Estrada de Ferro Carajás.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 105,
    mensalMin: 220,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Polo siderúrgico e de pecuária no sudoeste maranhense, Açailândia combina calor equatorial, praças de bairro e um calendário de corrida em formação. Um personal trainer ajuda a montar uma rotina segura e consistente, ajustando horários e hidratação ao clima quente da região.',

  vizinhas: ['imperatriz-ma', 'maraba-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Açailândia', url: 'https://cidades.ibge.gov.br/brasil/ma/acailandia/panorama' },
    { nome: 'Prefeitura de Açailândia', url: 'https://www.acailandia.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/2100055' },
  ],
  atualizadoEm: '2026-06-29',
};
