import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santana-do-riacho-mg',
  nome: 'Santana do Riacho',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'riachense',
  tipo: 'cidade',

  populacao: 5313,
  populacaoAno: 2022,
  idhm: 0.665,
  idhmClasse: 'médio',
  pibPerCapita: 26320,
  pibPerCapitaAno: 2023,
  altitudeM: 767,

  resumoEconomico:
    'A cerca de 100 km ao norte de Belo Horizonte pela rodovia MG-010, na porção meridional da Serra do Espinhaço, Santana do Riacho é a sede administrativa do Parque Nacional da Serra do Cipó, criado em 1984 e compartilhado com os municípios de Jaboticatubas, Morro do Pilar e Itambé do Mato Dentro. O turismo ecológico é o eixo econômico mais visível: pousadas, restaurantes e serviços de guiagem se concentram nos distritos de Serra do Cipó (antiga Cardeal Mota) e Lapinha da Serra, portas de entrada para cachoeiras, cânions e paredões de quartzito. A economia se completa com a agropecuária de pequena escala e o artesanato tradicional de flores sempre-vivas, típicas do cerrado rupestre local, hoje colhidas sob regras de manejo sustentável. É um município pequeno, de baixa densidade populacional e PIB per capita modesto.',

  mercado:
    'O mercado fitness de Santana do Riacho é bastante restrito, compatível com um município de pouco mais de 5 mil habitantes: não há redes de academia, e a oferta se limita a poucos espaços locais de musculação e a profissionais autônomos. Boa parte da demanda por orientação física vem do próprio fluxo turístico — visitantes que buscam preparo para trilhas longas, escalada e cachoeirismo — somada a moradores que procuram treino funcional e condicionamento para o dia a dia na serra.',

  bairrosNobres: ['Centro', 'Serra do Cipó', 'Lapinha da Serra'],
  bairrosPopulares: ['Zona Rural', 'Entorno do Centro'],

  parques: [
    {
      nome: 'Parque Nacional da Serra do Cipó',
      descricao:
        'Unidade de conservação federal de cerca de 31.600 hectares, com sede administrativa e principal portão de acesso em Santana do Riacho (Rodovia MG-010, km 97). Reúne campos rupestres, cachoeiras, cânions e paredões de quartzito, sendo o principal cenário de trekking, observação de fauna e flora e esportes de aventura da região.',
    },
    {
      nome: 'Cânion das Bandeirinhas',
      descricao:
        'Formado entre a Serra da Bandeirinha e a Serra dos Confins, tem cerca de 6 km de extensão com sucessão de cascatas e piscinas naturais, acessado por trilha plana de aproximadamente 12 km dentro do parque — um dos percursos mais procurados para caminhada longa.',
    },
    {
      nome: 'Cachoeira da Farofa e Trilha do Travessão',
      descricao:
        'Na Serra da Bandeirinha, a Farofa reúne sete quedas d\'água sucessivas em meio a paredões de quartzito; já a Trilha do Travessão segue por um penhasco que divide as bacias dos rios São Francisco e Doce, com vista panorâmica da serra.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária urbana; o mountain bike acontece de forma informal em estradas rurais não pavimentadas e trilhas do entorno do parque, praticado sobretudo por visitantes e grupos organizados.',

  clima:
    'O relevo acidentado gera forte variação de altitude no território, de cerca de 723 m no ponto mais baixo a 1.687 m no Pico do Breu, próximo a Lapinha da Serra — o que resulta em clima ameno de altitude, com noites frias mesmo no verão. As chuvas se concentram de outubro a março, enquanto o inverno (abril a setembro) é seco, com vegetação de cerrado rupestre e mudanças rápidas de tempo típicas de região serrana.',
  climaTreino:
    'Nas áreas mais altas, como Lapinha da Serra, o frio noturno pede agasalho para treinos matinais, enquanto a exposição solar nos campos rupestres, sem sombra, exige protetor solar e hidratação em trilhas longas; o período seco (abril a setembro) costuma ser o mais indicado para caminhadas e escalada, já que a estação chuvosa deixa trilhas e rochas escorregadias e sujeitas a mudanças bruscas de tempo.',

  mobilidade:
    'O acesso principal é a rodovia estadual MG-010, que liga Belo Horizonte a Santana do Riacho passando por Confins, Lagoa Santa e Jaboticatubas, e segue rumo a Conceição do Mato Dentro. A via já recebeu obras de recapeamento em trechos entre a cidade e a divisa com o município vizinho. Dentro do território, o acesso a distritos como Lapinha da Serra e a boa parte das trilhas e cachoeiras se dá por estradas rurais não pavimentadas; não há sistema de transporte coletivo urbano, e os deslocamentos dependem majoritariamente de veículo próprio.',

  corridas: [
    {
      nome: 'Desafio da Serra Trail Run',
      descricao:
        'Prova de trail running com percursos de 7 km e 15 km disputados dentro do Parque Nacional da Serra do Cipó, em Santana do Riacho, voltada a quem busca contato direto com trilhas e paisagens da serra.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do Parque Nacional da Serra do Cipó: trekking em trilhas longas, escalada esportiva de referência nacional (com temporada organizada pela Associação de Escalada da Serra do Cipó, a AESC), cachoeirismo e mountain bike em estradas rurais. O calendário inclui provas de trail running dentro do parque, e boa parte da atividade física ao ar livre é impulsionada pelo fluxo de turistas e visitantes de fim de semana.',
  academias:
    'Não há redes de academia na cidade; a oferta se resume a poucos espaços pequenos de musculação e treino funcional, além de profissionais autônomos, refletindo o porte reduzido e a vocação rural e turística do município.',

  destaquesFitness: [
    'Sede administrativa e principal portão de acesso do Parque Nacional da Serra do Cipó, referência nacional em trekking e escalada.',
    'Altitude que varia de 723 m a 1.687 m (Pico do Breu, perto de Lapinha da Serra), com clima ameno e noites frias favoráveis a atividades ao ar livre.',
    'Escalada esportiva de padrão internacional, com temporada e rotas organizadas pela Associação de Escalada da Serra do Cipó (AESC).',
    'Desafio da Serra Trail Run, prova de 7 km e 15 km disputada dentro do parque nacional.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 90,
    mensalMin: 220,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequena, serrana e organizada em torno do Parque Nacional da Serra do Cipó, Santana do Riacho tem no trekking, na escalada e no cachoeirismo sua principal vocação esportiva, com um mercado de academias praticamente inexistente. Um personal trainer que trabalhe com preparo físico para trilhas longas, treino funcional e condicionamento para terreno irregular tende a ser a opção mais prática para moradores e visitantes que querem treinar com constância na região.',

  vizinhas: ['belo-horizonte-mg', 'lagoa-santa-mg', 'confins-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Santana do Riacho', url: 'https://cidades.ibge.gov.br/brasil/mg/santana-do-riacho/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'ICMBio — Parque Nacional da Serra do Cipó', url: 'https://www.icmbio.gov.br/parnaserradocipo/' },
  ],
  atualizadoEm: '2026-07-02',
};
