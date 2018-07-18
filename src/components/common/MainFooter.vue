<template>
    <div>
        <div class="header">
          <h3 class="header-title">发现</h3>
        </div>
        <ul class="nav">
          <li @click="routerLink('/find')">游记</li>
          <li @click="routerLink('/gonglue')">攻略</li>
        </ul>
        <ul class="footer">
            <li @click="routerLink('/')">首页</li>
            <li @click="routerLink('/find')">发现</li>
            <li @click="routerLink('/add')">创建</li>
            <li @click="routerLink('/shop')">商城</li>
            <li @click="routerLink('/mine')">我的</li>
        </ul>
    </div>
</template>
<script>
import store from '@/vuex/store'
export default {
    store,
    methods:{
        routerLink(path){
        this.$router.push(path);
      },
    }
}
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
    color: #000000;
  }
.nav li{
    text-align: center;
    font-size: 0.3rem;
    flex-grow: 1;
    padding: 0.15rem;
    margin: 0.1rem;
}
.nav li.active{
  color:#00a680;
  font-weight: bold;
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
.footer{
    width: 100%;
    height: 1rem;
    border-top: 0.01rem solid #e0e0e0;
    background: #ffffff;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
}
.footer li{
    font-size: 0.25rem;
    text-align: center;
    flex-grow: 1;
    width: 0;
    padding: 0.3rem;
}
</style>
