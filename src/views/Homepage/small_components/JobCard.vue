<template>
  <v-card class="ml-4 mr-4 mt-4 elevation-7">
    <v-card-media
      class="black--text"
      height="200px"
    >
      <!--<img src="../../../assets/Cool-Cliffs-Above-Clouds-Wallpaper-HD-8710.jpg">-->
      <img :src="job.img">
      <!--<img :src="image">-->
    </v-card-media>
    <v-card-title class="pt-0">
      <div>
        <h3 class="headline mb-0">
          <a :href='homepage + "job/" + job.id' class="black--text" style="text-decoration:none;">
            {{ job.name }}
          </a>
        </h3>
        <span class="grey--text"> {{ job.district }}</span><br>
        <div>
          <v-chip class="primary white--text ml-0 mt-0 mr-1" v-for="skill in job.skills" small :key="skill.id">
            {{ skill.name }}
          </v-chip>
        </div>
        <span class="text-1 "> {{ job.description }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat class="orange--text" :href=' homepage + "job/" + job.id'>Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  import { HOMEPAGE_URL } from '../../../constant/constant'
  import DOCK from '../../../assets/Cool-Cliffs-Above-Clouds-Wallpaper-HD-8710.jpg'

  export default {
    name: 'job-card',
    props: {
      job: { }
    },
    data () {
      return {
        image: DOCK,
        homepage: HOMEPAGE_URL
      }
    }
  }
</script>
