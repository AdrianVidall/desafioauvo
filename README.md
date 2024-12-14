# Projeto Playwright

Este é um projeto de automação de testes utilizando Playwright para automação do site saucedemo.com

## Clonando o projeto

Abra o navegador, acesse a URL https://github.com/AdrianVidall/desafioauvo, clique no botão **Code**, escolha uma opção de clone (HTTPS ou SSH), copie o link de clone do projeto, e em seu terminal (em uma pasta de sua escolha), execute o comando `git clone [cole-o-link-copiado-aqui]`.

Após o clone do projeto, acesse o diretório recém clonado

Dentro do diretório `desafioauvo/` você terá o sub-diretório `tests/`, e os arquivos `.gitignore` (arquivo oculto), `playwright.config.js`, `package-lock.json`, `package.json` e `README.md`. Dentro do sub-diretório `tests/` você terá o sub-diretório `pages/`.

## Instalação das dependências de desenvolvimento

Com o projeto clonado a partir do **Repositório**, deverá instalar as depedências de desenvolvimento.

Essas dependências já estão listadas no arquivo `package.json`, basta executar o comando `npm install` (ou `npm i` - versão curta) na raiz do projeto.

> Este comando irá baixar o `@playwright/test`, `@types/node` e o `typescript`, que estão listados na seção de `devDependencies` no arquivo `package.json`.

# Realização do teste

Após instalar as depedências de desenvolvimento execute o comando `npx playwright test` para poder realizar o seu teste

Após a realização do teste, digite o comando `npx playwright show-report` para poder estar vizualiando o último HTML Report que foi gerado.