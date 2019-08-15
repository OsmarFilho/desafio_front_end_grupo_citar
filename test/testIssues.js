const axios = require('axios')
const expect = require('chai').expect

const username = '' // Passe o nome e usuario do git .
const password = '' // Passe a senha do mesmo usuario.
const owner = '' // Passe um OWNER valido para que possa ser testado.
const repo = '' // Passe um repositorio valido para que possa ser testado.
const id =  // Passe um ID existente no repositorio para que o teste possa ser feito (number, not string).

// Para criação de uma Issue
const issue = {
  title: 'Teste 2',
  body: 'Teste de criaçao de issue',
  assignees: [''],
  labels: ['duvidas']
}

// Para criação de um comentario
const body = {
  body: 'teste de criaçao de comentario'
}

// Para trancar ou abrir uma issue ("closed" ou "open")
const state = 'open'

const auth = {
  username,
  password
}

// Código comentado por conta de que estava testando
// somente um por vez por conta do tempo de resposta,
// (que retornara erro se exeder o limite de 2000ms)

// describe('Tentar acessar a url de listagem de issue do github', () => {
//   it('fetchIssues', async () => {
//     let res = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`)
//     return expect(res.status).to.equal(200)
//   })
// })

// describe('Tentando criar uma issue', () => {
//   it('createIssue', async () => {
//     let res = await axios.post(`https://api.github.com/repos/${owner}/${repo}/issues`, issue, { auth })
//     return expect(res.status).to.equal(201)
//   })
// })

// describe('Tentando puxar uma issue', () => {
//   it('fetchItem', async () => {
//     let res = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues/${id}`)
//     return expect(res.status).to.equal(200)
//   })
// })

// describe('Tentando puxar os comentario de uma issue', () => {
//   it('fetchComments', async () => {
//     let res = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues/${id}/comments`)
//     return expect(res.status).to.equal(200)
//   })
// })

// describe('Tentando criar um comentario em uma issue', () => {
//   it('createComment', async () => {
//     let res = await axios.post(`https://api.github.com/repos/${owner}/${repo}/issues/${id}/comments`, body, { auth })
//     return expect(res.status).to.equal(201)
//   })
// })

// describe('Tentando trancar uma issue', () => {
//   it('lockIssue', async () => {
//     let res = await axios.put(`https://api.github.com/repos/${owner}/${repo}/issues/${id}/lock`, {
//       'locked': true,
//       'active_lock_reason': 'too heated'
//     }, { auth })
//     console.log(res.status)
//     return expect(res.status).to.equal(204)
//   })
// })

// describe('Tentando abrir uma issue', () => {
//   it('unlockIssue', async () => {
//     let res = await axios.delete(`https://api.github.com/repos/${owner}/${repo}/issues/${id}/lock`, { auth })
//     return expect(res.status).to.equal(204)
//   })
// })
