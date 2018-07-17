<template>
    <div>
        <main-footer></main-footer>
        <ul class="container">
           <li class="tripnotes" v-for="val in tripnotesList" :key="val.id" @click="toDetail(val.id)">
                <div class="notes-bar">
                    <img :src="val.src" alt="">
                </div>
                <div class="tripnotes-title">
                    <h3>香港七日游的旅行攻略</h3>
                    <span><img src="@/assets/img/time.png" alt=""></span>
                    <span class="time">发布日期20180702</span>
                    <span>作者&nbsp;王五</span>
                </div>
           </li>
       </ul> 
  </div>
</template>
<script>
  import MainFooter from '@/components/common/MainFooter.vue'
  import store from '@/vuex/store'
  import axios from 'axios'

  export default({
    components:{
        MainFooter,
    },
    data(){
      return {
         tripnotesList:[],
      }
    },
    created(){
      this.getData();
    },
    methods: {
      toDetail(id){
        this.$router.push({name:'FindDetail',params:{tripnotesId:id}});
      },
      routerLink(path){
        this.$router.push(path);
      },
      getData() {
        axios.get('./static/data/photodata.json').then((res) => {
          console.log(res);
          
          this.tripnotesList = res.data.photoData;
        }).catch(() => {

        })
      },
    }
  })
</script>
<style scoped>
.header{
    height: 1rem;
    width: 100%;
    background: #00a680;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
}
.header .header-title{
    color: #ffffff;
    text-align: center;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.nav{
    width: 100%;
    height: 1rem;
    position: fixed;
    top: 1rem;
    left: 0;
    z-index: 10;
    background: #ffffff;
    border-bottom:0.05rem solid #e0e0e0;
    display: flex;

  }
.nav li{
    text-align: center;
    font-size: 0.3rem;
    flex-grow: 1;
    padding: 0.15rem;
    margin: 0.1rem;

}
.container{
  padding-top: 2rem;
  padding-bottom: 1rem;
  width: 92%;
  margin: 0 auto;
}
.tripnotes{
  position: relative;
}
.tripnotes .notes-bar img{
  border-radius: 3%;
  padding-top: 0.3rem;

}
.tripnotes .tripnotes-title{
    position: absolute;
    left: 0.3rem;
    bottom: 0.2rem;
    color: #ffffff;
}
.tripnotes .tripnotes-title h3{
    font-weight: bold;
}
.tripnotes .tripnotes-title img{
    width: 0.45rem;
}
.tripnotes .tripnotes-title span{
    font-size: 0.28rem;
}
.tripnotes .tripnotes-title .time{
    margin-right: 0.3rem;
    padding-top: 0.2rem;
}
</style>
