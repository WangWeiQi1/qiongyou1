<template>
  <div>
    <div class="title">创建</div>
    <ul class="content">
      <li @click='routerLink("/writeYouji")'>
        <img src="@/assets/img/tripnote.png" alt="">
        <h4>写游记</h4>
      </li >
      <li @click='routerLink("/CreateTravel")'>
        <img src="@/assets/img/xingcheng.png" alt="">
        <h4>创建行程</h4>
      </li>
      <li @click='routerLink("/Gowith")'>
        <img src="@/assets/img/gowith.png" alt="">
        <h4>结伴</h4>
      </li>
      <li @click='routerLink("/draft")'>
        <img src="@/assets/img/caogao.png" alt="">
        <h4>草稿</h4>
      </li>
    </ul>
    <main-footer></main-footer>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  import MainFooter from '@/components/common/Footer'
  export default({
    components:{
      MainFooter
    },
    store,
    methods: {
      routerLink(path){
        this.$router.push(path);
      }
    }
  })
</script>
<style scoped>
  .title{
    font-size: 0.4rem;
    color: #ffffff;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background: #00a680;
  }
  .content li{
    width: 4rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: #ffffff;
    border-radius: 0.1rem;
    background-color: #00a680;
    margin: 1rem auto;
    position: relative;
  }
  .content li img{
    position: absolute;
    height: 0.6rem;
    left: 0.9rem;
    top: 0.15rem; 
  }
  .content li h4{
    margin-left: 0.3rem;
  }

</style>
