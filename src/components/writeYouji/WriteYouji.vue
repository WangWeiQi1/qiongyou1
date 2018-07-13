<template>
<div class="container">
  <div class="whole">
    <div class="head">
      <a class="back" href="javascript:history.go(-1)"><img src="@/assets/img/back.png" /></a>
      <p>编写游记</p>
      <!--<a class="report" href="reported_details.html"><img src="img/report_1.png" /></a>-->
    </div>

    <div class="dingwei">
      <div class="nows">+添加旅行地 </div>
      <div class="wzs">
        <input type="text" class="nows" style="border: none;outline: medium;" name="Address"/>
      </div>
    </div>

    <div class="report">
      <div class="report_img">
        <label class="addImg" for="Imgs"><img src="@/assets/img/camera.png" width="50%" /></label>
        <span style="height: 1rem;line-height: 1rem;font-size: 16px; margin-left: 0.5rem ">添加一张景点图片</span>
        <input type="file" name="Imgs" id="Imgs" />
      </div>
    </div>
    <div class="show_img">
      <img src="@/assets/img/01.jpg">
    </div>

    <div class="wantsay">
    <textarea placeholder="请输入信息，概况；例如：位置、场合、人数等情况。"></textarea>
  </div>


     <ul class="btn">
       <li>发表</li>
       <li>存为草稿</li>
     </ul>
    </div>
</div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default ({
    methods: {
      // store,
      routerLink(path) {
        this.$router.push(path);
      },
      goBack(){
        this.$router.go(-1);
      },
    }
  })
</script>
<style scoped>
.container{
  padding-top: 1rem;
}
  .whole{
    width: 100%;
    height: auto;
  }
 .head{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1rem;
    background-color: #00CC99;
    overflow: hidden;
    margin: 0 auto;
  }
  .head a{
    width: .5rem;
    height: .5rem;
  }
  .head a img{
    width: 0.5rem;
    height: 0.5rem;
    margin:0.2rem 0 0 0.2rem;
  }
  .head p{
    font-size: 18px;
    color: white;
    position: absolute;
    top: 0.2rem;
    left: 1.2rem;
  }
  .dingwei{
      width: 100%;
      height: 1.2rem;
      font-size: 16px;
      border-bottom: 1px solid #E2E2E2;
      line-height: 1.2rem;
      color: #A1A1A1;
      position: relative;
    z-index: -10;
    }
  .nows{
    padding-left: 0.5rem;
    font-size: 16px;
    color: #000000;
    z-index: -10;
  }
  .wzs{
    height: 1rem;
    width: 40%;
    padding-left: 10px;
    color: #868686;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    bottom: 0.2rem;
    right: 1.4rem;
    z-index: -10;
  }
  .report {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .report_img{
    width: 100%;
    height: auto;
    overflow: hidden;
    border-bottom: 1px solid #E2E2E2;
  }
  .report_img {
    height: 1rem;
  }
  .report_img img{
    width: 1rem;
    height: 1rem;
  }
 .show_img{
   margin: 0.5rem auto;

 }
 .show_img img{
   display: block;
   width: 60%;
   height: 2.5rem;
   margin: 0 auto;
   border: 5px solid #cccccc;
 }

  .wantsay{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .wantsay textarea {
    width: 90%;
    height: 3rem;
    overflow: hidden;
    font-size: 16px;
    display: block;
    margin: 0 auto 5px;
    border: 1px solid #aaaaaa;
    box-sizing: border-box;
    outline: none;
  }
  .btn{
    height: 2rem;
  }
 .btn li{
   float: left;
   margin:0.5rem 0.5rem 0 0;
   width: 2rem;
   height: 1rem;
   background-color: darkgreen;
   color: white;
   font-size: .3rem;
   border-radius: 0.2rem;
   text-align: center;
   line-height: 1rem;
 }
</style>
