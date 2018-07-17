<template>
<div>
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
  export default({
    store,
//    created(){
//      this.$store.commit('routerLinks',{
//        title:'我的收藏'
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
.btn{
  width: 4rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: #ffffff;
  border-radius: 0.1rem;
  background-color: #32cd32;
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
