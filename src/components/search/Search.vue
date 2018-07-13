<template>
  <div class="title">
    <form name="myform">
      <input class="search" v-model.lazy="box" placeholder="搜索目的地"/>

    </form>
    <h4>{{hisCity}}</h4>
    <div class="historyCity">{{historyCity.name}}</div>

  </div>
</template>
<script>
  import axios from 'axios'
  import store from '@/vuex/store'
  export default({
    data(){
      return{

        box:'',
        hisCity:"最近",
        historyCity:
          {
            name:"泰国"
          },

      }
    },
    store,
    created(){

      this.getData()
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      getData(){
        axios.get('./static/data/hotCity.json').then((res)=>{
          this.hotList=res.data.hotCity
        }).catch(()=>{

        })
      },
    }
  })
</script>
<style scoped>

  .header{
    height:1rem;
    width: 100%;
    background-color:  rgb(50,205,50);
    position: fixed;
    top:0;
    left: 0;
    line-height: 1rem;
    font-size: .4rem;
    color: white;

  }
  h3{
    float: left;
    position: absolute;

    left: 1rem;

  }
  h4{
    float: left;
    left: 1rem;

  }

  .search{
    width: 100%;
    height: .5rem;
  }
  .historyCity{
    float: left;
    font-size: .5rem;
    position: absolute;
    margin-left: .5rem;
    top:2rem
  }
  .hotCity{
    float: left;
    position: absolute;
    font-size:.3rem ;
    top:3rem

  }
  .hotList{
    float: left;
    font-size: .5rem;
    position: absolute;
    margin-left: .5rem;
    top:3.4rem
  }
</style>
