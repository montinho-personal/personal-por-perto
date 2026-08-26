# Mapa Fitness da Cidade — documentação

## O que é

A seção interativa dentro de `Onde treinar em [cidade]` nas 980 páginas locais.
Reúne parques, pistas, academias e espaços públicos de exercício em uma lista
filtrável e, quando há coordenadas verificadas, em um mapa.

**Lista primeiro, mapa depois.** A lista funciona sem JavaScript, sem
coordenada e sem provedor de mapas. O mapa é um realce.

## Arquitetura

| Arquivo | Papel |
|---|---|
| `src/lib/fitnessPlaces.ts` | Modelo, derivação a partir do dado editorial, filtros, limiares |
| `src/data/fitnessGeo.ts` | Coordenadas verificadas + caixas delimitadoras por município |
| `src/components/MapaFitness.astro` | Interface renderizada no servidor |
| `src/scripts/mapaFitness.client.ts` | Filtros, sincronização lista↔mapa, medição |
| `scripts/ingest-fitness-geo.ts` | Ingestão de coordenadas do OpenStreetMap |
| `scripts/test-fitness.ts` | Testes |

## De onde vêm os locais

**Não há base nova.** Os locais são derivados do que a redação já apurou e
publicou em `src/data/cidades/*.ts`:

- `parques[]` → parque, praça, centro esportivo ou pista (pelo nome próprio);
- `corridas[]` → corrida;
- `academiasProximas[]` → academia (comercial) ou academia ao ar livre
  (quando o nome indica espaço público).

As **características** (pista de caminhada, iluminação, aparelhos, aberto 24h)
são extraídas do próprio texto editorial por padrões declarados em
`PADROES_CARACTERISTICA`. Se o texto não afirma, o campo não existe. O teste
`test:fitness` verifica isso em todos os 4.845 locais.

## Limiares

```ts
MIN_LOCAIS_PARA_MAPA = 3   // abaixo disto a seção não aparece
MIN_COORDS_PARA_MAPA = 3   // abaixo disto o mapa gráfico não é desenhado
```

Cidade abaixo do primeiro limiar mantém a lista editorial em prosa — nunca uma
caixa cinza vazia.

## Como adicionar coordenadas a uma cidade

```bash
npm run fitness:geo -- campinas-sp        # uma cidade
npm run fitness:geo -- --piloto           # as 10 da fase 1
npm run test:fitness && npm run build
```

**Rode de uma máquina com rede aberta.** O ambiente de desenvolvimento em
nuvem bloqueia `nominatim.openstreetmap.org` (403 no gateway).

O script busca cada local no OpenStreetMap e só grava o que passa em quatro
travas:

1. o município precisa ter caixa delimitadora obtida do OSM;
2. a coordenada precisa cair dentro dessa caixa;
3. o nome retornado precisa ter semelhança mínima com o nome editorial;
4. academias comerciais são sempre recusadas — endereço de estabelecimento
   muda e exige verificação própria.

O que não passa é listado no console para conferência manual. **Um pino errado
custa mais do que dez pinos ausentes.**

## Como adicionar uma cidade nova ao portal

Nada a fazer. Assim que a cidade tiver 3 locais em `parques`, `corridas` ou
`academiasProximas`, a seção aparece sozinha. As coordenadas são um passo
posterior e opcional.

## Licença dos dados

Coordenadas vêm do **OpenStreetMap**, sob ODbL: uso comercial permitido com
atribuição (emitida no rodapé do mapa) e mesma licença para bases derivadas.
Nada é copiado de bases proprietárias e não há scraping.

Os tiles usam `tile.openstreetmap.org`. A política de uso do OSM é voltada a
volume baixo — antes de escalar para centenas de cidades com mapa, migrar para
um provedor de tiles pago (Stadia, Carto ou similar). O código isola isso em
uma linha de `mapaFitness.client.ts`.

## Custo

Hoje: **zero**. Leaflet é empacotado no próprio domínio (dependência npm,
~150 KB baixados sob demanda) e os tiles são gratuitos no volume atual. O
risco de custo aparece só quando muitas cidades tiverem mapa — daí a migração
de provedor acima.

## Eventos de analytics

`fitness_map_view`, `fitness_map_filter`, `fitness_map_interaction`,
`fitness_map_location_select`, `fitness_map_directions_click`.

Parâmetros: `city`, `state`, `location_category`, `filter`, `results`, `pins`.
**Nunca** a localização precisa de quem navega.

## O que ainda não existe

- Geolocalização "usar minha localização" e busca por bairro (fase 2, dependem
  de haver coordenadas);
- agrupamento de pinos (só necessário acima de ~50 pontos por cidade);
- página própria por local;
- camada de profissionais.
