<template>
  <div class="main">
    <header1></header1>
    <footer1></footer1>
    <ul>

      <li @click='routerLink("/hoteldetail")' v-for="(val)  in dataList" :key="val.id">
        <img class="bg" :src="val.region_photo" alt="">
        <h4 class="title">{{val.region_name}}</h4>
        <img class="mark-img" src="@/assets/img/mark.png" alt="">
        <p class="mark">{{val.region_score}}</p>
        <img class="pos-img" src="@/assets/img/position.png" alt="">
        <p class="city">{{val.city_name}}</p>
      </li>

    </ul>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  import Footer1 from '@/components/bar/Footer1'
  import Header1 from '@/components/bar/Header1'
  export default({
    store,
    components:{
      'header1': Header1,
      'footer1': Footer1
    },
    data(){
      return {
        dataList:[]
      }
    },
    created(){
      this.getData();
      this.$store.commit('routerLink',{
        title:'酒店收藏'
      });
    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      },
      getData() {
        axios.get('./static/data/collect.json').then((res) => {
          this.dataList = res.data.hotelcollect;
        }).catch(() => {

        })
      }
    }
  })
</script>
<style scoped>
  .main{
    margin-top: 1rem;
  }
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
    right: 2.5rem;
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
