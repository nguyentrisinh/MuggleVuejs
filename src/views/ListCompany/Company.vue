<template>
  <v-container>
    <V-layout>
      <v-flex xs12 md12 lg8 offset-lg2>

        <v-flex >


          <!-- Từ khúc đầu đến card company -->
          <h4 class="pl-2 pt-3">Company Reviews</h4>
          <h6 class="pl-2">What are people saying about your company? Search now to check reviews and ratings.</h6>
          <!--<button  id="btn">Search</button>-->
          <div style="padding-top: 25px; padding-bottom: 25px">
            <!--<v-card-actions>-->

              <v-layout column >
                <v-layout column >
                  <v-container fluid grid-list-md class="grey lighten-4">
                    <v-layout row wrap>
                      <v-flex
                        xs12 sm10 style="margin: auto"
                      >

                        <input placeholder="  Tìm kiếm công việc thực tập" id="search" class="white" />



                      </v-flex>
                      <v-flex xs12 sm2>
                        <div>
                          <v-btn color="primary" dark style="width: 100%; height: 50px;background-color: #ff9e34; margin: auto;">
                            <v-icon>search</v-icon>
                            Search
                          </v-btn>
                        </div>
                      </v-flex>

                    </v-layout>
                  </v-container>
                </v-layout>
              </v-layout>

            <!--</v-card-actions>-->

          </div>
          <div class="pl-2"><h4>Most popular</h4></div>
          <h6 class="pl-2 pb-4">Companies most viewed by "Chất" Developers</h6>
        </v-flex>
        <v-flex>
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>

              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="200px"  class="black&#45;&#45;text">
                        <img src="./images/kms-technology-headline-photo-compress.png" />
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0 pb-1">Kangaroo Valley Safari</h3>
                          <div ><v-icon class="grey--text pr-2 ">location_on</v-icon><span class="grey--text">Quận Tân Bình</span></div>
                          <div><v-icon class="grey--text pr-2 ">perm_identity</v-icon><span class="grey--text text">Togather make perfect</span></div>
                          <div class="pt-2">Agile & innovative global outsourcing...</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white--text orange darken-2">
                          <v-label>3.5</v-label>
                          <v-icon class="white--text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white--text success">3 Job</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="180px"  class="black&#45;&#45;text">
                        <img src="./images/fpt-software-headline-photo-compress.jpg" />
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0 pb-1">FPT Software</h3>
                          <div ><v-icon class="grey--text pr-2 ">location_on</v-icon><span class="grey--text">Quận Bình Thạnh</span></div>
                          <div><v-icon class="grey--text pr-2 ">perm_identity</v-icon><span class="grey--text text">Togather make perfect</span></div>
                          <div class="pt-2">The leading provider of software outsourcing service in Vietnam</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white--text orange darken-2">
                          <v-label>3.4</v-label>
                          <v-icon class="white--text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white--text success">4 Job</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="180px"  class="black&#45;&#45;text">
                        <img src="./images/framgia-inc-headline-photo-crop.jpg" />
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0 pb-1">Framgia Inc.</h3>
                          <div ><v-icon class="grey--text pr-2 ">location_on</v-icon><span class="grey--text">Quận Phú Nhuận</span></div>
                          <div><v-icon class="grey--text pr-2 ">perm_identity</v-icon><span class="grey--text text">Togather make perfect</span></div>
                          <div class="pt-2">One of the leading technical IT group in Asia. We’re on a mission to be the IT infra for software development</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white--text orange darken-2">
                          <v-label>5</v-label>
                          <v-icon class="white--text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white--text success">3 Job</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="190px"  class="black&#45;&#45;text">
                        <img src="./images/misfit-headline-photo-compress.png" />
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0 pb-1">MISFIT</h3>
                          <div ><v-icon class="grey--text pr-2 ">location_on</v-icon><span class="grey--text">Quận 1</span></div>
                          <div><v-icon class="grey--text pr-2 ">perm_identity</v-icon><span class="grey--text text">Togather make perfect</span></div>
                          <div class="pt-2">Great wearable computing products inventor and manufacturer</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white--text orange darken-2">
                          <v-label>3.8</v-label>
                          <v-icon class="white--text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white--text success">3 Job</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="190px"  class="black&#45;&#45;text">
                        <img src="./images/evolable-asia-headline-photo-compress.jpg" />
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0 pb-1">Evolable Asia</h3>
                          <div ><v-icon class="grey--text pr-2 ">location_on</v-icon><span class="grey--text">Quận Thủ Đức</span></div>
                          <div><v-icon class="grey--text pr-2 ">perm_identity</v-icon><span class="grey--text text">Togather make perfect</span></div>
                          <div class="pt-2">EVALABLE ASIA - To build the Top global Service for a better World</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white--text orange darken-2">
                          <v-label>4.1</v-label>
                          <v-icon class="white--text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white--text success">5 Job</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="190px"  class="black&#45;&#45;text">
                        <img src="./images/zalora-group-headline-photo-compress.jpg" />
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0 pb-1">ZALORA Group</h3>
                          <div ><v-icon class="grey--text pr-2 ">location_on</v-icon><span class="grey--text">Quận 7</span></div>
                          <div><v-icon class="grey--text pr-2 ">perm_identity</v-icon><span class="grey--text text">Togather make perfect</span></div>
                          <div class="pt-2">ZALORA Group is Asia Pacific's leading group of online fashion destinati...</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white--text orange darken-2">
                          <v-label>4.4</v-label>
                          <v-icon class="white--text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white--text success">2 Job</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>


            </v-layout>
          </v-container>

        </v-flex>
        <v-flex>
          <div class="text-xs-center ma" >
            <v-btn large style="text-align: center; "  grey class="mt-5 mb-5">Show More Recommended Companys</v-btn>
          </div>
        </v-flex>

      </v-flex>
    </V-layout>
  </v-container>

</template>

<script>

</script>

<style>
  #search{
    width: 100%;
    height: 50px;
  }

</style>
