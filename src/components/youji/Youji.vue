<template>
  <div>
    <div class="detail">
      <div class="header" :style="'background-color:'+$store.state.color">
        <img src="@/assets/img/back.png" v-on:click="goBack"/>
        <h1 class="header-title">{{$store.state.title}}</h1>
      </div>
      <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
      </swipe>
      <div class="nav">
        <nav>
          <p v-for="(item,$index) in arr" :key="$index"  @click="toggle($index)"  :class="{active:$index==active}">{{item}}</p>
        </nav>
      </div>

      <div class="content">
        <div class="head">
          <img src="@/assets/img/03.jpg"/>
        </div>
        <div class="name">张三</div>
        <div class="time">2018.06.07</div>
        <div class="detail_content">这里的天空真好，非常美等我回威海的文化氛围福覅饿哦我 </div>
        <div class="img">
          <img src="@/assets/img/01.jpg"/>
        </div>
        <div class="footer">
          <ul>
            <li class="one"><img src="@/assets/img/eyes.png"/>&nbsp;&nbsp;20</li>
            <li class="two"><img src="@/assets/img/goods.png"/>&nbsp;&nbsp;40</li>
            <li class="three"><img src="@/assets/img/information.png"/>评论</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';
  import store from '@/vuex/store'
  import axios from 'axios'
export default ({
  data(){
    return{
      active:0,
      arr:[
        "精选",
        "日本",
        "韩国",
        "泰国",
        "新加坡",
        "柬埔寨",
        "美国",
        "澳大利亚",
      ],
      dataList:[]
    }
  },
  store,
  created(){
    this.$store.commit('routerLink',{
      color:'rgb(0,150,136)',
      title:'精选游记'
    });
  },

  components: {
    'swipe': Swipe,
    'swipe-item':SwipeItem
  },
  methods: {
    toggle(index){
      this.active=index
    },
    getData() {
      axios.get('./static/data/head.json').then((res) => {
        this.dataList = res.data.head;
      }).catch(() => {
      })
    },
    routerLink(path){
      this.$router.push(path);
    },
    goBack(){
      this.$router.go(-1);
    },
    getData1(){
      axios.get('./static/data/photodata.json').then((res) => {
        this.dataList = res.data.photodata;
      }).catch(() => {
      })
    }
  },
})

</script>
<style scoped>
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
  .detail{
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 1rem;

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
  .nav p{
    text-align: center;
    font-size: 16px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 10px;
    margin: 5px;

  }
  .nav p.active{
    color: #F2F2F2;
    background-color: #00CC99;

  }
  .content{
    position: relative;
    margin-top: 0.3rem;
  }
  .head{
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid #c0c0c0;
    border-radius: 50%;
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
  }
  .head img{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
  }
  .name{
    position: absolute;
    left: 1.5rem;
    top: 0.1rem;
    font-size: 16px;
    color: orangered;
  }
  .time{
    position: absolute;
    left: 1.5rem;
    top:0.5rem;
    color: dimgray;
  }
  .detail_content{
    position: relative;
    top: 1.1rem;
    width: 96%;
    margin: 0 auto;
    font-size: 16px;
  }
  .img{
    padding-top: 1.2rem;
    width: 96%;
    height: 150px;
    margin: 0 auto;
  }
  .img img{
    width: 100%;
    height: 150px;
  }
  .footer{
    margin-top: 0.1rem;
    color: dimgray;
    height: 0.6rem;
  }
  .footer img{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
  }
  .footer .one{
    position: absolute;
    left: 0;
    height: 0.5rem;
    line-height: 0.5rem;
  }
  .footer .one img{
    position: absolute;
    top: 0.05rem;
    left: 0.2rem;
  }
  .footer .two{
    position: absolute;
    left: 1.4rem;
    height: 0.5rem;
    line-height: 0.5rem;
  }
.footer .three{
position: absolute;
  right: 0.3rem;
}


</style>
