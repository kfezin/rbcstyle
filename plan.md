# Plano — Landing page catálogo RBC Tranças

## Objetivo e abordagem

Evoluir a página existente de Design System para uma landing page única, curta e apresentável a Rebeca, usando o sistema visual inicial como base e acrescentando mais presença editorial. O produto continua estático: HTML semântico, Vite, JavaScript moderno, CSS e os pacotes GSAP/ScrollTrigger/Lenis já instalados. Não criar backend, formulário, conta, rastreamento, cookies ou fluxos que o briefing não pede. Separar marca, serviços, galeria e contato em módulos de dados pequenos para facilitar os ajustes posteriores.

## Estrutura da experiência

1. Cabeçalho responsivo com wordmark RBC, âncoras curtas para catálogo, Rebeca, informações e FAQ, além do CTA de WhatsApp.
2. Capa editorial com retrato real da Rebeca, chamada direta, localização confirmada (Lucas do Rio Verde — MT) e caminhos claros para catálogo e conversa. O retrato não terá texto sobre o rosto.
3. Faixa estática de assinatura com “Beleza · estilo · autoestima” e frase de bio “Onde Deus me plantar, minhas mãos florescerão.”
4. Apresentação pessoal breve da Rebeca, sem currículo, anos de experiência ou credenciais inventados.
5. Catálogo completo agrupado por famílias de serviço, com nomes fornecidos pela cliente. Galeria responsiva em grade, com filtros acessíveis e lightbox de teclado.
6. Bloco para valores e serviços adicionais, identificando o que ainda depende de confirmação — sem estimar preços, durações, materiais, taxas ou promessas.
7. Informações de atendimento em Lucas do Rio Verde — MT, formas de pagamento e regulamento apenas no nível confirmado; demais condições direcionam à confirmação no WhatsApp.
8. FAQ curta baseada nas dúvidas sobre estilos, valores, atendimento e agendamento. CTA final e rodapé com contato, Instagram, privacidade e identificação profissional pendente.

## Direção visual e design system

- **Movimento:** editorial afro-contemporâneo, artesanal e autoral; a força vem do retrato, do portfólio real e da voz da Rebeca, não de clichês gráficos de salão.
- **Princípios:** (1) foto real primeiro; (2) alto contraste café/marfim e cobre como assinatura; (3) hierarquia expressiva com informação funcional simples; (4) personalidade sem inventar prova social ou fatos comerciais.
- **Paleta:** café profundo `#281C19`, marfim quente `#F6F1E9`, areia `#E8DED1`, cobre `#9A5138`, cobre escuro `#713824` e dourado fosco `#B58A52`. Cobre é o acento de marca; tons escuros preservam contraste em texto.
- **Tipografia:** Cormorant Garamond em títulos de escala editorial, com itálico pontual; Manrope para navegação, catálogo, preços, política e leitura contínua. Fontes locais com `font-display: swap`.
- **Composição:** narrativa assimétrica e fotográfica; campo claro e bloco café se alternam; retrato amplo no hero, cards fotográficos consistentes no catálogo e espaços de respiro entre informação e imagem. Reinterpretar as referências sem repetir a posição ou o recorte delas.
- **Elementos de assinatura:** monograma textual RBC; filetes/círculos inspirados no entrelaçar dos fios; pequenos selos tipográficos com localização ou categoria, sem simular um logotipo oficial novo.
- **Interação:** navegação por âncoras; menu móvel operável por teclado; filtro com estado claro; controles de galeria e diálogo nativo com fechar/Esc/setas; foco visível em toda ação.
- **Animação:** GSAP/ScrollTrigger para entrada curta de título, retrato e blocos ao entrar na viewport (transform/opacity, 420–700 ms, stagger pequeno); hover da galeria com escala discreta (420 ms); Lenis integrado ao ticker GSAP somente sem `prefers-reduced-motion`. Sem parallax pesado ou movimento contínuo que distraia; no modo reduzido, desativar Lenis e revelar tudo sem movimento.
- **Essência da marca:** tranças e penteados afro de Rebeca, para quem quer escolher um estilo e conversar com a profissional que o executará. Personalidade: calorosa, marcante e cuidadosa.
- **Voz:** humana, segura e específica; valoriza beleza, estilo e autoestima sem promessas vazias. Exemplos: “Seu estilo chega antes da primeira palavra.” e “Onde Deus me plantar, minhas mãos florescerão.”
- **Wordmark e assinatura:** manter a grafia RBC Tranças; não redesenhar nem afirmar que o selo circular é uma marca oficial. Cobre queimado é a cor mais reconhecível da interface.

