<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md12 lg8 offset-lg2 style="background-color: white">

        <v-flex id="bgimagecontact">
            <h3 style="color: white">Liên hệ với Muggle</h3>
            <p style="font-size: 1.3em">Công ty CP Muggle</p>
            <p style="font-size: 1.2em">Địa chỉ</p>
            <p><span style="color: red;"><i class="fa fa-map-marker fa-2x"></i></span>Lầu 6 - 7, 235 Lý Thường Kiệt, Phường 6, Quận Tân Bình, Tp.HCM</p>
            <p><span style="color: red;"><i class="fa fa-map-marker fa-2x"></i></span>Tầng 6 tòa nhà VAPA, ngõ 3 Tôn Thất Thuyết, Q. Cầu Giấy, Hà Nội</p>
            <p><span style="color: red;"><i class="fa fa-map-marker fa-2x"></i></span>Shibuya 1-12-2, Shibuya-ku, Tokyo 150-0002, Japan</p>
            <p><span style="color: red;"><i class="fa fa-phone fa-2x" aria-hidden="true"></i></span>0919 95 73 79 - 028 7301 8088 - 028 9990 9139</p>
            <p><span style="color: red;"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></span>contact@muggle.com.vn</p>
        </v-flex>

        <v-flex >
          <div style="padding-top: 30px; padding-bottom: 30px;">
          <img src="./images/Capture.png" style="width: 100%"/>
          </div>
        </v-flex>

        <v-flex id="imgagecontact">
          <div style="text-align: center; padding-bottom: 20px;">
            <h4  style="color: white">Bạn muốn tìm một công ty phù hợp để thực tập? </h4>
          </div>
          <ul>
            <li>Bạn cần chuẩn bị những kiếm thức gì để đi thực tập?</li>
            <li>Bạn đang tìm một nơi tư vấn uy tính</li>
          </ul>
        </v-flex>

        <v-flex style="text-align: center">
          <p ><i class="fa fa-sort-desc fa-5x" aria-hidden="true"></i></p>
          <p style="font-size: 1.6em; font-weight: bold">Liên hệ với MUGGLE, để chúng tôi giúp bạn!</p>
        </v-flex>

        <v-flex>
          <v-layout row wrap>
          <v-flex xs12 sm4 style="border: 1px solid crimson; text-align: center; padding-top: 30px;padding-bottom: 30px; color: #FD5E29">
            <p><i class="fa fa-phone fa-5x" aria-hidden="true"></i></p>
            <p style="font-weight: bold; font-size: 1.4em; color: #777777">HOTLINE 1</p>
            <p style="font-weight: bold; font-size: 1.4em">0919 95 73 79</p>
          </v-flex>
            <v-flex xs12 sm4 style="border: 1px solid crimson; text-align: center; padding-top: 30px;padding-bottom: 30px; color: #FD5E29">
              <p><i class="fa fa-phone fa-5x" aria-hidden="true"></i></p>
              <p style="font-weight: bold; font-size: 1.4em; color: #777777">HOTLINE 2</p>
              <p style="font-weight: bold; font-size: 1.4em">0913 78 56 45</p>
            </v-flex>
            <v-flex xs12 sm4 style="border: 1px solid crimson; text-align: center; padding-top: 30px;padding-bottom: 30px; color: #FD5E29">
              <p><i class="fa fa-envelope-o fa-5x" aria-hidden="true"></i></p>
              <p style="font-weight: bold; font-size: 1.4em; color: #777777">EMAIL</p>
              <p style="font-weight: bold; font-size: 1.4em">contact@muggle.com.vn</p>
            </v-flex>
          </v-layout>
        </v-flex>


        <v-flex style="padding-top: 30px;padding-bottom: 30px">
          <ul>
            <li>Tư vấn chuyên sau và giải đáp nhanh chóng</li>
            <li>MUGGLE sẽ phản hồi ngay khi nhận được thông tin</li>
          </ul>
        </v-flex>

        <v-flex id="backgroundmail">
          <v-flex xs10 offset-xs1  id="backgroundmailsub">
            <h4 style="text-align: center">Đặt câu hỏi cho chúng tôi</h4>
            <p style="padding-bottom: 40px;">Chúng tôi sẽ giải đáp thắc mắc cho bạn</p>
            <v-layout row wrap style="padding-bottom: 15px;">
              <v-flex xs12 sm6 >
                <v-flex xs12 style="padding-bottom: 5px;">Tên của bạn(*)</v-flex>
                <v-flex xs12><input class="inputmail" /></v-flex>
              </v-flex>
              <v-flex xs12 sm6>
                <v-flex xs12 style="padding-bottom: 5px;">Email của bạn(*)</v-flex>
                <v-flex xs12><input class="inputmail"/></v-flex>
              </v-flex>
            </v-layout>
            <v-layout row wrap  style="padding-bottom: 15px;">
              <v-flex xs12 sm6>
                <v-flex xs12 style="padding-bottom: 5px;">Số điện thoại(*)</v-flex>
                <v-flex xs12><input class="inputmail"/></v-flex>
              </v-flex>
              <v-flex xs12 sm6>
                <v-flex xs12 style="padding-bottom: 5px;">Facbook của bạn(*)</v-flex>
                <v-flex xs12><input class="inputmail"/></v-flex>
              </v-flex>
            </v-layout>
            <v-flex xs12 style="padding-bottom: 5px;">Nội dung bạn cần tư vấn(*)</v-flex>
            <v-flex xs12>
              <textarea rows="5" style="width: 100%; background-color: #f7f7f7; border: 1px solid #d1d1d1"></textarea>
            </v-flex>
            <v-flex style="margin-top: 10px;margin-bottom: 10px;">
              <v-btn style="background-color:#FD5E29; color: white ">Gửi yêu cầu</v-btn>
            </v-flex>

          </v-flex>

        </v-flex>


      </v-flex>
    </v-layout>
  </v-container>
</template>


<style>
  #bgimagecontact{
    background-image: url("./images/Manpower-planning-Recruitment.jpg");
    color: white;
    padding-left: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  #bgimagecontact span{
    padding-right: 10px;
  }

  #imgagecontact{
    background-image: url("./images/anh 1(10).jpg");
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  #backgroundmail{
    background-image: url("./images/wttblog10.jpg");
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #backgroundmailsub{
    background-color: white;
    padding: 20px;

  }
  .inputmail{
    width: 100%;
    background-color: #f7f7f7;
    height: 30px;
    border: 1px solid #d1d1d1;

  }

</style>
