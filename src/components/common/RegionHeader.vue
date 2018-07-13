<template>
    <div>
        <div class="region-header">
           <span class="btn-back"><img src="@/assets/img/back.png" alt=""  @click="goback('/city')"></span>
           <h3 class="region-city-name">哈尔滨市</h3>
       </div>
    </div>
</template>
<script>
export default {
    methods:{
        goback(path){
            this.$router.push(path);
        },
    }
}
</script>
<style scoped>
.region-header{
    height: 1rem;
    width: 100%;
    background: #00a680;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
}
.region-header .btn-back{
    height: .5rem;
    line-height: .5rem;
}
.region-header .btn-back img{
    height: .5rem;
    padding:.25rem 0 0 .25rem;
}
.region-header .region-city-name{
    color: #ffffff;
    text-align: center;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
</style>
