# Prompt: calculadora de preço do personal no Onde Treinar Alphaville (18/11/2026)

Pedido do Renato em 18/11/2026. Cole o bloco abaixo numa sessão do outro
blog. Ele descreve a ferramenta deste site sem mandar copiar o texto: a
versão de lá tem de ser local, para não virar conteúdo duplicado nem
disputar a mesma busca com o Personal por Perto.

---

Neste site, Onde Treinar Alphaville, quero uma calculadora de preço de personal trainer para Alphaville e região, no mesmo espírito da que existe no Personal por Perto (https://www.personalporperto.com.br/ferramentas/calculadora-preco-personal/). Antes de começar, leia o CLAUDE.md deste repositório e siga as regras daqui; onde este prompt e o CLAUDE.md divergirem, o CLAUDE.md vence.

**1. Pesquisa antes de escrever.** Título, H1, seções, tabela e FAQs só depois da pesquisa no SerpApi, como o CLAUDE.md deste site manda (celular, região de Barueri ou Santana de Parnaíba conforme o canonical_name em serpapi.com/locations.json). Faça 2 ou 3 buscas, por exemplo: "personal trainer alphaville preço", "quanto custa personal trainer alphaville" e "personal trainer em condomínio alphaville". Guarde o JSON enxuto em docs/pesquisas/ e anote no doc da peça o que cada intenção mudou. Se faltar cota ou der erro de chave, pare e me avise.

**2. O que a ferramenta faz (a mecânica que funciona no outro site).**
- A pessoa escolhe: local (Alphaville, Tamboré, Aldeia da Serra, centro de Barueri, Santana de Parnaíba — use só os recortes que a pesquisa e os seus dados sustentarem), formato (no condomínio, na academia, a domicílio, online) e frequência (1 a 5 vezes por semana).
- O resultado é sempre FAIXA, nunca valor exato: por aula e por mês.
- Sessões por mês = vezes por semana × 52 ÷ 12, arredondado (2× ≈ 9, 3× ≈ 13).
- Arredondamento único e declarado: até R$ 1.000, para a dezena; acima, para a cinquentena.
- Online é mensal, não por sessão.
- Mostre a memória do cálculo, linha a linha, para quem quiser conferir.
- Se um recorte não tiver dado próprio, use o mais amplo e diga isso na tela ("referência de Barueri"). Fallback nunca é silencioso.
- Cálculo no navegador, sem servidor e sem IA: preço é conta, não texto gerado.

**3. Honestidade dos números (a regra mais importante).** As faixas do Personal por Perto NÃO são pesquisa de campo: são estimativas editoriais por perfil de cidade. Hoje elas dizem, para presencial em pacote de 2 a 3 vezes por semana e por aula avulsa:
- Alphaville: avulsa R$ 100 a 250; mensal R$ 500 a 1.500; online R$ 220 a 550.
- Barueri: avulsa R$ 90 a 220; mensal R$ 450 a 1.300; online R$ 200 a 500.
- Santana de Parnaíba: avulsa R$ 90 a 220; mensal R$ 450 a 1.300; online R$ 190 a 500.
Você pode partir delas, sempre rotuladas como "referência editorial". Nunca chame de "preço médio", nunca cite tamanho de amostra que não existe e nunca dê valor exato. Se este site tiver preços reais coletados (de personais da região, com data e fonte), use-os e diga quantos são e de quando. Preço de rede de academia ou de studio só entra com fonte oficial. Sem fonte, fica fora.

**4. O que tem de ser local, para não duplicar o outro site.** Texto, exemplos, FAQs e tabela escritos para Alphaville: personal no condomínio (taxa ou regra do condomínio, se houver fonte), academia com taxa de personal externo (só com fonte oficial da academia), deslocamento entre residenciais, horários. Não copie frases da página do Personal por Perto. Para outras cidades, linke a calculadora de lá em vez de recriar.

**5. Regras de conteúdo.** Sem sigla do conselho profissional (CREF/CONFEF), sem nomes de personais, sem promessa de resultado. URLs com barra final. Um commit com a pesquisa, a ferramenta e o doc da peça; build e auditorias que este repositório tiver.

**6. Na resposta final, me mande:** o link; as intenções de busca separadas por tipo (autocompletar, "As pessoas também perguntam", "Outras pessoas pesquisaram", visão de IA com quem cita, quem ranqueia), com o que entrou e o que ficou de fora; de onde veio cada faixa de preço; e a proposta de título e descrição.

---
