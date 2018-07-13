
//结伴消息界面
<template>
<!-- 首先应该知道在数据库中有多少条结伴请求，假设3条 ，注意以后还会有，两个vue之间传值-->
    <div>
        <span id="messageHeader" class="header-title" @click='routerLink("MyMessage")'>消息</span>
        
        <!-- 结伴界面 -->
       <ul class="note">
           <!-- 注意li要有一个右键删除功能 -->
           <li>
               <!--结伴头像 ，点击头像要跳转到个人信息页-->
               <div>

                    <router-link to="/PeopleIntroduction">
                         <img src="../../assets/img/people.png" alt="" class="head-sculpture">
                    </router-link>
                  
               </div>
               
               <!-- 结伴名字 -->
               <span>王某某</span>
               <!-- 结伴请求 -->
               <h3>发起结伴请求</h3>
               <!-- 未读消息 -->
               <div class="isAgree">
                   <span class="agree"  @click.once="agree">同意</span>
                   <span class="refuse"  @click.once="refuse">拒绝</span>
               </div>
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
    import '@/assets/js/jquery-3.3.1.js'
   
    export default({
      
        methods: {
            routerLink(path){
                this.$router.push(path);
            },
            refuse(){ 
                 var $agree = $(".agree")[0];
                  var $refuse = $(".refuse")[0];
                $agree.innerText= "已拒绝";
                $agree.style.left = "4.3rem";
                $refuse.style.display = "none";
                //console.log( $agree.innyerText);
             },
              agree(){ 
                 var $agree = $(".agree")[0];
                  var $refuse = $(".refuse")[0];
                   $agree.innerText= "已同意";//以后还要将数据库改为拒绝
                $agree.style.left = "4.3rem";
                $refuse.style.display = "none";
                //console.log( $agree.innerText);
             }
        }
        //给li加一个右键删除,
    })



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
        width: 0.7rem;
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
    .note .isAgree .agree{
        height:0.4rem;
        width:1rem;
        background-color: rgb(50,205,50);
        border-radius: 10%;
        position: absolute;
        top:0.25rem;
        left: 3.9rem;
        text-align: center;
        line-height: 0.4rem;
      
    }
    .note .isAgree .refuse{
        height:0.4rem;
        width:1rem;
        background-color: rgb(50,205,50);
        border-radius: 10%;
        position: absolute;
        top:0.25rem;
        left: 5rem;
        text-align: center;
        line-height: 0.4rem;
      
    }
</style>
