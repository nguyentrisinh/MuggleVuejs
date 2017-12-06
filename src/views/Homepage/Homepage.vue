<template>
  <v-container fluid class="pl-0 pt-0 pr-0:">
    <search-component></search-component>
    <v-layout>
      <v-flex xs12 sm12 md12 lg8 offset-lg2>
        <h3 class="pt-5 pl-4">Jobs</h3>
        <for-test></for-test>
        <h3 class="pt-5 pl-4">Companies</h3>
        <companies-component :company="company"></companies-component>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
//  import axios from 'axios'
//  import { BACKEND_SERVER_URL } from '../../constant/constant'
  import { mapState } from 'vuex'
  import SearchComponent from './small_components/SearchComponent'
  import ForTest from './small_components/ForTest'
  import CompaniesComponent from './small_components/CompaniesComponent'

  export default {
    name: 'homepage',
    created () {
//      axios.get(BACKEND_SERVER_URL + '/api/employers/get_all/')
//        .then(response => {
//          console.log(response.data)
//        })
//        .catch(e => {
//          const payload = {
//            type: 'show_errors',
//            data: e
//          }
//          this.$store.dispatch(payload)
//        })
//      axios.get(BACKEND_SERVER_URL + '/api/jobs')
//        .then(response => {
//          const payload = {
//            type: 'fetch_jobs',
//            data: response.data
//          }
//          this.$store.dispatch(payload)
//        })
//        .catch(e => {
//          const payload = {
//            type: 'show_errors',
//            data: e
//          }
//          this.$store.dispatch(payload)
//        })
    },
    computed: mapState({
      count: state => state.count,
      company: state => state.company
    }),
    components: {
      SearchComponent,
      ForTest,
      CompaniesComponent
    }
  }
</script>
