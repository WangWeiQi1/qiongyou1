<template>
  <div>
    <div class="title">旅行商店</div>
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
    created(){


    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      }
    }
  })
</script>
<style scoped>
  .title{
   height: 1rem;
   font-size: 0.4rem;
   background: #00a680;
   text-align: center;
   line-height: 1rem;
   color: #ffffff;
  }
</style>
