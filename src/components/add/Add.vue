<template>
  <div class="header">
    <div class="title">创建</div>
    <ul class="content">
      <li @click='routerLink("/writeYouji")'>
        <img src="@/assets/img/tripnote.png" alt="">
        <h4>写游记</h4>
      </li >
      <li>
        <img src="@/assets/img/xingcheng.png" alt="">
        <h4>创建行程</h4>
      </li>
      <li @click='routerLink("/Gowith")'>
        <img src="@/assets/img/gowith.png" alt="">
        <h4>结伴</h4>
      </li>
      <li @click='routerLink("/draft")'>
        <img src="@/assets/img/caogao.png" alt="">
        <h4>草稿</h4>
      </li>
    </ul>
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
.header{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
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
  .content li{
    width: 4rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: #ffffff;
    border-radius: 0.1rem;
    background-color: #32cd32;
    margin: 1rem auto;
    position: relative;
  }
  .content li img{
    position: absolute;
    height: 0.6rem;
    left: 0.9rem;
    top: 0.15rem; 
  }
  .content li h4{
    margin-left: 0.3rem;
  }

</style>
