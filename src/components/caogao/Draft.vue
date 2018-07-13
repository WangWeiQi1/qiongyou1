<template>
  <div class="container">
    <div class="header" :style="'background-color:'+$store.state.color">
      <img src="@/assets/img/back.png" v-on:click="goBack"/>
      <h1 class="header-title">{{$store.state.title}}</h1>
    </div>

    <div class="content">
      <div  class="img">
        <!--<div v-for="(val,index)  in headPortraitList" :key="index" >-->
        <!--<img :src="val.src">-->

      </div>
      <span class="name">{{name}}</span>

      <span class="time">{{time}}</span>
      <div class="bgimg">
        <img src="" alt="">
      </div>
      <span class="comment">{{comment}}</span><br>
      <div class="btnsw">
        <a href="#" class="reportNow">发表</a>
        <a href="javascript:history.go(-1)" class="backNow">删除</a>
      </div>



    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'

  export default({
    data(){
      return{
        name:"老王",
//        headPortraitList:[],
        time:"2018.06.16",
        comment:"真好。。。。。。。。。"
      }
    },
    store,
    created(){
      this.$store.commit('routerLink',{
        color:'rgb(0,150,136)',
        title:'草稿箱'
      });

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
  padding-top: 1rem;
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
  .content{
    width: 100%;
    height: auto;
  }
  .content .img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: url("../../../static/img/timg-5.jpeg");
    margin-left: .5rem;
    margin-top: .3rem;
  }
  .comment{
    width: 80%;
    height: 1rem;
    margin-left: 0.5rem;
  }
  .bgimg{
    background-image: url("../../../static/img/timg-1.jpeg");
    height: 3rem;
    width: 6rem;
    margin: .3rem auto;
  }
  .name{
    position: absolute;
    top: 1.4rem;
    left: 2rem;
  }
  .time{
    position: absolute;
    top: 1.9rem;
    left: 2rem;
  }
  .btnsw{
    width: 100%;
    margin:1rem 0 0 3rem;


  }
  .btnsw a{
    float: left;
    width:20%;
    height: 0.6rem;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    font-size: 0.25rem;
    line-height: 0.6rem;
    text-align: center;
    color: #fff;
    margin: 0 2%;

  }
  .reportNow{
    background-color: #00CC99;
  }
  .backNow{
    background-color: #A0A0A0;
  }

</style>
