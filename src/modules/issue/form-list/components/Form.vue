<script>
  import {mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      alert: {
        error: null,
        message: ''
      },
      issue: {
        title: '',
        body: '',
        assignees: [''],
        labels: ['']
      }
    }
  },
  methods: {
    ...mapActions({
      createIssue: 'issue/createIssue'
    }),
    save() {
      this.createIssue(this.issue)
        .then(res => {
          this.issue = {
            title: '',
            body: '',
            assignees: [''],
            labels: ['']
          }
          this.alert.message = 'Por favor, preencha os campos!'
        })
        .then(res => {
          this.alert.message = ''
        })
        .catch(error => {
          this.alert.error = true
          this.alert.message = 'Por favor, preencha os campos!'
        })
        .then(res => {
          this.alert.error = null
        })
    }
  },

};
</script>
<template>
  <form class="col-6 mx-auto" @submit.prevent="save">
    <div class="form-group">
      <label for="exampleInputEmail1">Título</label>
      <input v-model="issue.title" type="text" class="form-control" placeholder="Informe o usuário do repositório" />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Tipos</label>
      <select class="form-control" v-model="issue.labels[0]">
        <option></option>
        <option value="bug">Bug</option>
        <option value="documentation">Documentação</option>
        <option value="duplicate">Duplicado</option>
        <option value="enhancement">Melhorias</option>
        <option value="good first issue">Primeira Boa Issue</option>
        <option value="help wanted">Preciso de Ajuda</option>
        <option value="invalid">Inválido</option>
        <option value="question">Duvida</option>
        <option value="wontfix">Precisa de Reparo</option>
      </select>
    </div>
       <label class="mb-0" for="exampleInputEmail1">Comentario</label>
    <div class="card  mt-3">
      <textarea
        v-model="issue.body"
        rows="6"
        style="resize: none"
        placeholder="Deixe um comentário"
      />
    </div>
    <div class="d-flex justify-content-end  mt-3">
      <button type="submit" class="btn btn-primary">Criar Issue</button>
    </div>
    <div>
      <p>{{alert.message}}</p>
    </div>
  </form>
</template>
