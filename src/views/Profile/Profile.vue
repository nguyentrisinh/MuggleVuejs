<template>
  <!--<v-container>-->
      <v-container>
        <v-layout>

          <v-flex xs12 md12 lg8 offset-lg2>
            <v-card class="container">

              <div style="float: left; padding-right: 10px"><img src="./images/14590374_1862185257349216_3197550112736295722_n.jpg" /></div>
              <div style="padding-top: 35px; padding-bottom: 10px;">
                <p style="font-size: 1.6em">Webcome,</p>
                <p style="line-height: 1.4px; font-size: 1.6em">Nhóm 7!</p>
              </div>
            <div style="font-size: 1.2em">Manage your ITviec account settings.</div>
            <table id="idtb">
              <tr>
                <td>Email</td>
                <td style="color: #808184;">
                  <span> Nhom7_HCL@gmail.com</span>
                  <a v-on:click="openChangeMail()" id="openchangemail">change email</a>
                </td>
              </tr>
              <tr v-show="isopen" id="changemail">
                <td></td>
                <td><input type="text"  placeholder="Nhom7_HCL@gmail.com"/></td>
              </tr>
              <tr v-show="isopen" >
                <td></td>
                <td style="padding-top: 10px;">
                  <a class="save-email" v-on:click="saveChangeEmail()">Save New Email</a>
                </td>
              </tr>
              <tr >
                <td >Name</td>
                <td ><input type="text" placeholder="Nhóm 7" style="margin-top: 10px; "/></td>
              </tr>
              <tr>
                <td>CV</td>
                <td><input type="file" /></td>
              </tr>
            </table>


            <div style="font-size: 1.2em">Cover Letter</div>
            <div><textarea  rows="10" style="width: 80%" placeholder="  Details and specific examples will make your application stronger..."></textarea></div>
            <v-flex xs12 sm3 class="pt-3">
              <v-btn color="primary" dark style="width: 100%; height: 50px;background-color: #EA1E30; margin: auto">
                <span style="text-transform: capitalize; font-size: large;">Save Change</span>
              </v-btn>
            </v-flex>
            </v-card>

          </v-flex>



        </v-layout>
      </v-container>
</template>

<script>
  export default {
    data () {
      return {
        isopen: false
      }
    },
    methods: {
      openChangeMail: function () {
        this.isopen = !this.isopen
      },
      saveChangeEmail: function () {
        document.getElementById('idtb').getElementsByTagName('tr')[0].getElementsByTagName('td')[1].getElementsByTagName('span')[0].innerHTML = document.getElementById('changemail').getElementsByTagName('td')[1].getElementsByTagName('input')[0].value
      }
    }
  }
</script>
<style>
  #idtb tr td{
    padding-right: 60px;
    padding-bottom: 10px;
  }
  #idtb{
    padding-top: 10px;
  }

  #openchangemail{
    cursor: pointer;
    margin-left: 10px;
  }
  .save-email{
    color: white;
    background-color: #EA1E30;
    border-radius: 4px;
    padding: 10px;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
  }
  .save-email:hover{
    background-color: red;
  }
  input{
    border-radius: 4px;
    border:1px solid #ccc;
    color: #808184;
    width: 100%;
    height: 30px;
  }

  textarea{
    margin-top: 10px;
    padding-top: 10px;
    border-radius: 4px;
    border:1px solid #ccc;
    color: #808184;
  }



</style>
