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
              <v-list-tile-title :href="job" class="">Jobs</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="">location_city</v-icon>
              </v-list-tile-action>
              <v-list-tile-title :href="company" class="">Companies</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="">perm_contact_calendar</v-icon>
              </v-list-tile-action>
              <v-list-tile-title :href="contact" class="">Contact</v-list-tile-title>
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
            <v-btn :href="company" class="white hidden-sm-and-down" v-on:click="add(5)">
              <v-label>Companies</v-label>
              <v-icon class="pl-1 pb-1">location_city</v-icon>
            </v-btn>
            <v-btn :href="job" class="white hidden-sm-and-down">
              <v-label>Jobs</v-label>
              <v-icon class="pl-1 pb-1">work</v-icon>
            </v-btn>
            <v-btn :href="contact" class="white hidden-sm-and-down">
              <v-label>Contact</v-label>
              <v-icon class="pl-1 pb-1">perm_contact_calendar</v-icon>
            </v-btn>
            <v-btn class="warning"  v-on:click="DangNhap()"  @click.native.stop="dialog = true">
              <v-label>Login </v-label>
              <v-icon class="pl-1">account_circle</v-icon>

              <!-- hien login cho trang -->
              <v-layout row justify-center>
                <!-- <v-btn color="primary" @click.native.stop="dialog = true" dark v-on:click="DangNhap()">Open Dialog</v-btn>-->
                <v-dialog v-model="dialog" width="450px">

                  <v-flex xs12>
                    <v-layout row wrap>

                      <v-card style="width: 100%;">
                        <a v-on:click="dialog=false"  class="close" style="color: #858585">X</a>
                        <v-container style="padding: 50px">
                          <div >
                            <ul id="menu" >
                              <li id="lidk"><a v-on:click="DangKy()">Đăng Ký</a></li>
                              <li id="lidn"><a v-on:click="DangNhap()">Đăng Nhập</a></li>
                            </ul>
                            <hr>
                          </div>

                          <div v-show="dangky">


                            <v-flex xs12 sm12 style="padding-top: 20px">
                              <div >
                                <p style="font-size: 20px; text-align: center">Đăng ký & cập nhật hồ sơ.</p>
                              </div>
                            </v-flex>
                            <v-flex xs12 sm12 >

                              <v-btn color="primary" dark style="width: 100%; height: 50px;background-color: #cc3e2f; margin: auto">
                                <span class="fa fa-google-plus" aria-hidden="true" style="font-size: large;"></span>
                                <span style="text-transform: capitalize; font-size: large; border-left: 1px solid #73281c; padding-left: 20px">Đăng ký bằng Google</span>
                              </v-btn>

                            </v-flex>


                            <v-flex xs12 sm12 class="pt-3">
                              <v-btn color="primary" dark style="width: 100%; height: 50px;background-color: #428bca; margin: auto">
                                <span class="fa fa-facebook" aria-hidden="true"  style="font-size: large;"></span>
                                <span style="text-transform: capitalize; font-size: large; border-left: 1px solid #283b65; padding-left: 20px">Đăng ký bằng Facebook</span>
                              </v-btn>
                            </v-flex>

                            <v-flex xs12 sm12  class="pt-4">
                              <hr class="style-eight">
                            </v-flex>

                            <v-flex xs12 sm12 >
                              <input placeholder="Tên đăng nhập" style="width: 100%; height: 30px; padding: 20px; border:1px solid #ccc"/>
                            </v-flex>

                            <v-flex xs12 sm12 class="pt-3">
                              <input placeholder="Địa chỉ Email" style="width: 100%; height: 30px; padding: 20px; border:1px solid #ccc"/>
                            </v-flex>

                            <v-flex xs12 sm12 class="pt-3">
                              <input placeholder="Mật khẩu" style="width: 100%; height: 30px; padding: 20px; border:1px solid #ccc"/>
                            </v-flex>

                            <v-flex xs12 sm12 class="pt-3">
                              <a href="" style="text-decoration: none; float: right">Quên mật khẩu?</a>
                            </v-flex>

                            <v-flex xs12 sm12 class="pt-4">
                              <v-btn color="primary" dark style="width: 100%; height: 60px;background-color: #EA1E30; margin: auto;">
                                <span style="text-transform: capitalize; font-size: large;">Đăng Ký </span>
                              </v-btn>
                            </v-flex>

                          </div>
                          <div v-show="dangnhap" >

                            <v-flex xs12 sm12 style="padding-top: 20px">
                              <div >
                                <p style="font-size: 20px; text-align: center">Đăng nhập để ứng tuyển nhanh hơn.</p>
                              </div>
                            </v-flex>
                            <v-flex xs12 sm12 >

                              <v-btn color="primary" dark style="width: 100%; height: 50px;background-color: #cc3e2f; margin: auto">
                                <span class="fa fa-google-plus" aria-hidden="true" style="font-size: large;"></span>
                                <span style="text-transform: capitalize; font-size: large; border-left: 1px solid #73281c; padding-left: 20px">Đăng nhập bằng Google</span>
                              </v-btn>

                            </v-flex>


                            <v-flex xs12 sm12 class="pt-3">
                              <v-btn color="primary" dark style="width: 100%; height: 50px;background-color: #428bca; margin: auto">
                                <span class="fa fa-facebook" aria-hidden="true"  style="font-size: large;"></span>
                                <span style="text-transform: capitalize; font-size: large; border-left: 1px solid #283b65; padding-left: 20px">Đăng nhập bằng Facebook</span>
                              </v-btn>
                            </v-flex>

                            <v-flex xs12 sm12  class="pt-4">
                              <hr class="style-eight">
                            </v-flex>


                            <v-flex xs12 sm12>
                              <input placeholder="Địa chỉ Email" style="width: 100%; height: 30px; padding: 20px; border:1px solid #ccc"/>
                            </v-flex>

                            <v-flex xs12 sm12 class="pt-3">
                              <input placeholder="Mật khẩu" style="width: 100%; height: 30px; padding: 20px; border:1px solid #ccc"/>
                            </v-flex>

                            <v-flex xs12 sm12 class="pt-3">
                              <a href="" style="text-decoration: none; float: right">Quên mật khẩu?</a>
                            </v-flex>

                            <v-flex xs12 sm12 class="pt-4">
                              <v-btn
                                color="primary" dark style="width: 100%; height: 60px;background-color: #EA1E30; margin: auto;"
                                href="#/profile"
                                v-on:click="dialog=false"
                              >
                                <span style="text-transform: capitalize; font-size: large;">Đăng nhập </span>
                              </v-btn>
                            </v-flex>

                          </div>



                        </v-container>
                      </v-card>
                    </v-layout>
                  </v-flex>
                </v-dialog>
              </v-layout>
              <!-- ket thuc hien trang login -->
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
        homepage: HOMEPAGE_URL,
        company: HOMEPAGE_URL + 'listcompany',
        job: HOMEPAGE_URL + 'listjob',
        contact: HOMEPAGE_URL + 'contact',
        dialog: false,
        dangky: false,
        dangnhap: true
      }
    },
    methods: {
      clickMenu () {
        console.log('test')
        this.drawer = !this.drawer
      },
      DangKy: function () {
        this.dangky = true
        this.dangnhap = false
        document.getElementById('lidk').style.backgroundColor = '#eeeeee'
        document.getElementById('lidn').style.backgroundColor = '#fff'
        document.querySelector('#lidk a').style.color = '#428bca'
        document.querySelector('#lidn a').style.color = '#000000'
      },
      DangNhap: function () {
        this.dangky = false
        this.dangnhap = true
        document.getElementById('lidn').style.backgroundColor = '#eeeeee'
        document.getElementById('lidk').style.backgroundColor = '#fff'
        document.querySelector('#lidn a').style.color = '#428bca'
        document.querySelector('#lidk a').style.color = '#000000'
      }
    }
  }
