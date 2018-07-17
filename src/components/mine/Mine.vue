<template>
  <div class="header">
    <div class="title">我的</div>
    <div class="head">
      <div class="circle"></div>
      <img class="back" src="@/assets/img/background.jpg" alt="">
      <img class="head-img" src="http://imgtu.5011.net/uploads/content/20170123/4752471485151835.jpg" alt="">
      <h3>昵称</h3>
    </div>
    <div class="btn" @click='routerLink("/order")'>
      <img class="part" src="@/assets/img/order.png" alt="">
      <h4>我的订单</h4>
    </div>
    <div class="btn" @click='routerLink("/collect")'>
      <img class="part" src="@/assets/img/coll.png" alt="">
      <h4>我的收藏</h4>
    </div>
    <div class="btn" @click='routerLink("/note")'>
      <img class="part" src="@/assets/img/tnote.png" alt="">
      <h4>我的游记</h4>
    </div>
    <div class="btn" @click='routerLink("/")'>
      <img class="part" src="@/assets/img/step.png" alt="">
      <h4>我的足迹</h4>
    </div>
    <div class="btn" @click='routerLink("/MyMessage")'>
      <img class="part" src="@/assets/img/message.png" alt="">
      <h4>我的消息</h4>
    </div>
    <div class="btn2">
      <h4>注销</h4>
    </div>

    <div class="footer" >
      <ul>
        <li @click='routerLink("/")'>首页</li>
        <li @click='routerLink("find")'>发现</li>
        <li @click='routerLink("add")'>+</li>
        <li @click='routerLink("shop")'>旅行商城</li>
        <li @click='routerLink("mine")'>我的</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'

  export default({
    data(){
      return{

      }
    },
    store,
    created(){

    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      }
    }
  })
</script>
<style scoped>
  .title{
    height:1rem;
    width: 100%;
    background-color:  rgb(50,205,50);
    position: fixed;
    top:0;
    left: 0;
    line-height: 1rem;
    font-size: .4rem;
    color: white;
  }
  .footer{
    height:1rem;
    background-color: rgb(50,205,50);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .footer ul{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .footer ul li{
    flex-grow: 1;
    width: 0;
    color: #fff;
    line-height: 1rem;
    text-align: center;

  }
  .header{
    position: relative;
  }
  .btn{
    width: 4rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: #ffffff;
    border-radius: 0.1rem;
    background-color: #32cd32;
    margin: 0.3rem auto;
    position: relative;
  }
  .btn2{
    width: 4rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.8rem;
    color: #ffffff;
    background-color: #ff500a;
    margin: 0.4rem auto;
    position: relative;
  }
  .part{
    position: absolute;
    height: 0.6rem;
    left: 0.6rem;
    top: 0.15rem;
  }
  .head{
    position: relative;
    height: 2.5rem;
    box-shadow:0rem 0rem 0.1rem #abaa9f;
  }
  .back{
    position: absolute;
    z-index: -2;
    height: 2.5rem;
    width: 100%;
  }
  .head-img{
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    margin: 0.3rem 0.3rem;
  }
  .circle{
    width: 2rem;
    height: 2rem;
    background-color: #ffffff;
    opacity:0.6;
    border-radius: 50%;
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    z-index: -1;
  }
  h3{
    color: #614b29;
    position: absolute;
    left: 2.5rem;
    top: 1rem;
  }

</style>
