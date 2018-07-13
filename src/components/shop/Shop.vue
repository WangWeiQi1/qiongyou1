<template>
  <div class="header">
    <div class="title">旅行商店</div>
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

</style>
