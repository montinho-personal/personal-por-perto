# Revisão das páginas de cidade (SEO local)

**Reativada em 16/11/2026**: o Renato liberou os créditos do SerpApi e decide quando acabarem.

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
| 17/11/2026 | Franca (SP) | 116 impr., 0 clique; "personal trainer" pos. 5,2 (32 impr.); "valor personal trainer" e "valor… 3 vezes por semana" pos. 4; página fora do top 10 no SerpApi | `metaFoco: 'preco'` (title "valor por mês e por aula"), `faqsBusca.precoMensal` e `duasVezes` — a 1ª PAA é de preço e o GSC traz "3 vezes por semana"; vizinhas mantidas (Batatais e Ribeirão Preto são as cidades da região que o portal tem) | PAA da sigla do conselho (regra), "quantos personal trainers existem no Brasil" e "a mais famosa" (fora do tema local); AC "mulher" (regra) e cidades homônimas da Itália e de Portugal; outras pesquisas = academias (Selfit, V6, Franca Fitness: rotina de academias); mapa e orgânicos = studios e profissionais (regra). Sem bairro candidato |
| 17/11/2026 | São Leopoldo (RS) | 92 impr., 0 clique; "personal trainer" pos. 6,7; "valor de um personal trainer" pos. 2,7; "quanto custa…" pos. 2–6; página fora do top 10 no SerpApi | `metaFoco: 'preco'` (title "valor por mês e aula"), `faqsBusca.precoMensal` e `duasVezes` — 3 das 4 PAA são de preço ("1 mês", "valor médio", "2 vezes por semana"); vizinhas conferidas (Novo Hamburgo, Canoas, Porto Alegre) | PAA "Pode treinar 1 hora da manhã?" → já na pauta (FAQ em `personal-trainer-para-quem-trabalha-a-noite`); mapa e orgânicos = profissionais, Instagram e marketplaces (regra). Sem bairro candidato |
| 18/11/2026 | Guarapari (ES) | 85 impr., 0 clique; "personal trainer" pos. 5,6 (15 impr.); página fora do top 10 no SerpApi | `metaFoco: 'preco'`, `faqsBusca.precoMensal` e `onlineOuPresencial` — PAA "Quanto custa por mês?" e "melhor personal online"; vizinhas mantidas (Vila Velha faz divisa; Vitória e Cariacica são da Grande Vitória) | PAA "O que é um personal trainer?" e "o melhor do Brasil" (genérica / pessoa); AC "personal trainer guará" (outra cidade); mapa e orgânicos = studios, Facebook e diretórios (regra). Sem bairro candidato |
| 18/11/2026 | Barreiras (BA) | 53 impr., 0 clique; "personal trainer" pos. 6,4; página fora do top 10 no SerpApi | `metaFoco: 'preco'`, `faqsBusca.precoMensal` e `duasVezes` — PAA "Quanto custa um personal 2 vezes por semana?"; **vizinhas corrigidas**: eram Salvador e Vitória da Conquista (600 km ou mais), passam a Luís Eduardo Magalhães e São Desidério (divisa) + Salvador como capital | PAA "É vantajoso pagar um personal trainer?" → cabe em `/guias/vale-a-pena-contratar-personal-trainer/`; "bio do Instagram fitness" (fora do tema); "a mais famosa" (pessoa); outras pesquisas = academias (Selfit, Bluefit, Profit: rotina de academias); mapa e orgânicos = profissionais e studios (regra). Sem bairro candidato |
| 19/11/2026 | Marituba (PA) | 58 impr. na cidade, 0 clique; "personal trainer" pos. 5,5 (12 impr.); "academia personal" pos. 25,7; página fora do top 10 no SerpApi | vizinhas: Castanhal (não faz divisa) → Benevides (IBGE, perfil municipal; FAPESPA); sem PAA nem sinal de preço, então sem `metaFoco` nem `faqsBusca` | autocompletar veio de Curitiba (o Google corrigiu "marituba"): nada aproveitável; outras pesquisas = academias (Skyfit, Evolution: rotina de academias); orgânicos de Itaituba e Breves (outras cidades), Instagram e diretórios; mapa = studios e profissionais (regra). Sem bairro candidato |
| 19/11/2026 | Araruama (RJ) | 52 impr., 0 clique; "personal trainer" pos. 5,5 (13 impr.); página fora do top 10 no SerpApi | `metaFoco: 'preco'`, `faqsBusca.precoMensal` e `onlineOuPresencial` — PAA "Quanto custa 1 mês de personal trainer?" e "Qual é o melhor personal trainer online?"; vizinhas: Maricá (não faz divisa) → São Pedro da Aldeia (Decreto-Lei estadual 1.056/1943, limites) | PAA "precisa de faculdade para ser personal" (leva à sigla do conselho), "nutrólogo em Araruama" (outro serviço); AC "personal trainer arraial do cabo" (outra cidade, já tem página); orgânicos = Local Treino, 99coach, Solutudo, Facebook e Instagram; mapa = profissionais e studio (regra). Sem bairro candidato |

Evidência: `docs/pesquisas/revisao-cidades/AAAA-MM-DD-<slug>.json`.

## Já revisadas antes desta rotina (marcador `metaFoco`/`faqsBusca`, 16/11)

aguas-claras-df aldeia-da-serra-sp alphaville-sp aracaju-se barueri-sp bauru-sp bebedouro-sp belem-pa belo-horizonte-mg birigui-sp blumenau-sc boa-vista-rr brasilia-df cabo-frio-rj camacari-ba campinas-sp caraguatatuba-sp carapicuiba-sp cascavel-pr cotia-sp cuiaba-mt curitiba-pr embu-das-artes-sp eusebio-ce florianopolis-sc fortaleza-ce goiania-go granja-viana-sp indaiatuba-sp itaguai-rj itanhaem-sp itapema-sc itapevi-sp jandira-sp januaria-mg jau-sp joao-pessoa-pb joinville-sc juiz-de-fora-mg jundiai-sp lavras-mg limeira-sp londrina-pr maceio-al manaus-am maringa-pr montes-claros-mg mossoro-rn natal-rn niteroi-rj osasco-sp palhoca-sc piracicaba-sp porto-alegre-rs porto-velho-ro praia-grande-sp recife-pe ribeirao-preto-sp rio-das-ostras-rj rio-de-janeiro-rj salvador-ba santa-barbara-doeste-sp santa-cruz-do-sul-rs santana-de-parnaiba-sp santo-andre-sp santos-sp sao-joao-del-rei-mg sao-jose-do-rio-pardo-sp sao-jose-do-rio-preto-sp sao-luis-ma sao-paulo-sp sao-raimundo-nonato-pi sobral-ce sorocaba-sp taguatinga-df tambore-sp teresina-pi toledo-pr uberlandia-mg umuarama-pr valinhos-sp vitoria-es
