<template>
  <div>
      <div class="detail-imgs">
            <img src="@/assets/img/back.png" alt="" class="btn" @click="goback('/gonglue')">
            <img src="@/assets/img/03.jpg" alt="" class="Detail-img">
        </div>
        <div class="detail-info">
          <p class="title">看了这个云南旅游攻略，立刻就想出发了</p>
          <p class="time">2017/07/01</p>
        </div>
        <div class="tab">
            <p>攻略详情</p>
        </div>
        <div class="content">
          <div>第一站： 各地—昆明—住昆明酒店到机场还很早就直接安排去感受了昆明的古风古景，让脚步走进历史记忆。西山、金殿、翠湖、大观楼、金马碧鸡坊（那里小吃比较集中，吃货的可以走起）
             第二站：昆明—石林风景名胜区—VIP茶歇—彝人篝火晚会—长街宴—住楚雄酒店去看天下第一奇观【石林】尊享彝族人待客最高礼仪喝上一杯热腾腾的地道普洱茶，感受云南千年历史茶文化。
             <img src="http://tutiao.2020zjj.com/kindeditor/attached/image/2018/20180426165016641664.jpg" alt="">
             第三站：楚雄一VIP私人游艇游洱海一罗荃半岛一喜洲古镇一花语牧场（含骑行下午茶）一住大理酒店最喜欢的是乘坐【洱海VIP私人游艇】去享受最美的洱海风光，还有大理唯一的千年古镇【喜洲古镇】，来大理必去花的海洋-【花语牧场】花海现已成为大理的一张新名片 。
             <img src="http://tutiao.2020zjj.com/kindeditor/attached/image/2018/20180426164459905990.jpg" alt="">
             第四站：云域博览园白族三道茶拉市海丽水金沙、丽江古城、四方街住丽江酒店去了一直想要去的划船骑马， 这里一定要多花时间，坐坐船、散散步、看看景。
             第五站：白沙古镇一玉龙雪山冰川大索道一蓝月谷一甘海子牧场一白水河一昆明强烈一定要去瞧瞧，世界级“古纳西王国”【白沙古镇】，具有“东方瑞士”之称的国家5A级景区【玉龙雪山风景区】
             第六站：集散中心—温馨的家个人觉得非常值得去游客集散中心看看，领略云南四季缤纷的叶脉干花魅力，体验非物质文化遗产展示馆的民族文化、花卉文化、美食文化、娱乐文化相结合的梦幻之旅。
          </div>
        </div>
        <div class="end">THE END</div>
  
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default ({
    store,
    methods:{
      goback(path){
        this.$router.push(path);
      },
    }
  })
</script>
<style scoped>
.detail-imgs{
    width: 100%;
    position: relative;
    height:3.6rem;
}
.detail-imgs .Detail-img{
    position: absolute;
    left: 0;
    top: 0;
}
.detail-imgs .btn{
    height: .5rem;
    position: absolute;
    top: 0.3rem;
    z-index: 1;
}
.detail-imgs .btn{
    left: 0.3rem;
}
.detail-info .title{
  color:#ffffff;
  font-size: 0.35rem;
  font-weight: bold;
  position: absolute;
  top: 2rem;
  left: 0.3rem;
}
.detail-info .time {
  color:#ffffff;
  font-size: 0.28rem;
  position: absolute;
  top: 3.1rem;
  left: 0.3rem;
}
.tab{
  height: 1rem;
  border-bottom: 0.03rem solid #cccccc;
  line-height: 1rem;
  padding-left: 0.3rem;
  font-size: 0.35rem;
  font-weight: bold;
}
.content{
  font-size: 0.28rem;
  padding: 0.2rem;
}
.end{
  height: 1rem;
  font-size: 0.35rem;
  font-weight: bold;
  text-align: center;
  line-height: 1rem;
}
</style>
