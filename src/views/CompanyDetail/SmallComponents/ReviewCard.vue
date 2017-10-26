<template>
  <v-card class="ml-2 mr-2 mt-2 mb-2 elevation-7">
    <v-card-media class="light-blue accent-4">
      <v-container class="pa-0 ma-0" fluid>
        <v-layout row>
          <div>
            <v-flex xs12>
              <h6 class="mt-2 mb-1 ml-4 white--text">{{ review.title }}</h6>
              <p class="white--text mt-2 ml-4 mb-2" v-html="getCreatedTime(review.created_at)"></p>
            </v-flex>
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-flex xs12>
              <div class="mt-3 mb-3 ml-4 mr-4">
                <v-icon class="white--text">stars</v-icon>
                <v-label class="white--text">{{ review.rating }}</v-label>
              </div>
            </v-flex>
          </div>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title>

      <v-container class="pt-0" fluid>
        <v-layout row>
          <v-flex xs12>
            <h5 class="mb-1">What I Like</h5>

            <ul class="ml-4"
                v-html="getList(review.what_user_like)"
            >
            </ul>

          </v-flex>
        </v-layout>
      </v-container>

      <v-container class="pt-0" fluid>
        <v-layout row>
          <v-flex xs12>
            <h5 class="mb-1">What I Dislike</h5>

            <ul class="ml-4"
                v-html="getList(review.what_user_dislike)"
            >
            </ul>

          </v-flex>
        </v-layout>
      </v-container>

    </v-card-title>
  </v-card>
</template>


<script>
  import * as moment from 'moment'
  import { DATETIME_FORMAT } from '../../../constant/constant'

  export default {
    name: 'review-card',
    props: {
      review: { }
    },
    methods: {
      getList: function (strReview) {
        var array = strReview.split('\n')
        var index
        var html = ''

        for (index = 0; index < array.length; index++) {
          html = html.concat('<li>' + array[index] + '</li>')
        }
        return html
      },

      getCreatedTime: function (strDatetime) {
        var cdt = moment(strDatetime).format(DATETIME_FORMAT)
        return cdt
      }
    }

  }
</script>
