<template>
  <div class="unlog" @click='routerLink("/login")'>
    <img src="@/assets/img/login2.png" alt="">
    <p>点击登录</p>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
//    created(){
//      this.$store.commit('routerLinks',{
//        title:'未登录'
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
  .unlog{
    position: relative;
  }
  img{
    height: 2rem;
    width: 2rem;
    position: absolute;
    left: 34%;
    margin-top: 0.5rem;
  }
  p{
    position: absolute;
    top: 2.7rem;
    left: 42%;
    color: #6c6c6c;
  }
</style>