## Estrutura de arquivos

```text
index.html                    # HTML gerado; conteúdo completo no documento inicial
src/templates/index.html      # template semântico da LP
src/data/site.js              # marca, contatos, localização e SEO
src/data/services.js          # famílias de serviço e FAQ
src/data/gallery.js           # fotos, ALT, categorias e descrições
scripts/render-page.mjs       # geração do catálogo, FAQ e JSON-LD
src/main.js                   # inicialização de interações
src/modules/assets.js         # armazenamento Manus com fallback local
src/modules/navigation.js     # menu móvel e tópico ativo
src/modules/gallery.js        # filtros e lightbox
src/modules/faq.js            # interação nativa da FAQ
src/modules/motion.js         # GSAP, ScrollTrigger, Lenis e movimento reduzido
src/style.css                 # tokens, componentes e responsividade
public/images/                # fotos WebP usadas também como fallback estático
public/robots.txt             # bloqueio temporário de indexação
public/llms.txt               # resumo factual da marca
public/manus-routes.json      # rota única
DESIGN.md / TODO.md / README.md
```

## Fontes, dados e limites da versão de apresentação

Informações confirmadas pelo prompt da cliente: marca Rbc_tranças | Trancista; nome Rebeca; Instagram `@rebeca.amrr`; e-mail `borgesrebeca502@gmail.com`; atuação descrita em tranças/penteados afro; cidade Lucas do Rio Verde — MT; frase “Onde Deus me plantar, minhas mãos florescerão”; lista de serviços em `src/data/services.js`. A página não exibirá avaliações, números de clientes, anos, preços, durações, endereço, métodos de pagamento, regras, CNPJ ou credenciais inventados.

O RAR fornecido contém uma captura longa do perfil do Instagram, mas não as pastas separadas “Posts da cliente”/“header” mencionadas na solicitação. Para esta apresentação, os cartões usam recortes das fotos visíveis na captura; eles são provisórios e em resolução menor que os arquivos originais. Substituir por fotos individuais originais e pelo PNG de capa quando forem enviados. Confirmar também autorização de uso das pessoas fotografadas.

O briefing fornece um telefone formatado `+55 75 9871-2028` e um link `wa.me/5575987128028` com números divergentes. O protótipo usa o endereço exato do link fornecido, sem exibir o número como texto; confirmar o destino antes de publicação. O domínio ainda não foi informado, então manter `noindex` no rascunho e não gerar canonical ou sitemap com URL inventada. CNPJ/nome civil, pagamentos, preços, regras e localização além da cidade ficam explícitos como pendências.

## Fontes de referência visual

- [Fe Feura](https://fe-feura.framer.website/): impacto fotográfico, alternância entre superfícies escuras/claras e vitrine modular; não importar lógica de skincare, avaliações ou arranjo literal.
- [Foyer](https://foyer.framer.website/): foto de moda como foco e hierarquia curta; usar apenas a prioridade da imagem, não a divisão/composição exata.
- [Makeupy](https://makeupy.framer.website/): cards de serviços e CTAs claros; não trazer paleta, prova social, preços ou conteúdo da marca de maquiagem.
- [Crownwell Braids](https://crownwell-braids.framer.website/): catálogo fotográfico com informações por estilo e blocos práticos; usar somente a lógica de leitura, não copiar cartões, preços ou layout.
- [Browra](https://browra.framer.website/): alternância editorial de imagens, serviços e conteúdo; preservar integralmente a paleta e voz próprias da RBC.
- As especificações de cor, tipografia e movimento da etapa anterior permanecem a base; `research-references.md` guarda notas de observação dos cinco sites.

## Dependências e publicação

Usar GSAP 3 com ScrollTrigger e Lenis existentes no lockfile; não adicionar novas bibliotecas sem necessidade. `scripts/render-page.mjs` gera `index.html` antes do desenvolvimento/build para manter catálogo e metadados visíveis no HTML inicial. Vite permanece com `base: './'`; os caminhos de mídia são relativos e funcionam em hospedagem estática ou subpasta, com tentativa de usar o armazenamento Manus e fallback local. O site permanece sem analytics/tracker, logo não exige banner de cookies; a política explica que agendamentos no WhatsApp passam pelas políticas externas do serviço. A versão de apresentação fica `noindex` e não publicada até domínio, dados pendentes, assets originais e autorizações serem confirmados.
