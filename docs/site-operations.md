# Operação do site

## Rotas públicas preservadas

- `/`
- `/privacy/`
- `/terms/`
- `/support/`
- `/contact/`
- `/pitchpro/`
- `/car-audio-box/`
- `/atlas-do-vinho/`

Há também páginas específicas de privacidade, termos e suporte para os produtos.

## Build

O site usa React, TypeScript e Vite. O build de produção é gerado com `npm run build` em `site/dist/`.

## Publicação

O repositório contém `site/Dockerfile` e `site/nginx.conf` para empacotamento estático. A publicação em produção é uma etapa separada e não deve ocorrer automaticamente apenas por alterações neste repositório.
