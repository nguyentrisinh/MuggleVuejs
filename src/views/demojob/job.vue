<template>

  <!--<v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <v-layout >

      &lt;!&ndash;  <v-flex xs8 offset-xs2 class="hvr-grow"> sua lai&ndash;&gt;
      <v-flex  class="hvr-grow"   >
        <v-card  class="black&#45;&#45;text pa-4  " style="background-color: #00B8D4" >


          &lt;!&ndash;search demo &ndash;&gt;

          <v-layout column >
            <v-layout column >
              <v-container fluid grid-list-md class="white lighten-4">
                <v-layout row wrap >
                  <v-flex
                  >
                    &lt;!&ndash;<input placeholder="  Tìm kiếm công việc thực tập" id="search" class="white"  style="width: 100%" />&ndash;&gt;

                    <v-card-media height="150px">
                      <img  src="./images/kms-technology-logo-65-65.png" style="width: 100%"  />
                    </v-card-media>


                  </v-flex>


                  <v-flex xs10 >
                    <v-layout column >
                      <v-container fluid grid-list-md class=" lighten-4">
                        <v-layout row wrap>

                          <v-flex xs10>

                            <v-card-title >
                              <div>
                                <div class="headline">Internship Java</div>
                                <div>
                                  <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                                  <span>200$</span>
                                </div>
                                <div>Java and object-oriented programming. The Primavera Global Business Unit (GBU) of Oracle is the world’s leading project and portfolio management software...</div>
                                <div id="require">
                                  <span>Software Architect</span>
                                  <span>J2EE</span>
                                  <span>Java</span>
                                </div>
                              </div>
                            </v-card-title>
                          </v-flex>

                          <v-flex >
                            <div style="width: 100%;">
                              <div id="hotjob">Hot job</div>
                              <div class="grey&#45;&#45;text pt-3">
                                <div>Hồ Chí Minh</div>
                                <div>Quận Thủ Đức</div>
                              </div>
                              <div class="blue&#45;&#45;text pt-3">3 hours ago</div>
                            </div>

                          </v-flex>

                        </v-layout>
                      </v-container>
                    </v-layout>
                  </v-flex>



                </v-layout>
              </v-container>
            </v-layout>
          </v-layout>


          &lt;!&ndash; end search demo &ndash;&gt;



        </v-card>
      </v-flex>


    </v-layout>
  </v-container>-->
