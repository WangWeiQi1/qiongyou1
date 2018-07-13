
//该页面是是点击头像后跳转的个人信息页面
<template>
    <div class="people-introduction">
        <!-- 显示游记图片，头像 -->
        
        
        <div class="partnerinfo">
            <span  @click='routerLink("PartnerMessage")' class="return">返回</span>
            <span class="hisMessage">他的信息</span>
        </div>
        <div class="dir">
            <img src="../../assets/img/one.jpg" alt="" class="photo-travel">
            <img src="../../assets/img/people.png" alt="" class="photo-head">
            <span class="username">王某某</span>
            <span class="sex">男</span>
            <span class="birth">1996年8月13日</span>
            <span class="worker">学生</span>
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
    .partnerinfo{

        height: 1rem;
        /* background-color: #ccc; */
        position: fixed;
        width:100%;
        top:0;
        left:0;
        text-align: center; /*将title居中*/
        line-height: 1rem;
        background-color:  rgb(50,205,50);

        font-size:0.3rem; 
    
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
    .people-introduction{
        position: relative;
        /* display: flex; */
    }
     .people-introduction .return{
         position: absolute;
         left:0.2rem;

     }

    .dir{
        margin-top: 1rem;
    }
    .photo-travel{
        height:3.5rem;
        width:100%;
       

    }
    .photo-head{
        height: 1.7rem;
        width: 1.7rem;
        /* position: absolute; */
       
        transform: translate(10%,-50%);
    }
    .people-introduction .username{
        font-size: 0.5rem;
        /* background-color: aliceblue; */
        position: absolute;
        top:4.5rem;
        left: 0.5rem;

    }
    .people-introduction .birth,.sex,.worker{
        font-size: 0.3rem;
        /* background-color: aliceblue; */
        position: absolute;
        left: 0.5rem;

    }
    .people-introduction .birth{
        left: 1.5rem;
        top:5.3rem;
    }
    .people-introduction .sex{
        top:5.3rem;
    }
    .people-introduction .worker{
        top:5.8rem;
        left: 0.5rem;
    }
    
</style>



