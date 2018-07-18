<template>
    <ul class="footer">
            <li @click="routerLink('/')">首页</li>
            <li @click="routerLink('/find')">发现</li>
            <li @click="routerLink('/add')">创建</li>
            <li @click="routerLink('/shop')">商城</li>
            <li @click="routerLink('/mine')">我的</li>
        </ul>
</template>
<script>
export default {
    methods:{
        routerLink(path){
        this.$router.push(path);
      },
    }
}
</script>
<style scoped>
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
    flex-grow: 1;
    text-align: center;
    width: 0;
    padding: 0.3rem;
}
</style>
