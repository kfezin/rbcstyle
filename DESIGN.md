# Rbc_tranças | Trancista — Design system

## Direção

**Trama editorial:** uma capa de revista construída a partir do recorte PNG de tranças fornecido na pasta Menu Header, alinhado à borda direita, e da assinatura verbal que a Rebeca já usa. A fotografia abre a página; o catálogo e as informações de atendimento vêm depois, com leitura direta. O motivo proprietário é a linha de divisão do cabelo, reduzida a um filete que reaparece como divisor — sem selos, molduras ou ornamentos em excesso.

A página fala em primeira pessoa quando é a Rebeca quem fala. O texto comunica estilos, cidade e próximo passo; não cria avaliações, resultados, anos de experiência, tempos de execução ou regras.

## Paleta

| Token | Hex | Uso |
|---|---|---|
| Café de tinta | `#281C19` | Texto principal, cabeçalho e fundos de alto contraste. |
| Vinho trança | `#51262D` | Capa, seção de catálogo e blocos de contato. |
| Marfim | `#F5EFE6` | Fundo predominante e texto em superfícies escuras. |
| Cobre escuro | `#874431` | Links, botões sobre marfim, filetes e estados de foco. |
| Dourado fosco | `#B58A52` | Detalhe curto em filete ou marcador; não usar em texto pequeno sobre marfim. |
| Cacau neutro | `#685B55` | Texto auxiliar sobre marfim, com contraste AA. |

**Contraste:** texto corrido café/marfim e marfim/vinho atende WCAG AA; cobre escuro é o acento legível em fundo claro. Dourado é somente decorativo. Foco visível usa contorno de cobre escuro com deslocamento e espessura suficiente.

## Tipografia

- **Cormorant Garamond 500/600:** H1, títulos editoriais, frase da Rebeca e rótulo RBC. Uso em caixa normal; itálico não é necessário para criar hierarquia.
- **Manrope 400/500/600/700:** navegação, texto, tabela, metadados, botões e chips.
- As duas famílias já estão instaladas via Fontsource. Não carregar fontes de terceiros.
- H1 fluido (`clamp(3.25rem, 8.3vw, 8.5rem)`), H2 `clamp(2.7rem, 6vw, 5.6rem)`, H3 `1.35–1.8rem`, corpo `0.9–1rem`, legenda `0.72–0.82rem`.
- Corpo e descrição com linha de até `68ch`; nenhum parágrafo longo sobre uma imagem.

## Espaçamento, cantos e sombra

