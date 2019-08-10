import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  issues: [],
  issue: {},
  comments: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
