<template>
  <div class="header">
    <div class="title">发现</div>
    <div class="nav">
      <nav>
        <p v-for="(item,$index) in arr" :key="$index" @click="toggle($index)" :class="{active:$index==active}">{{item}}</p>
      </nav>
    </div>
    <ul class="little-nav">
     <li @click='routerLink("/youji")'>精选游记</li>
     <li @click='routerLink("/gonglue")'>攻略</li>
   </ul>
    <ul class="content">
      <li v-for="(val)  in dataList" :key="val.id">
        <div class="youji">
          <img :src="val.src">
          <div class="content-title">香港七日游的旅行攻略</div>
          <div class="time">
            <img src="@/assets/img/time.png"/>
            <span>出行日期:20180702</span>&nbsp;&nbsp;
            <span>[7天]</span>&nbsp;&nbsp;
            <span>作者&nbsp;王五 </span>
          </div>
        </div>
      </li>
    </ul>
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
  import store from '@/vuex/store'
  import axios from 'axios'

  export default({
    data(){
      return {
         dataList:[],
        active: 0,
        arr: [
          "精选",
          "日本",
          "韩国",
          "泰国",
          "新加坡",
          "柬埔寨",
          "美国",
          "澳大利亚",
        ],
      }
    },
        store,
    created(){
      this.getData();
    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      },
      toggle(index){
        this.active=index;
      },
      getData() {
        axios.get('./static/data/photodata.json').then((res) => {
          console.log(res);
          
          this.dataList = res.data.photoData;
        }).catch(() => {

        })
      },
    }
  })
</script>
<style scoped>
.header{
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
    z-index: 1;
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
  .nav{
    width: 100%;
    overflow:hidden;

  }
  .nav nav{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

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

.little-nav{
  height: 1rem;
}
  .little-nav li{
    width: 49.5%;
    height: 0.8rem;
    font-size: 0.4rem;
    text-align: center;
    line-height: 0.8rem;
    float: left;
    border-bottom: 1px solid #333;
  }

.youji img{
  height: 3.5rem;
  width: 90%;
  border-radius: 6%;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;

}
.youji{
  position: relative;
}
.content-title{
  position: absolute;
  bottom: 0.7rem;
  left: 0.6rem;
  font-size: 16px;
  color: azure;
}
.time img{
  width: 0.3rem;
  height: 0.3rem;
  display: block;
  position: absolute;
  left: -0.6rem;
 bottom: 0;

}
.time{
  position: absolute;
  bottom: 0.2rem;
  left: 1.2rem;
  font-size: 16px;
  color: azure;
}
</style>
