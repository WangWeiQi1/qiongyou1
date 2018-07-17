<template>
  <div>
    <ul>
      <!--重复，点击到酒店详情-->
      <li @click='routerLink("/hoteldetail")'>
        <img class="bg" src="http://img1.imgtn.bdimg.com/it/u=2030704690,247138737&fm=27&gp=0.jpg" alt="">
        <h4 class="title">酒店名</h4>
        <img class="mark-img" src="@/assets/img/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/img/position.png" alt="">
        <p class="city">城市名，省名</p>
      </li>
      <!--重复-->
      <li @click='routerLink("/hoteldetail")'>
        <img class="bg" src="http://pic3.40017.cn/hotel/2015/10/13/13/5JWsyL_400x300_00.jpg" alt="">
        <h4 class="title">酒店名2</h4>
        <img class="mark-img" src="@/assets/img/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/img/position.png" alt="">
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
//        title:'酒店收藏'
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
