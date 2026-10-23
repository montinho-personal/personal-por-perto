/**
 * Hyrox na região presencial do Montinho — uma página por cidade.
 *
 * Pedido do Renato em 23/10/2026, publicadas antes dos prints com a
 * autorização dele (os prints entram depois e ajustam título e FAQs).
 * Pesquisa, fontes e bloqueios em docs/hyrox-local.md.
 *
 * POR QUE O TEXTO LOCAL É ESCRITO À MÃO
 *
 * Onze páginas com o mesmo texto e só o nome trocado são exatamente o que a
 * política de conteúdo em escala do Google pune. O que é comum (o formato
 * da prova, a preparação) mora no componente; o que é de cada cidade — onde
 * correr, onde treinar força, como se chega à prova, as perguntas — mora
 * aqui, escrito para ela. Todo fato local vem das páginas de cidade
 * (src/data/cidades/*.ts), que já passaram por verificação, ou da pesquisa
 * de 23/10.
 *
 * Lugar com Hyrox na grade: só o que a página do Wellhub mostra, citado
 * como tal. Selo de "HYROX Training Club" só com o buscador oficial, que
 * está bloqueado no ambiente — pedido em print ao Renato.
 */
export interface FaqLocal {
  pergunta: string;
  resposta: string;
}

export interface HyroxCidade {
  /** Slug da página: /guias/hyrox-<slug>/. */
  slug: string;
  nome: string;
  /** "em Alphaville", "no Tamboré", "na Granja Viana". */
  locucao: string;
  /** Slug da página de cidade do diretório. */
  cidade: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  /** Onde treinar a parte de corrida. */
  corrida: string[];
  /** Onde treinar a parte de força e as estações. */
  estacoes: string[];
  /** Da cidade até a prova de São Paulo. */
  ateAProva: string;
  faqs: FaqLocal[];
  /** Slugs de outras páginas desta série, para o bloco de vizinhas. */
  vizinhas: string[];
}

const OBOX =
  'O Obox Training Club, no AlphaSítio Mall, na região do Tamboré (Santana de Parnaíba), aparece como parceiro do Wellhub e da TotalPass, e a página dele no Wellhub lista Hyrox entre as aulas, ao lado de crosstraining, full body e yoga, com reserva obrigatória.';

const HYBOX =
  'O HYBOX, na Vila Monte Serrat, em Cotia, tem Hyrox, treino híbrido e treino funcional entre as atividades da página dele no Wellhub.';

