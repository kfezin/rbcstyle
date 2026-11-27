# DESIGN — Rbc_tranças | Trancista

## Conceito

A página traduz o trabalho da Rebeca em uma apresentação **editorial afro-contemporânea**: fotografia autoral em primeiro plano, contraste café/marfim e o cobre como assinatura. A composição alterna blocos claros e escuros, letras expressivas e informação prática direta; as fotos e a própria frase da Rebeca carregam a personalidade, sem depender de efeitos exagerados.

**Essência:** tranças e penteados afro para quem quer explorar estilos e conversar diretamente com a trancista que os realiza. Personalidade: calorosa, marcante e cuidadosa.

**Voz:** direta, humana e segura; fala de beleza, estilo e autoestima sem inventar resultados ou promessas. Exemplos: “Tranças com presença.” e “Onde Deus me plantar, minhas mãos florescerão.”

## Tokens visuais

| Token | Valor | Uso |
| --- | --- | --- |
| Café profundo | `#281C19` | Cabeçalho, texto de alto contraste, seções de serviço e rodapé. |
| Café secundário | `#493832` | Texto auxiliar e superfícies escuras secundárias. |
| Marfim quente | `#F6F1E9` | Fundo principal e superfícies claras. |
| Areia | `#E8DED1` | Galeria e separação visual entre capítulos. |
| Cobre queimado | `#9A5138` | Cor proprietária de ação e acento da marca. |
| Cobre profundo | `#713824` | Texto/acento sobre superfícies claras, banda e CTA final. |
| Dourado fosco | `#B58A52` | Ornamentação e detalhes pontuais, nunca texto corrido. |
| Branco quente | `#FFFDF9` | Cards claros e texto sobre fundos escuros. |

O cobre queimado é a assinatura visual RBC. Marfim e café asseguram contraste; areia aquece a leitura; o dourado entra só como detalhe.

## Tipografia e escala

Cormorant Garamond (`500`, `600` e `500 italic`) compõe títulos e frases curtas. Manrope (`400`, `500`, `600`, `700`) organiza navegação, catálogo, respostas, CTA e conteúdo contínuo. As fontes são servidas localmente via Fontsource.

| Nível | Regra |
| --- | --- |
| H1 | Cormorant Garamond, escala fluida `clamp(4.5rem, 9.5vw, 9.25rem)`, entrelinha compacta e cobre em itálico pontual. |
| H2 | Cormorant Garamond, entre aproximadamente `3.4rem` e `6.4rem`, alinhado ao início da seção. |
| H3 | Cormorant Garamond em títulos de cards e módulos. |
| Corpo | Manrope `0.88–0.95rem`, entrelinha `1.7–1.9`. |
| Rótulo | Manrope `0.47–0.63rem`, caixa alta, peso `700`, tracking ampliado. |

## Composição e componentes

A navegação permanece fixada no topo. O hero combina texto em grande escala com retrato vertical assimétrico; uma medalha RBC ocupa a área inferior livre da foto, sem cobrir o rosto. A apresentação pessoal alterna retrato e texto. O catálogo de serviços usa cinco famílias com estilos em chips, enquanto o portfólio oferece filtros (“Tudo”, “Tranças soltas”, “Nagô · Ghana”, “Texturas”), cartões com foto e ampliação em diálogo. O bloco de atendimento mostra cidade, valores e detalhes somente no nível confirmado; FAQ nativa e CTA encerram a jornada. Rodapé reúne os contatos e uma divulgação de privacidade em `<details>`.

O wordmark é textual (RBC/Tranças) com selo circular inspirado no ícone já existente; filetes e elipses entrelaçados funcionam como ornamentação. Eles não devem ser apresentados como um novo logotipo aprovado pela cliente.

## Interação e animação

Menu móvel operável por botão e teclado, com `aria-expanded`; filtros com `aria-pressed`; galeria com botões nomeados, foco restaurado após fechar e navegação por `Esc`/setas; FAQ construída com `<details>`/`<summary>`. Foco visível em todas as ações e âncora “Pular para o conteúdo”.

GSAP/ScrollTrigger aplicam entradas breves de opacidade/deslocamento ao hero e às seções (420–700 ms), com `once: true`. Lenis suaviza o scroll somente quando o sistema não solicita movimento reduzido e está integrado ao ticker/ScrollTrigger. Hover de imagem é uma ampliação discreta e curta. Sem parallax pesado, sem marquee animado e sem texto escondido antes do JavaScript. Com `prefers-reduced-motion: reduce`, não se inicializam GSAP/Lenis e CSS remove a transição.

## Conteúdo, acessibilidade e SEO

Copy e fotos são geradas em HTML estático por `scripts/render-page.mjs` a partir de `src/data/`, mantendo textos importantes no HTML inicial. ALT descreve o que aparece, sem atribuir nome de estilo incerto. Valores, duração, pagamento, endereço completo, regras, credenciais e avaliações não são inventados. Imagens vêm de arquivos relativos `public/images/`, com caminhos de armazenamento Manus como primários e fallback relativo para hospedagem estática.

O HTML é `pt-BR`, com título, description, keywords, Open Graph/Twitter e JSON-LD `Organization`, sem telefone, preço, avaliações, endereço específico ou URL presumida. Canonical, `og:url`, `og:image` absoluto e sitemap dependem do domínio real; o `noindex` e `robots.txt` bloqueiam indexação nesta etapa. Não há analytics, pixel, formulário ou cookie de rastreamento; por isso não há banner de cookies.

## Pendências de imagem/dados

As pastas separadas “header” e “Posts da cliente” não vieram no RAR; os dez WebP são recortes da captura longa do Instagram. A capa usa um dos retratos disponíveis e os cards usam o feed fornecido, com resolução menor e possível perda de enquadramento. Substituir pelas fotos originais em alta resolução, confirmar atribuição dos estilos e autorização de imagem de cada pessoa antes da publicação.

Confirmar o destino do WhatsApp: o briefing traz `+55 75 9871-2028` e `wa.me/5575987128028`, que divergem. O rascunho segue o endereço `wa.me` fornecido, sem exibir número formatado. Preços, adicionais, tempo, pagamentos, regulamento, endereço, atendimento na Bahia, identificação civil/CNPJ e domínio também precisam de confirmação.
