# Matrícula em Cursos Online

Aplicação web para realização de matrículas em cursos online, desenvolvida com Vue.js no frontend e Node.js + Express + TypeScript no backend.

## Tecnologias utilizadas

Frontend
- Vue.js
- Vite
- JavaScript
- HTML e CSS

Backend
- Node.js
- Express
- TypeScript

## Funcionalidades

- Listagem de cursos disponíveis
- Formulário de matrícula
- Validação de campos
- Integração entre frontend e backend via API
- Registro de matrícula em memória

## Rotas da API

GET /cursos  
Retorna a lista de cursos disponíveis.

POST /matricula  
Recebe os dados do aluno e registra a matrícula.

## Como executar o projeto

Backend:

```bash
cd backend
npm install
npm run dev
