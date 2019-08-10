import axios from 'axios'

let owner = process.env.VUE_APP_GIT_OWNER
let repo = process.env.VUE_APP_GIT_REPOSITORY
let username = process.env.VUE_APP_GIT_USERNAME
let password = process.env.VUE_APP_GIT_PASSWORD

let auth = {
  username,
  password
}

export default {

  fetchIssues ({ commit }) {
    axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`)
      .then(res => res.data)
      .then(res => {
        commit('ISSUE/FETCH_ISSUES', res)
      })
  },

  createIssue ({ dispatch }, issue) {
    axios.post(`https://api.github.com/repos/${owner}/${repo}/issues`, issue, { auth }).then(res => {
      dispatch('fetchIssues')
    })
  },

  fetchItem ({ commit }, id) {
    axios.get(`https://api.github.com/repos/${owner}/${repo}/issues/${id}`)
      .then(res => res.data)
      .then(res => {
        commit('ISSUE/FETCH_ITEM', res)
      })
  },

  fetchComments ({ commit }, id) {
    axios.get(`https://api.github.com/repos/${owner}/${repo}/issues/${id}/comments`)
      .then(res => res.data)
      .then(res => {
        commit('ISSUE/FETCH_COMMENTS', res)
      })
  },

  createComment ({ dispatch }, params) {
    let { issueNumber, body } = params
    axios.post(`https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}/comments`, body, { auth })
      .then(res => {
        dispatch('fetchComments', issueNumber)
      })
  },

  editStateIssue ({ commit }, issueNumber, state) {
    axios.post(`https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`, state, { auth })
      .then(res => res.data)
      .then(res => {
        commit('ISSUE/FETCH_COMMENTS', res)
      })
  }
}
