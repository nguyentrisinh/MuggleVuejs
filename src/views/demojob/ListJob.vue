<template>
  <v-container>
    <V-layout>
      <v-flex xs12 md12 lg8 offset-lg2>

        <v-flex >


          <!-- Từ khúc đầu đến card company -->
          <h4 class="pl-2 pt-3">Job Reviews</h4>
          <h6 class="pl-2">What are people saying about your Job? Search now to check reviews and ratings.</h6>
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
          <h6 class="pl-2 pb-4">1053 việc làm IT tại Việt Nam cho bạn</h6>
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

                      <v-card-title class="pt-0">
                        <div>
                          <h3 class="headline mb-0">
                            <a href="#" class="black--text" style="text-decoration: none;">
                              Android Developer - Urgent
                            </a>
                          </h3>
                          <span class="grey--text"> Quận Tân Bình</span><br>
                          <div>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Java
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Android Studio
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Git
                            </v-chip>
                          </div>
                          <span class="text-1 ">Strong Android Developer who has practical experience...</span>
                        </div>
                      </v-card-title>


                      <v-card-actions>
                        <v-btn flat class="orange--text">
                          EXPLORE
                        </v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="200px"  class="black&#45;&#45;text">
                        <img src="./images/misfit-headline-photo-compress.png" />
                      </v-card-media>

                      <v-card-title class="pt-0">
                        <div>
                          <h3 class="headline mb-0">
                            <a href="#" class="black--text" style="text-decoration: none;">
                              Backend Python Developer
                            </a>
                          </h3>
                          <span class="grey--text"> Quận Tân Bình</span><br>
                          <div>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Python
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Restful
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Django
                            </v-chip>
                          </div>
                          <span class="text-1 ">Interact with business stakeholders and guide them...</span>
                        </div>
                      </v-card-title>


                      <v-card-actions>
                        <v-btn flat class="orange--text">
                          EXPLORE
                        </v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="200px"  class="black&#45;&#45;text">
                        <img src="./images/pingcom-mobio-logo-65-65.png" />
                      </v-card-media>

                      <v-card-title class="pt-0">
                        <div>
                          <h3 class="headline mb-0">
                            <a href="#" class="black--text" style="text-decoration: none;">
                              Backend Ruby Developer
                            </a>
                          </h3>
                          <span class="grey--text"> Quận Phú Nhuận</span><br>
                          <div>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Ruby on Rail
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Javascript
                            </v-chip>
                          </div>
                          <span class="text-1 ">We're looking for a generalist product engineer who loves...</span>
                        </div>
                      </v-card-title>


                      <v-card-actions>
                        <v-btn flat class="orange--text">
                          EXPLORE
                        </v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="200px"  class="black&#45;&#45;text">
                        <img src="./images/fpt-software-headline-photo-compress.jpg" />
                      </v-card-media>

                      <v-card-title class="pt-0">
                        <div>
                          <h3 class="headline mb-0">
                            <a href="#" class="black--text" style="text-decoration: none;">
                              Sr Front-End Dev
                            </a>
                          </h3>
                          <span class="grey--text"> Quận 9</span><br>
                          <div>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              HTML 5
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              JavaScript
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              PHP
                            </v-chip>
                          </div>
                          <span class="text-1 ">Có tinh thần học hỏi, khả năng tự học và tự tìm hiểu để nâng cao chất lượng công việc;...</span>
                        </div>
                      </v-card-title>


                      <v-card-actions>
                        <v-btn flat class="orange--text">
                          EXPLORE
                        </v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="200px"  class="black&#45;&#45;text">
                        <img src="./images/nvg-technology-logo-65-65.png" />
                      </v-card-media>

                      <v-card-title class="pt-0">
                        <div>
                          <h3 class="headline mb-0">
                            <a href="#" class="black--text" style="text-decoration: none;">
                              PHP Web Developers
                            </a>
                          </h3>
                          <span class="grey--text"> Quận 1</span><br>
                          <div>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              MySQL
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              HTML5
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              PHP
                            </v-chip>
                          </div>
                          <span class="text-1 ">Now we are looking for the candidate to lead the Web engineering team in the future...</span>
                        </div>
                      </v-card-title>


                      <v-card-actions>
                        <v-btn flat class="orange--text">
                          EXPLORE
                        </v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="200px"  class="black&#45;&#45;text">
                        <img src="./images/bave-b-tek-logo-65-65.jpg" />
                      </v-card-media>

                      <v-card-title class="pt-0">
                        <div>
                          <h3 class="headline mb-0">
                            <a href="#" class="black--text" style="text-decoration: none;">
                              ERP Application Admin
                            </a>
                          </h3>
                          <span class="grey--text"> Quận 2</span><br>
                          <div>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              System Engineer
                            </v-chip>
                            <v-chip class="primary white--text ml-0 mt-0 mr-1" >
                              Database
                            </v-chip>

                          </div>
                          <span class="text-1 ">Kiến trúc tổng thể hệ thống CNTT Doanh nghiệp (Enterprise Architect)...</span>
                        </div>
                      </v-card-title>


                      <v-card-actions>
                        <v-btn flat class="orange--text">
                          EXPLORE
                        </v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>


              <!--<v-flex xs12 sm6 md4>
                <v-layout  class="hvr-grow card ma-3">
                  <v-flex>
                    <v-card>
                      <v-card-media  height="180px"  class="black&#45;&#45;text">
                        <img src="./images/fpt-software-headline-photo-compress.jpg" />
                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0 pb-1">FPT Software</h3>
                          <div ><v-icon class="grey&#45;&#45;text pr-2 ">location_on</v-icon><span class="grey&#45;&#45;text">Quận Bình Thạnh</span></div>
                          <div><v-icon class="grey&#45;&#45;text pr-2 ">perm_identity</v-icon><span class="grey&#45;&#45;text text">Togather make perfect</span></div>
                          <div class="pt-2">The leading provider of software outsourcing service in Vietnam</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white&#45;&#45;text orange darken-2">
                          <v-label>3.4</v-label>
                          <v-icon class="white&#45;&#45;text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white&#45;&#45;text success">4 Job</v-btn>
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
                          <div ><v-icon class="grey&#45;&#45;text pr-2 ">location_on</v-icon><span class="grey&#45;&#45;text">Quận Phú Nhuận</span></div>
                          <div><v-icon class="grey&#45;&#45;text pr-2 ">perm_identity</v-icon><span class="grey&#45;&#45;text text">Togather make perfect</span></div>
                          <div class="pt-2">One of the leading technical IT group in Asia. We’re on a mission to be the IT infra for software development</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white&#45;&#45;text orange darken-2">
                          <v-label>5</v-label>
                          <v-icon class="white&#45;&#45;text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white&#45;&#45;text success">3 Job</v-btn>
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
                          <div ><v-icon class="grey&#45;&#45;text pr-2 ">location_on</v-icon><span class="grey&#45;&#45;text">Quận 1</span></div>
                          <div><v-icon class="grey&#45;&#45;text pr-2 ">perm_identity</v-icon><span class="grey&#45;&#45;text text">Togather make perfect</span></div>
                          <div class="pt-2">Great wearable computing products inventor and manufacturer</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white&#45;&#45;text orange darken-2">
                          <v-label>3.8</v-label>
                          <v-icon class="white&#45;&#45;text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white&#45;&#45;text success">3 Job</v-btn>
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
                          <div ><v-icon class="grey&#45;&#45;text pr-2 ">location_on</v-icon><span class="grey&#45;&#45;text">Quận Thủ Đức</span></div>
                          <div><v-icon class="grey&#45;&#45;text pr-2 ">perm_identity</v-icon><span class="grey&#45;&#45;text text">Togather make perfect</span></div>
                          <div class="pt-2">EVALABLE ASIA - To build the Top global Service for a better World</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white&#45;&#45;text orange darken-2">
                          <v-label>4.1</v-label>
                          <v-icon class="white&#45;&#45;text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white&#45;&#45;text success">5 Job</v-btn>
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
                          <div ><v-icon class="grey&#45;&#45;text pr-2 ">location_on</v-icon><span class="grey&#45;&#45;text">Quận 7</span></div>
                          <div><v-icon class="grey&#45;&#45;text pr-2 ">perm_identity</v-icon><span class="grey&#45;&#45;text text">Togather make perfect</span></div>
                          <div class="pt-2">ZALORA Group is Asia Pacific's leading group of online fashion destinati...</div>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="orange" class="white&#45;&#45;text orange darken-2">
                          <v-label>4.4</v-label>
                          <v-icon class="white&#45;&#45;text pl-2">stars</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  class="white&#45;&#45;text success">2 Job</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>-->


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
  export default {
    name: 'list-job'
  }

</script>

<style>
  /* Grow */
  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }

  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    transform: scale(1.02);
  }

  #search{
    width: 100%;
    height: 50px;
  }

</style>
