<template>
    <div>
        <div class="region-header">
           <span class="btn-back"><img src="@/assets/img/back.png" alt="" @click="routeLink('/destination')"></span>
           <h3 class="region-city-name">哈尔滨市</h3>
       </div>
       <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
      </swipe>
    <ul class="items">
        <li @click="routeLink('/hotel')">
            <div>
                <img src="@/assets/img/hotel.png" alt="">
            </div> 
            <h4>酒店</h4>
        </li>
        <li @click="routeLink('/restaurant')">
            <div>
                <img src="@/assets/img/restaurant.png" alt="">
            </div>
            <h4>餐厅</h4>
        </li>
        <li @click="routeLink('/tripaddress')">
            <div>
                <img src="@/assets/img/tripaddress.png" alt="">
            </div>
            <h4>景点</h4>
        </li>
      </ul>
      <div class="hot-address">
          <h3>高分酒店</h3>
          <ul >
            <li v-for="(val,index)  in List" :key="index" @click="routeLink('/hoteldetail')">
                <img :src="val.src">
            </li>
        </ul>
      </div>
      <div class="hot-address">
          <h3>高分餐厅</h3>
          <ul >
            <li v-for="(val,index)  in List" :key="index" @click="routeLink('/restaurantdetail')">
                <img :src="val.src">
            </li>
        </ul>
      </div>
      <div class="hot-address">
          <h3>热门景点</h3>
          <ul >
            <li v-for="(val,index)  in List" :key="index" @click="routeLink('tripaddressdetail')">
                <img :src="val.src">
            </li>
        </ul>
      </div>
    </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'
export default {
    data(){
        return{
            List:[]
        }
    },
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    created(){
        this.getPhoto();
    },
    methods:{
        routeLink(path){
            this.$router.push(path);
        },
        getPhoto(){
        axios.get('./static/data/photodata.json').then((res)=>{
          this.List=res.data.photoData;
        }).catch(()=>{

        })
      }
    }
}
</script>
<style scoped>
.region-header{
    height: 1rem;
    width: 100%;
    background: #00a680;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
}
.region-header .btn-back{
    height: .5rem;
    line-height: .5rem;
}
.region-header .btn-back img{
    height: .5rem;
    position: absolute;
    top:0.25rem;
    left: 0.25rem;
}
.region-header .region-city-name{
    color: #ffffff;
    text-align: center;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.my-swipe {
    height: 160px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: .3rem;
    padding-top: 1rem;
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
  .items li div{
      width: 0.8rem;
      background: #00a680;
      border-radius: 50%;
      margin-top: 0.3rem;
      margin-left: 0.65rem;
  }
  .items {
      width: 100%;
      display: flex;
  }
  .items li{
      flex-grow: 1;
      width: 0;
      text-align: center;
  }
.hot-address{
   padding: 0.5rem 0.15rem;
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
