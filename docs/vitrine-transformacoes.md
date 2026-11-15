# Vitrine de transformações (`#vitrine-transformacoes`)

Antes e depois reais de alunos do Montinho Personal, com comparador
arrastável. Pedido do Renato em 15/11/2026. Só nas páginas de SEO local de
Alphaville e região.

## Arquivos

| arquivo | papel |
|---|---|
| `src/lib/vitrine.ts` | lê e valida o feed (uma leitura por build) |
| `src/data/vitrineTransformacoes.ts` | o escopo (quais páginas) + a introdução e o destaque de cada uma |
| `src/components/VitrineTransformacoes.astro` | a seção |
| `src/components/ComparadorAntesDepois.astro` | o comparador |
| `src/scripts/vitrine.client.ts` | arrasto, teclado e eventos do GA4 |
| `src/pages/personal-trainer/[cidade].astro` | monta a seção logo depois de "Conheça o personal" |

## Escopo

| página | title | vitrine |
|---|---|---|
| `/personal-trainer/alphaville-sp/` | Personal Trainer em Alphaville (SP): valor por mês e aula | ✅ |
| `/personal-trainer/tambore-sp/` | Personal Trainer no Tamboré (SP): valor por mês e por aula | ✅ |
| `/personal-trainer/barueri-sp/` | Personal Trainer em Barueri (SP): valor por mês e por aula | ✅ |
| `/personal-trainer/santana-de-parnaiba-sp/` | Personal Trainer em Santana de Parnaíba (SP): valor por mês | ✅ |
| `/personal-trainer/aldeia-da-serra-sp/` | Personal Trainer na Aldeia da Serra (SP): valor por mês | ✅ |
| `/personal-trainer/granja-viana-sp/` | Personal Trainer na Granja Viana (SP): valor por mês e aula | ✅ fronteira, ok do Renato em 15/11 |
| `/personal-trainer/cotia-sp/` | Personal Trainer em Cotia (SP): valor por mês e por aula | ✅ fronteira |
| `/personal-trainer/carapicuiba-sp/` | Personal Trainer em Carapicuíba (SP): valor por mês e aula | ✅ fronteira |
| `/personal-trainer/osasco-sp/` | Personal Trainer em Osasco (SP): valor por mês e por aula | ✅ fronteira |
| `/personal-trainer/jandira-sp/` | Personal Trainer em Jandira (SP): valor por mês e por aula | ✅ fronteira |
| `/personal-trainer/itapevi-sp/` | Personal Trainer em Itapevi (SP): valor por mês e por aula | ✅ fronteira |
| `/guias/hyrox-*` e `/guias/six-alphaville/` da região | — | ✖ são guias de Hyrox e de uma academia, não páginas de SEO local |

O site não tem páginas de variação de serviço por localidade (feminino,
domicílio, condomínio etc.) nem páginas por residencial de Alphaville. Se
elas forem criadas, entram aqui.

Para incluir uma página nova: acrescentar o slug em `VITRINE_PAGINAS`, com
introdução própria (as regras estão no topo do arquivo) e um `destaque`.

## Fonte dos dados

- `https://www.montinhopersonal.com.br/api/vitrine?origem=ppp`. O
  `?origem=ppp` é obrigatório: é o que faz o feed devolver os links
  rastreados deste site.
- Nada é copiado: textos, números, fotos e links vêm do feed. As fotos são
  as URLs absolutas do feed, sem download para o repositório.
- **Validação:** fotos e links só são aceitos com https no host
  www.montinhopersonal.com.br. Item com campo obrigatório faltando é
  descartado sozinho. Sem aviso, sem `nao_se_compare`, sem links ou com a
  lista vazia, a seção não renderiza.
- **Feed fora do ar:** `carregarVitrine()` devolve null, a seção some e a
  página abre normalmente. Não existe dado de reserva.
- Para simular a queda: `VITRINE_FEED_URL=https://exemplo.invalido/x npm run build`.

## Atualização: build, não ISR

O portal é Astro **estático, sem adaptador**. Não existe ISR nem
revalidação por página, então "ler no servidor com revalidação de 1 hora"
vira duas coisas:

1. **Hoje:** o feed é lido em todo build. Todo deploy (cada push na branch
   de produção) já traz os alunos atuais.
