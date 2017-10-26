import Vuex from 'vuex'
import { companies, jobs, company, reviews, job } from './state/all-state'
import { mutations } from './mutations/all-mutations'
import { actions } from './actions/all-actions'

const state = {
  count: 0,
  company,
  companies,
  jobs,
  reviews,
  job
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
