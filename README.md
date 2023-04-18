# adoorei-challenge
Este repositório é referente a um teste para uma vaga de Front End developer na [Adoorei](https://www.adoorei.com.br/), onde o principal objetivo era desenvolver um fluxo de telas onde o usuário é capaz de logar e criar uma conta com a opção de selecionar um plano onde no final é redirecionado para a Home page onde é apresentado uma mensagem de bem vindo e um vídeo.

No que diz respeito as principais tecnologias utilizadas para a construção das telas propostas foram:

* [Vue3](https://vuejs.org/);
* [Tailwind CSS](https://tailwindcss.com/);
* [Typescript](https://www.typescriptlang.org/);
* [Jest](https://jestjs.io/pt-BR/);


O Figma das telas que foram desenvolvidas pode ser encontrado em:
* https://www.figma.com/file/AGBeuyCnaldE4AMJjTuuOp/Cadastro?node-id=0-1&t=fE4DsFNQCVmU9qIg-0

Durante o desenvolvimento foi seguido as melhores práticas de mercado como [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=O%20que%20%C3%A9%20o%20Gitflow,por%20Vincent%20Driessen%20no%20nvie.), [Conventional Comitts](https://www.conventionalcommits.org/en/v1.0.0/), testes unitários,  reutilização de componentes e documentação com [StoryBook](https://storybook.js.org/). Além disso, todo o processo de desenvolvimento foi planejado e dividido em pequenas tarefas na plataforma [Jira](https://www.atlassian.com/br/software/jira).

Deploy do projeto:

* https://adoorei-challenge.vercel.app/

Deploy da documentação (Storybook):

* https://adoorei-challenge-docs.vercel.app/

## Setup do Projeto
```
yarn install
```

### Compila e faz *hot-reloads* para desenvolvimento
```
yarn serve
```

### Compila e minifica para produção
```
yarn build
```

### Execute os testes de unitários
```
yarn test:unit
```

### Corrige arquivos (Lint)
```
yarn lint
```