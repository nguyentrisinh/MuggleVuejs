<!--<template>-->
  <!--<v-card img="https://en.uit.edu.vn/sites/en/files/slider/uit_dsc_0002_1.jpg" flat height="550px"-->
  <!--class="pl-0 pr-0 ml-0 mr-0">-->
    <!--<v-container fill-height fluid>-->
      <!--<v-layout fill-height align-end>-->
        <!--<v-flex xs12 sm12 md12 lg8 offset-lg2 flexbox>-->
          <!--<v-container fluid class="px-3 search-wraper mb-4">-->
            <!--<v-layout row wrap class="grey lighten-4">-->
              <!--<div class="search">-->
                <!--<span class="fa fa-search"></span>-->
                <!--<input placeholder="Tìm kiếm công việc thực tập">-->
              <!--</div>-->
              <!--<v-btn class="mt-0 mb-0 pt-0 pb-0 ml-0 pl-0 mr-0 pr-0 warning" block>-->
                <!--<v-label class="ml-2 mr-2">Search</v-label>-->
                <!--<v-icon class="white&#45;&#45;text">search</v-icon>-->
              <!--</v-btn>-->
            <!--</v-layout>-->
              <!--&lt;!&ndash;<v-layout row wrap class="grey lighten-4 mt-3">&ndash;&gt;-->
                <!--&lt;!&ndash;<v-btn class="mt-0 mb-0 pt-0 pb-0 ml-0 pl-0 mr-0 pr-0 warning" block>&ndash;&gt;-->
                  <!--&lt;!&ndash;<v-label class="ml-2 mr-2">Search</v-label>&ndash;&gt;-->
                  <!--&lt;!&ndash;<v-icon class="white&#45;&#45;text">search</v-icon>&ndash;&gt;-->
                <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
              <!--&lt;!&ndash;</v-layout>&ndash;&gt;-->
          <!--</v-container>-->
        <!--</v-flex>-->
      <!--</v-layout>-->
    <!--</v-container>-->
  <!--</v-card>-->
<!--</template>-->

<template>
  <v-card img="https://en.uit.edu.vn/sites/en/files/slider/uit_dsc_0002_1.jpg" flat height="550px"
          class="pl-0 pr-0 ml-0 mr-0">
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex xs12 sm12 md12 lg8 offset-lg2 align-end flexbox>
          <v-container fluid class="px-3 search-wraper">
            <v-layout row wrap class="grey lighten-4">
              <div class="search">
                <span class="fa fa-search"></span>
                <input placeholder="Tìm kiếm công việc thực tập">
              </div>
            </v-layout>
            <v-layout row wrap class="grey lighten-4 mt-3">
              <v-btn class="mt-0 mb-0 pt-0 pb-0 ml-0 pl-0 mr-0 pr-0 warning" block>
                <v-label class="ml-2 mr-2">Search</v-label>
                <v-icon class="white--text">search</v-icon>
              </v-btn>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'search-component',
    data () {
      return {

      }
    }
  }
</script>

