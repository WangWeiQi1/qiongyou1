<template>
  <div>
    <header2></header2>
    <footer1></footer1>
    <div class="unlog" @click='routerLink("/loginrequest")'>
      <img class="lock" src="@/assets/img/login2.png" alt="">
      <img class="key" src="@/assets/img/key.png" alt="">
      <p>点击登录</p>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import Footer1 from '@/components/bar/Footer1'
  import Header2 from '@/components/bar/Header2'

  export default({
    store,
    components:{
      'header2': Header2,
      'footer1': Footer1
    },
    created(){
      this.$store.commit('routerLink',{
        title:'未登录'
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
  .unlog{
    margin-top: 1rem;
    position: relative;
  }
  .lock{
    height: 2rem;
    width: 2rem;
    position: absolute;
    left: 34%;
    margin-top: 0.5rem;
  }
  .key{
    height: 0.6rem;
    position: absolute;
    left: 34%;
    top: 2.6rem;
  }
  p{
    position: absolute;
    top: 2.7rem;
    left: 43%;
    color: #6c6c6c;
  }
</style>
