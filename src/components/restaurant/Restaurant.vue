<template>
    <div>
        <region-header></region-header>
        <div class="restaurant-info">
           <p class="restaurant-title" @click="goback('/tripaddress')">餐厅</p>
           <ul>
               <li class="restaurant-items" v-for="val in restaurantList" :key="val.id" @click="todetail(val.id)">
                   <div class="restaurant-imgs">
                       <img :src="val.img" alt="">
                   </div>
                   <div class="restaurant-tabs">
                       <h4>{{val.nm}}</h4>
                       <p>小星星</p>
                       <p>{{val.dnum}}条点评</p>
                       <h4 class="price">参考价格 {{val.price}}元/人</h4>
                   </div>
                </li>
           </ul>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
import RegionHeader from '@/components/common/RegionHeader.vue'
export default {
    data(){
        return {
            restaurantList:[]
        }
    },
    components:{
        RegionHeader
    },
    methods:{
        goback(path){
            this.$router.push(path);
        },
        getData(){
            axios.get('./static/data/restaurantdata.json').then((res)=>{
                console.log(res);   
                this.restaurantList = res.data.data.restaurants;         
            }).catch((error)=>{
                console.log(error);           
            })
        },
        todetail(id){
            this.$router.push({name:'RestaurantDetail',params:{restaurantId:id}});
        }
    },
    created(){
        this.getData();
    }
}
</script>
<style scoped>
.restaurant-info{
    padding-top: 1rem; 
}
.restaurant-info .restaurant-title{
    height: 0.6rem;
    border-bottom: 0.01rem solid #f0f0f0;
    font-size: 0.3rem;
    font-weight: bold;
    padding: 0.25rem 0 0 .3rem;
}
.restaurant-items{
    border-bottom: 0.02rem solid #cccccc;
    display: flex;
}
.restaurant-imgs{
  margin: .2rem .2rem;
  flex-grow: 1;
  width: 0;
}
.restaurant-imgs img{
  border-radius:3%; 
}
.restaurant-tabs{
  flex-grow: 2;
  width: 0;
  margin-top: .3rem;
}
.restaurant-tabs h4{
    font-weight: bold;
}
.restaurant-tabs .price{
    color: #d80007;
}
</style>
