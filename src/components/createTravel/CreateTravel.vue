<template>
    <div class="all">
        <div>
             <div class="createinfo">
            <span  @click='routerLink("Add")' class="return">返回</span>
            <span class="createtravel">创建行程</span>
        </div>
         <div class="all">
              <div class="start">
            <span class="Tstart-text">开始时间</span>
            <span class="Astart-text"> 开始地点</span>
          </div>
           <input type="date" class="start-date">
           <input type="text" class="start-city">
         
          
            <div class="end">
              <span class="Tend-text">结束时间</span>
              <span class="Aend-text">结束地点</span>
            </div>
           <input type="date" class="end-date">
           <input type="text" class="end-city">
           
        </div>

        <div class="create" >创建</div>
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
.all{
    margin-top: 1.5rem;
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
    .start,.end{
        width: 100%;
        text-align: center;
        display: flex;
        margin-top: 0.5rem;
    }
    .Tstart-text, .Tend-text{
        flex: 1;
    }
    .Astart-text,.Aend-text{
        flex: 1;
    }
    .create{
        height: 0.7rem;
        width: 1rem;
        background-color:  rgb(50,205,50);
        text-align: center;
        line-height: 0.7rem;
        position: absolute;
        transform: translate(-50%,-50%);
        left:50%;
        top: 50%;
        border-radius: 45%;
    }
    .all{
        width: 100%;
        height: 7.5rem;
        position: relative;
    }
    .start-date,.start-city,.end-date,.end-city{
        height: 0.5rem;
        width: 2.5rem;
        display: inline-block;
    }
     .start-date, .end-date{
         margin-left: 0.6rem;
     }
     .createinfo{

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
    .return{
         position: absolute;
         left:0.2rem;

     }

</style>
