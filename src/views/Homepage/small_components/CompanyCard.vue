<template>
  <v-card class="ml-4 mr-4 mt-4 elevation-7">
    <v-card-media
      class="black--text"
      height="200px"
      :src="company.img"
    >
      <!--<img src="../../../assets/docks.jpg">-->
      <!--<img :src="company.img">-->
    </v-card-media>
    <v-card-title>
      <div>
        <h3 class="headline mb-0">
          <a :href='homepage + "company/" + company.id' style="text-decoration:none;" class="black--text">
            {{ company.name }}
          </a>
        </h3>
        <span class="grey--text">{{ company.district }}</span><br>
        <span class="grey--text text"> {{ company.slug }}</span>
        <span class="text-2">{{ company.overview }}</span>
      </div>
    </v-card-title>
    <v-card-actions class="blue lighten-1">
      <v-btn :href='homepage + "company/" + company.id' class="white--text orange darken-2">
        <v-label>{{ company.rating }}</v-label>
        <v-icon class="white--text pl-2">stars</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :href='homepage + "company/" + company.id ' class="white--text success">{{ company.job_count }} Jobs</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  import { HOMEPAGE_URL } from '../../../constant/constant'

  export default {
    name: 'company-card',
    props: {
      company: { }
    },
    data: () => ({
      show: false,
      homepage: HOMEPAGE_URL
    })
  }
</script>

