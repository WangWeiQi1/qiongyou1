<template>
  <div class="main">
    <header2></header2>
    <footer1></footer1>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
    </swipe>
    <div class="main-bar">
      <ul>
        <li>
          <img src="@/assets/img/deept.png" alt="">
          <p>深度旅行</p>
        </li>
        <li>
          <img src="@/assets/img/ticket.png" alt="">
          <p>机票</p>
        </li>
        <li>
          <img src="@/assets/img/ins.png" alt="">
          <p>保险</p>
        </li>
        <li>
          <img src="@/assets/img/service.png" alt="">
          <p>旅行服务</p>
        </li>
      </ul>
    </div>
    <div class="show">
      <h4>精选旅行</h4>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="val in slides" :key="val.id" class="swiper-items">
          <img :src="val.src" alt="">
            <div class="hot-info">
              <h4>{{val.nm}}</h4>
              <span>评分</span>
              <span>{{val.dnum}}点评</span>
            </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="show">
      <h4>特价机票</h4>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="val in slides" :key="val.id" class="swiper-items">
          <img :src="val.src" alt="">
            <div class="hot-info">
              <h4>{{val.nm}}</h4>
              <span>评分</span>
              <span>{{val.dnum}}点评</span>
            </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="show">
      <h4>推荐保险</h4>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="val in slides" :key="val.id" class="swiper-items">
          <img :src="val.src" alt="">
            <div class="hot-info">
              <h4>{{val.nm}}</h4>
              <span>评分</span>
              <span>{{val.dnum}}点评</span>
            </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="show">
      <h4>特色服务</h4>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="val in slides" :key="val.id" class="swiper-items">
          <img :src="val.src" alt="">
            <div class="hot-info">
              <h4>{{val.nm}}</h4>
              <span>评分</span>
              <span>{{val.dnum}}点评</span>
            </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
  require('vue-swipe/dist/vue-swipe.css');
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { Swipe, SwipeItem } from 'vue-swipe';
  import store from '@/vuex/store'
  import axios from 'axios'
  import Footer1 from '@/components/bar/Footer1'
  import Header2 from '@/components/bar/Header2'

  export default({
    store,
    data(){
      return{
        slides:[],
        swiperOption: {
		      pagination: '.swiper-pagination',
          slidesPerView: '2',
          spaceBetween: 30
		    }
      }
    },
    components:{
      swiper,
      swiperSlide,
      'swipe': Swipe,
      'swipe-item': SwipeItem,
      'header2': Header2,
      'footer1': Footer1
    },
    created(){
      this.getData();
      this.$store.commit('routerLink',{
        title:'旅行商城'
      });
    },
    methods: {
      getData(){
            axios.get('./static/data/tripaddress.json').then((res)=>{
                console.log(res);
                this.slides = res.data.hotaddress;
            }).catch((error)=>{
                console.log(error);      
            })
      },
      routerLink(path){
        this.$router.push(path);
      }
    }
  })
</script>
<style scoped>
  .main{
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .my-swipe {
    height: 3rem;
    width: 100%;
    font-size: 30px;
    text-align: center;
    position: relative;
    top: 0;
  }
  .slide1 {
    height: 3rem;
    background-image: url("../../assets/img/01.jpg")  ;
    background-size: 100% 100%;
  }
  .slide2 {
    height: 3rem;
    background: url("../../assets/img/02.jpg")  ;
    background-size: 100% 100%;
  }
  .slide3 {
    height: 3rem;
    background: url("../../assets/img/03.jpg") ;
    background-size: 100% 100%;
  }
  .slide4 {
    height: 3rem;
    background: url("../../assets/img/04.jpg") ;
    background-size: 100% 100%;
  }
  .main-bar{
    width: 100%;
    height: 1.5rem;
  }
  .main-bar ul{
    width: 100%;
    display: flex;
  }
  .main-bar ul li{
    position: relative;
    width: 25%;
  }
  .main-bar ul li p{
    color: rgb(53, 43, 16);
    text-align: center;
    margin-top: 0.85rem;
  }
  .main-bar ul li img{
    height: 0.7rem;
    width: 0.7rem;
    margin-top: 0.2rem;
    position: absolute;
    left: 30%;
  }
  .show{
    margin-bottom: 0.3rem;
  }
  .show h4{
    margin-left: 0.2rem;
  }
  .nav{
    width: 100%;
    overflow:hidden;
  }
  .nav nav{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
  }
  .swiper-box{
    margin-left: 0.2rem;
  }
  .hot-info{
      margin-top: 0.2rem;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .hot-info h4{
      font-weight: bold;
  }
  .hot-info span{
      font-size: 0.25rem;
  }
</style>
