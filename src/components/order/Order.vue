<template>
  <div>
    <ul>
      <!--重复，点击跳转到对应的酒店、餐厅、景点详情-->
      <li @click='routerLink("/orderdetail")'>
        <img src="http://img5.imgtn.bdimg.com/it/u=2533497215,217561512&fm=27&gp=0.jpg" alt="">
        <div class="ss">
          <h4 class="title">各种名</h4>
          <p class="time">下单日期：2018-07-05</p>
          <p class="price">总价：123</p>
        </div>
        <h4 class="mark">评分：8.9</h4>
      </li>
      <!--重复-->
      <li @click='routerLink("/orderdetail")'>
        <img src="http://pic12.nipic.com/20110101/6525563_142935003147_2.jpg" />
        <span class="ss">
          <h4 class="title">各种各种名</h4>
          <div class="time">
            <span>下单日期：</span>
            <span>2018-07-05</span>
          </div>
          <div class="price">
            <span>总价：</span>
            <span>153</span>
          </div>
        </span>
        <h4 class="mark">评分：9.1</h4>
      </li>
    </ul>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
    created(){
      this.$store.commit('routerLinks',{
        title:'所有订单'
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
