<template>
  <div class="main">
    <header1></header1>
    <footer1></footer1>
    
    <div class="card" @click='routerLink("/notedetail")' v-for="(val)  in dataList" :key="val.id">
      <div class="card-head">
        <img class="card-img" :src="val.src">
        <img class="time-img" src="@/assets/img/time2.png" alt="">
        <span class="time">{{val.time}}</span>
        <img class="user" src="@/assets/img/user2.png" alt="">
        <span class="author">{{val.author}}</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">{{val.title}}</h4>
        <p class="card-rote">{{val.brief}}</p>
      </div>
    </div>
    
    
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  import Footer1 from '@/components/bar/Footer1'
  import Header1 from '@/components/bar/Header1'

  export default({
    store,
    data(){
      return {
        dataList:[]
      }
    },
    components:{
      'header1': Header1,
      'footer1': Footer1
    },
    created(){
      this.getData();
      this.$store.commit('routerLink',{
        title:'游记'
      });
    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      },
      getData() {
        axios.get('./static/data/note.json').then((res) => {
          this.dataList = res.data.note;
        }).catch(() => {

        })
      }
    }
  })
</script>

<style scoped>
  .main{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
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
