<template>
  <div>
    <mate-header></mate-header>
    <div class="gowith-info">
      <ul>
        <li class="gowith-list" v-for="val in arr" :key="val.id" @click="toDetail(val.id)">
          <div class="gowith-user-photo">
            <img :src="val.src" alt="">
          </div>
          <div class="gowith-user-name">
            <p>{{val.username}}</p>
            <p class="title">{{val.title}}</p>
          </div>
          <div class="gowith-time">
              <span><img src="@/assets/img/days.png" alt=""></span>
              <span>{{val.date}}</span>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  import MateHeader from '@/components/common/MateHeader.vue'
  export default({
    data(){
      return{
        arr:[{
          "id":0,
          "src":"/static/img/timg-1.b750de0.jpeg",
          "username":"啦啦啦lalallal",
          "title":"巴厘岛跟团5天4晚游。找一女性同伴",
          "date":"2018.06-2018.06.23"
        },{
          "id":1,
          "src":"/static/img/timg-1.b750de0.jpeg",
          "username":"啦啦啦",
          "title":"巴厘岛跟团5天4晚游。找一女性同伴",
          "date":"2018.06-2018.06.23"
        },{
          "id":2,
          "src":"/static/img/timg-1.b750de0.jpeg",
          "username":"啦啦啦",
          "title":"巴厘岛跟团5天4晚游。找一女性同伴",
          "date":"2018.06-2018.06.23"
        },{
          "id":3,
          "src":"/static/img/timg-1.b750de0.jpeg",
          "username":"啦啦啦",
          "title":"巴厘岛跟团5天4晚游。找一女性同伴",
          "date":"2018.06-2018.06.23"
        },{
          "id":4,
          "src":"/static/img/timg-1.b750de0.jpeg",
          "username":"啦啦啦",
          "title":"巴厘岛跟团5天4晚游。找一女性同伴",
          "date":"2018.06-2018.06.23"
        }]
      }
    },
    store,
    created(){


    },
    components:{
        MateHeader,
    },
    methods: {
      toDetail(id){
            this.$router.push({name:'MenDetail',params:{menId:id}});
      }
    }
  })
</script>
<style scoped lang="less" scoped>
.gowith-info{
  width: 100%;
  margin-top: 2rem;
}
.gowith-list{
  width: 90%;
  margin: 0 auto;
  position: relative;
  padding: 0.3rem 0.35rem;
  border-bottom:0.2rem solid #f0f0f0;
}
.gowith-list .gowith-user-photo{
  padding-top: 0.2rem;
}
.gowith-list .gowith-user-photo img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.gowith-list .gowith-user-name{
    font-size: 0.28rem;
    position: absolute;
    left: 1.7rem;
    top: 0.3rem;
    
}
.gowith-list .gowith-user-name .title{
  font-size: 0.3rem;
  font-weight: bold;
  word-wrap: break-word;
}
.gowith-time{
    margin-left: 1.25rem;
    margin-top: 0.2rem;
}
.gowith-time img{
    height: .5rem;
}
.gowith-time span{
    margin-right: 0.2rem;
    font-size: 0.25rem;
}
</style>
