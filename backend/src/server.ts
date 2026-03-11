// API simples para matrícula em cursos on-line
// Desenvolvida com Node.js, Express e TypeScript
// Possui duas rotas principais:
// GET /cursos -> retorna a lista de cursos disponíveis
// POST /matricula -> recebe os dados do aluno e registra a matrícula

import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

interface Matricula {
  nome: string
  email: string
  curso: string
}

const cursos = [
  { id: 1, nome: 'Desenvolvimento Web' },
  { id: 2, nome: 'JavaScript Avançado' },
  { id: 3, nome: 'Banco de Dados MongoDB' }
]

let matriculas: Matricula[] = []

app.get('/cursos', (req: Request, res: Response) => {
  res.status(200).json(cursos)
})

app.post('/matricula', (req: Request, res: Response) => {
  const { nome, email, curso } = req.body as Matricula

  if (!nome || !email || !curso) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios.'
    })
  }

  const novaMatricula: Matricula = {
    nome,
    email,
    curso
  }

  matriculas.push(novaMatricula)

  return res.status(201).json({
    mensagem: 'Matrícula realizada com sucesso!',
    dados: novaMatricula
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})