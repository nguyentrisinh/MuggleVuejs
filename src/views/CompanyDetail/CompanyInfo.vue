<template>
  <v-container fluid class="pl-0 pt-0 pr-0 mr-0">
    <v-layout>
      <v-flex xs12 sm12 md12 lg8 offset-lg2>

        <v-layout column>
          <v-container fluid grid-list-md class="white" hidden-sm-and-down>
            <v-layout row wrap>
              <v-flex xs12 sm4 class="mt-4">
                <div>
                  <company-detail :company="company"></company-detail>
                </div>
                <div class="mt-5">
                  <about-us :company="company"></about-us>
                </div>
                <div class="mt-5">
                  <success-jobs :company="company"></success-jobs>
                </div>
              </v-flex>

              <v-flex xs12 sm8 class="mt-4">
                <review-component></review-component>
                <reviews></reviews>
              </v-flex>

            </v-layout>
          </v-container>

          <v-flex hidden-md-and-up>
            <tabs :company="company"></tabs>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import axios from 'axios'
  import { BACKEND_SERVER_URL } from '../../constant/constant'
  import { mapState } from 'vuex'
  import CompanyDetail from './SmallComponents/CompanyDetail'
  import AboutUs from './SmallComponents/AboutUs'
  import SuccessJobs from './SmallComponents/SuccessJobs'
  import ReviewComponent from './SmallComponents/ReviewComponent'
  import Reviews from './SmallComponents/Reviews'
  import Tabs from './SmallComponents/Tabs'

  export default {
    name: 'company-info',
    props: {
      id: { }
    },
    created () {
      axios.get(BACKEND_SERVER_URL + '/api/companies/' + this.id)
      .then(response => {
        const payload = {
          type: 'fetch_company',
          data: response.data
        }
        this.$store.dispatch(payload)
      })
      .catch(e => {
        const payload = {
          type: 'show_errors',
          data: e
        }
        this.$store.dispatch(payload)
      })

      axios.get(BACKEND_SERVER_URL + '/api/reviews/company/' + this.id)
        .then(response => {
          const payload = {
            type: 'fetch_reviews',
            data: response.data
          }
          this.$store.dispatch(payload)
        })
        .catch(e => {
          const payload = {
            type: 'show_errors',
            data: e
          }
          this.$store.dispatch(payload)
        })
    },
    components: {
      CompanyDetail,
      AboutUs,
      SuccessJobs,
      ReviewComponent,
      Reviews,
      Tabs
    },
    computed: mapState({
      company: state => state.company
    })
  }
</script>
