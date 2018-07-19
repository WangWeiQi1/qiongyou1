<template>
  <div class="header">
    <header2></header2>
    <footer1></footer1>
    <div class="head">
      <div class="circle"></div>
      <img class="back" src="@/assets/img/background.jpg" alt="">
      <img class="head-img" src="http://imgtu.5011.net/uploads/content/20170123/4752471485151835.jpg" alt="">
      <h3>昵称昵称</h3>
      <img class="sex" src="@/assets/img/man.png" alt="">
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
    <div class="btn2" @click='routerLink("/unlog")'>
      <h4>注销</h4>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  import Footer1 from '@/components/bar/Footer1'
  import Header2 from '@/components/bar/Header2'

  export default({
    data(){
      return{

      }
    },
    store,
    components:{
      'header2': Header2,
      'footer1': Footer1
    },
    created(){
      this.$store.commit('routerLink',{
        title:'个人中心'
      });
    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      }
    }
  })
</script>
<style scoped>
  .header{
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .btn{
    width: 4rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: #ffffff;
    border-radius: 0.1rem;
    background-color: rgb(141, 191, 60);
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
    color: rgb(53, 43, 16);
    position: absolute;
    left: 2.5rem;
    top: 1rem;
  }
  .sex{
    width: 0.4rem;
    position: absolute;
    left: 4.1rem;
    top: 1.1rem;
  }
</style>
