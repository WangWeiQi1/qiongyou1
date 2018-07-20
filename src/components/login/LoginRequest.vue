<template>
    <div>
        <div class="header">
            <span class="header-title">登录或者注册账号</span>
            <span class="cancel" @click='routerLink("/")'>取消</span>
        </div>
        <div class="idAndPwd">
            <input type="text" class="username" placeholder="输入账号">

            <input type="password" class="password">

            <div class="login">登录</div>
            <div class="other">
                <div class="register" @click='routerLink("Regist")'>新用户注册</div>
                <div class="forgetPwd" >忘记密码</div>

            </div>
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
     .header{/*<  消息*/
        height: 1rem;

        position: relative;
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
    .header .cancel{
        font-size:0.3rem; 
        position: absolute;
        right: 0.2rem;
    }
    .idAndPwd{
        margin-top: 0.4rem;
        height: 2.1rem;
        width: 100%;
        position: relative;
    }
    .idAndPwd .username{
       
         font-size: 0.3rem
    }
    .idAndPwd .password{
        
        margin-top: 0.1rem;
        
    }
    .idAndPwd .username,.password{
          width: 100%;
          height: 0.8rem;
         
          
    }
    .idAndPwd .login{
        height: 0.8rem;
        width: 5rem;
        background-color: rgb(50,205,50);
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.8rem;
        border-radius: 6%;
        position: absolute;
        left:50%;
        transform: translate(-50%,30%);

    }
      .idAndPwd .other{
          position: absolute;
          display: flex;
          color: rgba(50,205,50,0.8);
          top:139%; 
          width: 100%;
      }
      .idAndPwd .other div{
          flex:1;
        
      }
      .idAndPwd .other .register{
            text-align: left;
            margin-left: 0.2rem;
      }
      .idAndPwd .other .forgetPwd{
            text-align: right;
             margin-right: 0.2rem;
      }
</style>

