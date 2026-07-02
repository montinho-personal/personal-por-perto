import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-goncalo-do-sapucai-mg',
  nome: 'São Gonçalo do Sapucaí',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'são-gonçalense',
  tipo: 'cidade',

  populacao: 23959,
  populacaoAno: 2022,
  idhm: 0.715,
  idhmClasse: 'alto',
  altitudeM: 868,

  resumoEconomico:
    'No Sul de Minas, na região de Varginha, São Gonçalo do Sapucaí nasceu como arraial no ciclo do ouro do século XVIII, às margens do rio que batiza a cidade — "Sapucaí", palavra de origem tupi associada ao som da fruta caindo n\'água, muitas vezes traduzida como "rio que grita". A economia local combina o cultivo de café, que segue entre as atividades que mais empregam no município, a pecuária leiteira e a produção de laticínios, além de comércio, serviços e administração pública. A cidade integra o Circuito Turístico Caminhos da Mantiqueira e é conhecida regionalmente pela tradicional Festa do Rosário, manifestação religiosa e cultural com mais de 140 anos de história.',

  mercado:
    'Por ser uma cidade pequena do interior mineiro, o mercado fitness de São Gonçalo do Sapucaí é discreto, formado por academias de bairro e profissionais que atendem produtores rurais, comerciantes, servidores públicos e famílias ligadas à cafeicultura e à pecuária leiteira. A vida corrida do meio rural e do pequeno comércio cria espaço para o personal trainer organizar horários flexíveis e treinos objetivos, muitas vezes combinando atendimento em academia com atividade ao ar livre nas praças do Centro.',

  bairrosNobres: ['Centro', 'Fátima', 'Inconfidentes', 'Nossa Senhora Aparecida'],
  bairrosPopulares: ['Progresso', 'Santa Luzia', 'Água Comprida'],

  parques: [
    {
      nome: 'Praça Barão do Rio Verde',
      descricao:
        'Praça central onde fica a Igreja Matriz São Gonçalo de Amarante; ponto de encontro e de caminhada no Centro da cidade.',
    },
    {
      nome: 'Praça Getúlio Vargas (Largo do Rosário)',
      descricao:
        'Sede da Igreja Nossa Senhora do Rosário e palco da tradicional Festa do Rosário; espaço usado no dia a dia para caminhada e convívio ao ar livre.',
    },
    {
      nome: 'Margens do Rio Sapucaí',
      descricao:
        'O rio que dá nome à cidade corre nas proximidades da área urbana, com trechos usados informalmente para caminhada, pesca e contato com a natureza.',
    },
  ],
  ciclovias:
    'A cidade não tem uma malha cicloviária estruturada divulgada em fonte oficial; o deslocamento de bicicleta acontece de forma informal pelas ruas do Centro e dos bairros próximos.',

  clima:
    'O clima é tropical de altitude, característico do Sul de Minas, com a cidade situada a cerca de 868 m. As temperaturas variam entre aproximadamente 10 °C e 29 °C ao longo do ano, com verão mais quente e chuvoso (de novembro a março) e inverno seco, com manhãs frias.',
  climaTreino:
    'As condições para treino ao ar livre são favoráveis na maior parte do ano; no inverno vale reforçar o aquecimento nas manhãs frias, e no verão é melhor evitar o horário de maior calor e as pancadas de chuva.',

  mobilidade:
    'O acesso rodoviário principal se dá pela BR-381 (Rodovia Fernão Dias), com ligação por rodovias estaduais na altura de Campanha; a cidade fica a cerca de 65 km de Varginha e 54 km de Três Corações. O transporte urbano é limitado, e o distrito de Carneiros, mais afastado da sede, conta com transporte público oferecido pela prefeitura. A rodoviária local atende linhas regionais de ônibus.',

  corridas: [
    {
      nome: 'Cortejos e caminhadas da Festa do Rosário',
      descricao:
        'A maior festa da cidade, com mais de 140 anos de tradição e reconhecida como patrimônio imaterial do município, reúne ternos de congado e cortejos que percorrem a pé as ruas e praças do Centro, mobilizando boa parte da população.',
    },
    {
      nome: 'Corridas e caminhadas do calendário regional',
      descricao:
        'Como a maioria das cidades de porte pequeno e médio do Sul de Minas, São Gonçalo do Sapucaí integra o circuito informal de corridas de rua e caminhadas organizado por assessorias esportivas e prefeituras vizinhas, com provas que atraem corredores da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é marcada pelo ritmo do interior: futebol amador de várzea, caminhada nas praças do Centro e uma rotina de trabalho ligada à lavoura de café e à pecuária, que molda os horários possíveis para o treino. A tradicional Festa do Rosário reforça o hábito comunitário de caminhar longas distâncias durante os cortejos religiosos.',
  academias:
    'A oferta é formada por academias de bairro e pequenos espaços de musculação e treino funcional, típicos do porte da cidade, complementados pelo uso informal das praças centrais para caminhada e atividade ao ar livre.',

  destaquesFitness: [
    'Sul de Minas, região de Varginha, com economia ligada ao café e à pecuária leiteira que molda a rotina de treino.',
    'Rio Sapucaí e praças históricas do Centro, como a Praça Barão do Rio Verde, usadas para caminhada.',
    'Clima tropical de altitude (cerca de 868 m), ameno e favorável ao treino ao ar livre na maior parte do ano.',
    'Tradicional Festa do Rosário, patrimônio imaterial com mais de 140 anos, que mobiliza a vida comunitária local.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade pequena do Sul de Minas, com economia ligada ao café e à pecuária e uma vida comunitária forte em torno da Festa do Rosário, São Gonçalo do Sapucaí oferece um ritmo tranquilo para quem quer treinar. Um personal trainer ajuda a aproveitar as praças do Centro e as academias de bairro com método, encaixando o treino na rotina do trabalho rural e do pequeno comércio.',

  vizinhas: ['varginha-mg', 'tres-coracoes-mg'],

  fontes: [
    { nome: 'IBGE Cidades — São Gonçalo do Sapucaí', url: 'https://cidades.ibge.gov.br/brasil/mg/sao-goncalo-do-sapucai/panorama' },
    { nome: 'Prefeitura de São Gonçalo do Sapucaí', url: 'https://saogoncalodosapucai.mg.gov.br/site/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
