<template>
<div class="main">
  <header1></header1>
  <footer1></footer1>
  <div class="btn" @click='routerLink("/note")'>
    <img src="@/assets/img/note.png" alt="">
    <h4>游记</h4>
  </div>
  <div class="btn" @click='routerLink("/foodcollect")'>
    <img src="@/assets/img/food.png" alt="">
    <h4>美食</h4>
  </div>
  <div class="btn" @click='routerLink("/hotelcol")'>
    <img src="@/assets/img/hotel2.png" alt="">
    <h4>酒店</h4>
  </div>
  <div class="btn" @click='routerLink("/viewcollect")'>
    <img src="@/assets/img/view.png" alt="">
    <h4>景点</h4>
  </div>
</div>
</template>
<script>
  import store from '@/vuex/store'
  import Footer1 from '@/components/bar/Footer1'
  import Header1 from '@/components/bar/Header1'
  export default({
    store,
    components:{
      'header1': Header1,
      'footer1': Footer1
    },
    created(){
      this.$store.commit('routerLink',{
        title:'我的收藏'
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
  .main{
    margin-top: 2rem;
  }
.btn{
  width: 4rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: #ffffff;
  border-radius: 0.1rem;
  background-color: rgb(141, 191, 60);
  margin: 1rem auto;
  position: relative;
}
  img{
    position: absolute;
    height: 0.6rem;
    left: 0.9rem;
    top: 0.15rem;
  }
</style>
