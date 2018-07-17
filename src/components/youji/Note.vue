<template>
  <div>
    <!--重复，跳到游记详情-->
    <div class="card" @click='routerLink("/notedetail")'>
      <div class="card-head">
        <img class="card-img" src="http://img.zcool.cn/community/012c65580e16bfa84a0d304fb7dbeb.jpg@1280w_1l_2o_100sh.jpg">
        <img class="time-img" src="@/assets/img/time2.png" alt="">
        <span class="time">2018-01-01</span>
        <img class="user" src="@/assets/img/user2.png" alt="">
        <span class="author">作者名1</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">游记总标题最多二十字</h4>
        <p class="card-rote">路线1</p>
      </div>
    </div>
    <!--重复-->
    <div class="card" @click='routerLink("/notedetail")'>
      <div class="card-head">
        <img class="card-img" src="http://bj-feiyuantu.oss-cn-beijing.aliyuncs.com/creative/vcg/veer/800water/veer-100047154.jpg">
        <img class="time-img" src="@/assets/img/time2.png" alt="">
        <span class="time">2018-02-04</span>
        <img class="user" src="@/assets/img/user2.png" alt="">
        <span class="author">作者名2</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">游记总标题最多二十字</h4>
        <p class="card-rote">路线2</p>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  export default({
    store,
//    created(){
//      this.$store.commit('routerLinks',{
//        title:'游记'
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
  .card-head{
    position: relative;
    z-index: -1;
  }
  .time-img{
    height: 0.3rem;
    width: 0.3rem;
    position: absolute;
    bottom: 0.1rem;
    left: 0.15rem;
  }
  .time{
    position: absolute;
    color: #ffffff;
    bottom: 0.01rem;
    left: 0.55rem;
  }
  .user{
    height: 0.3rem;
    width: 0.3rem;
    position: absolute;
    bottom: 0.1rem;
    right: 1.4rem;
  }
  .author{
    position: absolute;
    color: #ffffff;
    bottom: 0.01rem;
    right: 0.5rem;
  }
  .card-img{
    height: 3rem;
    width: 100%;
    border-radius: 0.1rem;
  }
  .card-body{
    margin-left: 0.1rem;
  }
  .card-rote{
    color: #5c5c5c;
  }
  .card{
    margin-bottom: 0.2rem;
    box-shadow:0rem 0rem 0.3rem #abaa9f;
    border-radius: 0.1rem;
  }
</style>
