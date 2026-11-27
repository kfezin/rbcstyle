# Rbc_tranças | Trancista — landing page catálogo

Landing page estática em português brasileiro para apresentar o trabalho da Rebeca e facilitar a exploração dos serviços e fotos do portfólio. É uma versão de apresentação, ainda não publicada e bloqueada contra indexação.

## Executar e compilar

```bash
npm ci
npm run dev
```

O projeto usa a porta 3000. `predev` gera `index.html` a partir do template e dos módulos de dados. Para compilar a versão estática:

```bash
npm run build
npm run preview
```

O build de produção fica em `dist/` e usa base relativa para aceitar hospedagem estática em subpastas.

## Editar conteúdo

- `src/data/site.js`: marca, localização, canais, metadados e imagens de Rebeca.
- `src/data/services.js`: famílias de serviço e perguntas frequentes.
- `src/data/gallery.js`: fotos, categorias, descrições e ALT.
- `src/templates/index.html`: estrutura visual e texto institucional.
- `scripts/render-page.mjs`: geração estática de cards, FAQ e JSON-LD; mantém conteúdo importante no HTML inicial para busca e compartilhamento.
- `src/style.css`: tokens, componentes, layout, estados e responsividade.
- `src/modules/`: menu, galeria/dialog, imagens, FAQ, movimento.
- `public/images/`: fallback local das fotos em WebP.
- `public/manus-routes.json`: manifesto da rota única.

Após editar os dados, execute `node scripts/render-page.mjs` para atualizar o `index.html`; `npm run dev` e `npm run build` fazem isso automaticamente.

## Dados de apresentação a confirmar antes de publicar

O número formatado do briefing e o destino `wa.me` divergem; a implementação usa o destino fornecido no link sem imprimir um número no site. Confirmar o WhatsApp correto. O RAR não continha as pastas separadas de capa e posts; as imagens atuais são recortes WebP da captura longa do Instagram, úteis para a apresentação, mas devem ser trocadas pelos originais em alta resolução e autorizadas. Também faltam valores, adicionais, duração, formas de pagamento, regras, endereço, eventual agenda na Bahia, identificação civil/CNPJ e domínio definitivo.

Antes do lançamento, validar autorizações das pessoas fotografadas, atualizar política de privacidade/identificação da responsável, configurar o domínio, canonical e imagem social absoluta, adicionar sitemap e liberar indexação retirando `noindex`/`Disallow: /` de forma coordenada. A página não instala cookies nem trackers; não acrescentar banner de cookies sem mudar essa condição.