<v-container >
  <v-layout>
  <v-flex xs8 offset-xs2 class="pt-3">
   <!-- <v-container fluid grid-list-md class="grey lighten-4">-->



      <v-layout row wrap>
        <v-flex
          xs12 sm7 style="margin: auto"
        >
          <input placeholder="  Tìm kiếm công việc thực tập" id="search" class="white" style="width: 100%; height: 50px" />
        </v-flex>
        <v-flex
          xs12 sm3 style="margin: auto"
        >
          <input placeholder="  Địa điểm thực tập"  class="white" style="width: 100%; height: 50px" />
        </v-flex>
        <v-flex xs12 sm2 >
          <div>
            <v-btn color="primary" dark style="width: 100%; height: 50px;background-color: #ff9e34">
              <v-icon>search</v-icon>
              Search
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
  <!--  </v-container>-->
  </v-flex>

  <v-flex xs8 offset-xs2 class="pt-4 pl-2">
    <h4>1105 việc làm IT tại Việt Nam cho bạn</h4>
  </v-flex>

 <!-- <v-flex xs8 offset-xs2 class="hvr-grow" v-on:mouseover="Action1()" v-on:mouseout="DisAction1()">
    <v-container style="background-color: #00B8D4;padding: 7px">
    <v-card >
      <v-container >
        <v-layout row wrap>

          <v-flex xs12 sm2>
            <v-card-media height="150px">
              <img  src="./images/kms-technology-logo-65-65.png" style="width: 100%"  />
            </v-card-media  >
          </v-flex>

          <v-flex xs12 sm10 >
            <v-layout column >
              <v-container fluid grid-list-md class=" lighten-4">
                <v-layout row wrap>

                  <v-flex xs10>

                    <v-card-title >
                      <div>
                        <div class="headline">Internship Java</div>
                        <div>
                          <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                          <span>200$</span>
                        </div>
                        <div>Java and object-oriented programming. The Primavera Global Business Unit (GBU) of Oracle is the world’s leading project and portfolio management software...</div>
                        <div class="require">
                          <span>Software Architect</span>
                          <span>J2EE</span>
                          <span>Java</span>
                        </div>
                      </div>
                    </v-card-title>
                  </v-flex>

                  <v-flex >
                    <div style="width: 100%;">
                      <div class="hotjob">Hot Job</div>
                      <div class="grey&#45;&#45;text pt-3">
                        <div>Hồ Chí Minh</div>
                        <div>Quận 9</div>
                      </div>
                      <div class="blue&#45;&#45;text pt-3">26 phút trước</div>
                    </div>

                  </v-flex>

                </v-layout>
              </v-container>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card>
    </v-container>
  </v-flex>

  <v-flex xs8 offset-xs2 class="hvr-grow" >
    <v-container style="background-color: #00B8D4;padding: 7px">
      <v-card v-on:mouseover="Action2()" v-on:mouseout="DisAction2()">
        <v-container >
          <v-layout row wrap>

            <v-flex xs12 sm2>
              <v-card-media height="150px">
                <img  src="./images/bave-b-tek-logo-65-65.jpg" style="width: 100%"  />
              </v-card-media>
            </v-flex>

            <v-flex xs12 sm10 >
              <v-layout column >
                <v-container fluid grid-list-md class=" lighten-4">
                  <v-layout row wrap>

                    <v-flex xs10>

                      <v-card-title >
                        <div>
                          <div class="headline">Internship Python</div>
                          <div>
                            <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                            <span>300$</span>
                          </div>
                          <div>Lập trình viên Python Web trên nền Framework odoo. Tham gia phát triển,bảo trì,triển khai phần mềm quản trị doanh nghiệp cung cấp cho khách hàng vừa và...</div>
                          <div class="require">
                            <span>Python</span>
                            <span>HTML5</span>
                            <span>JavaScript</span>
                          </div>
                        </div>
                      </v-card-title>
                    </v-flex>

                    <v-flex >
                      <div style="width: 100%;">
                        <div class="new">New</div>
                        <div class="grey&#45;&#45;text pt-3">
                          <div>Hồ Chí Minh</div>
                          <div>Quận Thủ Đức</div>
                        </div>
                        <div class="blue&#45;&#45;text pt-3">3 giờ trước</div>
                      </div>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-layout>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-flex>

  <v-flex xs8 offset-xs2 class="hvr-grow" >
    <v-container style="background-color: #00B8D4;padding: 7px">
      <v-card v-on:mouseover="Action3()" v-on:mouseout="DisAction3()">
        <v-container >
          <v-layout row wrap>

            <v-flex xs12 sm2>
              <v-card-media height="150px">
                <img  src="./images/home-credit-vietnam-ppf-logo-65-65.png" style="width: 100%"  />
              </v-card-media>
            </v-flex>

            <v-flex xs12 sm10 >
              <v-layout column >
                <v-container fluid grid-list-md class=" lighten-4">
                  <v-layout row wrap>

                    <v-flex xs10>

                      <v-card-title >
                        <div>
                          <div class="headline">Internship C#</div>
                          <div>
                            <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                            <span>100$</span>
                          </div>
                          <div>We are looking for an ambitious and talented Senior Software Developer (C#) to join our team. You will be a key-person in building the company’s new...</div>
                          <div class="require">
                            <span>C#</span>
                            <span>MVC</span>
                            <span>ASP>NET</span>
                          </div>
                        </div>
                      </v-card-title>
                    </v-flex>

                    <v-flex >
                      <div style="width: 100%;">
                        <div class="hotjob">Hot Job</div>
                        <div class="grey&#45;&#45;text pt-3">
                          <div>Hồ Chí Minh</div>
                          <div>Quận 2</div>
                        </div>
                        <div class="blue&#45;&#45;text pt-3">2 giờ trước</div>
                      </div>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-layout>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-flex>

  <v-flex xs8 offset-xs2 class="hvr-grow" >
    <v-container style="background-color: #00B8D4;padding: 7px">
      <v-card v-on:mouseover="Action4()" v-on:mouseout="DisAction4()">
        <v-container >
          <v-layout row wrap>

            <v-flex xs12 sm2>
              <v-card-media height="150px">
                <img  src="./images/appweavers-logo-65-65.png" style="width: 100%"  />
              </v-card-media>
            </v-flex>

            <v-flex xs12 sm10 >
              <v-layout column >
                <v-container fluid grid-list-md class=" lighten-4">
                  <v-layout row wrap>

                    <v-flex xs10>

                      <v-card-title >
                        <div>
                          <div class="headline">Internship Angular 2/Fontend Devs</div>
                          <div>
                            <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                            <span>150$</span>
                          </div>
                          <ul>
                            <li>Làm việc cùng các kỹ sư Nhật Bản</li>
                            <li>Làm việc ngay tại trung tâm TP</li>
                            <li>Chế độ đãi ngộ tốt</li>
                          </ul>
                          <div>Phát triển web sử dụng PHP Chuyển đổi giao diện từ file Photoshop sang HTML, CSS, JavaScript Phát triển API cho Smartphone Phát triển website quản trị...</div>
                          <div class="require">
                            <span>AngularJS</span>
                            <span>JavaScript</span>
                            <span>ReactJS</span>
                          </div>
                        </div>
                      </v-card-title>
                    </v-flex>

                    <v-flex >
                      <div style="width: 100%;">
                        <div class="new">New</div>
                        <div class="grey&#45;&#45;text pt-3">
                          <div>Hồ Chí Minh</div>
                          <div>Quận 4</div>
                        </div>
                        <div class="blue&#45;&#45;text pt-3">2 giờ trước</div>
                      </div>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-layout>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-flex>

  <v-flex xs8 offset-xs2 class="hvr-grow" >
    <v-container style="background-color: #00B8D4;padding: 7px">
      <v-card v-on:mouseover="Action5()" v-on:mouseout="DisAction5()">
        <v-container >
          <v-layout row wrap>

            <v-flex xs12 sm2>
              <v-card-media height="150px">
                <img  src="./images/nvg-technology-logo-65-65.png" style="width: 100%"  />
              </v-card-media>
            </v-flex>

            <v-flex xs12 sm10 >
              <v-layout column >
                <v-container fluid grid-list-md class=" lighten-4">
                  <v-layout row wrap>

                    <v-flex xs10>

                      <v-card-title >
                        <div>
                          <div class="headline">Internship Android</div>
                          <div>
                            <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                            <span>250$</span>
                          </div>
                          <div>Start now or next year. Work on high impact products, grow by working with great people, and in a culture that values the happiness of the team. Talk...</div>
                          <div class="require">
                            <span>Mobile Apps</span>
                            <span>English</span>
                            <span>Android</span>
                          </div>
                        </div>
                      </v-card-title>
                    </v-flex>

                    <v-flex >
                      <div style="width: 100%;">
                        <div class="hotjob">Hot Job</div>
                        <div class="grey&#45;&#45;text pt-3">
                          <div>Hồ Chí Minh</div>
                          <div>Quận 10</div>
                        </div>
                        <div class="blue&#45;&#45;text pt-3">6 giờ trước</div>
                      </div>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-layout>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-flex>

  <v-flex xs8 offset-xs2 class="hvr-grow" >
    <v-container style="background-color: #00B8D4;padding: 7px">
      <v-card v-on:mouseover="Action6()" v-on:mouseout="DisAction6()">
        <v-container >
          <v-layout row wrap>

            <v-flex xs12 sm2>
              <v-card-media height="150px">
                <img  src="./images/mat-vietnam-logo-65-65.jpg" style="width: 100%"  />
              </v-card-media>
            </v-flex>

            <v-flex xs12 sm10 >
              <v-layout column >
                <v-container fluid grid-list-md class=" lighten-4">
                  <v-layout row wrap>

                    <v-flex xs10>

                      <v-card-title >
                        <div>
                          <div class="headline">Internship Application Engineers (SQL/Database)</div>
                          <div>
                            <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                            <span>230$</span>
                          </div>
                          <div>Job details will be discussed during the interview Recruitment schedule: After collecting your CVs, the company shall contact with applicants via...</div>
                          <div class="require">
                            <span>System Engineer</span>
                            <span>Database</span>
                            <span>SQL</span>
                          </div>
                        </div>
                      </v-card-title>
                    </v-flex>

                    <v-flex >
                      <div style="width: 100%;">
                        <div class="hotjob">Hot Job</div>
                        <div class="grey&#45;&#45;text pt-3">
                          <div>Hồ Chí Minh</div>
                          <div>Quận 1</div>
                        </div>
                        <div class="blue&#45;&#45;text pt-3">6 giờ trước</div>
                      </div>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-layout>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-flex>

  <v-flex xs8 offset-xs2 class="hvr-grow" >
    <v-container style="background-color: #00B8D4;padding: 7px">
      <v-card v-on:mouseover="Action7()" v-on:mouseout="DisAction7()">
        <v-container >
          <v-layout row wrap>

            <v-flex xs12 sm2>
              <v-card-media height="150px">
                <img  src="./images/pingcom-mobio-logo-65-65.png" style="width: 100%"  />
              </v-card-media>
            </v-flex>

            <v-flex xs12 sm10 >
              <v-layout column >
                <v-container fluid grid-list-md class=" lighten-4">
                  <v-layout row wrap>

                    <v-flex xs10>

                      <v-card-title >
                        <div>
                          <div class="headline">Internship Font-end Dev</div>
                          <div>
                            <v-icon class="grey&#45;&#45;text">attach_money</v-icon>
                            <span>215$</span>
                          </div>
                          <div>Tham gia phát triển các dự án về Web của Công ty, chuyên xây dựng các chức năng frontend của Web site, Web application; Tham gia tìm hiểu, đánh giá các...</div>
                          <div class="require">
                            <span>HTML5</span>
                            <span>CSS</span>
                            <span>JavaScripts</span>
                          </div>
                        </div>
                      </v-card-title>
                    </v-flex>

                    <v-flex >
                      <div style="width: 100%;">
                        <div class="hotjob">Hot Job</div>
                        <div class="grey&#45;&#45;text pt-3">
                          <div>Hồ Chí Minh</div>
                          <div>Quận 3</div>
                        </div>
                        <div class="blue&#45;&#45;text pt-3">7 giờ trước</div>
                      </div>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-layout>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-flex>-->

  <v-flex class="text-xs-center ma">
    <v-btn large style="text-align: center"  grey class="mt-4 mb-5  ">Show More Recommended Jobs</v-btn>
  </v-flex>
  </v-layout>
  </v-container>


</template>

<script>
  export default {
    methods: {
      Action1: function () {
        document.getElementsByClassName('headline')[0].style.color = 'red'
        document.getElementsByClassName('require')[0].style.color = 'red'
      },
      DisAction1: function () {
        document.getElementsByClassName('headline')[0].style.color = 'black'
        document.getElementsByClassName('require')[0].style.color = 'black'
      },
      Action2: function () {
        document.getElementsByClassName('headline')[1].style.color = 'red'
        document.getElementsByClassName('require')[1].style.color = 'red'
      },
      DisAction2: function () {
        document.getElementsByClassName('headline')[1].style.color = 'black'
        document.getElementsByClassName('require')[1].style.color = 'black'
      },
      Action3: function () {
        document.getElementsByClassName('headline')[2].style.color = 'red'
        document.getElementsByClassName('require')[2].style.color = 'red'
      },
      DisAction3: function () {
        document.getElementsByClassName('headline')[2].style.color = 'black'
        document.getElementsByClassName('require')[2].style.color = 'black'
      },
      Action4: function () {
        document.getElementsByClassName('headline')[3].style.color = 'red'
        document.getElementsByClassName('require')[3].style.color = 'red'
      },
      DisAction4: function () {
        document.getElementsByClassName('headline')[3].style.color = 'black'
        document.getElementsByClassName('require')[3].style.color = 'black'
      },
      Action5: function () {
        document.getElementsByClassName('headline')[4].style.color = 'red'
        document.getElementsByClassName('require')[4].style.color = 'red'
      },
      DisAction5: function () {
        document.getElementsByClassName('headline')[4].style.color = 'black'
        document.getElementsByClassName('require')[4].style.color = 'black'
      },
      Action6: function () {
        document.getElementsByClassName('headline')[5].style.color = 'red'
        document.getElementsByClassName('require')[5].style.color = 'red'
      },
      DisAction6: function () {
        document.getElementsByClassName('headline')[5].style.color = 'black'
        document.getElementsByClassName('require')[5].style.color = 'black'
      },
      Action7: function () {
        document.getElementsByClassName('headline')[6].style.color = 'red'
        document.getElementsByClassName('require')[6].style.color = 'red'
      },
      DisAction7: function () {
        document.getElementsByClassName('headline')[6].style.color = 'black'
        document.getElementsByClassName('require')[6].style.color = 'black'
      }
    }
  }

</script>

<style>
  .hotjob{
    width: 60px;
    background-color: #ff9e34;
    display: block;
    text-align: center;
    color: white;
  }
  .new{
    width: 60px;
    background-color: #aaaaaa;
    display: block;
    text-align: center;
    color: white;
  }

  #card:hover{


  }

  .require{
    padding-top: 20px;
  }
  .require span{
    border: 1px solid #727272;
    padding: 3px;

  }

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
    transform: scale(1.01);
  }
</style>
