<template>
    <div>
      <div class="header">
        <p class="btn" @click="routerLink('/loginrequest')">登录</p>
      </div>
      <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
      </swipe>
      <ul class="tabs-list">
        <li @click='routerLink("/nearby")'>
          <img src="@/assets/img/fujin.png" alt="">
          <p>附近</p>
        </li>
        <li @click='routerLink("/destination")'>
          <img src="@/assets/img/mudi.png" alt="">
          <p>目的地</p>
        </li>
        <li @click='routerLink("/every")'>
          <img src="@/assets/img/jieban.png" alt="">
          <p>结伴</p>
        </li>
        <li @click='routerLink("/gongju")'>
          <img src="@/assets/img/tool.png" alt="">
          <p>工具</p>
        </li>
      </ul>
      <div class="hot-destination">
        <h3>{{hot1}}</h3> 
        <ul >
          <li v-for="(val,index)  in List" :key="index" @click="routerLink('/city')">
            <img :src="val.src">
          </li>
        </ul>
      </div>
      <div class="hot-address">
        <h3>{{hot2}}</h3> 
        <ul >
          <li v-for="(val,index)  in List" :key="index" @click="routerLink('/tripaddressdetail')">
            <img :src="val.src">
          </li>
        </ul>
      </div>
      <main-footer></main-footer>
    </div>
</template>
<script>
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';
  import axios from 'axios'
  import MainFooter from '@/components/common/Footer'
  export default({
    data(){
      return{
        dataList:[],
        List:[],
        hot1:'热门目的地',
        hot2:'热门景点'
      }
    },
      components: {
        'swipe': Swipe,
        'swipe-item': SwipeItem,
        MainFooter
        },
    created(){ 
      this.getPhoto()
    },
    methods:{
      routerLink(path){
        this.$router.push(path);
      },
      getPhoto(){
        axios.get('./static/data/photodata.json').then((res)=>{
          this.List=res.data.photoData;
          this.isLoading=false;
          if(res.data.photoData==scrollHeight) {
            this.isEnd = true;
          }
        }).catch(()=>{

        })
      }

    },
 })
</script>
<style scoped>
.header{
  width: 100%;
  height: 1rem;
  background: #00a680;
}
.header .btn{
  font-size: 0.28rem;
  line-height: 1rem;
  text-align: right;
  margin-right: 0.3rem;
}
  .my-swipe {
    height: 3.5rem;
    color: #fff;
  }
  .slide1 {
    background-image: url("../../../static/img/timg-1.jpeg");
    color: #fff;
    background-size: contain;
  }
  .slide2 {
    background-image: url('../../../static/img/timg-2.jpeg');
    color: #000;
    background-size: contain;
  }
  .slide3 {
    background-image: url("../../../static/img/timg-6.jpeg");
    color: #fff;
    background-size: contain;
  }
  .slide4 {
    background-image: url("../../../static/img/timg-4.jpeg");
    color: #fff;
    background-size: contain;
  }
  .tabs-list{
    display: flex;
    margin-top: 0.5rem;
  }
  .tabs-list li{
    flex-grow: 1;
    text-align: center;
  }
  .tabs-list li img{
    width: 0.8rem;
  }
  .tabs-list li p{
    font-size: 0.28rem;
    font-weight: bold;
  }
.hot-destination{
   padding: 0.5rem 0.15rem;
}
.hot-destination h3{
  font-weight: bold;
}
.hot-destination ul{
  margin-top: 0.3rem;
  display: flex;
  flex-wrap: wrap;
}
.hot-destination ul li{
  flex-grow: 1;
  width: 29%;
  margin:1%;
}
.hot-address{
   padding: 0.3rem 0.15rem 1rem 0.15rem;
}
.hot-address h3{
  font-weight: bold;
}
.hot-address ul{
  margin-top: 0.3rem;
  display: flex;
  flex-wrap: wrap;
}
.hot-address ul li{
  flex-grow: 1;
  width: 29%;
  margin:1%;
}
</style>
