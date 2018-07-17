<template>
  <div>
    <div class="header">
           <span class="btn-back"><img src="@/assets/img/back.png" alt=""  @click="goback('/find')"></span>
           <h3 class="name">游记详情</h3>
       </div>  
    <div class="note-head">
      <h4 class="title">香港七日游</h4>
      <div class="hits">
        <img src="@/assets/img/collect.png" alt="">
      </div>
      <span class="author">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531326866675&di=c3ee710355466f0dc2d0a051aa57f2e8&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fpeople%2F201501%2F11%2F20150111114017_3GVTi.jpeg" alt="">
        <p>作者名</p>
      </span>
      <span class="time">2018-01-01~2018-01-10</span>
    </div>
<!--重复-->
    <div class="content">
      <div class="head-part">
        <img src="@/assets/img/travel2.png" alt="">
        <p>出行前</p>
      </div>
      <div class="content-part">
        <img src="http://img.nbcyl.com/image/scenicregion/scenicregionimage1/2015/11/f97c1caf-5949-4a39-bb1e-d6fc9c9a8112.jpg" alt="">
        <p>内容内容内容内容等位基因频率分析是査找基因组数据（别是生殖细胞数据类型）中等位基因频率的一种技术。等位基因频率定义为：一个物种种群中指定染色体基因座上有某个特定等位基因的百分比。我们将开发一个MapReduce解决方案来聚集各个染指定键（由[chromosome, start-position, stop-position]组成）对应的所有基因组数据，然后应用Fisher精确检验，用来确定两组变量之间是否存在</p>
      </div>
    </div>
    <!--重复-->
    <div class="content">
      <div class="head-part">
        <img src="@/assets/img/travel2.png" alt="">
        <p>第一天</p>
      </div>
      <div class="content-part">
        <img src="http://tutiao.2020zjj.com/kindeditor/attached/image/2018/20180426164459905990.jpg" alt="">
        <p>等位基因频率分析是査找基因组数据（别是生殖细胞数据类型）中等位基因频率的一种技术。等位基因频率定义为：一个物种种群中指定染色体基因座上有某个特定等位基因的百分比。我们将开发一个MapReduce解决方案来聚集各个染指定键（由[chromosome, start-position, stop-position]组成）对应的所有基因组数据，然后应用Fisher精确检验，用来确定两组变量之间是否存在</p>
      </div>
    </div>
    <div class="end">—————THE END—————</div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  export default({
    store,
    methods: {
        goback(path){
            this.$router.push(path);
        }
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
.header .btn-back{
    height: .5rem;
    line-height: .5rem;
}
.header .btn-back img{
    height: .5rem;
    padding:.25rem 0 0 .25rem;
}
.header .name{
    color: #ffffff;
    text-align: center;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.note-head{
  height: 2.3rem;
  padding-top: 1rem;
  position: relative;
  box-shadow:0rem 0rem 0.3rem #abaa9f;
}
.title{
  font-size: 0.35rem;
  font-weight: bold;
  margin-left: 0.2rem;
}
.rote{
  margin-left: 0.2rem;
  color: #5c5c5c;
}
.hits img{
  position: absolute;
  right:0.2rem;
  top:1.1rem;
  height: 0.4rem;
  width: 0.4rem;
}
.author img{
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  position: absolute;
  left: 0.1rem;
  bottom: 0.1rem;
}
.author p{
  position: absolute;
  left: 1rem;
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
      font-size: 0.28rem;
    margin: 0 0.1rem;
  }
  .end{
  height: 1rem;
  font-size: 0.35rem;
  text-align: center;
  line-height: 1rem;
}
</style>
