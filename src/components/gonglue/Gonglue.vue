<template>
  <div>
    <main-footer></main-footer>
      <ul class="strategy-list">  
          <li v-for="val in musicList" :key="val.id" @click="toDetail(val.id)">  
            <img :src="val.bg" alt="">
            <p>{{val.name}}</p>
          </li>   
      </ul>
  </div>
</template>
<script>
  import MainFooter from '@/components/common/MainFooter.vue'
  import axios from 'axios'
  export default ({
    data(){
      return{
        musicList:[]
      }
    },
    components:{
        MainFooter,
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        axios.get('./static/data/musiclist.json').then((res)=>{
          this.musicList=res.data.albums;
        }).catch(()=>{

        })
      },
      toDetail(id){
        this.$router.push({name:'GonglueDetail',params:{gonglueId:id}});
      }
    }
  })

</script>
<style scoped>
.strategy-list{
    padding: 2.2rem .2rem 1rem .2rem;
}
.strategy-list li{
    position: relative;
    margin-bottom: 0.1rem;
}
.strategy-list li img{
  border-radius: 3%;
}
.strategy-list li p{
  font-size: 0.4rem;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
}
</style>
