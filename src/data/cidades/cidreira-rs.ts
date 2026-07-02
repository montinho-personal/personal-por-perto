import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cidreira-rs',
  nome: 'Cidreira',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'cidreirense',
  tipo: 'cidade',

  populacao: 17071,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',

  resumoEconomico:
    'Cidreira é considerada a praia mais antiga do Litoral Norte gaúcho e uma das mais próximas de Porto Alegre. Emancipada em 1988, tem 17.071 habitantes fixos no Censo 2022 — um crescimento de cerca de 35% em relação a 2010 —, mas essa população se multiplica na alta temporada, quando a cidade chega a receber mais de 100 mil veranistas e metade das residências pertence a quem não mora ali o ano todo. A economia gira em torno do turismo de veraneio, da construção civil, do comércio e da pesca, com destaque para a captura do camarão-rosa na bacia do rio Tramandaí, que deu origem à tradicional Festa do Camarão e dos Frutos do Mar. O IDHM é alto (0,730, Atlas Brasil).',

  mercado:
    'O mercado de personal trainer em Cidreira segue o ritmo da sazonalidade do litoral. No verão, com a chegada maciça de veranistas, cresce muito a procura por treino ao ar livre na orla, aulas na areia e acompanhamento de quem quer manter a rotina durante as férias. Fora da temporada, a demanda se concentra nos moradores fixos e é atendida por academias locais de pequeno e médio porte. Profissionais que conseguem equilibrar o pico de verão com a fidelização de clientes durante o resto do ano tendem a ter mais estabilidade na cidade.',

  bairrosNobres: ['Centro', 'Salinas', 'Nazaré'],
  bairrosPopulares: ['Costa do Sol', 'Ildo Meneghetti', 'Parque dos Pinus'],

  parques: [
    {
      nome: 'Orla e praia de Cidreira',
      descricao:
        'A praia tem cerca de 10 km de extensão em linha reta, sem acidentes geográficos, dividida em trechos como Praia das Cabras, Salinas, Nazaré, Centro, Ildo Meneghetti e Costa do Sol — cenário natural para caminhada, corrida e treino funcional na areia.',
    },
    {
      nome: 'Farol de Cidreira',
      descricao:
        'Construído em 1933 e com 30 metros de altura, o farol fica entre os balneários de Salinas e Nazaré e é um dos pontos de referência da orla, usado como marco em percursos de caminhada e corrida.',
    },
    {
      nome: 'Concha Acústica e orla urbana',
      descricao:
        'Espaço de shows e eventos na área central, cercado por calçadão e avenidas próximas à praia, que concentram parte da circulação de pedestres e ciclistas na temporada de verão.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; a maior parte do pedal e da corrida acontece nas avenidas paralelas à praia e no calçadão da orla, com uso mais intenso durante o verão.',

  clima:
    'O clima é subtropical úmido, com verão morno e abafado e inverno longo e ameno; ao longo do ano as temperaturas costumam variar entre 12 °C e 28 °C, com ventos fortes e chuvas bem distribuídas, características do litoral norte gaúcho.',
  climaTreino:
    'O verão concentra o maior movimento para treino ao ar livre na praia e na orla, embora o calor e a exposição ao sol peçam hidratação e horários mais amenos, como início da manhã ou fim de tarde. No inverno, o vento forte e as temperaturas mais baixas tornam a prática ao ar livre mais desafiadora, deslocando parte do treino para academias.',

  mobilidade:
    'O acesso principal a Cidreira é pela RS-786, rodovia que liga Osório a Palmares do Sul passando por Tramandaí, Imbé e Balneário Pinhal, funcionando como via paralela à Estrada do Mar (RS-389/ERS-389). A cidade fica a cerca de 100 km de Porto Alegre. O deslocamento interno é predominantemente feito por carro, com tráfego que aumenta bastante na temporada de verão.',

  corridas: [
    {
      nome: 'Night Run Cidreira',
      descricao:
        'Corrida noturna organizada pela Secretaria de Turismo e Esporte do município, com edições realizadas na Avenida Central e largada/chegada na Praça 24h; a 3ª edição, em novembro de 2025, reuniu mais de 130 participantes em um percurso de 5 km.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Cidreira é moldada pela praia e pela sazonalidade do verão: caminhada e corrida na orla, pesca de praia e na plataforma local, esportes náuticos e surfe — a cidade já sediou etapa do Circuito Gaúcho de Surf. A pesca do camarão também é uma atividade tradicional ligada ao modo de vida litorâneo.',
  academias:
    'A oferta é formada por academias de pequeno e médio porte concentradas no Centro, com musculação, funcional e, em alguns casos, aulas coletivas e atendimento de personal trainer; a estrutura se mantém relativamente estável fora da temporada e ganha reforço de demanda no verão.',

  destaquesFitness: [
    'Praia mais antiga do Litoral Norte gaúcho, com cerca de 10 km de orla para corrida e caminhada.',
    'Forte sazonalidade de verão: população pode ultrapassar 100 mil pessoas na alta temporada.',
    'Farol histórico de 1933 como marco de referência para percursos ao ar livre.',
    'Cidade já sediou etapa do Circuito Gaúcho de Surf, reforçando a vocação para esportes de praia.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Em Cidreira, o treino acompanha o ritmo das marés e das estações: intenso e voltado à praia no verão, mais recolhido às academias no inverno. Para quem mora na cidade o ano todo ou passa temporadas de veraneio, um personal trainer ajuda a manter a constância diante dessa sazonalidade, aproveitando a orla extensa e o farol como cenário e organizando o treino conforme o calor e os ventos do litoral.',

  vizinhas: ['tramandai-rs', 'osorio-rs', 'capao-da-canoa-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Cidreira', url: 'https://cidades.ibge.gov.br/brasil/rs/cidreira/panorama' },
    { nome: 'Prefeitura de Cidreira', url: 'https://www.cidreira.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
