<template>
  <div class="container">
    <img src="@/assets/img/back.png" alt="" v-on:click="goBack">
    <div class="title">保险详情</div>
    <div  class="img">
      <!--<div v-for="(val,index)  in headPortraitList" :key="index" >-->
      <!--<img :src="val.src">-->
    </div>
    <div class="content">
      <span class="name_title">标题：{{title}}</span>
      <ul class="footer">
        <li >{{money}}</li>
        <li >{{count}}浏览</li>
        <li >{{sale}}已售</li>
      </ul>
    </div>
    <div class="time">
      <span>有效日期:{{time}}</span>
    </div>

    <div class="explain">
      <span>保险说明：{{explain}}</span>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'

  export default({
    data(){
      return{

//        headPortraitList:[],
        title:"人身意外险",
        money:"2980起",
        count:"130",
        sale:"666",
        time:"2018.06.16-1018.06.23",
        explain:"人身意外险说明。。。"
      }
    },
    store,
    created(){


    },
    methods: {
      routerLink(path){
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
  .content{
    width: 100%;
    height: 2.5rem;
    border: 1px solid gray;
    position: relative;
  }
  .img{
    height: 2rem;
    width: 100%;
    background-image: url("../../../static/img/timg-1.jpeg");

  }
  span{
    font-size: .3rem;
    color: gray;
  }

  .name_title{
    position: absolute;
    top: .2rem;
    left: .5rem;
    color: gray;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  ul li{
    flex: 1;
    font-size: .4rem;
    color: gray;
  }
  .time{
    width: 100%;
    height: .6rem;
    border: 1px solid gray;
    position: relative;
    text-align: center;

  }
  .explain{
    width: 100%;
    height: 2rem;
    border: 1px solid gray;
  }
  .container{
    width: 100%;
  }
  .container img{
    float: left;
    position: absolute;
    top:0.2rem;
    left: 0.1rem;
    z-index: 10;

  }
</style>
