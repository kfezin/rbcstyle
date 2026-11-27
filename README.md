# Rbc_tranças | Trancista — landing page catálogo

Landing page estática em português brasileiro para apresentar o trabalho da Rebeca e facilitar a exploração dos serviços e fotos do portfólio. É uma versão de apresentação, ainda não publicada e bloqueada contra indexação.

## Como abrir

O site é **estático e não precisa de build**. Todos os caminhos são relativos (`./assets/...`), então funciona igual em:

- **VS Code**: clique com o botão direito em `index.html` → *Open with Live Server*.
- **GitHub Pages** (inclusive em subpasta, como `/rbcstyle/`), Netlify, Vercel ou qualquer hospedagem: basta enviar os arquivos da raiz.
- Opcional: `npm install && npm run dev` (servidor Vite na porta 3000).

> Abrir o `index.html` com duplo clique (`file://`) não carrega os scripts de módulo por bloqueio do navegador; use o Live Server.

## Estrutura

```
index.html              página final (é ela que vai para o servidor)
favicon.svg  robots.txt  llms.txt  .nojekyll
assets/
  css/style.css         tokens, componentes, layout e responsividade
  js/main.js            ponto de entrada
  js/modules/           menu, galeria/dialog, FAQ, movimento
  js/data/              site.js, services.js, gallery.js (conteúdo e imagens)
  vendor/               gsap, ScrollTrigger e lenis (sem depender de node_modules)
  images/               todas as fotos em WebP
templates/index.html    modelo usado para gerar o index.html
scripts/render-page.mjs gera cards, FAQ e JSON-LD a partir de assets/js/data
```

## Editar conteúdo

Edite os dados em `assets/js/data/` ou a estrutura em `templates/index.html` e rode `npm run render` para atualizar o `index.html`. Ajustes rápidos também podem ser feitos direto no `index.html`, mas serão sobrescritos no próximo `npm run render`.

Para adicionar uma imagem, coloque o arquivo em `assets/images/` e use o caminho `./assets/images/nome.webp` (sempre com `./`, nunca começando com `/`).

## Dados de apresentação a confirmar antes de publicar

O número formatado do briefing e o destino `wa.me` divergem; a implementação usa o destino fornecido no link sem imprimir um número no site. Confirmar o WhatsApp correto. O RAR não continha as pastas separadas de capa e posts; as imagens atuais são recortes WebP da captura longa do Instagram, úteis para a apresentação, mas devem ser trocadas pelos originais em alta resolução e autorizadas. Também faltam valores, adicionais, duração, formas de pagamento, regras, endereço, eventual agenda na Bahia, identificação civil/CNPJ e domínio definitivo.

Antes do lançamento, validar autorizações das pessoas fotografadas, atualizar política de privacidade/identificação da responsável, configurar o domínio, canonical e imagem social absoluta, adicionar sitemap e liberar indexação retirando `noindex`/`Disallow: /` de forma coordenada. A página não instala cookies nem trackers; não acrescentar banner de cookies sem mudar essa condição.
