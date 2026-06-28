# Personal por Perto

O maior guia editorial brasileiro de **Personal Trainers por cidade**. Portal de
SEO local construído para escalar para milhares de cidades, com conteúdo exclusivo
por localidade, performance máxima (Core Web Vitals) e estrutura otimizada para
busca tradicional e para mecanismos de IA (GEO).

## Stack

- **[Astro](https://astro.build)** — site estático, zero JS por padrão, ideal para
  conteúdo + SEO + performance.
- **TypeScript** — modelo de dados tipado (`src/lib/types.ts`).
- **CSS puro** com design system em `src/styles/global.css` (custo de runtime zero).
- **`@astrojs/sitemap`** — sitemap automático e fragmentado (escala >50k URLs).

## Arquitetura

```
/                                  Home (guia nacional)
/personal-trainer                  Diretório de cidades (hub)
/personal-trainer/{cidade}-{uf}    Página da cidade (money page)
/estado/{estado}                   Hub estadual (regional)
/guias                             Índice de guias
/guias/como-escolher-personal-trainer
/guias/quanto-custa-personal-trainer
/sobre                             Sobre o portal (EEAT)
/como-avaliamos                    Metodologia / transparência (EEAT)
/montinho-personal                 Recomendação editorial
```

Modelo **hub-and-spoke**: Home → Hubs estaduais → Páginas de cidade, com
interligação horizontal entre cidades vizinhas (`vizinhas` em cada cidade).

### Por que `cidade-uf` na URL

O sufixo da UF (ex.: `sao-paulo-sp`) desambigua os ~200 nomes de cidade
duplicados no Brasil — essencial para escalar sem colisão de slugs.

## Adicionar uma cidade

1. Crie `src/data/cidades/{slug}.ts` exportando `cidade: Cidade` (use um arquivo
   existente como modelo — todos os campos são tipados).
2. Importe e adicione ao array em `src/data/cidades/index.ts`.
3. Defina `vizinhas` com os slugs das cidades próximas (interligação).
4. `npm run build`. A página, o sitemap e os links internos são gerados sozinhos.

> Regra de ouro: **nada de "trocar só o nome"**. Cada cidade precisa de dados reais
> (população, parques, clima, mobilidade, corridas) — é o que diferencia as páginas
> e sustenta o ranqueamento.

## Comandos

```bash
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento (localhost:4321)
npm run build    # build de produção -> dist/
npm run preview  # serve o build localmente
```

## SEO / GEO embutido

- JSON-LD por página: `Organization`, `WebSite`, `BreadcrumbList`, `Article`,
  `Service`, `ItemList`, `FAQPage` (7 tipos nas páginas de cidade).
- Meta title/description, canonical, Open Graph, Twitter Cards.
- Breadcrumbs visíveis + estruturados.
- FAQ nativo (`<details>`, zero JS) com `FAQPage` schema.
- Conteúdo *answer-first*, headings em forma de pergunta, tabelas e listas (GEO).
- Sitemap + `robots.txt`.

## Conteúdo das cidades

Os dados locais foram reunidos de fontes públicas (IBGE, prefeituras, Atlas Brasil).
As faixas de preço são estimativas de mercado, sinalizadas como referência.
