<template>
  <div>
    <ul>
      <!--重复，点击到餐厅详情-->
      <li @click='routerLink("/fooddetail")'>
        <img class="bg" src="http://img3.imgtn.bdimg.com/it/u=2444710447,1442935850&fm=200&gp=0.jpg" alt="">
        <h4 class="title">餐厅名</h4>
        <img class="mark-img" src="@/assets/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/position.png" alt="">
        <p class="city">城市名，省名</p>
      </li>
      <!--重复-->
      <li @click='routerLink("/fooddetail")'>
        <img class="bg" src="http://img3.redocn.com/tupian/20141218/fengweiyangpai_3513829.jpg" alt="">
        <h4 class="title">餐厅名2</h4>
        <img class="mark-img" src="@/assets/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/position.png" alt="">
        <p class="city">城市名，省名</p>
      </li>
      <li @click='routerLink("/fooddetail")'>
        <img class="bg" src="http://img1.imgtn.bdimg.com/it/u=6628804,812742819&fm=200&gp=0.jpg" alt="">
        <h4 class="title">餐厅名3</h4>
        <img class="mark-img" src="@/assets/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/position.png" alt="">
        <p class="city">城市名，省名</p>
      </li>
      <li @click='routerLink("/fooddetail")'>
        <img class="bg" src="http://img3.redocn.com/tupian/20141217/dabancai_3525529.jpg" alt="">
        <h4 class="title">餐厅名4</h4>
        <img class="mark-img" src="@/assets/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/position.png" alt="">
        <p class="city">城市名，省名</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
//    created(){
//      this.$store.commit('routerLinks',{
//        title:'美食收藏'
//      });
//    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      }
    }
  })
</script>
<style scoped>
  div ul li{
    height: 2.8rem;
    margin-bottom: 0.1rem;
    position: relative;
    color: #fff;
  }
  .bg{
    height: 2.8rem;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .mark-img{
    height: 0.3rem;
    position: absolute;
    left: 0.19rem;
    bottom: 0.19rem;
  }
  .pos-img{
    height: 0.3rem;
    position: absolute;
    right: 1.7rem;
    bottom: 0.19rem;
  }
  .title{
    text-align: center;
    line-height: 2.8rem;
  }
  .mark{
    position: absolute;
    bottom: 0.1rem;
    left: 0.6rem;
  }
  .city{
    position: absolute;
    bottom: 0.1rem;
    right: 0.2rem;
  }

</style>
