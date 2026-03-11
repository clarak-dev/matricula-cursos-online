<template>
  <div class="container">
    <h1>Matrícula em Cursos On-line</h1>

    <form @submit.prevent="enviarMatricula">
      <div class="campo">
        <label for="nome">Nome completo</label>
        <input
          id="nome"
          v-model="nome"
          type="text"
          placeholder="Digite seu nome completo"
        />
        <small v-if="erroNome" class="erro">{{ erroNome }}</small>
      </div>

      <div class="campo">
        <label for="email">E-mail</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <small v-if="erroEmail" class="erro">{{ erroEmail }}</small>
      </div>

      <div class="campo">
        <label for="curso">Curso</label>
        <select id="curso" v-model="curso">
          <option value="">Selecione um curso</option>
          <option v-for="item in cursos" :key="item.id" :value="item.nome">
            {{ item.nome }}
          </option>
        </select>
        <small v-if="erroCurso" class="erro">{{ erroCurso }}</small>
      </div>

      <button type="submit">Realizar matrícula</button>
    </form>

    <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
  </div>
</template>

<script>
// Componente responsável pelo formulário de matrícula
// Realiza validação dos campos e envia os dados para a API
export default {
  data() {
    return {
      nome: '',
      email: '',
      curso: '',
      cursos: [],
      mensagem: '',
      erroNome: '',
      erroEmail: '',
      erroCurso: ''
    }
  },

  mounted() {
    this.buscarCursos()
  },

  methods: {
    async buscarCursos() {
      try {
        const resposta = await fetch('http://localhost:3000/cursos')
        const dados = await resposta.json()
        this.cursos = dados
      } catch (error) {
        this.mensagem = 'Erro ao carregar os cursos.'
      }
    },

    validarFormulario() {
      this.erroNome = ''
      this.erroEmail = ''
      this.erroCurso = ''

      let valido = true

      if (!this.nome.trim()) {
        this.erroNome = 'O nome completo é obrigatório.'
        valido = false
      }

      if (!this.email.trim()) {
        this.erroEmail = 'O e-mail é obrigatório.'
        valido = false
      } else if (!this.email.includes('@')) {
        this.erroEmail = 'Digite um e-mail válido.'
        valido = false
      }

      if (!this.curso) {
        this.erroCurso = 'Selecione um curso.'
        valido = false
      }

      return valido
    },

    async enviarMatricula() {
      this.mensagem = ''

      if (!this.validarFormulario()) {
        return
      }

      try {
        const resposta = await fetch('http://localhost:3000/matricula', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome: this.nome,
            email: this.email,
            curso: this.curso
          })
        })

        const dados = await resposta.json()

        if (resposta.ok) {
          this.mensagem = dados.mensagem
          this.nome = ''
          this.email = ''
          this.curso = ''
        } else {
          this.mensagem = dados.mensagem || 'Erro ao realizar matrícula.'
        }
      } catch (error) {
        this.mensagem = 'Erro na comunicação com o servidor.'
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
}

.campo {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
}

input,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #369a6e;
}

.erro {
  color: red;
  font-size: 13px;
  margin-top: 4px;
}

.mensagem {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
}
</style>