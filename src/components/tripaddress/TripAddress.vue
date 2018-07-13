<template>
    <div>
        <region-header></region-header>
        <div class="tripaddress-info">
           <p class="tripaddress-title">热门景点</p>
        </div>
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide v-for="val in slides" :key="val.id" class="swiper-items">
                <img :src="val.src" alt="">
                <div class="hot-info">
                    <h4>{{val.nm}}</h4>
                    <span>小星星</span>
                    <span>{{val.dnum}}点评</span>
                </div>
            </swiper-slide>
        </swiper>
        <div class="tripaddress-list">
           <p class="tripaddress-title">景点玩乐</p>
        </div>
        <ul>
            <li class="tripaddress-items" v-for="val in addressList" :key="val.id" @click="toDetail(val.id)">
                <div class="tripaddress-imgs">
                    <img :src="val.src" alt="">
                </div>
                <div class="tripaddress-tabs">
                    <h4>{{val.nm}}</h4>
                    <p>小星星</p>
                    <p>{{val.dnum}}条点评</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import RegionHeader from '@/components/common/RegionHeader.vue'
export default {
    name:'carousel',
    data(){
        return{
            slides:[],
            addressList:[],
            swiperOption: {
		        pagination: '.swiper-pagination',
                slidesPerView: '2',
                spaceBetween: 30
		        }
        }
    },
    methods:{
        getData(){
            axios.get('./static/data/tripaddress.json').then((res)=>{
                console.log(res);
                this.slides = res.data.hotaddress;
                this.addressList = res.data.tripaddress;
            }).catch((error)=>{
                console.log(error);      
            })
        },
         toDetail(id){
            this.$router.push({name:'TripAddressDetail',params:{tripaddressId:id}});
        },
    },
    created(){
        this.getData();
    },
    components:{
        RegionHeader,
        swiper,
        swiperSlide
    }
}
</script>
<style scoped>
.tripaddress-info{
    padding-top: 1rem;
}
.tripaddress-title{
    height: 0.6rem;
    border-bottom: 0.01rem solid #f0f0f0;
    font-size: 0.3rem;
    font-weight: bold;
    padding: 0.25rem 0 0 .3rem;
}
.swiper-container {
    /* z-index: -1;
    position: relative; */
   }
.swiper-box{
    margin-left: 0.3rem;
}
.hot-info{
    margin-top: 0.2rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.hot-info h4{
    font-weight: bold;
}
.hot-info span{
    font-size: 0.25rem;
}
.tripaddress-items{
    border-bottom: 0.02rem solid #cccccc;
    display: flex;
}
.tripaddress-imgs{
  margin: .2rem .2rem;
  flex-grow: 1;
  width: 0;
}
.tripaddress-imgs img{
  border-radius:3%; 
}
.tripaddress-tabs{
  flex-grow: 2;
  width: 0;
  margin-top: .3rem;
  vertical-align: middle;
}
.tripaddress-tabs h4{
    font-weight: bold;
}

</style>
