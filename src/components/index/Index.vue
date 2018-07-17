<template>
    <div class="container">
      <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
      </swipe>

      <div class="list">
        <ul>
          <li @click='routerLink("/nearby")'><img src="@/assets/img/fujin.png" alt=""></li>
          <li @click='routerLink("/destination")'><img src="@/assets/img/mudidi.png" alt=""></li>
          <li @click='routerLink("/every")'><img src="@/assets/img/jieban.png" alt=""></li>
          <li @click='routerLink("/gongju")'><img src="@/assets/img/gongju.png" alt=""></li>
        </ul>
        <ul class="listfooter">
          <li @click='routerLink("/nearby")'>附近</li>
          <li @click='routerLink("/destination")'>目的地</li>
          <li @click='routerLink("/every")'>结伴</li>
          <li @click='routerLink("/gongju")'>工具</li>
        </ul>
      </div>
      <h3>{{hot}}</h3>
      <div class="photo">
      <ul >
        <li v-for="(val,index)  in List" :key="index" @click="toDetail(index)">
          <img :src="val.src">
        </li>
      </ul>
      </div>
      <!--<div >-->
        <!--<img src="@/assets/img/loading.gif" alt="" v-show="isLoading">-->
      <!--</div>-->
      <div class="header"><button>登录</button></div>
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
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';
  import store from '@/vuex/store';
  import axios from 'axios'
//  import BScroll from 'better-scroll'

  export default({
    data(){
      return{
        dataList:[],
        List:[],
        hot:'热门目的地',
//        isLoading:false,
//        isEnd:false,
      }
    },
    store,
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    created(){
      this.$store.commit('routerLink',{
        color:'rgb(50,205,50)',
        title:''
      });
      this.getPhoto()
    },
    methods:{
      routerLink(path){
        this.$router.push(path);
      },

//      toDetail(index){
//        this.$router.push({name:'PhotoDetail',params:{photoId:index}})
//      }
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
    mounted(){
//      window.onscroll = () => {
//        let scrollTop = document.documentElement.scrollTop;
//        let scrollHeight = document.documentElement.scrollHeight;
//        let clientHeight = document.documentElement.clientHeight;
//        if (scrollTop + clientHeight == scrollHeight) {
//          if (!this.isLoading) {
//            if (this.isEnd) {
//            } else {
////            setInterval(()=>{
//              this.getPhoto();
//              this.isLoading = true;
////            },200)
//
//            }
//
//          }
//        }
//      }
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
    line-height: 1rem;
    color: #fff;
    font-size: 0.3rem;
  }
  button{
    margin-left: 5.2rem;
    /*border-radius: 50%;*/
    background-color:  rgba(50,205,50,0);
    color: white;
  }
  .my-swipe {
    height: 160px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: .3rem;
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
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  ul li{
    width: 25%;
  }
  .listfooter ul{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .listfooter ul li{
    flex-grow: 1;
    width: 0;
    color: #fff;
    line-height: 1rem;
    text-align: center;

  }
  h3{
    margin-top: .2rem;
    float: left;
  }
  .photo ul{
    float: left;
    display: flex;
    flex-wrap: wrap;
  }
  .photo ul li{
    width: 33.33%;
  }
  .header{
    height:1rem;
    background-color:  rgb(50,205,50);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
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
