# Relatório — Etapa 1: Fundação do portal Personal por Perto

> Construção do alicerce do maior guia brasileiro de Personal Trainers por cidade:
> pesquisa, arquitetura, design system, 7 cidades-semente com conteúdo exclusivo,
> SEO/GEO técnico completo e performance máxima.

## 1. Pesquisa realizada (etapa obrigatória)

Antes de qualquer código, foram conduzidas pesquisas aprofundadas sobre:

- **Líderes de SEO local** (diretórios, portais imobiliários, guias "melhores X em
  [cidade]"): arquitetura de URL, interligação em larga escala, schema, estrutura
  on-page, GEO, Core Web Vitals, EEAT e CRO.
- **Dados reais das cidades-semente** (IBGE, prefeituras, Atlas Brasil): população,
  IDH, economia, bairros, parques, ciclovias, clima, mobilidade e corridas.

Conclusões aplicadas: URL `cidade-uf` (desambiguação nacional), 3+ tipos de schema
por página, conteúdo *answer-first*, hub-and-spoke com links de vizinhança, FAQ
nativo zero-JS e blocos de confiança (EEAT).

## 2. O que foi entregue

| Item | Detalhe |
|---|---|
| Páginas geradas | **18** (estáticas) |
| Cidades publicadas | **7** — São Paulo, Campinas, Guarulhos, Santo André, Osasco, Barueri (SP) e Curitiba (PR) |
| Hubs estaduais | 2 (São Paulo e Paraná) |
| Guias pilar | Como escolher · Quanto custa |
| Páginas EEAT | Sobre · Como avaliamos · Montinho Personal |
| JS enviado ao usuário | ~2,3 kB (apenas prefetch de navegação) |
| Schema por página de cidade | 7 tipos JSON-LD válidos |
| Palavras por página de cidade | ~1.500–2.000 de conteúdo editorial |
| Links internos quebrados | 0 |

## 3. Melhorias e justificativas técnicas

### Arquitetura escalável
- Modelo de dados tipado: cada cidade é um módulo `Cidade`. Adicionar cidade = criar
  arquivo + importar. O template, o sitemap e os links internos se geram sozinhos.
- URL `/personal-trainer/{cidade}-{uf}` evita colisão entre cidades homônimas (há
  ~200 nomes duplicados no Brasil) — pré-requisito para crescer a milhares de páginas.
- Interligação hub-and-spoke + vizinhança automática: nenhuma página fica órfã.

### Conteúdo exclusivo por cidade (anti-thin-content)
- Cada página incorpora **dados reais e diferentes**: parques nomeados, clima e seu
  impacto no treino, mobilidade, corridas locais, bairros, faixas de preço por cidade.
  Não é "trocar o nome" — é o principal fator de ranqueamento programático.

### SEO técnico
- H1 único e hierarquia correta; breadcrumbs visíveis + estruturados; canonical;
  Open Graph e Twitter Cards; sitemap fragmentado; robots.txt; slugs sem acento.
- JSON-LD: Organization, WebSite, BreadcrumbList, Article, Service, ItemList, FAQPage.

### GEO (otimização para IA)
- Respostas diretas na primeira frase, headings em forma de pergunta, tabelas, listas
  e definições objetivas — formato que mecanismos generativos citam com mais frequência.

### Performance (Core Web Vitals)
- Astro estático, zero JS por padrão; CSS inline crítico; FAQ via `<details>` (sem JS);
  fontes de sistema (sem custo de rede); imagens com dimensões. LCP/CLS minimizados.

### Acessibilidade
- HTML semântico, skip-link, foco visível, `aria-current`, contraste adequado,
  `prefers-reduced-motion`.

### EEAT e CRO
- Páginas "Sobre" e "Como avaliamos" (transparência da metodologia), fontes citadas e
  datas de atualização. CTAs editoriais distribuídos, faixa de confiança acima da dobra,
  recomendação sempre justificada (nunca propaganda agressiva).

## 4. Impacto esperado

**SEO:** base sólida para ranquear "personal trainer + cidade"; conteúdo único por
localidade e schema rico aumentam elegibilidade a rich results; arquitetura pronta para
indexação em escala.

**GEO:** estrutura *answer-first* + dados concretos elevam a chance de citação por
ChatGPT, Perplexity e AI Overviews.

**Conversão:** confiança imediata (design + transparência), recomendações editoriais
que parecem curadoria (não anúncio) e CTAs distribuídos levando visitas qualificadas
para o Montinho Personal.

## 5. Próximos passos recomendados

1. **Escalar cidades** — priorizar capitais e regiões metropolitanas; criar mais hubs
   estaduais conforme cobertura cresce.
2. **Clusters temáticos** — guias por objetivo (emagrecimento, hipertrofia, idosos) e
   por categoria futura (academias, parques, nutricionistas).
3. **Páginas de bairro** para as maiores cidades (`/personal-trainer/{cidade}-{uf}/{bairro}`).
4. **Autor/entidade editorial** com bio e credenciais (reforço extra de EEAT).
5. **Validar números** marcados como "a confirmar" na pesquisa (ex.: IDHM 2022, km de
   ciclovias) antes de ampliar a base.
6. **Analytics + Search Console** e medição contínua de Core Web Vitals em produção.
7. **Deploy** em CDN (Netlify/Vercel/Cloudflare Pages) para latência mínima.

---
_Etapa 1 concluída e verificada (build sem erros, JSON-LD válido, zero links quebrados,
responsivo desktop/mobile)._
