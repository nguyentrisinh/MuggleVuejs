<template>
  <v-layout column>
    <v-container fluid grid-list-md class="grey lighten-4">
      <v-layout row wrap>
        <v-flex
          xs12 sm6 md4
          v-for="job in jobs"
          :key="job.id"
        >
          <job-card :job="job" class="hvr-grow"></job-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>


<script>
  import { mapState } from 'vuex'
  import JobCard from './JobCard'

  export default {
    name: 'for-test',
    components: {
      JobCard
    },
    computed: mapState({
      jobs: state => state.jobs
    })
  }
</script>