export const HYROX_CIDADES: HyroxCidade[] = [
  {
    slug: 'alphaville',
    nome: 'Alphaville',
    locucao: 'em Alphaville',
    cidade: 'alphaville-sp',
    title: 'Hyrox em Alphaville: Aulas, Onde Treinar e Quanto Custa',
    description:
      'Hyrox em Alphaville: onde fazer aulas, onde treinar a corrida no Parque Ecológico e a força, quanto custa treinar e se inscrever, e como chegar à prova.',
    h1: 'Hyrox em Alphaville: aulas, onde treinar e quanto custa',
    lead:
      'Alphaville já tem lugar com Hyrox na grade, pista de corrida no Parque Ecológico e condomínios com academia própria. Falta juntar as peças: a prova mistura 8 km de corrida com 8 estações de força, e o treino precisa das duas.',
    corrida: [
      'A pista asfaltada em volta do lago do Parque Ecológico de Barueri é o lugar natural para os blocos de corrida: dá para marcar o quilômetro e repetir, que é como a prova funciona. Nos fins de semana e feriados, a Ciclovia Via Parque fecha para o lazer e vira mais uma opção.',
      'Nos horários de pico, o trânsito das avenidas principais pesa. Para muita gente, o treino de corrida de semana acontece nas ruas do próprio residencial, e o parque fica para o treino longo.',
    ],
    estacoes: [
      OBOX,
      'Para a força que a prova cobra — empurrar e puxar o trenó, carregar peso, afundo com saco de areia, wall ball —, serve qualquer lugar com musculação e espaço para treino funcional. Na região, o Ironberg, na Estrada Aldeinha, e a NitroGym Tamboré são academias de grande porte; a academia do condomínio também resolve boa parte, com adaptação.',
      'No Alphaville Industrial, a CrossFit Barueri, na Av. Juruá, 307, é box de CrossFit parceiro do Wellhub e da TotalPass — bom para força e condicionamento; treino específico de Hyrox, confirme com a academia.',
    ],
    ateAProva:
      'A etapa de São Paulo acontece no Distrito Anhembi, na zona norte da capital. De Alphaville, o caminho é quase sempre de carro, pela Castello Branco: o bairro não tem estação de trem própria, e a mais próxima é a Barueri, da Linha 8-Diamante da CPTM.',
    faqs: [
      {
        pergunta: 'Onde encontrar aulas de Hyrox em Alphaville?',
        resposta:
          'No AlphaSítio Mall, na região do Tamboré, o Obox Training Club lista Hyrox entre as aulas na página dele no Wellhub, com reserva obrigatória. Fora das aulas, a preparação junta duas coisas que Alphaville já tem: pista para correr, no Parque Ecológico, e academia com musculação e espaço funcional, como o Ironberg e a NitroGym Tamboré.',
      },
      {
        pergunta: 'Quanto custa a mensalidade do Hyrox?',
        resposta:
          'O Hyrox não tem mensalidade própria: é uma prova. O que tem mensalidade é a academia onde você treina, e o valor muda de lugar para lugar — o Obox, por exemplo, aparece no Wellhub e na TotalPass, então quem tem um desses benefícios pode checar no aplicativo se o plano dá acesso. O que tem preço fixo é a inscrição: na etapa de São Paulo de outubro de 2026, R$ 649 no individual, R$ 599 por atleta na dupla e R$ 399 por integrante no revezamento.',
      },
      {
        pergunta: 'Qual academia tem Hyrox perto de Alphaville?',
        resposta:
          'A que encontramos com Hyrox na grade é o Obox Training Club, no AlphaSítio Mall. A academia se apresenta como Hyrox Training Club; a lista oficial de academias afiliadas fica no buscador da própria Hyrox, que vale conferir antes de escolher.',
      },
      {
        pergunta: 'Dá para treinar Hyrox na academia do condomínio?',
        resposta:
          'Boa parte, sim. Corrida, wall ball, afundo, carregamento de peso e burpee se treinam com pouco equipamento. O que costuma faltar é trenó, SkiErg e remo — essas estações pedem uma academia que tenha os aparelhos, pelo menos algumas vezes antes da prova.',
      },
      {
        pergunta: 'Tem personal para Hyrox em Alphaville?',
        resposta:
          'O Montinho Personal atende presencialmente em Alphaville, em casa, no condomínio ou na academia. A preparação para a prova entra no treino como qualquer outro objetivo: corrida, força e as estações organizadas na semana que você tem.',
      },
    ],
    vizinhas: ['tambore', 'barueri', 'santana-de-parnaiba', 'aldeia-da-serra'],
  },
  {
    slug: 'tambore',
    nome: 'Tamboré',
    locucao: 'no Tamboré',
    cidade: 'tambore-sp',
    title: 'Hyrox no Tamboré: Onde Treinar a Corrida e as Estações',
    description:
      'Hyrox no Tamboré: o lugar da região com Hyrox na grade, a pista do Lago de Tamboré, as academias do bairro e o caminho até a prova de SP.',
    h1: 'Hyrox no Tamboré: onde treinar a corrida e as estações',
    lead:
      'O Tamboré tem, no AlphaSítio Mall, um dos poucos lugares da região com Hyrox na grade. Somado ao Lago de Tamboré para correr e às academias do bairro, boa parte da preparação cabe perto de casa.',
    corrida: [
      'A área do Lago de Tamboré integra o Parque Ecológico, com pista para caminhada, corrida e ciclismo. É ali que os 8 km da prova se treinam: blocos de 1 km com pausa, como na largada de verdade.',
      'Para quem trabalha no polo empresarial, o que costuma encaixar é treinar antes ou depois do expediente. A corrida curta cabe na semana; o treino longo vai para o fim de semana, no parque.',
    ],
    estacoes: [
      OBOX,
      'Para a força do dia a dia, o bairro tem a NitroGym Tamboré, no Shopping Tamboré, com cerca de 3 mil m², e a Bluefit Tamboré, na Av. Tucunaré. Muitos condomínios têm academia própria, que dá conta de wall ball, afundo e carregamento.',
    ],
    ateAProva:
      'A etapa de São Paulo é no Distrito Anhembi, na zona norte da capital. Do Tamboré, o acesso é de carro, pela Castello Branco, com o Rodoanel e a Anhanguera por perto do lado do polo empresarial. Não há estação de trem no bairro; a mais próxima é a Barueri, da Linha 8-Diamante.',
    faqs: [
      {
        pergunta: 'Tem aula de Hyrox no Tamboré?',
        resposta:
          'O Obox, no AlphaSítio Mall, lista Hyrox entre as aulas na página dele no Wellhub, com reserva obrigatória. Antes de ir, confirme com a academia os horários e se o seu plano dá acesso.',
      },
      {
        pergunta: 'Onde correr para o Hyrox no Tamboré?',
        resposta:
          'Na pista do Lago de Tamboré, que integra o Parque Ecológico. Ela permite marcar distâncias e repetir blocos de 1 km, que é o formato da corrida da prova.',
      },
      {
        pergunta: 'Dá para treinar Hyrox na hora do almoço?',
        resposta:
          'Dá, com sessões curtas: um bloco de corrida com uma ou duas estações, ou um treino de força focado. O treino mais longo, que simula a prova, fica melhor no fim de semana.',
      },
    ],
    vizinhas: ['alphaville', 'santana-de-parnaiba', 'barueri'],
  },
  {
    slug: 'aldeia-da-serra',
    nome: 'Aldeia da Serra',
    locucao: 'na Aldeia da Serra',
    cidade: 'aldeia-da-serra-sp',
    title: 'Hyrox na Aldeia da Serra: Treino no Condomínio e na Serra',
    description:
      'Hyrox na Aldeia da Serra: as ruas de serra dos condomínios para a corrida, as academias locais para a força e o caminho até a prova em São Paulo.',
    h1: 'Hyrox na Aldeia da Serra: treino no condomínio e na serra',
    lead:
      'A Aldeia da Serra não tem, até onde conferimos, lugar com Hyrox na grade. Tem outra coisa: ruas de pouco tráfego, clima fresco e relevo de serra, que deixam a parte de corrida mais dura do que no plano — o que, para a prova, é vantagem.',
    corrida: [
      'As ruas arborizadas dos condomínios, com pouco tráfego, são o principal ambiente de corrida dos moradores. O relevo de serra dá subida de graça: um treino nessas ruas trabalha a perna que depois vai empurrar o trenó.',
      'A prova, porém, é no plano. Vale alternar: parte da corrida na serra, parte num trecho plano, para treinar também o ritmo que você quer manter nos 8 km.',
    ],
    estacoes: [
      'Para a força, a Aldeia tem a Scelta Academia, na Av. dos Pássaros, e a Área Fitness, na Av. dos Patos. A academia do condomínio, quando existe, cobre wall ball, afundo, burpee e carregamento.',
      'Trenó, SkiErg e remo são as estações mais difíceis de achar por perto. Em Alphaville e no Tamboré há academias maiores — e, no AlphaSítio Mall, o Obox, que lista Hyrox entre as aulas no Wellhub.',
    ],
    ateAProva:
      'A etapa de São Paulo acontece no Distrito Anhembi, na zona norte da capital. Da Aldeia da Serra, o acesso é de carro, pela Castello Branco (na altura do km 32) e pela Estrada Dr. Yojiro Takaoka. A estação de trem mais próxima é a Barueri, da Linha 8-Diamante.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox perto da Aldeia da Serra?',
        resposta:
          'O lugar mais próximo com Hyrox na grade que encontramos é o Obox, no AlphaSítio Mall, na região do Tamboré, segundo a página dele no Wellhub. Na própria Aldeia, a corrida se treina nas ruas dos condomínios e a força na Scelta, na Área Fitness ou na academia do residencial.',
      },
      {
        pergunta: 'Correr em subida ajuda no Hyrox?',
        resposta:
          'Ajuda a construir força de perna e fôlego, que a prova cobra no trenó e nos afundos. Mas a corrida do Hyrox é plana; por isso vale treinar também em terreno plano, no ritmo que você pretende manter.',
      },
      {
        pergunta: 'Tem personal para Hyrox na Aldeia da Serra?',
        resposta:
          'O Montinho Personal atende presencialmente na Aldeia da Serra, no condomínio ou em casa. A preparação para a prova entra no treino como objetivo, com corrida, força e as estações na semana.',
      },
    ],
    vizinhas: ['alphaville', 'santana-de-parnaiba', 'barueri'],
  },
  {
    slug: 'barueri',
    nome: 'Barueri',
    locucao: 'em Barueri',
    cidade: 'barueri-sp',
    title: 'Hyrox em Barueri: Onde Treinar, Inscrição e Onde É a Prova',
    description:
      'Hyrox em Barueri: onde treinar a corrida e a força na cidade, quanto custa a inscrição e onde é a prova — no Anhembi, com trem da Linha 8 até a capital.',
    h1: 'Hyrox em Barueri: onde treinar, inscrição e onde é a prova',
    lead:
      'Barueri tem o que a preparação para o Hyrox mais pede: lugar para correr a qualquer hora, box de CrossFit e academias para a força e trem direto para a capital. Etapa oficial do Hyrox, a cidade não tem: a prova paulista é no Anhembi, na zona norte de São Paulo.',
    corrida: [
      'O Parque Linear, nas margens do Tietê, no Jardim dos Camargos, tem pista de caminhada, ciclovia e fica aberto 24 horas — raro, e útil para quem só consegue treinar cedo ou tarde. O Parque Municipal Dom José, com cerca de 95 mil m², tem pista de caminhada e abre das 6h às 21h de segunda a sábado.',
      'A cidade tem calendário de corrida próprio: a Corrida São Silveira, da Prefeitura, com 8 km e 4 km e inscrição gratuita. Os 8 km dela são a mesma distância de corrida do Hyrox — sem as estações no meio.',
    ],
    estacoes: [
      'A CrossFit Barueri, box de CrossFit na Av. Juruá, 307, no Alphaville Industrial, aparece como parceira do Wellhub e da TotalPass. Box de CrossFit costuma ser um bom lugar para a parte de força e condicionamento da prova; se ele tem treino específico de Hyrox, confirme direto com a academia.',
      'Para a musculação, Barueri tem unidades da Smart Fit e, em Alphaville, academias de grande porte como o Ironberg, na Estrada Aldeinha. No Parque Linear há praças de ginástica ao ar livre.',
      OBOX,
    ],
    ateAProva:
      'A etapa de São Paulo acontece no Distrito Anhembi, na zona norte da capital. Barueri tem quatro estações da Linha 8-Diamante da CPTM, operada pela ViaMobilidade, o que permite ir até a capital de trem. Quem vai de carro usa a Castello Branco.',
    faqs: [
      {
        pergunta: 'Qual academia tem Hyrox em Barueri?',
        resposta:
          'Em Barueri, a CrossFit Barueri, no Alphaville Industrial, é box de CrossFit parceiro do Wellhub e da TotalPass; o que ele oferece de Hyrox, confirme com a academia. Com Hyrox listado entre as aulas, o que encontramos na região é o Obox, no AlphaSítio Mall, na região do Tamboré. A corrida se treina no Parque Linear ou no Parque Dom José.',
      },
      {
        pergunta: 'Tem prova de Hyrox em Barueri? Onde ver inscrição e resultado?',
        resposta:
          'Não encontramos etapa oficial do Hyrox em Barueri. A etapa paulista acontece no Distrito Anhembi, na zona norte de São Paulo; a inscrição da etapa de outubro de 2026 custou R$ 649 no individual. Data, horários e o resultado estão no guia do Hyrox São Paulo 2026.',
      },
      {
        pergunta: 'A Corrida São Silveira serve de treino para o Hyrox?',
        resposta:
          'Serve como teste da parte de corrida: são 8 km, a mesma distância que o Hyrox soma. A diferença é que, na prova, cada quilômetro é seguido de uma estação de força, e o ritmo que você aguenta muda por isso.',
      },
      {
        pergunta: 'Dá para ir de trem de Barueri ao Hyrox de São Paulo?',
        resposta:
          'A Linha 8-Diamante da CPTM liga Barueri à capital. A prova fica no Distrito Anhembi, na zona norte; confira o trajeto completo no aplicativo de transporte antes do dia, porque o horário de credenciamento é rígido.',
      },
    ],
    vizinhas: ['alphaville', 'tambore', 'osasco', 'carapicuiba', 'jandira', 'santana-de-parnaiba'],
  },
  {
    slug: 'santana-de-parnaiba',
    nome: 'Santana de Parnaíba',
    locucao: 'em Santana de Parnaíba',
    cidade: 'santana-de-parnaiba-sp',
    title: 'Hyrox em Santana de Parnaíba: Onde Treinar e Onde É a Prova',
    description:
      'Hyrox em Santana de Parnaíba: onde treinar na cidade e onde é a prova — a etapa paulista é no bairro de Santana, em São Paulo, não no município.',
    h1: 'Hyrox em Santana de Parnaíba: onde treinar e onde é a prova',
    lead:
      'Um dos lugares da região com Hyrox na grade fica em Santana de Parnaíba: o Obox, no AlphaSítio Mall. A cidade soma a ele parques novos com pista de caminhada e um calendário de corridas de rua gratuitas.',
    corrida: [
      'O Parque Municipal do Refúgio dos Bandeirantes, inaugurado em 2023, tem cerca de 29 mil m² com lago e pista de caminhada. Ao todo, a cidade recebeu cerca de dez parques municipais desde 2014.',
      'As corridas de rua da cidade, como as etapas do Circuito Cidades Paulistas e do Circuito Atalanta, com 5 km e 9 km e largada no Monumento aos Bandeirantes, são um bom teste de ritmo para a parte de corrida da prova.',
    ],
    estacoes: [
      OBOX,
      'Para a força fora dele, a cidade não tem Smart Fit; as unidades mais próximas ficam na Alameda Araguaia, no lado de Barueri de Alphaville. Há boxes de crossfit e estúdios na cidade, muitos no Wellhub, e as academias dos condomínios de Alphaville e Tamboré.',
    ],
    ateAProva:
      'Atenção ao nome: a etapa de São Paulo é no Distrito Anhembi, na Av. Olavo Fontoura, 1209, no bairro de Santana, zona norte da capital — não em Santana de Parnaíba. Daqui até lá, Santana de Parnaíba não tem estação de trem: o acesso é de carro, pela Castello Branco (saída 26) ou pela Anhanguera (saída 29), seguindo pela Estrada dos Romeiros.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox em Santana de Parnaíba?',
        resposta:
          'O Obox, no AlphaSítio Mall, na região do Tamboré, lista Hyrox entre as aulas na página dele no Wellhub, com reserva obrigatória. Confirme com a academia horários e planos aceitos antes de ir.',
      },
      {
        pergunta: 'Tem prova de Hyrox em Santana de Parnaíba?',
        resposta:
          'Não encontramos prova de Hyrox no município. A etapa paulista acontece no Distrito Anhembi, no bairro de Santana, na zona norte de São Paulo — o nome parecido confunde. Inscrição, horários e o resultado da etapa de outubro de 2026 estão no guia do Hyrox São Paulo 2026.',
      },
      {
        pergunta: 'As corridas de rua de Santana de Parnaíba ajudam no Hyrox?',
        resposta:
          'Ajudam a medir o ritmo de corrida. As provas da cidade, de 5 km e 9 km, ficam perto dos 8 km que o Hyrox soma — mas sem as estações entre um quilômetro e outro, que mudam o ritmo de prova.',
      },
      {
        pergunta: 'Tem personal para Hyrox em Santana de Parnaíba?',
        resposta:
          'O Montinho Personal atende presencialmente em Santana de Parnaíba, em casa, no condomínio ou na academia, e organiza a preparação para a prova dentro do treino.',
      },
    ],
    vizinhas: ['tambore', 'alphaville', 'aldeia-da-serra', 'barueri'],
  },
  {
    slug: 'jandira',
    nome: 'Jandira',
    locucao: 'em Jandira',
    cidade: 'jandira-sp',
    title: 'Hyrox em Jandira: Como Treinar com o Que a Cidade Tem',
    description:
      'Hyrox em Jandira: a academia ao ar livre da Praça do Figueirão, as academias do Centro e o trem da Linha 8 até a prova de Hyrox em São Paulo.',
    h1: 'Hyrox em Jandira: como treinar com o que a cidade tem',
    lead:
      'Jandira não tem, até onde conferimos, lugar com Hyrox na grade. A preparação, mesmo assim, cabe na cidade: ela é compacta, tem academia ao ar livre em praça pública e a estação da Linha 8 no Centro, o que encurta o caminho até as academias maiores da região.',
    corrida: [
      'A cidade é pequena em área — cerca de 17,5 km² —, o que torna fácil montar um percurso de rua perto de casa. Para correr em grupo e testar o ritmo, os corredores locais costumam disputar provas no eixo oeste, em Barueri, Osasco, Carapicuíba e Itapevi.',
    ],
    estacoes: [
      'A Praça do Figueirão tem academia ao ar livre com dez estações de equipamentos, duas adaptadas para cadeirantes — útil para treino funcional e em grupo. Para a musculação, há unidades da Smart Fit no Centro e no Jardim Ouro Verde.',
      'Trenó, SkiErg e remo pedem academia com o aparelho — confirme com a unidade antes. Pela Castello Branco ou pelo trem, Barueri e o Tamboré ficam perto; no AlphaSítio Mall, o Obox lista Hyrox entre as aulas no Wellhub.',
    ],
    ateAProva:
      'A etapa de São Paulo acontece no Distrito Anhembi, na zona norte da capital. A Estação Jandira, da Linha 8-Diamante, fica no Centro e liga a cidade à capital; de carro, a Castello Branco passa sem pedágio no trecho urbano.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox em Jandira?',
        resposta:
          'Não encontramos lugar com Hyrox na grade em Jandira. A preparação se faz em partes: corrida na rua, força na Smart Fit ou na academia ao ar livre da Praça do Figueirão, e as estações com aparelho específico numa academia maior da região.',
      },
      {
        pergunta: 'Dá para treinar Hyrox em academia ao ar livre?',
        resposta:
          'Parte dele. Burpee, afundo, corrida e exercícios com o peso do corpo cabem bem ali. Wall ball, trenó, SkiErg e remo pedem equipamento que academia ao ar livre não tem.',
      },
      {
        pergunta: 'Tem personal para Hyrox em Jandira?',
        resposta:
          'O Montinho Personal atende presencialmente em Jandira e na região. A preparação para a prova entra no treino, aproveitando o que você tem perto de casa.',
      },
    ],
    vizinhas: ['itapevi', 'barueri', 'carapicuiba'],
  },
  {
    slug: 'itapevi',
    nome: 'Itapevi',
    locucao: 'em Itapevi',
    cidade: 'itapevi-sp',
    title: 'Hyrox em Itapevi: Treino de Graça no Parque e na Academia',
    description:
      'Hyrox em Itapevi: a pista e o espaço de crossfit do Parque da Cidade, a corrida oficial de 5 e 10 km e o trem até a prova em São Paulo.',
    h1: 'Hyrox em Itapevi: treino de graça no parque e na academia',
    lead:
      'Itapevi não tem, até onde conferimos, lugar com Hyrox na grade. Tem algo menos comum: um parque de 110 mil m² com pista de corrida e espaço de crossfit ao ar livre, de graça. Para a parte funcional da prova, é um bom começo.',
    corrida: [
      'O Parque da Cidade, na Vila Nova Itapevi, tem cerca de 110 mil m², com pista de caminhada e ciclismo. O Parque da Cohab, inaugurado em 2024, é outra opção.',
      'A Corrida Oficial de Itapevi, da Prefeitura, tem 5 km e 10 km, inscrição gratuita e largada na Avenida Feres Nacif Chaluppe — um teste de ritmo que fica entre os dois lados dos 8 km da prova.',
    ],
    estacoes: [
      'O Parque da Cidade tem academia ao ar livre e espaço de crossfit, onde cabem burpee, afundo e boa parte do condicionamento. Para musculação, há Smart Fit no Centro e no Ita Shopping Vila Nova.',
      'Trenó, SkiErg e remo pedem academia com o aparelho. Pela Castello Branco, Barueri e o Tamboré ficam perto; no AlphaSítio Mall, o Obox lista Hyrox entre as aulas no Wellhub.',
    ],
    ateAProva:
      'A etapa de São Paulo é no Distrito Anhembi, na zona norte da capital. Itapevi é a ponta da Linha 8-Diamante da CPTM: o trem sai da Estação Itapevi, integrada ao terminal de ônibus, rumo a Osasco e à capital. De carro, a Castello Branco corta o município.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox em Itapevi?',
        resposta:
          'Não encontramos lugar com Hyrox na grade em Itapevi. O Parque da Cidade, com pista e espaço de crossfit ao ar livre, cobre corrida e parte do funcional; a Smart Fit, a musculação. As estações com aparelho específico ficam para uma academia maior da região.',
      },
      {
        pergunta: 'A Corrida Oficial de Itapevi ajuda no Hyrox?',
        resposta:
          'Ajuda como teste de corrida. Os 5 km e 10 km dela ficam em volta dos 8 km do Hyrox, mas sem as estações no meio — e é a combinação das duas que define o ritmo da prova.',
      },
      {
        pergunta: 'Tem personal para Hyrox em Itapevi?',
        resposta:
          'O Montinho Personal atende presencialmente em Itapevi e região, em casa ou no condomínio, e encaixa a preparação para a prova no treino.',
      },
    ],
    vizinhas: ['jandira', 'barueri', 'carapicuiba'],
  },
  {
    slug: 'carapicuiba',
    nome: 'Carapicuíba',
    locucao: 'em Carapicuíba',
    cidade: 'carapicuiba-sp',
    title: 'Hyrox em Carapicuíba: Onde Correr e Treinar Força',
    description:
      'Hyrox em Carapicuíba: o Parque dos Paturis e a corrida de 8 km da cidade para a parte de corrida, as academias para a força e o trem da Linha 8 até a prova.',
    h1: 'Hyrox em Carapicuíba: onde correr e treinar força',
    lead:
      'Carapicuíba não tem, até onde conferimos, lugar com Hyrox na grade. Tem uma corrida de rua de 8 km — a mesma distância de corrida do Hyrox — e um parque à beira do lago com pista e ginástica ao ar livre.',
    corrida: [
      'O Parque dos Paturis, o maior da cidade, na Vila Municipal, tem pista de caminhada, ciclovia e equipamentos de ginástica ao ar livre, e abre todos os dias, das 6h às 18h.',
      'A Corrida Nova Inocêncio 8k, da Prefeitura, larga no Parque da Aldeia Jesuítica e chega ao Marco Zero, na Avenida Miriam. São os mesmos 8 km que o Hyrox soma — sem as estações no meio.',
    ],
    estacoes: [
      'Para musculação, há Smart Fit no Centro, na Vila Dirce e no Parque Santa Teresa. Os parques dos Paturis, Gabriel Chucre e Planalto têm academia ao ar livre gratuita, para o funcional.',
      'Trenó, SkiErg e remo pedem academia com o aparelho. A Granja Viana, que atravessa Carapicuíba, e Barueri ficam perto; em Cotia, o HYBOX lista Hyrox entre as atividades no Wellhub.',
    ],
    ateAProva:
      'A etapa de São Paulo acontece no Distrito Anhembi, na zona norte da capital. A Estação Carapicuíba, da Linha 8-Diamante, é o principal embarque rumo a Osasco e à capital. De carro, a Castello Branco passa logo ao norte, em Barueri.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox em Carapicuíba?',
        resposta:
          'Não encontramos lugar com Hyrox na grade dentro de Carapicuíba. A corrida se treina no Parque dos Paturis, a força na Smart Fit e o funcional nas academias ao ar livre dos parques. Em Cotia, o HYBOX lista Hyrox entre as atividades no Wellhub.',
      },
      {
        pergunta: 'A Corrida Nova Inocêncio 8k serve de treino para o Hyrox?',
        resposta:
          'Serve como teste da parte de corrida: são 8 km, a distância de corrida do Hyrox. Na prova, porém, cada quilômetro é seguido de uma estação de força, e o ritmo cai por isso.',
      },
      {
        pergunta: 'Tem personal para Hyrox em Carapicuíba?',
        resposta:
          'O Montinho Personal atende presencialmente em Carapicuíba e região, e organiza a preparação para a prova dentro da sua semana.',
      },
    ],
    vizinhas: ['osasco', 'granja-viana', 'cotia', 'barueri'],
  },
  {
    slug: 'osasco',
    nome: 'Osasco',
    locucao: 'em Osasco',
    cidade: 'osasco-sp',
    title: 'Hyrox em Osasco: Onde Treinar e Como Chegar à Prova de Trem',
    description:
      'Hyrox em Osasco: parques para a corrida, academias de rede para a força, a prova de 8 km da cidade e o trem das linhas 8 e 9 até São Paulo.',
    h1: 'Hyrox em Osasco: onde treinar e como chegar à prova de trem',
    lead:
      'Osasco é um dos maiores polos de transporte da Grande São Paulo: duas linhas de trem se cruzam ali. Lugar com Hyrox na grade não encontramos no município, mas a preparação cabe na cidade, com parques, academias de rede e uma corrida de 8 km.',
    corrida: [
      'O Parque Ecológico Dionísio Álvarez Mateos, no Jardim das Flores, tem pista de caminhada e corrida e aparelhos de ginástica ao ar livre. O Parque Chico Mendes, com cerca de 114 mil m² na City Bussocaba, tem trilhas para o treino de base.',
      'O Desafio dos Trabalhadores, a corrida mais tradicional da cidade, tem 4 km e 8 km, com largada em frente à Prefeitura. Os 8 km são a distância de corrida do Hyrox.',
    ],
    estacoes: [
      'Para a força, Osasco tem unidades da Smart Fit (Vila Yara, Centro, KM 18, Vila Quitaúna e Jardim Jaguaribe) e da Bluefit (Centro, KM 18 e Novo Osasco).',
      'Trenó, SkiErg e remo pedem academia com o aparelho; confirme com a unidade antes. Na região, o Obox, no Tamboré, e o HYBOX, em Cotia, listam Hyrox entre as atividades no Wellhub.',
    ],
    ateAProva:
      'A etapa de São Paulo acontece no Distrito Anhembi, na zona norte da capital. A Estação Osasco integra as linhas 8-Diamante e 9-Esmeralda, operadas pela ViaMobilidade, e a Presidente Altino também conecta as duas — o que facilita ir de trem até a capital.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox em Osasco?',
        resposta:
          'Não encontramos lugar com Hyrox na grade dentro de Osasco. A preparação se faz com a corrida nos parques, a força nas academias de rede da cidade e as estações com aparelho específico numa academia que tenha trenó, SkiErg e remo.',
      },
      {
        pergunta: 'O Desafio dos Trabalhadores ajuda no Hyrox?',
        resposta:
          'Ajuda como teste: a prova de 8 km tem a mesma distância de corrida do Hyrox. A diferença é que, no Hyrox, cada quilômetro termina numa estação de força.',
      },
      {
        pergunta: 'Tem personal para Hyrox em Osasco?',
        resposta:
          'O Montinho Personal atende presencialmente em Osasco e região, e encaixa a preparação para a prova no seu treino.',
      },
    ],
    vizinhas: ['carapicuiba', 'barueri', 'cotia'],
  },
  {
    slug: 'cotia',
    nome: 'Cotia',
    locucao: 'em Cotia',
    cidade: 'cotia-sp',
    title: 'Hyrox em Cotia: Onde Treinar e Como Se Preparar para a Prova',
    description:
      'Hyrox em Cotia: o lugar da cidade com Hyrox na grade, o Parque Teresa Maia e as corridas da Granja Viana, e o caminho até a prova em São Paulo.',
    h1: 'Hyrox em Cotia: onde treinar e como se preparar para a prova',
    lead:
      'Cotia tem um lugar com Hyrox na grade: o HYBOX, na Vila Monte Serrat. A cidade soma a ele o clima ameno de planalto, bom para correr quase o ano todo, e corridas de rua de 5 e 10 km.',
    corrida: [
      'O Parque Teresa Maia, na Granja Viana, tem cerca de 23 mil m², com trilha, lago e academia ao ar livre, iluminado e com horário estendido.',
      'A Track&Field Experience Running, com 5 km e 10 km e largada na Granja Viana, e a CEDIT Run, gratuita, são boas provas de ritmo para a parte de corrida do Hyrox.',
    ],
    estacoes: [
      HYBOX,
      'Para a musculação, Cotia tem Smart Fit na Granja Viana (km 21 e km 25 da Raposo) e na Vila Monte Serrat, e duas unidades da Bluefit na Granja Viana.',
    ],
    ateAProva:
      'A etapa de São Paulo é no Distrito Anhembi, na zona norte da capital. Cotia é servida pelas rodovias Raposo Tavares e Castello Branco, a cerca de 30 a 40 minutos da capital — sem contar o trânsito até a zona norte.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox em Cotia?',
        resposta:
          'O HYBOX, na Vila Monte Serrat, tem Hyrox entre as atividades da página dele no Wellhub, ao lado de treino híbrido e funcional. Confirme horários e planos com a academia antes de ir.',
      },
      {
        pergunta: 'O clima de Cotia atrapalha o treino de corrida?',
        resposta:
          'Pelo contrário: o clima ameno de planalto é confortável para correr quase o ano todo. A atenção fica para as manhãs frias de inverno, que pedem aquecimento mais longo, e as chuvas de fim de tarde no verão.',
      },
      {
        pergunta: 'Tem personal para Hyrox em Cotia?',
        resposta:
          'O Montinho Personal atende presencialmente em Cotia e região, e organiza a preparação para a prova dentro do treino.',
      },
    ],
    vizinhas: ['granja-viana', 'carapicuiba', 'osasco'],
  },
  {
    slug: 'granja-viana',
    nome: 'Granja Viana',
    locucao: 'na Granja Viana',
    cidade: 'granja-viana-sp',
    title: 'Hyrox na Granja Viana: Onde Treinar e Correr para a Prova',
    description:
      'Hyrox na Granja Viana: o Parque Teresa Maia e os grupos de corrida dos condomínios, as academias da Raposo e onde treinar as oito estações.',
    h1: 'Hyrox na Granja Viana: onde treinar e correr para a prova',
    lead:
      'A Granja Viana tem cultura de corrida própria, com prova de rua e grupos dentro dos condomínios. Para as estações, o lugar com Hyrox na grade mais perto que encontramos é o HYBOX, em Cotia.',
    corrida: [
      'Boa parte da corrida da região acontece nas vias dos condomínios, em grupos internos com horário fixo. O Parque Teresa Maia, com trilha, lago e academia ao ar livre, é o ponto público de treino.',
      'A Track&Field Experience Running, com 5 km e 10 km e largada na própria Granja Viana, é a prova que melhor representa a cena local — e um bom teste para a parte de corrida do Hyrox.',
    ],
    estacoes: [
      'No eixo da Raposo Tavares, entre os km 21 e 25, ficam as unidades da Smart Fit da região e a Bluefit Granja Viana. Muitos condomínios têm academia própria, que dá conta de wall ball, afundo e carregamento.',
      HYBOX,
    ],
    ateAProva:
      'A etapa de São Paulo acontece no Distrito Anhembi, na zona norte da capital. Da Granja Viana, o acesso é quase todo de carro, pela Raposo Tavares, com ligação à Castello Branco pelo Rodoanel. Não há estação de trem na região.',
    faqs: [
      {
        pergunta: 'Onde treinar Hyrox na Granja Viana?',
        resposta:
          'O lugar com Hyrox na grade mais perto que encontramos é o HYBOX, na Vila Monte Serrat, em Cotia, segundo a página dele no Wellhub. Na Granja Viana, a corrida se treina no Parque Teresa Maia e nos condomínios, e a força nas academias da Raposo.',
      },
      {
        pergunta: 'O grupo de corrida do condomínio serve para o Hyrox?',
        resposta:
          'Serve para a base de corrida, que é metade da prova. O que ele não cobre são as estações de força; elas entram em treinos à parte, na academia, e depois juntas com a corrida.',
      },
      {
        pergunta: 'Tem personal para Hyrox na Granja Viana?',
        resposta:
          'O Montinho Personal atende presencialmente na Granja Viana, em casa ou no condomínio, e encaixa a preparação para a prova no treino.',
      },
    ],
    vizinhas: ['cotia', 'carapicuiba', 'osasco'],
  },
];

export const hyroxCidade = (slug: string): HyroxCidade => {
  const c = HYROX_CIDADES.find((x) => x.slug === slug);
  if (!c) throw new Error(`Hyrox: cidade desconhecida "${slug}"`);
  return c;
};
