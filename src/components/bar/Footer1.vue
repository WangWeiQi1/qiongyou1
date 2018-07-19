<template>
  <div>
    <div class="footer">
      <ul>
        <li @click='routerLink("/")'>
          <img :class="{'unactive':unActive1}" src="@/assets/img/home2.png" alt="">
          <img :class="{'unactive':isActive1}" src="@/assets/img/home2-fill.png" alt="">
          <p>首页</p>
        </li>
        <li @click='routerLink("/find")'>
          <img :class="{'unactive':unActive2}" src="@/assets/img/discover2.png" alt="">
          <img :class="{'unactive':isActive2}" src="@/assets/img/discover2-fill.png" alt="">
          <p>发现</p>
        </li>
        <img @click='routerLink("/add")' src="@/assets/img/plus.png">
        <li @click='routerLink("/shop")'>
          <img :class="{'unactive':unActive3}" src="@/assets/img/shop.png" alt="">
          <img :class="{'unactive':isActive3}" src="@/assets/img/shop-fill.png" alt="">
          <p>旅行商城</p>
        </li>
        <li @click='routerLink("/mine")'>
          <img :class="{'unactive':unActive4}" src="@/assets/img/my.png" alt="">
          <img :class="{'unactive':isActive4}" src="@/assets/img/my-fill.png" alt="">
          <p>我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
    data(){
      return { 
        isActive1: true,
        unActive1: false,
        isActive2: true,
        unActive2: false,
        isActive3: true,
        unActive3: false,
        isActive4: true,
        unActive4: false
      }
    },
    created(){
      if(this.$route.path == '/'){
        this.isActive1=false
        this.unActive1=true
      }
      if(this.$route.path == '/find'){
        this.isActive2=false
        this.unActive2=true
      }
      if(this.$route.path == '/shop'){
        this.isActive3=false
        this.unActive3=true
      }
      if(this.$route.path == '/mine'){
        this.isActive4=false
        this.unActive4=true
      }
    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      }
    }
  })
</script>
<style scoped>
  .footer{
    height: 1rem;
    background-color: #3d9140;
    /* background-color: #7fb80e; */
    /* background-color: rgb(141, 191, 60); */
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
  }
  .footer ul{
    width: 100%;
    display: flex;
  }
  .footer ul li{
    position: relative;
    width: 25%;
  }
  .footer ul li p{
    color: #fff;
    text-align: center;
    margin-top: 0.55rem;
  }
  .footer ul li img{
    height: 0.5rem;
    width: 0.5rem;
    margin-top: 0.15rem;
    position: absolute;
    left: 32%;
  }
  .footer ul img{
    height: 0.7rem;
    margin-top: 0.17rem;
  }
  .unactive{
    display: none;
  }
 
</style>