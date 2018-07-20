<template>
    <div>
      <div class="header">
            <span class="header-title">注册账号</span>
            <span class="cancel" @click='routerLink("LoginRequest")'>取消</span>
        </div>
    </div>
</template>

<script>
export default {
     methods: {
      routerLink(path){
        this.$router.push(path);
      }
    }
}
</script>

<style scoped>
    .header{/*<  消息*/
        height: 1rem;

        position: relative;
        width:100%;
        top:0;
        left:0;
        text-align: center; /*将title居中*/
        line-height: 1rem;
        background-color:  rgb(50,205,50);
    }
   
    .header .header-title{
        font-size:0.3rem; 
    }
    .header .cancel{
        font-size:0.3rem; 
        position: absolute;
        right: 0.2rem;
    }
</style>
