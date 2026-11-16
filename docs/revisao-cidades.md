# Revisão das páginas de cidade (SEO local)

**Pausada em 16/11/2026 (noite)**: a cota do SerpApi não comporta esta rotina junto com a de artigos (`AGENTS.md`, "Cota"). Volta quando o Renato decidir.

Rotina pedida pelo Renato em 16/11/2026: **2 cidades por dia**, pela ordem de
impressões no Search Console, com pesquisa no SerpApi no lugar dos prints.
Continua o trabalho de `docs/intencoes-locais.md` (prints de 30/09 a
08/10/2026, 80 cidades).

## Fila

- Ordem: impressões em 28 dias no GSC (Supermetrics GW, pagepath =@
  /personal-trainer/, somando URLs com e sem barra final), maior primeiro.
- **Pula** as cidades já revisadas: as que têm `metaFoco` ou `faqsBusca` no
  arquivo da cidade, as que têm seção em `docs/intencoes-locais.md` e as
  que estão na tabela "Revisadas" abaixo. Também pula páginas de bairro
  (`src/data/bairros.ts`) — ficam para uma fase própria.
- Em 16/11, primeiras da fila: Montes Claros (151 impr.) e Palhoça (139).

## Método (por cidade)

1. **GSC da página** (28 dias, consulta × página): o que já traz impressão e
   clique, e em que posição.
2. **SerpApi**, uma busca por cidade: `personal trainer <cidade>` na página
   (`device: mobile`, `location` = `canonical_name` da cidade em
   serpapi.com/locations.json) + o autocompletar. Visão de IA só se vier
   (um pedido a mais com o `page_token`). Guardar mapa (`local_results`).
   Cota: ~3 buscas por cidade, ~6 por dia, ~180 por mês — a conta do SerpApi
   é a mesma dos outros sites; se faltar cota, parar e avisar o Renato.
3. **Aplicar** com os mecanismos que já existem (`src/lib/types.ts`):
   - `metaFoco: 'preco'` quando o PAA/autocompletar pede preço — **mas não
     mexer em título que já ranqueia e recebe clique** (Palhoça, 16/11);
   - `faqsBusca` (`precoMensal`, `duasVezes`, `taxaPersonal`, `instagram`,
     `onlineOuPresencial`, `barato`, `precoRegiao`) conforme o que apareceu;
   - `faqsExtra` escritas à mão só para pergunta local que o gerador não
     cobre, com fato verificável;
   - corrigir o que estiver errado na página (vizinhas que não são vizinhas,
     fato local desatualizado), sempre com fonte;
   - academias: não mexer aqui (rotina própria).
4. **Fora, por regra:** "personal mulher" (o portal não lista profissionais),
   nomes de profissionais e studios do mapa, política de personal em rede
   de academia sem fonte oficial, sigla do conselho, "perto de mim".
5. **Buscas que ficaram de fora → pauta** (regra do CLAUDE.md): vale um
   artigo / cabe em página existente (anotar no doc dela) / não recomendo.
   Bairro que aparece no autocompletar ou no orgânico entra como
   "bairro candidato" aqui, sem criar página.
6. `atualizadoEm` da cidade sobe no mesmo commit (revisão real). Build,
   audit:canonical, audit:links, conferir no HTML, commit, push.
7. Resumo ao Renato com as intenções por tipo (autocompletar, PAA, outras
   pesquisas, IA, mapa e quem ranqueia), o que entrou e o que ficou de fora.

## Revisadas

| data | cidade | GSC (28 dias) | o que mudou | ficou de fora / pauta |
|---|---|---|---|---|
| 16/11/2026 | Montes Claros (MG) | 151 impr., 0 clique; "personal trainer montes claros" pos. 10,8; página em 7º no SerpApi | `metaFoco: 'preco'` (title "valor por mês e aula"), `faqsBusca.precoMensal` — as 3 PAA eram de preço; vizinhas: BH, Uberlândia e Contagem (400 km+) → Janaúba, Januária, Pirapora e BH | AC "mulher" (regra), "academia trainer studio personal" (negócio local), "monte carmelo" (outra cidade); PAA "Pode treinar 1 hora da manhã?" → cabe em `personal-trainer-para-quem-trabalha-a-noite` (anotado) |
| 16/11/2026 | Palhoça (SC) | 139 impr.; "personal trainer palhoça" 3 cliques, pos. 10,7; "consultoria online musculacao palhoca" pos. 3,3; página em **2º** no SerpApi | só `faqsBusca.precoMensal` (PAA "Qual o valor que cobra um personal trainer?"); **título mantido**, porque ranqueia e recebe clique | PAA "O que não se deve fazer depois do treino?" → candidato a artigo (baixa); "personal mais famosa do Brasil", "nome correto de personal", salário (Indeed) → não recomendo; mapa só com studios (nomes não entram); **bairro candidato: Aririú** (Cronoshare tem página do bairro) |

Evidência: `docs/pesquisas/revisao-cidades/AAAA-MM-DD-<slug>.json`.

## Já revisadas antes desta rotina (marcador `metaFoco`/`faqsBusca`, 16/11)

aguas-claras-df aldeia-da-serra-sp alphaville-sp aracaju-se barueri-sp bauru-sp bebedouro-sp belem-pa belo-horizonte-mg birigui-sp blumenau-sc boa-vista-rr brasilia-df cabo-frio-rj camacari-ba campinas-sp caraguatatuba-sp carapicuiba-sp cascavel-pr cotia-sp cuiaba-mt curitiba-pr embu-das-artes-sp eusebio-ce florianopolis-sc fortaleza-ce goiania-go granja-viana-sp indaiatuba-sp itaguai-rj itanhaem-sp itapema-sc itapevi-sp jandira-sp januaria-mg jau-sp joao-pessoa-pb joinville-sc juiz-de-fora-mg jundiai-sp lavras-mg limeira-sp londrina-pr maceio-al manaus-am maringa-pr montes-claros-mg mossoro-rn natal-rn niteroi-rj osasco-sp palhoca-sc piracicaba-sp porto-alegre-rs porto-velho-ro praia-grande-sp recife-pe ribeirao-preto-sp rio-das-ostras-rj rio-de-janeiro-rj salvador-ba santa-barbara-doeste-sp santa-cruz-do-sul-rs santana-de-parnaiba-sp santo-andre-sp santos-sp sao-joao-del-rei-mg sao-jose-do-rio-pardo-sp sao-jose-do-rio-preto-sp sao-luis-ma sao-paulo-sp sao-raimundo-nonato-pi sobral-ce sorocaba-sp taguatinga-df tambore-sp teresina-pi toledo-pr uberlandia-mg umuarama-pr valinhos-sp vitoria-es
