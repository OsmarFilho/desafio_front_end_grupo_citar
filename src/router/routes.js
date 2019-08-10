import Vue from 'vue'
import VueRouter from 'vue-router'
import IssueFormList from '../modules/issue/form-list/container/FormList'
import IssueOpen from '../modules/issue/open/container/Open'

const routes = [
  { path: '/', component: IssueFormList },
  { path: '/issue/:id', component: IssueOpen }
]

Vue.use(VueRouter)
export default new VueRouter({ routes })
