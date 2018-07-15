<template>
  <div>
    <ul>
      <!--重复，点击到景点详情-->
      <li @click='routerLink("/viewdetail")'>
        <img class="bg" src="http://img.zcool.cn/community/012c65580e16bfa84a0d304fb7dbeb.jpg@1280w_1l_2o_100sh.jpg" alt="">
        <h4 class="title">景点名</h4>
        <img class="mark-img" src="@/assets/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/position.png" alt="">
        <p class="city">城市名，省名</p>
      </li>
      <!--重复-->
      <li @click='routerLink("/viewdetail")'>
        <img class="bg" src="http://pic.lvmama.com/uploads/pc/place2/2014-12-01/71cf4ad1-2651-409b-811c-86bd5a931d92.jpg" alt="">
        <h4 class="title">景点名2</h4>
        <img class="mark-img" src="@/assets/mark.png" alt="">
        <p class="mark">9.0</p>
        <img class="pos-img" src="@/assets/position.png" alt="">
        <p class="city">城市名，省名</p>
      </li>
      <li @click='routerLink("/viewdetail")'>
        <img class="bg" src="http://img3.imgtn.bdimg.com/it/u=4243706444,3270094211&fm=27&gp=0.jpg" alt="">
        <h4 class="title">景点名3</h4>
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
    created(){
      this.$store.commit('routerLinks',{
        title:'景点收藏'
      });
    },
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
