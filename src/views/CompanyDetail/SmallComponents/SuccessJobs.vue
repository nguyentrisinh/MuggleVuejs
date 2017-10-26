<template>
  <v-card class="white ml-2 mr-2 elevation-7">
    <v-card-media class="light-blue accent-4">
      <h6 class="white--text mt-2 mb-2 ml-3 ">Jobs you may like</h6>
    </v-card-media>
    <v-card-title class="pl-0">
      <v-flex xs12>
        <v-expansion-panel block class="ml-2 text-align-left">
          <v-expansion-panel-content block v-for="job in company.jobs" :key="job.id">
            <div slot="header">
              <v-icon>work</v-icon>
              {{ job.name }}
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">
                {{ job.description }}
                <a :href=' homepage + "job/" + job.id ' class="ml-2">See more</a>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

    </v-card-title>
  </v-card>
</template>


<script>
  import { HOMEPAGE_URL } from '../../../constant/constant'

  export default {
    name: 'success-jobs',
    props: {
      company: { }
    },

    data () {
      return {
        homepage: HOMEPAGE_URL
      }
    }
  }
</script>
