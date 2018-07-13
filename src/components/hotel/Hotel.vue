<template>
   <div>
       <region-header></region-header>
       <div class="hotel-time">
           <span><img src="@/assets/img/days.png" alt=""></span>
           <p class="date">{{ new Date() | dateFrm }}</p>
       </div>
       <div class="hotel-info">
           <p class="hotel-title">酒店</p>
           <ul>
               <li class="hotel-items" v-for="val in hotelList" :key="val.id" @click="toDetail(val.id)">
                   <div class="hotel-imgs">
                       <img :src="val.img" alt="">
                   </div>
                   <div class="hotel-tabs">
                       <h4>{{val.nm}}</h4>
                       <p>小星星</p>
                       <p>{{val.dnum}}条点评</p>
                       <h4 class="price">参考价格{{val.price}}元/晚</h4>
                   </div>
                </li>
           </ul>
       </div>
   </div>
</template>
<script>
import moment from 'moment'
import RegionHeader from '@/components/common/RegionHeader.vue'
import axios from 'axios'
export default {
    data(){
        return {
            hotelList:[]
        }
    },
    methods:{
        getData(){
            axios.get('./static/data/hoteldata.json').then((res)=>{
                console.log(res); 
                this.hotelList = res.data.data.hotels; 
            }).catch((err)=>{
                console.log(error);         
            })
        },
        toDetail(id){
            this.$router.push({name:'HotelDetail',params:{hotelId:id}});
        }
    },
    created(){
        this.getData();
    },
    components:{
        RegionHeader,
    },
    filters:{
        dateFrm:function(el){
            return moment(el).format("YYYY-MM-DD");
        }
    }
}
</script>
<style scoped>
.hotel-time{
    width: 100%;
    height: 1rem;
    background: #ffffff;
    border-bottom:0.05rem solid #e0e0e0;
    box-shadow: 0 0 0 transparent,0 0 0 transparent,0 .07rem 0.3rem #e0e0e0,0 0 0 transparent;
    position: relative;
    z-index: -1;
    margin-top: 1rem;
}
.hotel-time img{
    height: .5rem;
    padding:.25rem 0 0 .25rem;
}
.hotel-time .date{
    font-size: 0.3rem;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
/* .hotel-info{
    padding-top: 2rem; 
} */
.hotel-info .hotel-title{
    height: 0.6rem;
    border-bottom: 0.01rem solid #f0f0f0;
    font-size: 0.3rem;
    font-weight: bold;
    padding: 0.25rem 0 0 .3rem;
}
.hotel-items{
    border-bottom: 0.02rem solid #cccccc;
    display: flex;
}
.hotel-imgs{
  margin: .2rem .2rem;
  flex-grow: 1;
  width: 0;
}
.hotel-imgs img{
  border-radius:3%; 
}
.hotel-tabs{
  flex-grow: 2;
  width: 0;
  margin-top: .3rem;
}
.hotel-tabs h4{
    font-weight: bold;
}
.hotel-tabs .price{
    color: #d80007;
}

</style>
