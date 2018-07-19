<template>
  <div class="main">
    <header1></header1>
    <footer1></footer1>
    
    <div class="note-head">
      <h4 class="title">游记标题标题标题标题标题标题标题</h4>
      <p class="rote">简介简介</p>
      <div class="hits">
        <img src="@/assets/img/eye-fill.png" alt="">
        <p>1234</p>
      </div>
      <span class="author">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531907812447&di=4a93bd5c16f92c9671997d85d506b66c&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-19%2F014420854.jpg" alt="">
        <p>作者名</p>
      </span>
      <span class="time">2018-01-01~2018-01-10</span>
    </div>

    <div class="content" v-for="(val)  in dataList" :key="val.id">
      <div class="head-part">
        <img src="@/assets/img/travel2.png" alt="">
        <p>{{val.day}}</p>
      </div>
      <div class="content-part">
        <img :src="val.pic" alt="">
        <p>{{val.content}}</p>
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
        title:'游记详情'
      });
    },
    methods: {
      getData() {
        axios.get('./static/data/note.json').then((res) => {
          this.dataList = res.data.notedetail;
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
.note-head{
  height: 2.3rem;
  padding-top: 0.1rem;
  position: relative;
  box-shadow:0rem 0rem 0.3rem #abaa9f;
}
.title{
  margin-left: 0.2rem;
}
.rote{
  margin-left: 0.2rem;
  color: #5c5c5c;
}
.hits img{
  position: absolute;
  right:1rem;
  top:1rem;
  height: 0.4rem;
  width: 0.4rem;
}
.hits p{
  position: absolute;
  right:0.4rem;
  top:1rem;
}
.author img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  left: 0.1rem;
  bottom: 0.1rem;
}
.author p{
  position: absolute;
  left: 1.2rem;
  bottom: 0.2rem;
}
.time{
  position: absolute;
  right:0.1rem;
  bottom:0.1rem;
}
.content{
  margin-bottom: 0.8rem;
}
  .head-part{
    position: relative;
    margin-left: 2.2rem;
  }
  .head-part img{
    height: 0.6rem;
    position: absolute;
    top: 0.2rem;
  }
  .head-part p{
    position: absolute;
    top:0.3rem;
    left:0.7rem;
    color: #6c6c6c;
  }
  .content-part{
    position: relative;
    top: 0.8rem;
    border: 0.01rem solid #cccccc;
    box-shadow:0rem 0.01rem 0.5rem #e2e1d6;
  }
  .content-part img{
    width: 8rem;
  }
  .content-part p{
    margin: 0 0.1rem;
  }
</style>
