import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palmeira-das-missoes-rs',
  nome: 'Palmeira das Missões',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'palmeirense',
  tipo: 'cidade',

  populacao: 33216,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 639,
  pibPerCapita: 67189.91,
  pibPerCapitaAno: 2021,

  resumoEconomico:
    'No Planalto Médio gaúcho, Palmeira das Missões funciona como capital sub-regional de alta influência para o Noroeste do estado, concentrando comércio, serviços e administração pública que atendem os municípios vizinhos. A base econômica é a agropecuária: o município lidera a produção de soja em sequeiro e de trigo no Rio Grande do Sul, além de figurar entre os maiores produtores de milho e feijão, com forte presença também da pecuária de corte e leite. Desde 2006 a cidade sedia um campus da Universidade Federal de Santa Maria (UFSM), o que reforça sua função de polo regional de educação e serviços.',

  mercado:
    'O mercado fitness de Palmeira das Missões é o de uma cidade média do interior gaúcho, com academias de bairro, estúdios de musculação e a estrutura do Sesc local. A presença do campus da UFSM injeta um público jovem e universitário na cidade, o que amplia a procura por treino orientado, enquanto o público adulto ligado ao agronegócio e ao comércio busca personal trainers para treinar com regularidade apesar da rotina de trabalho.',

  bairrosNobres: ['Centro', 'Vista Alegre'],
  bairrosPopulares: ['Promorar II', 'São Bento', 'Santa Terezinha'],

  parques: [
    {
      nome: 'Praça central e Monumento ao Bandeirante',
      descricao:
        'No coração da área central, reúne o Monumento ao Bandeirante e o Monumento aos Maragatinhos; o entorno arborizado é ponto tradicional de caminhada e encontro no dia a dia da cidade.',
    },
    {
      nome: 'Rio Guarita e Rio Macaco',
      descricao:
        'Os dois rios que cortam o município são os principais atrativos naturais da região, com trechos de margem usados para caminhada e contemplação fora da área central.',
    },
    {
      nome: 'Campus da UFSM (bairro Vista Alegre)',
      descricao:
        'O campus da Universidade Federal de Santa Maria movimenta a vida esportiva da cidade — foi ali, em 2026, que a comunidade acadêmica e grupos de corrida da região se reuniram na 1ª Rústica do Meio Ambiente.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos pontuais da área urbana; boa parte do treino ao ar livre acontece nas ruas do centro e nas estradas vicinais que cortam a zona rural do planalto.',

  clima:
    'O clima é subtropical úmido (Cfa), com chuvas bem distribuídas ao longo do ano. Os verões são longos, quentes e úmidos, com temperaturas médias em torno de 22 °C, enquanto os invernos são curtos e frios, com geadas frequentes — a altitude de 639 metros reforça a sensação de frio nas manhãs de junho e julho.',
  climaTreino:
    'De outubro a abril, o calor e a umidade pedem treino ao ar livre nos horários mais amenos, com atenção redobrada à hidratação. No inverno, o frio e as geadas exigem aquecimento mais longo, roupas adequadas e, em muitos dias, a opção por ambientes fechados para manter a constância do treino.',

  mobilidade:
    'Palmeira das Missões é cortada pela BR-158, principal eixo rodoviário que liga a cidade a Sarandi, Cruz Alta e outros municípios da região Noroeste do estado. A rodovia estadual RS-569 faz a conexão com a BR-386, ampliando o acesso à região das Missões e ao restante do Rio Grande do Sul. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: '1ª Rústica do Meio Ambiente',
      descricao:
        'Prova organizada em 2026 pela UFSM-PM em parceria com o Sesc/RS, em comemoração aos 20 anos do campus, com corrida de 5 km, caminhada de 3 km e prova infantil, reunindo comunidade acadêmica e grupos de corrida da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a rotina do interior gaúcho — futebol amador, musculação e caminhada nas praças centrais — com o público universitário trazido pelo campus da UFSM, que tem impulsionado corridas e caminhadas organizadas na própria universidade e movimentado grupos de corrida locais.',
  academias:
    'A oferta reúne academias de bairro como Iron Fit, Olimpus e Expressão, estúdios de treinamento funcional e a estrutura do Sesc, que conta com academia de musculação e estúdio de pilates no centro da cidade.',

  destaquesFitness: [
    'Capital sub-regional do Planalto Médio/Noroeste gaúcho, com campus da UFSM desde 2006.',
    'Liderança estadual na produção de soja em sequeiro e trigo, reflexo do vínculo entre a cidade e o meio rural.',
    'Altitude de 639 metros e clima subtropical Cfa, com verões amenos e invernos frios com geadas.',
    'Cruzamento da BR-158 com a RS-569 (acesso à BR-386), consolidando a cidade como polo regional de serviços.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo regional do Planalto Médio gaúcho com forte vínculo rural e um campus universitário que renova a cidade, Palmeira das Missões tem no clima subtropical de invernos frios e verões úmidos o principal fator a considerar no treino. Um personal trainer ajuda a organizar a rotina entre os dias bons para caminhar pela praça central e os dias em que o frio ou o calor pedem um plano alternativo, mantendo a constância ao longo do ano.',

  vizinhas: ['cruz-alta-rs', 'carazinho-rs', 'passo-fundo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Palmeira das Missões', url: 'https://cidades.ibge.gov.br/brasil/rs/palmeira-das-missoes/panorama' },
    { nome: 'UFSM — Campus Palmeira das Missões', url: 'https://www.ufsm.br/unidades-universitarias/palmeira-das-missoes' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
