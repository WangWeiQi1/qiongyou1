<template>
<!-- 首先应该知道在数据库中有多少条未读消息，假设3条 ，注意以后还会有，两个vue之间传值-->
    <div>
         <span id="messageHeader" class="header-title" @click='routerLink("MyMessage")'>消息</span>
        <!-- 私信界面 -->
       <ul class="note">
           <li>
               <!-- 私信头像 -->
               <img src="../../assets/img/people.png" alt="" class="head-sculpture">
               <!-- 私信名字 -->
               <span>王某某</span>
               <!-- 私信内容 -->
               <h3>今天天气好晴朗，处处好风光</h3>
               <!-- 未读消息 -->
               <div class="isRead"></div>
           </li>
           <li>
                 <!-- 私信头像 -->
               <img src="../../assets/img/people.png" alt="" class="head-sculpture">
               <!-- 私信名字 -->
               <span>王某某</span>
               <!-- 私信内容 -->
               <h3>今天天气好晴朗，处处好风光</h3>

           </li>
           <li>
                 <!-- 私信头像 -->
               <img src="../../assets/img/people.png" alt="" class="head-sculpture">
               <!-- 私信名字 -->
               <span>王某某</span>
               <!-- 私信内容 -->
               <h3>今天天气好晴朗，处处好风光</h3>
           </li>
       </ul>
         <div class="footer" >
            <ul>
                <li @click='routerLink("/")'>首页</li>
                <li @click='routerLink("find")'>发现</li>
                <li @click='routerLink("add")'>+</li>
                <li @click='routerLink("shop")'>旅行商城</li>
                <li @click='routerLink("mine")'>我的</li>
            </ul>
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
 .footer{
    height:1rem;
    background-color: rgb(50,205,50);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .footer ul{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .footer ul li{
    flex-grow: 1;
    width: 0;
    color: #fff;
    line-height: 1rem;
    text-align: center;

  }
    .header-title{/*<  消息*/
        height: 1rem;
        /* background-color: #ccc; */
        position: fixed;
        width:100%;
        top:0;
        left:0;
        text-align: center; /*将title居中*/
        line-height: 1rem;
        background-color:  rgb(50,205,50);
    }
     .header-title{
        font-size:0.3rem; 
    }
    .note{
        margin-top:1rem;
    }
    .note li{
        list-style: node;
        height: 1rem;
        /* background-color: #999; */
        border-bottom: 0.01rem solid #ccc;
        position: relative;
    }
    .note .head-sculpture{
        height:0.7rem ;
        widows: 0.7rem;
        transform: translate(43%,25%);
    }
    .note span{
        position: absolute;
        top:0.1rem;
        left: 1.2rem;
    }
    .note h3{
        font-size: 0.25rem;
        position: absolute;
        top:0.6rem;
        left: 1.2rem;
    }
    .note li .isRead{
        height:0.15rem;
        width:0.15rem;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        top:0.14rem;
        left: 0.8rem;
        
    }
</style>
