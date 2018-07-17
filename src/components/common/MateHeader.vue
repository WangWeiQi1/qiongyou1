<template>
    <div>
        <div class="header">
            <span class="btn-back"><img src="@/assets/img/back.png" alt=""  @click="routerLink('/')"></span>
            <h3 class="region-city-name">结伴旅行</h3>
        </div>
        <ul class="nav">
            <li @click="routerLink('/every')">男女不限</li>
            <li @click="routerLink('/men')">男生专区</li>
            <li @click="routerLink('/women')">女生专区</li>
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
        routerLink(path){
            this.$router.push(path);
        }
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
  .header .btn-back{
    height: .5rem;
    line-height: .5rem;
}
  .header .btn-back img{
      height: .5rem;
      padding:.25rem 0 0 .25rem;
  }
.header .region-city-name{
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
    box-shadow: 0 0 0 transparent,0 0 0 transparent,0 .07rem 0.3rem #e0e0e0,0 0 0 transparent;
    display: flex;
  }
  .nav li{
    text-align: center;
    font-size: 0.3rem;
    flex-grow: 1;
    padding: 0.15rem;
    margin: 0.1rem;
  }
</style>
