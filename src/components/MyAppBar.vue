<template>
    <v-layout row wrap>
      <v-flex xs12 class="cyan accent-4">
      <v-navigation-drawer
          class="pb-0 white hidden-md-and-up"
          persistent
          absolute
          height="100%"
          clipped
          v-model="drawer"
          enable-resize-watcher
        >
          <v-list dense>
            <v-list-tile class="">
              <v-list-tile-action>
                <v-icon class="">work</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="">Jobs</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="">location_city</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="">Companies</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>

        <v-flex xs12 sm12 md12 lg8 offset-lg2>
          <v-toolbar class="cyan accent-4 elevation-0">
            <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="clickMenu()"></v-toolbar-side-icon>
            <img src="../assets/logo.png" width="60" height="60" class="hidden-sm-and-down">
            <v-toolbar-title class="hidden-sm-and-down">
              <a class="white--text" :href="homepage" style="text-decoration:none;">
                muggle.vn
              </a>
            </v-toolbar-title>
            <v-toolbar-title class="hidden-md-and-up">
              <a class="white--text" :href="homepage" style="text-decoration:none;">
                muggle.vn
              </a>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="white hidden-sm-and-down" v-on:click="add(5)">
              <v-label>Companies</v-label>
              <v-icon class="pl-1 pb-1">location_city</v-icon>
            </v-btn>
            <v-btn class="white hidden-sm-and-down">
              <v-label>Jobs</v-label>
              <v-icon class="pl-1 pb-1">work</v-icon>
            </v-btn>
            <v-btn class="warning">
              <v-label>Login </v-label>
              <v-icon class="pl-1">account_circle</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
      </v-flex>
    </v-layout>
</template>

<script>
  import { HOMEPAGE_URL } from '../constant/constant'

  export default {
    name: 'MyAppBar',
    data () {
      return {
        drawer: false,
        homepage: HOMEPAGE_URL
      }
    },
    methods: {
      clickMenu () {
        console.log('test')
        this.drawer = !this.drawer
      }
    }
  }
</script>
