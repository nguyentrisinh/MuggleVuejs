<template>
  <v-container fluid class="pl-0 pt-0 pr-0:">
    <v-layout>
      <v-flex xs12 sm12 md12 lg8 offset-lg2>
        <v-layout column>
          <!--<v-container fluid grid-list-md class="grey lighten-4">-->
          <v-container fluid grid-list-md class="white">
          <v-layout row wrap>
              <v-flex xs12 sm3 class="mt-4">
                <company-detail :company="job.company"></company-detail>
              </v-flex>

              <v-flex xs12 sm9 class="mt-4">
                <job-detail :job="job"></job-detail>
              </v-flex>

            </v-layout>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
//  import axios from 'axios'
//  import { BACKEND_SERVER_URL } from '../../constant/constant'
  import { mapState } from 'vuex'
  import CompanyDetail from './SmallComponents/CompanyDetail'
  import JobDetail from './SmallComponents/Detail'

  export default {
    name: 'job-details',
    props: [
      'id'
    ],
//    created () {
//      axios.get(BACKEND_SERVER_URL + '/api/jobs/' + this.id)
//        .then(response => {
//          const payload = {
//            type: 'fetch_job',
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
//    },
    components: {
      CompanyDetail,
      JobDetail
    },
    computed: mapState({
      job: state => state.job
    })
  }
</script>
