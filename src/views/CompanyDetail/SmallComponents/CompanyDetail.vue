<template>
  <v-card class="grey lighten-3 ml-2 mr-2 elevation-7">
    <v-card-media
      height="200px">
      <img :src="company.img" >
      <!--<img src="../../../assets/Cool-Cliffs-Above-Clouds-Wallpaper-HD-8710.jpg" >-->
    </v-card-media>
    <v-card-title primary-title class="pt-0">
      <v-flex xs12>
        <div block xs12>
          <h4 class="mb-2 text-xs-center"> {{ company.name }}</h4>
          <p subheading class="mb-0 text-xs-center"> {{ company.slug }}</p>
          <div class="pt-3">{{ company.overview }}</div>
        </div>
      </v-flex>
    </v-card-title>
    <v-card-action>
      <v-container class="pl-1 pr-1 pt-0 pb-0" fluid>
        <v-layout class="light-blue accent-4">
          <v-spacer></v-spacer>
          <div class="mt-2 mb-2 ml-4 mr-2 pa-0">
            <v-btn flat class="ma-0 pa-0">
              <v-icon class="white--text">stars</v-icon>
              <v-label class="white--text ml-1"> {{ company.rating }}</v-label>
            </v-btn>
          </div>
        </v-layout>
      </v-container>

    </v-card-action>
  </v-card>
</template>


<script>
  export default {
    name: 'company-detail',
    props: {
      company: {}
    }
  }
</script>


