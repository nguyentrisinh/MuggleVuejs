<template>
  <v-app standalone>
    <MyAppBar></MyAppBar>
    <main>
      <v-container fluid class="pt-0 pl-0 pr-0">
          <router-view></router-view>
      </v-container>
    </main>

    <app-footer></app-footer>
  </v-app>
</template>



<script>
  import MyAppBar from './components/MyAppBar'
  import AppFooter from './components/AppFooter'

  export default {
    name: 'app',
    components: {
      MyAppBar,
      AppFooter
    }
  }
</script>

<style>
  @import '../node_modules/vuetify/dist/vuetify.min.css';
  @import './assets/css/styles.css';
</style>
