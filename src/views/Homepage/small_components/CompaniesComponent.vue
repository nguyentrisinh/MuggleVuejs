<template>
  <v-layout column>
    <v-container fluid grid-list-md class="grey lighten-4">
      <v-layout row wrap>
        <v-flex
          xs12 sm6 md4
          v-for="company in companies"
          :key="company.id"
        >
          <company-card :company="company" class="hvr-grow"></company-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>


<script>
  import { mapState } from 'vuex'
  import CompanyCard from './CompanyCard'

  export default {
    name: 'companies-component',
    computed: mapState({
      companies: state => state.companies
    }),
    components: {
      CompanyCard
    }
  }
</script>
