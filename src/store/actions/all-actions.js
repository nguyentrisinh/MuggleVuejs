import * as types from '../mutation-types'

export const actions = {
  show_errors (context, errors) {
    console.log(errors.data)
  },
  increase (context, num) {
    const payload = {
      type: types.INCREASE_COUNT,
      increase: num
    }
    context.commit(payload)
  },
  fetch_companies (context, response) {
    const payload = {
      type: types.FETCH_ALL_COMPANY,
      companies: response.data.data
    }

    if (response.data.errors !== 'null') {
      context.commit(payload)
    } else {
      console.log(response.data.errors)
    }
  },
  fetch_jobs (context, response) {
    const payload = {
      type: types.FETCH_ALL_JOBS,
      jobs: response.data.data
    }
    if (response.data.errors !== 'null') {
      context.commit(payload)
    } else {
      console.log(response.data.errors)
    }
  },
  fetch_company (context, response) {
    const payload = {
      type: types.FETCH_COMPANY,
      company: response.data.data
    }
    if (response.data.errors !== 'null') {
      context.commit(payload)
    } else {
      console.log(response.data.errors)
    }
  },
  fetch_reviews (context, response) {
    const payload = {
      type: types.FETCH_REVIEWS,
      reviews: response.data.data
    }
    if (response.data.errors !== 'null') {
      context.commit(payload)
    } else {
      console.log(response.data.errors)
    }
  },
  fetch_job (context, response) {
    const payload = {
      type: types.FETCH_JOB,
      job: response.data.data
    }
    console.log(response)
    if (response.data.errors !== 'null') {
      context.commit(payload)
    } else {
      console.log(response.data.errors)
    }
  }
}
