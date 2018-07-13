<template>
  <div class="title">
    <div class="header">
    <img src="@/assets/img/back.png" alt="" v-on:click="goBack">
    <h3>{{message}}</h3>
    </div>
    <form name="myform">
      <input class="search" v-model.lazy="box" placeholder="输入城市名或拼音查询"/>
     <div>{{box}}</div>
    </form>
    <h4>{{hisCity}}</h4>
    <div class="hiscontent">
    <div class="historyCity" v-for="(val,index)  in historyCity">{{val.name}}</div>
    </div>

    <div class="hotCity">{{hotCity}}</div>

    <div class="hotcontent">
    <div class="hotList" v-for="(hot,index)  in hotList">{{hot.name}}</div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import store from '@/vuex/store'
  export default({
    data(){
      return{
        message:"附近",
        box:'',
        hisCity:"历史访问过的目的地",
        historyCity:[
          {
              name:"泰国"
          },
         {
              name:"韩国"
         },
          {
              name:"马来西亚"
          }],
        hotCity:"当季热门目的地",
        hotList:[
          {
            name:"米兰"
          },
          {
            name:"巴厘岛"
          },
          {
            name:"东京"
          },
          {
            name:"迪拜"
          },
          {
            name:"墨尔本"
          },
          {
            name:"马尔代夫"
          }
        ]
    }
    },
    store,
    created(){

//      this.getData()
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
//      getData(){
//        axios.get('./static/data/hotCity.json').then((res)=>{
//          this.hotList=res.data.hotCity
//        }).catch(()=>{
//
//        })
//      },
    }
  })
</script>
<style scoped>
.title{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
  .title img{
    float: left;
    position: absolute;
    top:0.2rem;
    left: 0.1rem;
  }
  .header{
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
  h3{
    float: left;
    position: absolute;

    left: 1rem;

  }
  h4{
    float: left;
    left: 1rem;
    display: block;
  }

.search{
  width: 100%;
  height: .5rem;
}
.hiscontent{
  float: left;
  margin-top: .6rem;
  margin-left: -3rem;
  margin-bottom: .6rem;
}
  .historyCity{
    display: block;
    float: left;
    font-size: .5rem;
    margin-left: .5rem;
   margin-bottom: .3rem;
    /*position: absolute;*/
    /*margin-left: .5rem;*/
    /*top:2rem*/
  }

  .hotCity{
    float: left;
    position: absolute;
    font-size:.3rem ;
    top:3rem

  }
  .hotList{
    float: left;
    font-size: .5rem;
    /*position: absolute;*/
    margin-left: .5rem;
    /*top:3.4rem*/
  }
  .hotcontent{

  }
</style>
