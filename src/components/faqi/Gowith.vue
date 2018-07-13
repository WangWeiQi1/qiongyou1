<template>
  <div class="container">

      <div class="header" :style="'background-color:'+$store.state.color">
        <img src="@/assets/img/back.png"  v-on:click="goBack('/add')"/>
      <h1 class="header-title">{{$store.state.title}}</h1>
    </div>

    <div class="content">
      <div  class="img">
        <img src="@/assets/img/02.jpg"/>
      </div>
      <span class="name">{{name}}</span>

      <div class="wantsay">
        <textarea>{{comment}}</textarea>
      </div>
    <div class="xuanze">
      <select>
        <option value="男" selected>男</option>
        <option value="女">女</option>
      </select>
      <select>
        <option value="place" selected>地点</option>
        <option value="place">普吉岛</option>
        <option value="place">巴黎</option>
        <option value="place">东京</option>
      </select>
      <input type="text" placeholder="日期区间"><br>
</div>

      <div class="btnsw">
        <a href="#" class="reportNow">提交</a>
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
        comment:"我想找个人一起去普吉岛，有没有想去的小伙伴"
      }
    },
    store,
    created(){
      this.$store.commit('routerLink',{
        color:'rgb(0,150,136)',
        title:'发起结伴'
      });

    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      },
    goBack(path){
      this.$router.push(path);
    }

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
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    overflow: hidden;
    margin-left: .5rem;
    margin-top: .3rem;
  }
  .content img{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
  }
  span{
    font-size: .3rem;
  }
  .wantsay{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .wantsay textarea {
    width: 80%;
    height: 2rem;
    overflow: hidden;
    font-size: 16px;
    display: block;
    margin: .4rem auto 1rem;
    border: 1px solid #aaaaaa;
    box-sizing: border-box;
    outline: none;
  }
  .name{
    position: absolute;
    top: 1.4rem;
    left: 1.5rem;
  }
  .xuanze{
    margin-left: 0.6rem;
  }

  .btnsw{
    width: 100%;
    height: 2rem;
    overflow: hidden;
    margin: 0.5rem auto;

  }
  .btnsw a{
    float: left;
    width:2rem;
    height: 0.6rem;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    font-size: 20px;
    line-height: .6rem;
    text-align: center;
    margin-left: 35%;
    color: #fff;
  }
  .reportNow{
    background-color: rgb(0,150,136);
  }
</style>
