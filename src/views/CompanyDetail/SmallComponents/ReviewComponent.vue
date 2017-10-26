<template>
  <v-card class=" ml-2 mr-2 mb-4 elevation-7">
    <v-card-media class="mt-2 mb-2 ml-2 mr-2">
      <v-flex xs12>
        <div block xs12>
          <v-flex xs12 class="text-sm-center">
            <star-rating
              v-model="rating"
              :increment="0.5"
              :show-rating="false"
              :border-width="3"
              class="mt-3 mb-3"

            ></star-rating>
          </v-flex>
          <v-container class="pt-0 mt-0 mb-0 pb-0" fluid>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  name="input-1"
                  label="What user like"
                  textarea
                  class="mt-0 pb-0 mb-0"
                  v-model="what_user_like"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container class="pt-0 mt-0" fluid>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  name="input-1"
                  label="What user dislike"
                  textarea
                  class="mt-0 pb-0 mb-0"
                  v-model="what_user_dislike"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

          <div class="ml-4 mr-4">
            <v-btn block class=" mt-0 red white--text">Review This Company</v-btn>
          </div>
        </div>
      </v-flex>

    </v-card-media>
    <v-card-title primary-title class="pt-0">

    </v-card-title>
  </v-card>
</template>


<script>
  import StarRating from 'vue-star-rating'
  import ReviewCard from './ReviewCard'
  export default {
    name: 'review-component',

    components: {
      StarRating,
      ReviewCard
    },

    data () {
      return {
        rating: 3,
        what_user_like: '',
        what_user_dislike: ''
      }
    }
  }
</script>
