<template>
    <div>
        <div class="detail-imgs">
            <img src="@/assets/img/back.png" alt="" class="btn" @click="goback('/tripaddress')">
            <img src="https://ccm.ddcdn.com/ext/photo-w/03/f1/47/0a/harbin-ice-and-snow-amusement.jpg" alt="" class="tripaddressDetail-img">
            <img src="@/assets/img/collection.png" alt="" class="collection">
        </div>
        <div class="detail-header" v-show="isShowing">
            <span class="btn-back"><img src="@/assets/img/back.png" alt="" @click="goback('/tripaddress')"></span>
            <p class="region-city-name"></p>
            <div class="tripaddress-tabs">
                <ul>
                    <li @click.stop="goAnchor('#intro')">简介</li>
                    <li @click.stop="goAnchor('#replay')">点评</li>
                </ul>
       </div>
        </div>
       <div class="detail-content" id="intro">
            <h3 class="tripaddress-name">哈尔滨冰雪大世界</h3>
            <p>小星星      465条点评</p>
            <p class="tripaddress-info-title">景点信息</p>
            <p class="tripaddress-info">坐落在哈尔滨市区境内的冰雪大世界始创于1999，当时是由哈尔滨市政府为迎接千年庆典神州世纪游活动。</p>
        </div>
        <div class="tripaddress-replay" id="replay">
            <p class="tripaddress-replay-name">点评</p>
            <p class="tripaddress-replay-info">小星星 534条点评</p>
            <ul>
                <li class="tripaddress-replay-list" v-for="val in replayList" :key="val.id">
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
import axios from 'axios'
export default {
    data(){
        return{
            isShowing:false,
            tripaddressdetailId:this.$route.params.tripaddressId,
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
        getData(){
            axios.get('./static/data/restaurantdetaildata.json/').then((res)=>{
                console.log(res);
                this.replayList = res.data.data.replay;
            }).catch((error)=>{
                console.log(error);
                
            })
        }
    },
    created(){
        this.getData();
    },
    mounted(){
        window.onscroll = ()=>{
            let scrollTop = this.$el.querySelector(".detail-content").offsetTop-document.documentElement.scrollTop;
            console.log(scrollTop);           
            if(scrollTop<80){
                this.isShowing = true;
            }else{
                this.isShowing = false;
            }
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
.tripaddress-tabs{
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
.tripaddress-tabs ul{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.tripaddress-tabs ul li{
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
.detail-imgs .tripaddressDetail-img{
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
.tripaddress-tabs{
    width: 100%;
    height: 1rem;
    background: #ffffff;
    border-bottom:0.01rem solid #8e8e8e;
    font-size: .3rem;
   
}
.tripaddress-tabs ul{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.tripaddress-tabs ul li{
  flex-grow: 1;
  width: 0;
  text-align: center;
  line-height: 1rem;
}
.detail-content{
    margin-top: 0.3rem;
    border-bottom: 0.01rem solid #8e8e8e;
}
.detail-content h3{
    font-weight: bold;
    padding-left: 0.3rem;
}
.detail-content p,.tripaddress-replay p{
    font-size: 0.3rem;
    padding-left: 0.3rem;
}
.detail-content .tripaddress-info-title,.tripaddress-replay .tripaddress-replay-name{
    padding-top: 0.3rem;
    font-size: 0.35rem;
    font-weight: bold;

}
.detail-content .tripaddress-info{
    padding: 0.3rem;
    text-align: center;
}
.tripaddress-replay-list{
    position: relative;
    padding-top: 0.3rem;
    padding-left: .3rem;
    z-index: -1;
}
.tripaddress-replay-list .relay-user-photo img{
    width: 0.8rem;
    border-radius: 50%;
}
.tripaddress-replay-list .replay-user-name{
    font-size: 0.3rem;
    font-weight: bold;
    position: absolute;
    left: 1.6rem;
    top: 0.3rem;
}
.tripaddress-replay-list .replay-time{
    font-size: 0.25rem;
    position: absolute;
    left: 1.4rem;
    top: 0.8rem;
}
.tripaddress-replay-list .replay-time span{
    margin-right: 0.5rem;
}
.tripaddress-replay-list .replay-content{
    font-size: 0.28rem;
    padding: 0.1rem 0.3rem 0 .3rem;
}
</style>
