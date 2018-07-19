<template>
  <div class="main">
    <header1></header1>
    <footer1></footer1>
    
    <ul>

      <li @click='routerLink("/orderdetail")' v-for="(val)  in dataList" :key="val.id">
        <img :src="val.order_img" alt="">
        <div class="ss">
          <h4 class="title">{{val.order_name}}</h4>
          <p class="time">下单日期：{{val.order_date}}</p>
          <p class="price">总价：{{val.price}}</p>
        </div>
        <h4 class="mark">评分：{{val.order_mark}}</h4>
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
        title:'我的订单'
      });
    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      },
      getData() {
        axios.get('./static/data/order.json').then((res) => {
          this.dataList = res.data.order;
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
    box-shadow:0rem 0rem 0.4rem #abaa9f;
    color: #5c5c5c;
    border-radius: 0.1rem;
    height: 2.8rem;
    margin-bottom: 0.1rem;
    position: relative;
  }
  img{
    width: 2.3rem;
    height: 2.6rem;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
  }
  .ss{
    top: 0.3rem;
    left: 2.5rem;
    position: absolute;
  }
  .mark{
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
  }
</style>
