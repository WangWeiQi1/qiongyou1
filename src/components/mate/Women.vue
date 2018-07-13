<template>
  <div class="container">
    <img src="@/assets/img/back.png" alt="" v-on:click="goBack">
    <div class="title">女生专区</div>


    <div class="delete">
      <div class="slider">
        <div class="content"
             @touchstart='touchStart'
             @touchmove='touchMove'
             @touchend='touchEnd'
             :style="deleteSlider">


          <slot><div class="content">
            <div  class="img">
              <!--<div v-for="(val,index)  in headPortraitList" :key="index" >-->
              <!--<img :src="val.src">-->
            </div>
            <span class="name">{{name}}</span>
            <span class="name_title">{{title}}</span>
            <span class="time">{{time}}</span>
            <span class="city">{{city}}</span><br>

            <span class="comment">{{comment}}</span>

          </div></slot>
        </div>
        <div class="remove" ref='remove'>
          <span class="text">添加</span>
        </div>
        <div class="remove1" ref='remove'>
          <span class="text">私信</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'

  export default({
    data(){
      return{
        name:"老张",
//        headPortraitList:[],
        title:"标题",
        time:"2018.06.16-1018.06.23",
        city:"米兰",
        comment:"评论",
        startX:0,  //触摸位置
        endX:0,   //结束位置
        moveX: 0,  //滑动时的位置
        disX: 0,  //移动距离
        deleteSlider: '',//滑动时的效果,使用v-bind:style="deleteSlider"
      }
    },
    store,
    created(){


    },
    methods: {
      routerLink(path){
        this.$router.push(path);
      },
      goBack(){
        this.$router.go(-1);
      },
      touchStart(ev){
        ev= ev || event
        //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕

        if(ev.touches.length == 1){
          // 记录开始位置
          this.startX = ev.touches[0].clientX;
        }
      },
      touchMove(ev){
        ev = ev || event;
        //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
        let wd=this.$refs.remove.offsetWidth;
        if(ev.touches.length == 1) {
          // 滑动时距离浏览器左侧实时距离
          this.moveX = ev.touches[0].clientX

          //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
          this.disX = this.startX - this.moveX;
//          console.log(this.disX)
          // 如果是向右滑动或者不滑动，不改变滑块的位置
          if(this.disX < 0 || this.disX == 0) {
            this.deleteSlider = "transform:translateX(0px)";
            // 大于0，表示左滑了，此时滑块开始滑动
          }else if (this.disX > 0) {
            //具体滑动距离我取的是 手指偏移距离*5。
            this.deleteSlider = "transform:translateX(-" + this.disX*5 + "px)";

            // 最大也只能等于删除按钮宽度
            if (this.disX*5 >=wd) {
              this.deleteSlider = "transform:translateX(-" +wd+ "px)";

            }
          }
        }
      },
      touchEnd(ev){
        ev = ev || event;
        let wd=this.$refs.remove.offsetWidth;
        if (ev.changedTouches.length == 1) {
          let endX = ev.changedTouches[0].clientX;

          this.disX = this.startX - endX;
          console.log(this.disX)
          //如果距离小于删除按钮一半,强行回到起点

          if ((this.disX*5) < (wd/2)) {

            this.deleteSlider = "transform:translateX(0px)";
          }else{
            //大于一半 滑动到最大值
            this.deleteSlider = "transform:translateX(-"+wd+ "px)";
          }
        }
      }
    }
  })
</script>

<style scoped lang="less" scoped>
  .container{
    width: 100%;
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .container img{
    float: left;
    position: absolute;
    top:0.2rem;
    left: 0.1rem;
    z-index: 10;

  }
  .slider {
    width: 100%;
    height: 2.5rem;
    position: relative;
    user-select: none;

  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color:  rgb(50,205,50);
    z-index: 100;
    //  设置过渡动画
    transition: 0.3s;

  }
  .remove{
    position: absolute;
    width: 50%;
    height:2.5rem;
    background:orange;
    right: 0;
    top: 0;
    color:#fff;
    text-align: center;
    font-size: .3rem;
    line-height: 2.5rem;
    border: 1px solid gray;
  }
  .remove1{
    position: absolute;
    width: 50%;
    height:2.5rem;
    background:red;
    right: 1.5rem;
    top: 0;
    color:#fff;
    text-align: center;
    font-size: .3rem;
    line-height: 2.5rem;
    border: 1px solid gray;
  }
  .text{
    float: right;
    margin-right: .5rem;
  }

  .title{
    height:1rem;
    width: 100%;
    background-color:  rgb(50,205,50);
    position: fixed;
    top:0;
    left: 0;
    line-height: 1rem;
    font-size: .4rem;
    color: white;
  }
  .content{
    width: 100%;
    height: 2.5rem;
    border: 1px solid gray;

    position: relative;
  }
  .content .img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: url("../../../static/img/timg-1.jpeg");
    margin-left: .5rem;
    margin-top: .3rem;
  }
  span{
    font-size: .3rem;
  }
  .name{
    position: absolute;
    top: .2rem;
    left: 2.5rem;
  }
  .name_title{
    position: absolute;
    top: .7rem;
    left: 2.5rem;
  }
  .city,.comment{
    float: right;
    margin-right: .5rem;
  }
</style>
