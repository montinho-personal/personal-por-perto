# Calculadora de composição corporal — auditoria, crítica e plano

Briefing de 06/10/2026 ("Como está minha composição corporal?"). Este
documento registra a auditoria, a crítica ao briefing, os prints do Google
(regra do CLAUDE.md: título, estrutura e FAQs só depois deles), a escolha
de métodos e as decisões de produto.

## 1. Auditoria do site

- **Nenhuma calculadora** de IMC, gordura, massa magra ou cintura. Nenhuma
  consulta desses temas passou do piso do Search Console de 30/09: não há
  tráfego a proteger nem canibalização a resolver.
- **Páginas vizinhas** (recebem e dão link):
  `/emagrecimento/gordura-visceral/`, `/emagrecimento/recomposicao-corporal/`,
  `/guias/avaliacao-fisica/` (dobras × bioimpedância, frequência de
  reavaliação), `/emagrecimento/como-perder-barriga/`.
- **Números já publicados no site**, que a ferramenta tem de repetir:
  cintura da OMS 94/102 cm (homens) e 80/88 cm (mulheres); cintura/altura
  com corte em 0,5 (gordura-visceral).

## 2. Crítica ao briefing — o que mudou

1. **Cards: de seis para cinco.** "Minha massa magra" sai da mesma conta do
   percentual de gordura (vira um card só); cintura/altura e cintura/quadril
   usam a mesma fita (um card "Medidas da cintura"). Entra "Acompanhar
   evolução" para quem volta.
2. **Histórico e comparação na Fase 1.** O briefing chama o retorno de
   métrica principal e põe o histórico na Fase 2. Salvar no aparelho e
   comparar com a avaliação anterior é simples; só os gráficos ficam para
   depois.
3. **Faixa honesta, não estreita.** A faixa mostrada vem do erro-padrão do
   método (~±3,5 pontos nas equações de circunferência), não de uma
   largura escolhida para parecer exata.
4. **Faixa etária em vez de idade** onde a fórmula não usa idade: menos de
   18 / 18–59 / 60+. Menor de 18 não recebe classificação adulta. (O modo
   dobras pede idade exata, porque as equações de Jackson & Pollock usam.)
5. **Sexo só onde a fórmula exige**, rotulado "Sexo usado pela fórmula".
6. **Sem toggle kg/lb na Fase 1.** A calculadora entende "1,75" e "175".
7. **Nenhuma medida sai do aparelho**: sem link de cálculo, sem query, só
   categorias no analytics; compartilhar envia a ferramenta, nunca o
   resultado.

## 3. Prints do Google

### 3.1 "calculadora percentual de gordura" (07/10)

- **Autocompletar:** 7 dobras · corporal · por circunferência · dobras
  cutâneas · marinha americana · 3 dobras · pollock 7 dobras · com fita
  métrica · 7 dobras feminino.
- **Outras pessoas pesquisaram:** 3 dobras · 7 dobras · marinha americana ·
  percentual de gordura feminino calcular · calcular gordura corporal com
  medidas · tabela percentual de gordura feminino.
- **Visão geral de IA:** recomenda calculadoras com fita métrica e explica
  o "método Navy" (homens: pescoço logo abaixo do pomo de adão, cintura na
  altura do umbigo).

**O que muda:**

- **Modo dobras cutâneas entra na Fase 1** (Jackson & Pollock 3 e 7
  dobras). Quatro das dez sugestões são de dobras: é quem fez avaliação
  com adipômetro e quer converter as medidas. O briefing não previa.
- **O método da Marinha é buscado pelo nome** — tem de aparecer nomeado,
  com o protocolo dele, mesmo que não seja o principal.
- **"Feminino" aparece duas vezes** (calcular e tabela): a página precisa
  de referência de percentual por sexo — só com fonte rastreável.

### 3.2 "percentual de gordura fita métrica" (07/10)

- **Autocompletar:** fita métrica · como medir percentual de gordura **sem**
  fita métrica · com fita métrica · com fita.
- **Outras pessoas pesquisaram:** qual o percentual de gordura ideal **por
  idade** · feminino · tabela feminino · calculadora · **masculino** ·
  cálculo 7 dobras.
- **As pessoas também perguntam:** Quanto é 20% de gordura corporal? · Onde
  medir o percentual de gordura? · Quanto é 1% de gordura? · Quanto é 15% de
  gordura corporal?
- **Visão geral de IA:** método da Marinha; fita maleável que não estique;
  em pé, ombros relaxados, fita justa sem apertar; altura sem sapatos.
- **Concorrência visível:** snippet com "ideal nos homens entre 6 a 24% e
  nas mulheres entre 14 a 31%" (são as faixas da ACE, tabela comercial —
  ver seção 4); fabiotakai.com.br (nutricionista) com calculadora da
  Marinha.

**O que muda:**

- **"Por idade" pede referência por faixa etária** — e só com fonte
  científica (candidata: Gallagher et al. 2000, por sexo e idade). Reforça
  pedir a faixa etária, não só "adulto".
- **"Quanto é 15% / 20% / 1%" vira bloco próprio**: o que o percentual
  significa em quilos para o peso da pessoa (no resultado) e na página,
  com exemplo. É a pergunta de quem acabou de receber o número.
- **"Onde medir"**: as instruções de medição são intenção de busca, não
  só ajuda de formulário — merecem seção no texto, com as ilustrações.
- **"Sem fita métrica"**: responder no texto (barbante + régua, ou o que
  dá para estimar só com peso e altura, e por que o erro é maior).
- **"Masculino"** aparece ao lado de "feminino": referência por sexo dos
  dois lados.

## 4. Métodos

Em pesquisa (fontes primárias: Hodgdon & Beckett 1984, Exército dos EUA
2023, Woolcott & Bergman 2018 — RFM, Jackson & Pollock 1978/1980, Siri
1961, OMS 2008/2011, NICE 2022). Decisão registrada aqui quando a pesquisa
fechar.
