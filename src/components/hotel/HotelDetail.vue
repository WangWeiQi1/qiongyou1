<template>
    <div>
        <div class="detail-header" v-show="isShowing">
            <span class="btn-back"><img src="@/assets/img/back.png" alt="" @click="goback('/hotel')"></span>
            <p class="region-city-name">{{detailList.nm}}</p>
            <div class="detail-tabs">
                <ul>
                    <li @click.stop="goAnchor('#intro')">简介</li>
                    <li @click.stop="goAnchor('#replay')">点评</li>
                </ul>
            </div>
        </div>
        <div class="detail-imgs">
            <img src="@/assets/img/back.png" alt="" class="btn" @click="goback('/hotel')">
            <img :src="detailList.img" alt="" class="hotelDetail-img">
            <img src="@/assets/img/collection.png" alt="" class="collection">
        </div>
        <div class="detail-content" id="intro">
            <h3 class="hotel-name">{{detailList.nm}}</h3>
            <p class="">小星星      {{detailList.dnum}}条点评</p> 
            <div class="hotel-time">
                <span><img src="@/assets/img/days.png" alt=""></span>
                <p class="date">{{ new Date() | dateFrm }}</p>
            </div> 
            <span class="price">参考价格</span>
            <span>￥{{detailList.price}}</span>
            <p class="hotel-info-title">酒店信息</p>
            <p class="hotel-info">{{detailList.hotelinfo}}</p>
        </div>
        <div class="hotel-replay" id="replay">
            <p class="hotel-replay-name">点评</p>
            <p class="hotel-replay-info">小星星 534条点评</p>
            <ul>
                <li class="hotel-replay-list" v-for="val in replayList" :key="val.id">
                    <div class="relay-user-photo">
                        <img :src="val.usrc" alt="">
                    </div>
                    <div class="replay-user-name">“{{val.unm}}”</div>
                    <div class="replay-time">
                        <span>小星星</span>
                        <span>{{val.date}}</span>
                    </div>
                    <div class="replay-content">
                        <p>“{{val.ucontent}}”</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
export default {
    data(){
        return{
            isShowing:false,
            hoteldetailId:this.$route.params.hotelId,
            detailList:[],
            replayList:[]
        }
    },
    methods:{
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector)
            document.body.scrollTop = anchor.offsetTop; // chrome
            document.documentElement.scrollTop = anchor.offsetTop; // firefox
            this.isShowing = true;
        },
        goback(path){
            this.$router.push(path);
        },
        getDetailData(){
            axios.get('./static/data/hoteldetaildata.json/').then((res)=>{
                console.log(res);  
                this.detailList = res.data.data.hoteldetails[0]; 
                this.replayList = res.data.data.replay;
                console.log(this.detailList);             
            }).catch((error)=>{
                console.log(error);             
            })
        }
    },
    created(){
        this.getDetailData();
    },
    mounted(){
        window.onscroll = ()=>{
            let scrollTop = this.$el.querySelector(".detail-content").offsetTop-document.documentElement.scrollTop;
            if(scrollTop<80){
                this.isShowing = true;
            }else{
                this.isShowing = false;
            }
        }
    },
    filters:{
        dateFrm:function(el){
            return moment(el).format("YYYY-MM-DD");
        }
    }
}
</script>
<style scoped>
.detail-header{
    height: 1rem;
    width: 100%;
    background: #00a680;
    position: fixed;
    left: 0;
    top: 0;
}
.detail-header .btn-back{
    height: .5rem;
    line-height: .5rem;
}
.detail-header .btn-back img{
    height: .5rem;
    padding:.25rem 0 0 .25rem;
}
.detail-header .region-city-name{
    font-size: 0.35rem;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.detail-tabs{
    width: 100%;
    height: 1rem;
    background: #ffffff;
    border-bottom:0.01rem solid #8e8e8e;
    font-size: .3rem;
    /* margin-top: 1rem; */
    position: fixed;
    left: 0;
    top: 1rem;
}
.detail-tabs ul{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.detail-tabs ul li{
  flex-grow: 1;
  width: 0;
  text-align: center;
  line-height: 1rem;
}
.detail-imgs{
    width: 100%;
    position: relative;
    height:4.5rem;
}
.detail-imgs .hotelDetail-img{
    position: absolute;
    left: 0;
    top: 0;
}
.detail-imgs .btn,.collection{
    height: .5rem;
    position: absolute;
    top: 0.3rem;
    z-index: 1;
}
.detail-imgs .btn{
    left: 0.3rem;
}
.detail-imgs .collection{
    right: 0.4rem;
}
.detail-content{
    border-bottom: 0.01rem solid #8e8e8e;
}
.detail-content h3{
    font-weight: bold;
    padding-left: 0.3rem;
}
.detail-content p,.hotel-replay p{
    font-size: 0.3rem;
    padding-left: 0.3rem;
}
.detail-content span{
    font-size: 0.3rem;
    font-weight: bold;
}
.detail-content .price{
    color: #d80007;
    font-size: 0.35rem;
    padding-left: 0.3rem;
    margin-right: 3rem;
}
.detail-content .hotel-info-title,.hotel-replay .hotel-replay-name{
    padding-top: 0.3rem;
    font-size: 0.35rem;
    font-weight: bold;

}
.detail-content .hotel-info{
    padding: 0.3rem;
    text-align: center;
}
.detail-content .hotel-time{
    width: 90%;
    height: 1rem;
    background: #ffffff;
    border:0.01rem solid #cccccc;
    border-radius: .1rem;
    position: relative;
    margin: 0.2rem auto;
    z-index: -1;
}
.detail-content .hotel-time img{
    height: .5rem;
    padding:.25rem 0 0 .25rem;
}
.detail-content .hotel-time .date{
    font-size: 0.3rem;
    position: absolute;
    top: 50%;
    left:45%;
    transform: translate(-50%,-50%);
}
.hotel-replay-list{
    position: relative;
    z-index: -1;
    padding-top: 0.3rem;
    padding-left: .3rem;
}
.hotel-replay-list .relay-user-photo img{
    width: 0.8rem;
    border-radius: 50%;
}
.hotel-replay-list .replay-user-name{
    font-size: 0.3rem;
    font-weight: bold;
    position: absolute;
    left: 1.6rem;
    top: 0.3rem;
}
.hotel-replay-list .replay-time{
    font-size: 0.25rem;
    position: absolute;
    left: 1.4rem;
    top: 0.8rem;
}
.hotel-replay-list .replay-time span{
    margin-right: 0.5rem;
}
.hotel-replay-list .replay-content{
    font-size: 0.28rem;
    padding: 0.1rem 0.3rem 0 .3rem;
}
</style>
