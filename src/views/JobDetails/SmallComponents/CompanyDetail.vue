<template>
  <v-card class="grey lighten-3 ml-2 mr-2 elevation-7">
    <v-card-media height="200px">
      <img src="../../../assets/Cool-Cliffs-Above-Clouds-Wallpaper-HD-8710.jpg">
    </v-card-media>
    <v-card-title primary-title class="pt-0">
      <v-flex xs12>
        <div block xs12>
          <h4 class=" mb-0 text-xs-center"> {{ company.name }}</h4>
          <div class="text-company-detail pt-3"> {{ company.overview }}</div>

          <div class="mt-3">
            <v-icon>settings</v-icon>
            <v-label class="ml-2" v-if="company.type_id == 1">Product</v-label>
            <v-label class="ml-2" v-else>Outsource</v-label>
          </div>
          <div class="mt-2">
            <v-icon>people</v-icon>
            <v-label class="ml-2"> {{ company.size }}</v-label>
          </div>
          <div class="mt-2">
            <v-icon>stars</v-icon>
            <v-label class="ml-2"> {{ company.rating }}</v-label>
          </div>

        </div>
      </v-flex>
    </v-card-title>
    <v-card-action>
      <v-btn flat class="red--text mt-0" :href='homepage + "company/" + company.id'>{{ company.job_count }} Jobs Available</v-btn>
    </v-card-action>

  </v-card>
</template>

<script>
  import { HOMEPAGE_URL } from '../../../constant/constant'

  export default {
    name: 'company-detail',
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
