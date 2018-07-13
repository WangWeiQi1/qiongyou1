<template>
  <div>
    <div class="content">
      <div class="img">
        <ul>
          <li class="back"><img src="@/assets/img/back.png" v-on:click="goBack"></li>
          <li class="bgimg"><img src="@/assets/img/03.jpg"/></li>
        </ul>
      </div>
      <div class="author">
        <ul>
          <li class="head"><img src="@/assets/img/04.jpg"></li>
          <li class="name">张三</li>
        </ul>
      </div>
      <div class="detail">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们走的这条路线，应该算是最精华的路线了，喜妹子的行程也非常合理，价格也实惠，整个行程走下来，我们只花了1千多一点。最主要是，没有任何其它消费，真正的半自助纯玩，没有一点套路. 然后给我们节省了很多不必要的零花钱，自己也少操心，玩的舒心。</p>
      </div>
      <div class="footer">
        <ul>
          <li>2018.09.05</li>
          <li>32次赞</li>
        </ul>

      </div>
    </div>

  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default ({
    store,
    methods:{
      routerLink(path){
        this.$router.push(path);
      },
      goBack(){
        this.$router.go(-1);
      },
    }
  })
</script>
<style scoped>
.content{
  position: absolute;
  top: 0;
  height: 100%;
}
  .img{
    height: 3.5rem;
    position: relative;
  }
  .img .bgimg {
    position: absolute;
    top: 0;
    left: 0;
  }
  .img .back{
    position: absolute;
    z-index: 10;
    left: 0.2rem;
    top: 0.2rem;
  }
  .back img{
    width: 0.5rem;
    height: 0.4rem;
  }
  .author{
    height: 1rem;
    border-bottom: 1px solid #aaaaaa;
    position: relative;

  }

  .author .head{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0.2rem;
    left: 0.5rem;
  }
  .author .name{
    position: absolute;
    bottom: 0.2rem;
    left: 1.5rem;
    font-size: 16px;
  }
  .head img{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
  .detail{
    font-size: 16px;
   color: black;
    margin: 0.7rem 0.2rem 0 0.2rem;
  }
  .footer{
    height: 0.5rem;
    position: relative;
  }
  .footer li{
    color: dimgray;
    float: left;
    margin: 0.5rem 0 0 0.5rem;
  }
  .footer li:last-child{
    position: absolute;
    right: 0.5rem;
    top: 0;
  }

  </style>
