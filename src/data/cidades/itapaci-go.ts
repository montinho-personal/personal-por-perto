import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapaci-go',
  nome: 'Itapaci',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'itapacino',
  tipo: 'cidade',

  populacao: 21891,
  populacaoAno: 2025,
  idhm: 0.725,
  idhmClasse: 'alto',
  pibPerCapita: 28449.2,
  pibPerCapitaAno: 2023,
  altitudeM: 550,

  resumoEconomico:
    'Às margens do rio São Patrício Pequeno, na mata de São Patrício, o povoado que deu origem a Itapaci nasceu em 1935 com o nome de Água Fria, virou distrito como Floresta e recebeu em 1939 o nome definitivo — do tupi, "pedra bonita" — antes de se emancipar de Pilar de Goiás em 1945. A economia do município soma cerca de R$ 547,5 milhões em PIB, com os serviços respondendo por 37,9% do valor adicionado, a indústria por 24%, a administração pública por 22,2% e a agropecuária por 15,8%. No campo, a pecuária de corte e leite convive com lavouras de milho, arroz e feijão, que sustentam boa parte do comércio e da renda das famílias do interior.',

  mercado:
    'Cidade pequena do centro-norte goiano, Itapaci tem um mercado fitness modesto, apoiado em academias de musculação de porte familiar no Setor Central e em iniciativas municipais de esporte e lazer. A procura por personal trainer é pontual, ligada a quem busca acompanhamento individualizado num município onde a maior parte do dia a dia gira em torno do trabalho rural e do comércio local.',

  bairrosNobres: ['Setor Central'],
  bairrosPopulares: ['Vila Itapaci', 'Setor Aeroporto', 'Bairro São José'],

  parques: [
    {
      nome: 'Praças do Setor Central',
      descricao:
        'O entorno da Avenida Almeida e das principais praças do centro concentra o comércio e o convívio da cidade, servindo de rota natural para caminhada no fim de tarde.',
    },
    {
      nome: 'Margens do rio São Patrício Pequeno',
      descricao:
        'O curso d\'água que corta o município e dá nome à região da mata de São Patrício oferece trechos usados informalmente para caminhada e lazer à beira-rio, sem estrutura de orla organizada.',
    },
  ],
  ciclovias:
    'Itapaci não tem ciclovias ou ciclofaixas estruturadas; o deslocamento de bicicleta acontece nas ruas do Setor Central e nas estradas de terra que ligam a sede às propriedades rurais do entorno.',

  clima:
    'O clima é tropical úmido, com temperaturas máximas que podem chegar a 37 °C, verão chuvoso e um inverno seco típico do centro-norte de Goiás, com baixa umidade do ar entre maio e setembro.',
  climaTreino:
    'No período seco, a baixa umidade pede hidratação reforçada e atenção às vias respiratórias, com os treinos ao ar livre funcionando melhor no início da manhã ou no fim da tarde; no verão chuvoso, o calor e as chuvas fortes tornam útil ter uma alternativa de treino coberto.',

  mobilidade:
    'O acesso principal se dá pela GO-347, que liga Itapaci à BR-153 (rodovia Belém-Brasília), a cerca de 230 km de Goiânia; Ceres e Goianésia, polos regionais de serviços do Vale do São Patrício, ficam nas proximidades. O transporte urbano é limitado, e o deslocamento até a zona rural e municípios vizinhos como Rubiataba e Nova Glória costuma depender de veículo próprio.',

  corridas: [],
  culturaEsportiva:
    'O futebol amador é o centro da vida esportiva local, com destaque para o Itapaci Esporte Clube, e o convívio em clubes sociais como a AABB de Itapaci, que reúne piscinas e espaço de lazer para famílias. A caminhada informal pelas ruas do Setor Central completa a rotina de quem busca atividade física fora de academia.',
  academias:
    'A oferta de estruturas de treino é pequena, formada por academias de musculação e treino funcional de porte familiar no Setor Central, compatível com um município de pouco mais de vinte mil habitantes.',

  destaquesFitness: [
    'Origem no povoado de Água Fria (1935), depois Floresta, até virar Itapaci — "pedra bonita" em tupi — em 1939.',
    'Rio São Patrício Pequeno corta o município na região da mata de São Patrício.',
    'Pecuária de corte e leite e lavouras de milho, arroz e feijão sustentam a economia rural.',
    'Acesso pela GO-347 até a BR-153, próximo aos polos regionais de Ceres e Goianésia.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 300,
  },

  conclusao:
    'Cidade pequena do Vale do São Patrício, Itapaci tem na pecuária, no milho, no arroz e no feijão a base de sua economia, e no rio São Patrício Pequeno uma referência da paisagem local. Um personal trainer ajuda a organizar o treino com constância, respeitando o calor e a baixa umidade do período seco típico do centro-norte goiano.',

  vizinhas: ['ceres-go', 'goianesia-go'],

  fontes: [
    { nome: 'IBGE Cidades — Itapaci', url: 'https://cidades.ibge.gov.br/brasil/go/itapaci/panorama' },
    { nome: 'Prefeitura de Itapaci — História', url: 'https://itapaci.go.gov.br/historia/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Economia de Itapaci — Caravela', url: 'https://www.caravela.info/en/regional/itapaci---go' },
  ],
  atualizadoEm: '2026-07-05',
};
