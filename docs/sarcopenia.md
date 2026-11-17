# Artigo: Sarcopenia (`/musculacao/sarcopenia/`)

Item 3 da pauta (parte 1). Pedido do Renato em 17/11/2026 ("pode criar
esses dois"). Pesquisa no SerpApi antes do texto (celular, São Paulo).

Recorte: `musculacao-depois-dos-40`, `personal-trainer-para-terceira-idade`
e `mounjaro-e-idosos` citam a sarcopenia de passagem; aqui é a condição.
Diagnóstico é do médico; ressalva de médico em dor, queda, doença renal e
vitamina D.

**"Cura" é palavra proibida no site** (`audit:metadados`, regra de não
prometer cura). A busca mais forte do autocompletar é "sarcopenia tem cura";
ela foi respondida como "Dá para reverter a sarcopenia?" (H2 e FAQ).

## Buscas (SerpApi, 17/11/2026)

JSON em `docs/pesquisas/2026-11-17-sarcopenia/1.json` e `2.json`:
1. sarcopenia
2. como reverter a sarcopenia (visão de IA expandida: 1 crédito a mais)

**Formato:** orgânicos de blogs de médicos e de marcas de suplemento
(Karlla Claudino, Central Nutrition, Herbalife, ArtPharma), YouTube Shorts,
Instagram, UFMG e jornais. Nenhum hospital ou sociedade médica no topo:
concorrência fraca. Sem mapa.

**Visão de IA:** definição em uma frase ("doença… perda progressiva de
massa, força e função"), listas de causas, sintomas, diagnóstico (preensão,
sentar-levantar, DEXA, panturrilha, marcha) e tratamento (força, proteína
1,0–1,5 g/kg, acompanhamento). Cita Einstein, Sírio-Libanês, Instituto da
Cultura Científica, Journal of Hospital Sciences, YouTube, Instagram. Na
busca 2, cita Sírio-Libanês, diabetesjournals.org, MAG, ge e Terra. O lead
responde do mesmo jeito, com o consenso europeu de 2019 (EWGSOP2).

| sinal | onde entrou / por que ficou fora |
|---|---|
| AC "o que é", "significado" (PAA), "é uma doença", "é grave" | lead, H2 "O que é", H3 "É uma doença? E o CID?", FAQ |
| AC "sintomas", "sintomas e tratamento" | H2 "Sintomas e sinais" |
| IA diagnóstico (preensão, DEXA, marcha) | H2 "Como é feito o diagnóstico": EWGSOP2 em 3 etapas; corte de preensão (<27 kg homens, <16 kg mulheres) conferido em dois estudos que citam o consenso; SARC-F pelas diretrizes ICFSR 2018 |
| IA "sentar e levantar da cadeira em 30 segundos", "panturrilha", "4 metros" | só qualitativo: os pontos de corte não puderam ser lidos na fonte (texto completo inacessível no ambiente) |
| AC "tem cura", "tem cura em idoso", "tratamento", "como tratar", PAA "O que fazer para curar sarcopenia?", "Como tratar a sarcopenia?", busca 2 "como reverter… em idosos" | H2 "Dá para reverter a sarcopenia?" e "Como deve ser o treino", FAQs — Fiatarone 1994, Peterson 2010, ICFSR 2018 (sem a palavra "cura") |
| PAA "Qual o melhor alimento para quem tem sarcopenia?", "O que é bom para repor massa muscular em idosos?", IA proteína | H2 "Alimentação: quanta proteína" (PROT-AGE 2013) + FAQ + bloco calculadora-de-proteina |
| PAA "Qual a vitamina para evitar sarcopenia?" | H3 "E a vitamina D?" + FAQ (ICFSR: sem recomendação) |
| PAA "Qual é o pior hábito que causa sarcopenia?" | H2 de causas + FAQ |
| AC "cid", "cid 10" | H3 do CID: M62.84 na versão americana (Anker 2016); código no laudo é do médico |
| AC "em jovens" | H2 "Sarcopenia em jovens" + FAQ (EWGSOP2: pode aparecer antes) |
| AC "mounjaro" | item "Emagrecer rápido sem treinar" com link para `como-evitar-perda-de-massa-muscular` |
| AC "causa dor" | só a ressalva: dor vai para o médico (sem fonte para afirmar se causa ou não) |
| IA "comum a partir dos 40, acelera depois dos 60", "colágeno", "pilates ou hidroginástica" | ✖ fora: IA não é fonte; sem estudo conferido |

Ferramenta no corpo: `calculadora-de-proteina`, depois das metas do
PROT-AGE. Sem vídeo (nenhum Short do tema).

## Título e descrição

Artigo novo: definidos na criação. "Tem cura" ficou fora do título pela
regra do site.

## Buscas que ficaram de fora → pauta

- **Vale um artigo:** nenhuma nova.
- **Cabe em página existente:** "colágeno para massa muscular" (IA) →
  FAQ em `suplementos-que-nao-funcionam`, se houver fonte, na próxima
  revisão dela.
- **Não recomendo:** "sarcopenia causa dor" como artigo (sem fonte direta;
  pede médico).
