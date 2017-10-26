<template>
  <v-card class="white ml-2 mr-2 elevation-7">
    <v-card-media class="light-blue accent-4">
      <h6 class="white--text mt-2 mb-2 ml-3 ">About us</h6>
    </v-card-media>
    <v-card-title class="pl-0">
      <v-flex xs12>
        <v-list subheader block>
          <v-list-tile dark v-tooltip:top="{ html:  company.address }" :href="company.google_map"  avatar class="pl-0 ml-0" >
            <v-list-tile-avatar class="pl-0">
              <v-icon class="pl-0 cyan darken-2 white--text">location_on</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content class="pl-0">
              <v-list-tile-title>
                {{ company.address }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar class="pl-0 ml-0">
            <v-list-tile-avatar class="pl-0">
              <v-icon class="pl-0 cyan darken-2 white--text">star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content class="pl-0">
              <v-list-tile-title>
                <span v-if="company.type_id == 1">Product</span>
                <span v-else>Outsource</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar class="pl-0 ml-0">
            <v-list-tile-avatar class="pl-0">
              <v-icon class="pl-0 cyan darken-2 white--text">people</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content class="pl-0">
              <v-list-tile-title>
                Over {{ company.size }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar class="pl-0 ml-0" :href="company.website">
            <v-list-tile-avatar class="pl-0">
              <v-icon class="pl-0 cyan darken-2 white--text">link</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content class="pl-0">
              <v-list-tile-title>
                <a :href="company.website">{{ company.website }}</a>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>

    </v-card-title>
  </v-card>
</template>


<script>
  export default {
    name: 'about-us',
    props: {
      company: { }
    }
  }
</script>
