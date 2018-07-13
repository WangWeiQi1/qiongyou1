<template>
<div class="container">
  <div class="header" :style="'background-color:'+$store.state.color">
    <img src="@/assets/img/back.png" @click="goBack('/')" />
    <h1 class="header-title">{{$store.state.title}}</h1>
  </div>
  <div class="weater">

  </div>
  <div class="content">
    <ul>
      <li style="width: 99%;height: 3rem"><img src="@/assets/img/weather.png"/><h3>天气</h3></li>
      <li><img src="@/assets/img/fanyi.png"><h3>语音翻译</h3></li>
      <li><img src="@/assets/img/hilv.png"><h3>实时汇率</h3></li>
      <li><img src="@/assets/img/jizhang.png"/><h3>旅行记账</h3></li>
      <li><img src="@/assets/img/ditu.png"/><h3>行程地图</h3></li>
    </ul>
  </div>
</div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'

export default ({
  created(){
    this.$store.commit('routerLink',{
      color:'rgb(0,150,136)',
      title:'旅行工具'
    });

  },
  store,
  routerLink(path){
    this.$router.push(path);
  },
  methods: {
    goBack(path){
    this.$router.push(path);
  }
  }
})
</script>
<style scoped>
.container{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
  .header{
    height: 1rem;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
  }
  .header .header-title{
    text-align: center;
    color: #d2e5ff;
    font-size: 0.4rem;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .header img{
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    position: absolute;
    left: 0.3rem;
    top: 0.2rem;
  }

  .content  li{
    width: 49%;
    height: 3rem;
    border: 1px solid #868686;
    float: left;
  }
  .content img{
    width: 1rem;
    height: 1rem;
    display: block;
    margin: .3rem auto;
  }
  .content h3{
    height: 1rem;
    width: 2rem;
    text-align: center;
    display: block;
    margin: 0 auto;
  }


</style>