- Unidade-base `4px`; escala: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`.
- Seções: `clamp(4.5rem, 9vw, 8rem)` vertical; laterais `clamp(1.1rem, 5vw, 5rem)`.
- Conteúdo limitado a `82rem`; grid de catálogo 4 colunas em telas largas, 2 em tablets e 1 no celular.
- Cantos: 10px em controles, 18px em cards, arco de topo nas molduras fotográficas, 999px só em CTA/chip.
- Sombra apenas no menu móvel e diálogo; fotografia não recebe sombra pesada.

## Componentes

- **Cabeçalho:** wordmark RBC, navegação para Rebeca, estilos, galeria, valores e atendimento. Menu móvel operável pelo botão (`aria-expanded`, `aria-controls`, Escape e retorno de foco). O CTA de topo e o botão fixo têm rótulo específico para conversar sobre um estilo.
- **Capa:** fundo vinho, frase curta à esquerda, localização, dois caminhos claros (ver estilos e iniciar conversa) e PNG transparente de modelo com tranças ancorado à direita/borda inferior. O texto não identifica a pessoa como Rebeca. A imagem mantém proporção, usa `contain` e recebe dimensões explícitas. Em celular a chamada precede a imagem; não há texto por cima do rosto.
- **Sobre:** dois retratos reais (`rebeca-about.webp` e `rbc-cover-rebeca.webp`) em arcos lado a lado. As imagens mantêm proporção e não cortam o rosto; o nome e a frase real da bio acompanham a composição. A foto quadrada aparece no fechamento como sinal de conversa pessoal, sem recorte de rosto.
- **Cards de estilos:** quatro grupos com os nomes fornecidos. Cada cartão tem título e chips; o link já nomeia o grupo enviado no WhatsApp. Não são notas, rankings ou recomendações.
- **Tabela de valores:** uma linha por modelo, valor e duração como `[PREENCHER]`. Em telas pequenas a tabela se transforma em blocos legíveis, sem rolagem horizontal forçada. Adicionais são listados à parte, também com valor pendente.
- **Galeria:** 13 fotos únicas do portfólio, trilho horizontal nativo com `scroll-snap`, gesto horizontal no celular e botões anterior/próxima para mouse/teclado. Cada cartão tem descrição e botão de ampliar. Não há avanço automático. Filtros descrevem a aparência (“tranças longas”/“desenhos junto à cabeça”), não atribuem técnica incerta. `dialog` amplia a imagem, oferece legenda e CTA contextual; setas do teclado navegam e o foco retorna ao cartão que abriu.
- **Antes de agendar:** preparação, regulamento e formas de pagamento ficam em blocos separados. Campos não confirmados permanecem `[PREENCHER]`; nenhum termo da referência de unhas é reaproveitado como regra da Rebeca.
- **Localização:** exibe Lucas do Rio Verde/MT; endereço e ponto exatos ficam pendentes, sem mapa fictício.
- **FAQ:** `<details>/<summary>` nativo, uma resposta por linha, compatível com teclado; pergunta e resposta não repetem slogans.
- **CTA:** mínimo de 48px, contraste alto, seta se desloca somente em hover/foco. Texto do link informa que a ação é falar com a Rebeca ou consultar o modelo.
- **Rodapé/privacidade:** canais existentes, sem formulário ou rastreadores no código atual. Disclosure traz identificação e campos legais pendentes, sem afirmar conformidade concluída.

## Movimento

Todos os movimentos são opcionais e não escondem conteúdo. Transições usam `transform` e `opacity`, com curvas suaves e duração entre 0,45–0,9s.

| Movimento | Onde / motivo | Regra |
|---|---|---|
| Entrada única coordenada | Primeira abertura: chamada, texto de apoio, CTA e recorte aparecem em sequência curta, apresentando a capa como uma composição só. | GSAP; `0.5–0.8s`, `power3.out`; só `opacity`/`transform`. Sem animação em cada seção. |
| Deslocamento de imagem ao rolar | A foto da capa move poucos pixels enquanto a própria capa sai da tela, um parallax controlado inspirado nos vídeos. | GSAP ScrollTrigger com `scrub` leve e deslocamento máximo de 18px. Sem alterar tamanho ou layout. |
| CTA direcional | Hover/foco aponta a seta para a próxima ação. | CSS `transform`, 180ms; sem atração magnética ou cursor customizado. |
| Galeria | Arraste horizontal nativo, `scroll-snap` e diálogo apenas após clique. | Sem autoplay. Scroll suave em resposta aos controles; respeita `prefers-reduced-motion`. |
| Rolagem | Lenis integra suavização com ScrollTrigger quando movimento reduzido não está ativo. | Teclado, âncoras e rolagem nativa continuam disponíveis. |

Os vídeos sobre cursor contextual e parallax foram referências, não especificações para copiar. Cursor customizado e magnetismo foram removidos para preservar a acessibilidade e não competir com os trabalhos.

### Movimento reduzido

Com `prefers-reduced-motion: reduce`, GSAP/ScrollTrigger e Lenis não iniciam; scroll-snap fica sem suavização e transições de hover são reduzidas a zero. Conteúdo, navegação, galeria e diálogo permanecem utilizáveis.

## Layout

```text
DESKTOP
[ RBC / navegação / CTA                                      ]
[ frase e localização             | PNG recortado na borda   ]
[ retrato arqueado                 | apresentação em primeira pessoa ]
[ famílias de estilos em 4 colunas                             ]
[ trilho da galeria  → arrastar / filtrar / ampliar            ]
[ valores por modelo  | adicionais                              ]
[ preparação | regulamento | formas de pagamento               ]
[ Lucas do Rio Verde/MT + endereço pendente                    ]
[ FAQ                                      | contato RBC        ]
[ Instagram / WhatsApp / privacidade                            ]

CELULAR — primeira prioridade
[ RBC                                            menu ]
[ frase em 3 linhas + cidade                         ]
[ CTA consultar / ver estilos                        ]
[ recorte PNG no lado direito, encostado à borda     ]
[ dois retratos em arcos + bio                     ]
[ grupos de estilos em coluna                      ]
[trilho horizontal para swipe, 1 cartão por gesto]
[ valores e adicionais em blocos                   ]
[ regras, pagamento e endereço empilhados           ]
[ FAQ curta / CTA fixo com alvo ≥ 44px              ]
```

## Pendências antes de publicar

- `[PREENCHER]` valores por modelo e adicionais.
- `[PREENCHER]` duração de cada atendimento.
- `[PREENCHER]` preparação, regulamento, sinal, atrasos e cancelamentos.
- `[PREENCHER]` formas de pagamento aceitas.
- `[PREENCHER]` endereço completo ou instruções de localização.
- `[CONFIRMAR]` destino do WhatsApp: o material original contém número formatado e URL `wa.me` divergentes. A página não exibe o número e mantém o link já existente no projeto, aguardando validação.
- `[CONFIRMAR]` classificação técnica de fotos do portfólio antes de nomear Box Braids, Knotless, Ghana, Nagô, Boho ou Gyps.
- `[CONFIRMAR]` autorização de uso das fotos de cada pessoa no site.
- `[PREENCHER]` identificação profissional, base legal e prazo de retenção na política de privacidade.
- `[PREENCHER]` domínio/canonical e imagem social absoluta. A página fica `noindex` até a URL pública ser confirmada.

## Decisões diferentes das referências

- A capa usa o recorte de tranças fornecido na pasta `Menu Header`, encostado à borda como pedido; a identidade da pessoa não é afirmada. Os retratos identificados como Rebeca ficam em “Sobre” e “Contato”.
- Não há texto inglês, linguagem de salão genérica, “prova social”, avaliações, preços ou durações importados.
- A cor principal é vinho/café, com cobre legível e dourado somente ornamental; não se reproduz o preto/bordô clínico da referência brasileira.
- A galeria usa o material real, sem autoplay ou parallax por foto. O gesto nativo e a ampliação atendem ao uso por Instagram no celular.
- Arcos preservam fotos como moldura, sem colocar legenda ou letra pequena sobre o rosto/trança.
- Foram removidos monogramas alheios, selos de cera, ornamentos repetidos, chips desnecessários e efeitos sem função.
