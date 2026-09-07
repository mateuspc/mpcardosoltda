# M P Cardoso Solutions

Repositório público da M P Cardoso Solutions para centralizar o site institucional, a identidade visual e materiais públicos da empresa.

## Estrutura

- `site/`: código-fonte do [mpcardoso.dev](https://mpcardoso.dev), páginas institucionais e páginas públicas dos produtos.
- `brand/google-play/`: ícone e imagem de cabeçalho da conta de desenvolvedor na Google Play.
- `brand/web/`: símbolo e favicon usados no site.
- `docs/`: documentação operacional pública do projeto.

## Desenvolvimento do site

Requer Node.js 22 ou mais recente.

```bash
cd site
npm ci
npm run dev
```

Verificações locais:

```bash
npm run lint
npm run build
```

O conteúdo gerado em `site/dist/` não é versionado.

## Segurança

Este repositório é público. Credenciais, chaves de assinatura, arquivos de conta de serviço, certificados e variáveis de ambiente privadas não devem ser adicionados ao Git.
