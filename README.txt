Projeto: Matrículas de aluno para cursos on-line

Este trabalho consiste no desenvolvimento de uma aplicação web para matrícula em cursos on-line, integrando frontend e backend.

O frontend foi desenvolvido com Vue.js e apresenta um formulário de matrícula com os campos nome completo, e-mail e curso selecionado. Também foram aplicadas validações com mensagens de erro claras e feedback visual ao usuário.

O backend foi desenvolvido com Node.js, Express e TypeScript. Foram criadas duas rotas principais:
- GET /cursos: retorna a lista de cursos disponíveis;
- POST /matricula: recebe os dados do aluno e valida as informações enviadas.

A comunicação entre frontend e backend é feita por requisições HTTP no formato JSON. Como o projeto é um protótipo acadêmico, o armazenamento foi feito em memória, simulando um banco de dados.

Para permitir a integração entre frontend e backend em portas diferentes, foi utilizada a biblioteca cors.

Instruções para execução:
1. No terminal, acessar a pasta backend e executar: npm run dev
2. Em outro terminal, acessar a pasta frontend e executar: npm run dev
3. Abrir o endereço informado pelo Vue no navegador.