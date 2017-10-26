<template>
  <v-card flat class="white ml-2 mr-2">
    <v-card-media>
      <div>
        <h4 class="mb-2">{{ job.name }}</h4>
        <div class="pt-0 mt-0">
          <v-chip outline v-for="skill in job.skills" :key="skill.id"
                  class="primary primary--text ml-1"
          > {{ skill.name }}</v-chip>
        </div>
        <div>
          <v-icon>access_time</v-icon>
          <v-label class="ml-1"> Created at: {{ getCreatedTime(job.created_at) }}</v-label>
        </div>

        <div class="mt-2">
          <v-icon>check_circle</v-icon>
          <v-label v-if="job.full_time" class="ml-1">Full time</v-label>
          <v-label class="ml-1" v-else>Part time</v-label>
        </div>

        <div>
          <v-icon>location_on</v-icon>
          <v-label class="ml-1">{{ job.company.address }}<span>
              <v-btn v-if="job.company.google_map != null"
                     :href="job.company.google_map"
                     flat class="red--text">See map</v-btn>
              <v-btn v-else disabled
                     :href="job.company.google_map"
                     flat class="red--text">See map</v-btn>
          </span></v-label>
        </div>
        <div class="ml-5 mr-5">
          <v-btn block class="red white--text">Apply Now</v-btn>
        </div>
        <v-divider class="mt-4"></v-divider>
      </div>
    </v-card-media>
    <v-card-title>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <h4>Job Descriptions</h4>
            <ul
              v-html="getList(job.description)"
            >
            </ul>
            <h4 class="mt-3">Skills</h4>

            <v-expansion-panel block>
              <v-expansion-panel-content block v-for="skill in job.skills" :key="skill.id">
                <div slot="header">{{ skill.name }}</div>
                <v-card>
                  <v-card-text class="grey lighten-3"> {{ skill.description }}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <h4 class="mt-3">Benefits</h4>

            <v-expansion-panel block>
              <v-expansion-panel-content block v-for="benefit in job.benefits" :key="benefit.id">
                <div slot="header">{{ benefit.benefit.name }}</div>
                <v-card>
                  <v-card-text class="grey lighten-3"> {{ benefit.description }}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
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
    name: 'job-detail',
    props: {
      job: { }
    },
    methods: {
      getList: function (strReview) {
        var array = strReview.split('\r\n')
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
