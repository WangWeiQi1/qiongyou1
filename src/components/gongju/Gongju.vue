<template>
<div>
    <div class="header">
      <span class="btn-back"><img src="@/assets/img/back.png" alt=""  @click="goback('/')"></span>
      <h3 class="name">工具</h3>
    </div>
    <div class="weather">
        <p class="city-name">哈尔滨</p>
        <div class="content">
          <span class="temp1">{{weatherinfo.low}}</span>
          <span class="temp2">~{{weatherinfo.high}}</span>
          <p class="type">{{weatherinfo.type}}</p>
          <p class="time">当地时间：{{weatherinfo.date}}</p>
        </div>
    </div>
    <ul class="tool-list">   
        <li><img src="@/assets/img/change.png"><h3>语音翻译</h3></li>
        <li><img src="@/assets/img/write.png"/><h3>旅行记账</h3></li>
        <li><img src="@/assets/img/map.png"/><h3>行程地图</h3></li>
        <li><img src="@/assets/img/huilv.png"><h3>实时汇率</h3></li>
    </ul>
</div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'

export default ({
  data(){
    return{
      weatherinfo:[],
    }
  },
  created(){
    this.getData();
  },
  store,
  methods: {
    goback(path){
      this.$router.push(path);
    },
    getData(){
      axios.get(API_PROXY+'http://wthrcdn.etouch.cn/weather_mini?citykey=101050101').then((res)=>{
        console.log(res);
        this.weatherinfo = res.data.data.forecast[0];
      }).catch((error)=>{
        console.log(error);
        
      })
    }
  }
})
</script>
<style scoped>
.header{
    height: 1rem;
    width: 100%;
    background: #00a680;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
}
.header .btn-back{
    height: .5rem;
    line-height: .5rem;
}
.header .btn-back img{
    height: .5rem;
    padding:.25rem 0 0 .25rem;
}
.header .name{
    color: #ffffff;
    text-align: center;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.weather{
  padding-top: 1rem;
  width: 100%;
  height: 4rem;
  background: #f0f0f0;
}
.weather .city-name{
  font-size: 0.3rem;
  text-align: center;
  padding: 0.4rem;
}
.weather .content{
  text-align: center;
}
.weather .content span{
  font-size: 0.5rem;
}
.weather .content .temp1{
  color: #46a3ff;
}
.weather .content .temp2{
  color:#ff0000;
} 
.weather .content .type{
  font-size: 0.35rem;
  margin-top: 0.2rem;
}
.weather .content .time{
  margin-top: 0.3rem;
  font-size: 0.3rem;
}
.tool-list{
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.tool-list li{
  width: 50%;
  text-align: center;
  margin-bottom: 0.8rem;
}
.tool-list li img{
  width: 1rem;
}
</style>
