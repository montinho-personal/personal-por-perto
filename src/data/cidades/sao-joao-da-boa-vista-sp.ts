import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-joao-da-boa-vista-sp',
  nome: 'São João da Boa Vista',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-joanense',
  tipo: 'cidade',

  populacao: 92547,
  populacaoAno: 2022,
  idhm: 0.797,
  idhmClasse: 'alto',
  altitudeM: 767,

  resumoEconomico:
    'Polo regional do centro-leste paulista, na divisa com Minas Gerais e aos pés da Serra da Mantiqueira, São João da Boa Vista tem economia diversificada: serviços respondem pela maior fatia do PIB, seguidos da indústria, com uma agropecuária tradicional ligada ao café, à cana-de-açúcar e ao milho. A cidade sedia a Faculdade de Engenharia da UNESP e realiza a EAPIC (Exposição Agropecuária, Industrial e Comercial), uma das maiores feiras da região.',

  mercado:
    'Como principal município de sua microrregião, São João da Boa Vista concentra a oferta de serviços, comércio e ensino superior, o que sustenta uma demanda estável por academias, estúdios e personal trainers. O público universitário da UNESP e o perfil de cidade média do interior favorecem o atendimento personalizado a preços mais acessíveis que os de grandes centros.',

  bairrosNobres: ['Jardim Belvedere', 'Parque Universitário', 'Jardim Bela Vista', 'Colina da Mantiqueira'],
  bairrosPopulares: ['Pedregulho', 'Perpétuo Socorro', 'Parque das Nações', 'Parque Jequitibás'],

  parques: [
    {
      nome: 'Represa do Jaguari-Mirim',
      descricao:
        'Área de lazer planejada no entorno da barragem do Rio Jaguari-Mirim, próxima à Ponte do Arco, com espaço destinado a parque e pista de caminhada às margens do lago.',
    },
    {
      nome: 'Praça Coronel Joaquim José',
      descricao:
        'Principal praça central da cidade, ponto de encontro e largada de eventos esportivos, com calçadas amplas para caminhada no coração do Centro.',
    },
    {
      nome: 'Serra da Mantiqueira (entorno)',
      descricao:
        'Relevo serrano na divisa com Minas Gerais que cerca o município, com estradas e trilhas usadas por ciclistas e corredores em busca de altimetria e ar mais fresco.',
    },
  ],
  ciclovias:
    'A cidade dispõe de trechos de ciclovia e ciclofaixas em vias urbanas; o relevo da região da Mantiqueira também atrai ciclistas de estrada para o entorno.',

  clima:
    'O clima é tropical de altitude, influenciado pela Serra da Mantiqueira e pela proximidade com o sul de Minas: verões quentes e chuvosos e invernos secos, amenos e frios, com madrugadas que podem registrar temperaturas baixas.',
  climaTreino:
    'O inverno fresco e seco e o verão sem calor extremo tornam as manhãs e o fim de tarde períodos agradáveis para corrida, caminhada e ciclismo ao ar livre boa parte do ano; nos meses mais quentes, vale evitar o sol do meio-dia.',

  mobilidade:
    'O principal eixo de acesso é a Rodovia SP-342 (Governador Adhemar Pereira de Barros), que liga a cidade a Mogi Guaçu, Espírito Santo do Pinhal, Águas da Prata e à região de Campinas; a capital paulista fica a cerca de 218 km.',

  corridas: [
    {
      nome: 'Corre São João',
      descricao:
        'Corrida de rua da cidade com percursos de 5 km e 10 km, largada na Praça Coronel Joaquim José e trajeto pelas ruas centrais.',
    },
    {
      nome: 'Volta da UNESP',
      descricao:
        'Prova organizada no campus da Faculdade de Engenharia da UNESP, reunindo a comunidade acadêmica e corredores da região.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva combina o tradicional calendário de corridas de rua com a forte cultura do ciclismo de estrada nas subidas da Mantiqueira e a presença universitária da UNESP, que movimenta práticas e eventos esportivos na cidade.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e personal trainers, concentrada no Centro e nos bairros próximos ao campus da UNESP, com perfil típico de cidade média do interior paulista.',

  destaquesFitness: [
    'Clima de altitude com inverno fresco e seco, favorável ao treino ao ar livre.',
    'Serra da Mantiqueira no entorno, atrativa para ciclismo de estrada e corrida com altimetria.',
    'Calendário de corridas de rua, como o Corre São João.',
    'Presença universitária da UNESP, que estimula a prática esportiva.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade média na divisa de São Paulo com Minas, aos pés da Mantiqueira, São João da Boa Vista alia clima de altitude agradável, tradição agro e cafeeira e vida universitária. Um personal trainer ajuda a aproveitar as ruas do Centro, as margens da represa e as subidas da serra com método e segurança, a preços de interior.',

  vizinhas: ['mogi-guacu-sp', 'pocos-de-caldas-mg', 'campinas-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São João da Boa Vista', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-joao-da-boa-vista/panorama' },
    { nome: 'Prefeitura de São João da Boa Vista', url: 'https://www.saojoao.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
