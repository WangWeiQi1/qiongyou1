<template>
  <div class="container">
    <div class="header" :style="'background-color:'+$store.state.color">
      <img src="@/assets/img/back.png" v-on:click="goBack"/>
      <h1 class="header-title">{{$store.state.title}}</h1>
    </div>
    <div class="nav">
      <ul>
        <li>国内</li>
        <li>国外</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in musicList" :key="item.id" @click="routerLink('/gonglueDetail')">
          <img :src="item.bg"/>
          <div class="detail">
            <p>{{item.content}}</p>
          </div>
          <div class="footer">
            <ul>
              <li class="one"><img :src="item.bg"/></li>
              <li class="two">{{item.name}}</li>
              <li class="three"><img src="@/assets/img/heart.png"/></li>
              <li class="four">32</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

  </div>

</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default ({
    data(){
      return{
        musicList:[]
      }
    },
    created(){
      this.$store.commit('routerLink',{
        color:'rgb(0,150,136)',
        title:'旅行攻略'
      });
      this.getData()
    },
    store,
    methods:{
      getData(){
        axios.get('./static/data/musiclist.json').then((res)=>{
          this.musicList=res.data.albums;
        }).catch(()=>{

        })
      },
      routerLink(path){
        this.$router.push(path);
      },
      goBack(){
        this.$router.go(-1);
      },
      gonglueDetail(id){
        this.$router.push({name:'gonglueDetail',params:{itemId :id}})
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
  .nav{
    width: 100%;
    height: 0.8rem;
    position: fixed;
    top: 1rem;
    background-color: #fff;
    z-index: 100;
  }
  .nav li:first-child{
    border-right: 1px solid #333;
  }
  .nav li{
    width: 49.8%;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    float: left;
    font-size: 20px;
    border-bottom: 1px solid #333;
  }
  .content{
    margin: 1rem auto 0 ;

  }
  .content ul{
    display: flex;
    flex-wrap: wrap;
  }
  .content ul li{
    width: 45%;
    border-radius: 10%;
    margin:0.1rem 0 0 0.2rem
  }
 .content img{
    width: 100%;
   border-radius: 6%;
  }
  .detail{
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }
  .detail p{
    height: 1rem;
  }
  .footer{
    width: 98%;
    margin: 0 auto;
    position: relative;
    z-index: -5;
  }
  .footer ul li{
    margin-left: 0.2rem;
    width: 0.5rem;
  }
.footer .one{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
  .footer .one img{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
  .footer .two{
    font-size: 0.2rem;
    color: dimgray;
    width: 1rem;
    overflow: hidden;
  }
  .footer .three{
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 0.7rem;
    top: 0.05rem;
  }
  .footer .four{
    position: absolute;
    right: 0.1rem;
    color: dimgray;
  }
</style>
