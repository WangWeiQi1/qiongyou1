// 该部分定义的是我的消息页面,在点击我的私信和结伴消息两个按钮时,切换的是content
//假设登录者的id = uid 私信者id = puid
<template>
    <div>
        <!-- head -->
        <div class="header">
            <!-- <span id="return" class="header-btn">&lt;</span> -->
            <!-- <div class="line" id="line"></div> -->
            <span id="messageHeader" class="header-title">消息</span>
        </div>
        <!-- 私信和结伴消息 -->
        <div class="two-message">
            <span id="private-message" class="private-message" @click='routerLink("PrivateLetter")'>
                 我的私信
            </span>
            <span id="partner-message" class="partner-message" @click='routerLink("PartnerMessage")'>
            
                结伴消息
            </span>
        </div>
         <div class="footer" >
            <ul>
                <li @click='routerLink("/")'>首页</li>
                <li @click='routerLink("find")'>发现</li>
                <li @click='routerLink("add")'>+</li>
                <li @click='routerLink("shop")'>旅行商城</li>
                <li @click='routerLink("mine")'>我的</li>
            </ul>
         </div>
        <!-- <div class="test">
             该标签为了测试创建（+）的效果，过后需要删除 
             <router-link to="/SetUp">
                    创建
             </router-link>
        </div> -->
    </div>
</template>


<script>
import PrivateLetter from '@/components/privateletter/PrivateLetter'
import PartnerMessage from '@/components/partnermessage/PartnerMessage'
    export default({
        // components:{
        //     PrivateLetter,
        //     PartnerMessage
        // },

        methods:{
         
            routerLink(path){
                this.$router.push(path);
            },
        
            changeLine(X){
                var dataALL;
                var need = {};
                if(X==0){//如果是我的私信
                    need.name = "private-message";
                }else{//如果是我的结伴
                    need.name = "partner-message";
                }
                
                //改变line的left
                var oLine = document.getElementById("line");
                oLine.style.transition="transform 500ms ease-out";
                oLine.style.transform="translateX("+X+")";
                //还需要向后台传id,读取数据库，取私信的聊天内容
               /* $.ajax({
                    type:"get",
                    url:"",//要发送的地址后台，
                    data:need,//要的是私信表里所有的信息
                    dataType:"json",
                    success:function(data){
                        dataALL = data;
                        console.log("success");
                    },
                    error:function(){
                        console.log("error");
                    },
                });
                //取到了json数据，现在要处理并显示
                    //处理dataALL;,基本应该有name,content,isRead标识（1：已读；0：未读）
                    //拿到数据后，知道有多少条,循环插入到ul中，如果已读：div标识为display;none;
                    //内容的显示应该有溢出打点。
    */

            }
        }
    })
</script>

<style scoped>
    /*固定header的位置*/
    .header{/*<  消息*/
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
   
    .header .header-title{
        font-size:0.3rem; 
    }
     .header .header-btn{
         position: absolute;
         left:0.1rem;
    }
    .two-message{
        margin-top: 1rem;
        position: fixed; 
        height: 0.8rem;
        /* background-color: #ccc; */
        width:100%;
        /* top:0.8rem; */
        left:0;
        line-height: 0.8rem;
        display: flex;
        text-align: center;
        border-bottom:1px solid #ccc;
        color: #999;
    }
    .two-message .private-message{
        flex: 1;

    }
    .two-message .partner-message{
        flex: 1;
    }
    .line{
        background-color: #999;
        height: 2px;
        width: 1rem;
        position: fixed;
        top:1.28rem;
        left:1.1rem;
    }
    a.router-link-exact-active{
        /* animation:myline 1s linear; */
       color: black;
    }
    a{
        outline: none;
        color: #999;
    }
    @keyframes myline {
        from{left:1.1rem}
        to{left:5rem}
        
    }
    .test{
        position: absolute;
        bottom: 0;
        left:50%;
    }
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
</style>
