<template>
    <div>
        <div class="header">
            <img class="header-btn" @click="goBack" src="@/assets/img/back2.png">
            <h3 class="header-title">{{$store.state.title}}</h3>
        </div>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    export default {
        store,
        methods: {
            goBack(){
            this.$router.go(-1);
        }
        }
    }
</script>
<style scoped>
  .header{
    height: 1rem;
    background-color: #3d9140;
    /* background-color: #7fb80e; */
    /* background-color: rgb(141, 191, 60); */
    position: fixed;
    top:0;
    left: 0;
    z-index: 5;
    width: 100%;
  }
  .header .header-title{
    color: #fff;
    font-size: .35rem;
    display: block;
    position: absolute;
    top: 50%;
    left: 25%;
    transform:translate(-50%,-50%);
  }
  .header .header-btn{
    height: 0.7rem;
    margin-top: 0.15rem;
    padding-left: 0.1rem;
  }
</style>

