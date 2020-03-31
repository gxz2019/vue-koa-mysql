<template>
  <div>
    <div class="header">
      <div class="header-icon" @click="handClick"> 
        <i class="iconfont icon-zuo-copy" style="color:#ffa800"></i>
      </div>
      <div class="header-span">
        <span>我的窝</span>
      </div>
      <div class="header-icon header-icon1">
        <i class="iconfont icon-shezhi" style="color:#ffffff"></i>
      </div>
    </div>
    <div class="userMsg">
      <div class="userMsg-img">
        <img :src="userMsg.img" alt="">
      </div>
      <div class="userMsg-span">
        <span>{{userMsg.nickname}}</span>
      </div>
    </div>
    <div class="item" v-for="(item,index) in itemList" :key="index">
      <div class="item-icon">
          <img :src="item.img" alt="" class="image">
      </div>
      <div class="item-span">
        <span>{{item.title}}</span>
      </div>
      <div class="item-icon1">
        <img src="../../assets/images/right-row.png" alt="">
      </div>
    </div>
    <div class="exit" @click="handExit">
      <span>
        退出登录
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  mounted() {
    this.userMsg = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  data() {
    return {
      itemList:[
        {
          img:require('../../assets/images/collect.png'),
          title:'我的收藏'
        },
        {
          img:require('../../assets/images/icon123.png'),
          title:'我的游记'
        },
        {
          img:require('../../assets/images/dingdan.png'),
          title:'我的订单'
        },
        {
          img:require('../../assets/images/dianping.png'),
          title:'我的点评'
        }
      ],
      userMsg:{}
    }
  },
  methods:{
    ...mapMutations(['changeLogin']),
    handClick() {
      this.$router.push({path:'/index'})
    },
    handExit() {
      this.$toast('成功退出')
      this.$router.push({path:'/index'})
      sessionStorage.clear()
      let a = false
      this.changeLogin(a)
    }
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  display: flex;
  /* flex-wrap: nowrap; */
  flex-flow: row;
  height: 3rem;
  line-height: 3rem
}
.header-icon{
  flex: 1;
  text-align: center;
}
.header-icon i {
  font-size: 1.5rem
}
.header-span{
  flex: 8;
  text-align: center;
  font-size: 1.2rem;
  color: #666
}
.userMsg{
  background-image: url('../../assets/images/userbg.jpg');
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 10rem;
  position: relative;
}
.userMsg-img img{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid #fff;
  transform: translateY(1.5rem)
}
.userMsg-span{
  color: #ffffff;
  transform: translateY(2rem)
}
.item{
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
}
.item-icon{
  /* flex: 2; */
  /* padding: 0.5rem; */
  /* border-radius: 60%; */
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #ffa800;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image{
  width: 50%;
  height: 50%;
}
.item-span{
  /* flex: 6 */
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(1rem)
}
.item-icon1{
  /* float: left; */
  position: absolute;
  right: 0;
}
.exit{
  position: fixed;
  bottom: 0;
  left: 1rem;
  width: 90%;
  margin: 0 auto;
  height: 3rem;
  background-color: #ffa800;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 3rem;
}
</style>