</script>


<style scoped>
  #menu li{
    list-style-type: none;
    text-align: center;
    display: inline-block;
    padding-top: 10px;
    border: 1px solid #ccc;
    border-bottom: none;
    border-radius: 10px 10px 0px 0px;
    -moz-border-radius: 10px 10px 0px 0px; /*Firefox*/
    -webkit-border-radius: 10px 10px 0px 0px;  /*Chrome và Safary*/
  }

  #menu a{
    color: black;
    padding: 20px;
    cursor: pointer;

  }

  #logingg a{
    background-color: #ea1e30;
    color: white;
    padding: 18px;
    padding-left: 24px;
    padding-right: 24px;
    text-decoration: none;

    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;

  }
  #logingg a span {
    font-size: 20px;
  }


  #logingg{
    margin: auto;

  }

  .dngg{
    border-left: #73281c solid 2px;
    padding: 5px;
    padding-left: 15px;

  }

  /*facbook*/


  #loginfb a{
    background-color: #428bca;
    color: white;
    padding: 18px;
    text-decoration: none;

    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;

  }
  #loginfb a span {
    font-size: 20px;
  }

  .fa{
    padding-right: 10px;
  }
  .dnfb{
    border-left: #283b65 solid 2px;
    padding: 5px;
    padding-left: 15px;

  }
  #loginfb{
    margin: auto;

  }
  .close{
    float: right;
    cursor: pointer;
    height: 50px;
    padding: 10px;
    padding-top: 5px;
    color: red;
  }

  .style-eight{
    overflow: visible;
    padding: 0;
    border: none;
    /*border-top: medium double #333;*/
    border-top: 1px solid;
    color: #333;
    text-align: center;
  }

  hr.style-eight:after {
    content: "hoặc";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.2em;
    padding: 0 0.25em;
    background: white;
  }

</style>
