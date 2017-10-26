import * as types from '../mutation-types'

export const mutations = {
  [types.INCREASE_COUNT] (state, payload) {
    state.count += payload.increase
  },
  [types.FETCH_ALL_COMPANY] (state, payload) {
    state.companies = payload.companies
  },
  [types.FETCH_ALL_JOBS] (state, payload) {
    state.jobs = payload.jobs
  },
  [types.FETCH_COMPANY] (state, payload) {
    state.company = payload.company
  },
  [types.FETCH_REVIEWS] (state, payload) {
    state.reviews = payload.reviews
  },
  [types.FETCH_JOB] (state, payload) {
    state.job = payload.job
  }
}
