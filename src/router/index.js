import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Hello from '@/components/Hello'
import Homepage from '../views/Homepage/Homepage'
import JobDetails from '../views/JobDetails/JobDetails'
import CompanyDetail from '../views/CompanyDetail/CompanyInfo'

import ListCompany from '../views/ListCompany/Company.vue'
import Blog from '../views/Blog/BlogLeft/Blog1.vue'
import ListJob from '../views/demojob/ListJob.vue'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/job/:id',
      name: 'JobDetail',
      props: true,
      component: JobDetails
    },
    {
      path: '/company/:id',
      name: 'CompanyDetail',
      props: true,
      component: CompanyDetail
    },
    {
      path: '/listcompany',
      component: ListCompany
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/listjob',
      component: ListJob
    }
  ]
})
