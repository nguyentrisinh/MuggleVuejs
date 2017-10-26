<template>
  <v-card class="white ml-2 mr-2 mt-2 mb-2 elevation-7">
    <v-card-media class="text-xs-center">
      <h5 class="blue--text mt-4 mb-0 ml-3 ">Reviews</h5>
    </v-card-media>
    <v-card-title>
      <v-container class="pt-0" v-for="review in reviews" :key="review.id"  fluid>
        <v-layout row>
          <v-flex xs12>
            <review-card :review="review"></review-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
  import { mapState } from 'vuex'
  import ReviewCard from './ReviewCard'
  export default {
    name: 'reviews',
    computed: mapState({
      reviews: state => state.reviews
    }),
    components: {
      ReviewCard
    }
  }
</script>
