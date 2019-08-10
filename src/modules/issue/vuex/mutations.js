export default {
  'ISSUE/FETCH_ISSUES' (state, payload) {
    state.issues = payload
  },

  'ISSUE/FETCH_ITEM' (state, payload) {
    state.issue = payload
  },

  'ISSUE/FETCH_COMMENTS' (state, payload) {
    state.comments = payload
  }
}
