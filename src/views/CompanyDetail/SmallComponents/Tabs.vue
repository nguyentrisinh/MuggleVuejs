<template>
  <v-tabs dark fixed icons centered>
    <v-tabs-bar slot="activators" class="cyan accent-4">
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
        <v-icon>location_city</v-icon>
        Company
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>comment</v-icon>
        Reviews
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content
      key="1"
      id="tab-1"
    >
      <v-card flat>
        <div>
          <company-detail :company="company"></company-detail>
        </div>
        <div class="mt-5">
          <about-us :company="company"></about-us>
        </div>
        <div class="mt-5">
          <success-jobs :company="company"></success-jobs>
        </div>
      </v-card>
    </v-tabs-content>

    <v-tabs-content
      key="2"
      id="tab-2"
    >
      <v-card flat>
        <div>
          <review-component></review-component>
          <reviews></reviews>
        </div>
      </v-card>
    </v-tabs-content>

  </v-tabs>

</template>

<script>
  import CompanyDetail from './CompanyDetail'
  import AboutUs from './AboutUs'
  import SuccessJobs from './SuccessJobs'
  import ReviewComponent from './ReviewComponent'
  import Reviews from './Reviews'

  export default {
    name: 'tabs-component',
    components: {
      CompanyDetail,
      AboutUs,
      SuccessJobs,
      ReviewComponent,
      Reviews
    },
    props: {
      company: { }
    }
  }
</script>
