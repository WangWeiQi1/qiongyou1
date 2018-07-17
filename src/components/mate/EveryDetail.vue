<template>
    <div>
        <div class="header">
            <span class="btn-back"><img src="@/assets/img/back.png" alt=""  @click="goBack('/every')"></span>
            <h3 class="region-city-name">结伴详情</h3>
        </div>
        <ul class="gowith-box">
            <li class="gowith-info">
                <p class="title">土耳其捡一人，男女皆可，目前一辆车有人退出，缺一位。</p>
                <div class="gowith-user-photo">
                    <img src="/static/img/01.jpg" alt="">
                </div>
                <div class="gowith-user-name">
                    <p>走路去纽约</p>
                </div>
                <div class="gowith-time">
                    <p>发布于2018-07-15 18:43</p>
                </div>
                <div class="gowith-content">
                    <p class="tab">结伴信息</p>
                    <span><img src="@/assets/img/mess.png" alt=""></span>
                    <span class="content">土耳其捡一人，男女皆可，目前一辆车有人退出，多一个位子，欢迎一起加入，7号结束能同行希腊最好。</span>
                </div>
            </li>
        </ul>
        <div class="nav">
            <p>评论</p>
            <p >私信</p>
        </div>
        <ul>
            <li class="comment-list">
                <div class="comment-user-photo">
                    <img src="/static/img/timg-1.b750de0.jpeg" alt="">
                </div>
                <div class="comment-content">
                    <p class="comment-user-name">拾贰姑娘</p>
                    <p class="comment-time">7-14 17:11</p>
                    <p>哈哈哈哈哈哈</p>  
                </div>              
            </li>
            <li class="comment-list">
                <div class="comment-user-photo">
                    <img src="/static/img/timg-1.b750de0.jpeg" alt="">
                </div>
                <div class="comment-content">
                    <p class="comment-user-name">拾贰姑娘</p>
                    <p class="comment-time">7-14 17:11</p>
                    <p>哈哈哈哈哈哈</p>  
                </div>              
            </li>
            <li class="comment-list">
                <div class="comment-user-photo">
                    <img src="/static/img/timg-1.b750de0.jpeg" alt="">
                </div>
                <div class="comment-content">
                    <p class="comment-user-name">拾贰姑娘</p>
                    <p class="comment-time">7-14 17:11</p>
                    <p>哈哈哈哈哈哈</p>  
                </div>              
            </li>
            <li class="comment-list">
                <div class="comment-user-photo">
                    <img src="/static/img/timg-1.b750de0.jpeg" alt="">
                </div>
                <div class="comment-content">
                    <p class="comment-user-name">拾贰姑娘</p>
                    <p class="comment-time">7-14 17:11</p>
                    <p>哈哈哈哈哈哈</p>  
                </div>              
            </li>

            
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            everyId:this.$route.params.everyId
        }
    },
    methods:{
        goBack(path){
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
.gowith-box{
    margin-top: 1rem;
    width: 100%;
}
.gowith-info{
    position: relative;
    border-bottom:0.2rem solid #f0f0f0;
    padding-bottom: 0.4rem;
}
.gowith-info .title{
    font-size: 0.4rem;
    font-weight: bold;
    padding: 0.3rem 0.4rem;
}
.gowith-info .gowith-user-photo{
  padding-top: 0.2rem;
  margin-left: 0.4rem;
}
.gowith-info .gowith-user-photo img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.gowith-info .gowith-user-name{
    font-size: 0.3rem;
    font-weight: bold;
    position: absolute;
    left: 1.7rem;
    top: 2.2rem; 
}
.gowith-time{
    position: absolute;
    left: 1.7rem;
    top:2.7rem;
    font-size: 0.28rem;
}
.gowith-info .gowith-content{
    width: 90%;
    margin: 0.8rem auto 0 auto; 
}
.gowith-info .gowith-content .tab{
    height: 0.8rem;
    background: #f0f0f0;
    padding-left: 0.3rem;
    line-height: 0.8rem;
    font-size: 0.35rem;
    margin-bottom: 0.3rem;
}
.gowith-info .gowith-content span{
    margin-right: 0.2rem;
}
.gowith-info .gowith-content img{
    width: 0.5rem;
}
.gowith-info .gowith-content .content{
    font-size: 0.3rem;
}
.nav{
    font-size: 0.3rem;
    width: 100%;
    height: 0.8rem;
    border-bottom:0.01rem solid #f0f0f0; 
    display: flex;
}
.nav p{
    flex-grow: 1;
    width: 0;
    text-align: center;
    padding: 0.15rem;
    margin: 0.04rem;
}
.comment-list{
    position: relative;
    padding: 0.4rem 0 0.9rem 0;
    border-bottom:0.01rem solid #f0f0f0;
}
.comment-list .comment-user-photo img{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin-left: 0.4rem;
}
.comment-list .comment-content{
    position: absolute;
    left: 1.6rem;
    top: 0.4rem;
    font-size: 0.3rem;
}
.comment-list .comment-user-name{
    font-weight: bold; 
}
.comment-list .comment-time{
    font-size: 0.25rem;
}
</style>