2. **Rebuild quando o feed muda** (aprovado pelo Renato em 15/11):
   `.github/workflows/vitrine-rebuild.yml`.
   - A cada hora, o workflow lê o feed e calcula o hash.
   - Só chama o Deploy Hook da Vercel se aquele conteúdo ainda não foi
     publicado. O hash vira a chave de um cache do Actions.
   - Com o feed igual, não há build.
   - Ressalva: o cache do Actions expira depois de 7 dias sem uso, e aí sai
     um rebuild a mais por semana mesmo sem mudança (inofensivo).
   - Falta configurar, uma vez: criar o Deploy Hook na Vercel (Settings →
     Git → Deploy Hooks, branch de produção) e gravar a URL no secret
     `VERCEL_DEPLOY_HOOK_VITRINE` do GitHub. Sem o secret, o workflow só
     avisa e não publica.

A alternativa seria pôr o adaptador `@astrojs/vercel` com ISR. Foi
descartada: mudaria a saída do build do site inteiro (1.400 páginas) para
servir cinco.

## Regras de texto (honestidade)

- **Eyebrow** "Resultados de alunos do personal Montinho" e **H2**
  "Resultados reais. Transformações de verdade.". Nunca dá a entender
  resultado do diretório ou de outros profissionais.
- A introdução de cada página fala do bairro e do atendimento, nunca dos
  alunos. Nada diz que eles moram ali.
- **Atendimento presencial citado:** Arena 18, condomínios e em casa.
  Nenhuma outra academia.
- Todas as introduções dizem que os resultados com foto são de
  emagrecimento.
- `acompanhamento` null (hoje, o da Bruna) some do "Acompanhamento" e do
  alt.

## atualizadoEm: não subiu, de propósito

O pedido proíbe mexer em title, description, H1, URL, canonical e schema, e
o `atualizadoEm` alimenta o `dateModified` do schema. Além disso, o
conteúdo da vitrine muda sozinho com o feed, sem revisão da página. Subir a
data aqui seria o bump oco que o CLAUDE.md quer evitar.

## Eventos do GA4

Os eventos só saem depois do consentimento, porque o `gtag` só existe a
partir dele.

| evento | quando | parâmetros |
|---|---|---|
| `vitrine_view` | uma vez por página, quando a seção entra na tela | `pagina` |
| `vitrine_comparador` | primeiro uso de cada comparador | `aluno` (slug), `como` (mouse/toque/teclado), `pagina` |
| `vitrine_cta_click` | "Quero começar minha transformação" | `pagina` |
| `vitrine_resultados_click` | "Ver todas as transformações" | `pagina` |

Os dois links também disparam o `clique_montinho` (Base.astro) e o
`clique_elemento` (`data-track="vitrine:cta"`), como qualquer link para o
site do Montinho.

## Validação feita em 15/11/2026

- **Build:** 1.405 páginas. A vitrine aparece em exatamente 5 páginas, e o
  H1 continua único.
- **Destaques:**
  - Alphaville: Natália
  - Tamboré: Adriana
  - Barueri: Elisa
  - Santana: Bruna
  - Aldeia: Adriana (o feed tem 4 alunos; a quinta página dá a volta)
- **Playwright**, Alphaville, Barueri e Aldeia, em 390×844 e 1280×900:
  51 checagens ok.
  - seção presente, H1 único, imagens carregadas;
  - sem rolagem horizontal;
  - arrasto 50% → 20%;
  - a dica some depois do uso;
  - o teclado move o range e o `--pos`;
  - foco visível no puxador.
- **Fora do escopo:** Granja Viana e São Paulo, sem a vitrine.
- **Sem JavaScript:** o comparador fica em 50%.
- **Feed simulado fora do ar (404):** o build completa e nenhuma página tem
  a seção.
- **Eventos:** com `gtag` falso, os 4 dispararam com os parâmetros certos.
  O toque saiu como `como: toque` (`touch-action: pan-y` conferido).
- **Validador:** 7 casos (lista vazia, sem links, link fora do host, foto
  fora do host, acompanhamento null, lixo).
- **`tsc`:** nenhum erro nos arquivos novos. Os 15 erros que aparecem são
  antigos, de outros scripts.
- **audit:canonical:** limpo. **audit:metadados:** no baseline de 79.

## 15/11/2026 — correção no Tamboré (fora da vitrine)

O "Conheça o personal" do Tamboré dizia que o Montinho atende "em
academias da região". Pela regra do atendimento confirmado, virou "em
casa ou na academia do condomínio; em outras academias, dependendo das
regras do local para personal externo e de combinação prévia". É revisão
real de texto, então o `atualizadoEm` do Tamboré subiu para 2026-11-15. As
outras quatro seções "Conheça o personal" não tinham a afirmação.

Na fronteira, a vitrine fica logo antes do vídeo do Montinho, porque essas
páginas não têm "Conheça o personal". O `atualizadoEm` delas não subiu,
pelo mesmo motivo das cinco primeiras.
