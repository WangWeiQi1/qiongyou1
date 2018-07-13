


<template>
    <div class="four clearfix">
       <div class="writeTravel">写游记</div>
       <div class="create" @click="ctreateTravel">
           <router-link to="/SetUp/CreateTravel">
             建行程
           </router-link>
       </div>
       <div class="partner">结伴</div>
       <div class="no">草稿</div>
        <span class="close" @click="close">X</span>
    </div>
</template>

<script>
export default {
     methods:{
         close:function(){
            var all = document.getElementsByClassName("four")[0];
            all.innerHTML = "";

         },
         ctreateTravel:function(){
             
         }
     }
}
</script>

<style scoped>
    .four{
        width: 6rem;
        margin: 0 auto;
        height: 1.5rem;
       
       text-align: center;
    }
    .four div{
        height: 1rem;
        width: 1rem;
        border-radius:50%;
        text-align: center;
        line-height: 1rem; 
        float: left;
        margin:0 0.25rem;
    }
    .clearfix::after{
        clear: both;
        display: block;
        content: "";
    }
    .four .writeTravel{
        background-color: palevioletred;

    }
    .four .partner{
        background-color: aquamarine;
    }
    .four .create{
         background-color:blanchedalmond;
    }
    .four .no{
        background-color: goldenrod;
        
    }
    .four .close{
         padding: 0.5rem;
     }
     a.router-link-exact-active{
        /* animation:myline 1s linear; */
       color: black;
    }
    a{
        outline: none;
        color: black;
    }
</style>

